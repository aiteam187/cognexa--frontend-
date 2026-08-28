// Post-build step: writes a real static index.html for each known route so
// link-unfurlers (WhatsApp, LinkedIn, Slack, Facebook) that don't execute
// JS see that page's actual title/description/OG image/JSON-LD instead of
// the generic homepage meta that's otherwise the only thing in dist/.
//
// Pure string/JSON manipulation on the already-built dist/index.html — no
// headless browser involved, so it doesn't depend on a browser binary being
// installed in the CI build environment. Real browsers (and Googlebot) still
// get the exact same SPA shell + JS bundle and render the full app as
// normal; this only fixes what non-JS bots see.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { routes, SITE_NAME, SITE_URL, DEFAULT_IMAGE, ASSET_IMAGES } from "./route-meta.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function loadManifest() {
  const manifestPath = path.join(distDir, ".vite", "manifest.json");
  const raw = await readFile(manifestPath, "utf8");
  return JSON.parse(raw);
}

function resolveImage(route, manifest) {
  if (route.assetImageKey) {
    const srcPath = ASSET_IMAGES[route.assetImageKey];
    const entry = manifest[srcPath];
    if (!entry) {
      throw new Error(
        `prerender: no manifest entry for "${srcPath}" (route ${route.path}) — did the asset path change?`,
      );
    }
    return `${SITE_URL}/${entry.file}`;
  }
  const image = route.image ?? DEFAULT_IMAGE;
  return image.startsWith("http") ? image : SITE_URL + image;
}

function replaceTag(html, pattern, replacement) {
  if (!pattern.test(html)) {
    throw new Error(`prerender: expected pattern not found: ${pattern}`);
  }
  return html.replace(pattern, replacement);
}

function buildHtml(base, route, manifest) {
  const fullTitle = `${route.title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${route.path}`;
  const image = resolveImage(route, manifest);
  const description = escapeHtml(route.description);

  let html = base;
  html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${escapeHtml(fullTitle)}</title>`);
  html = replaceTag(
    html,
    /<meta name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${description}" />`,
  );
  html = replaceTag(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${url}" />`,
  );
  html = replaceTag(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${escapeHtml(fullTitle)}" />`,
  );
  html = replaceTag(
    html,
    /<meta property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${description}" />`,
  );
  html = replaceTag(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${url}" />`,
  );
  html = replaceTag(
    html,
    /<meta property="og:image" content="[^"]*"\s*\/>/,
    `<meta property="og:image" content="${image}" />`,
  );
  html = replaceTag(
    html,
    /<meta name="twitter:title" content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${escapeHtml(fullTitle)}" />`,
  );
  html = replaceTag(
    html,
    /<meta name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${description}" />`,
  );
  html = replaceTag(
    html,
    /<meta name="twitter:image" content="[^"]*"\s*\/>/,
    `<meta name="twitter:image" content="${image}" />`,
  );

  // The homepage-specific hero-image preload hint doesn't apply to other
  // routes — drop it so we're not telling the browser to fetch an image
  // that page never uses.
  html = html.replace(/\s*<link rel="preload" as="image"[^>]*\/>\n?/, "\n");

  if (route.structuredData) {
    const script = `  <script type="application/ld+json">\n    ${JSON.stringify(
      route.structuredData,
    )}\n  </script>\n`;
    html = html.replace("</head>", `${script}</head>`);
  }

  return html;
}

async function main() {
  const manifest = await loadManifest();
  const base = await readFile(path.join(distDir, "index.html"), "utf8");

  for (const route of routes) {
    const html = buildHtml(base, route, manifest);
    const outPath = path.join(distDir, route.path.replace(/^\//, ""), "index.html");
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, html);
    console.log(`prerendered ${route.path} -> ${path.relative(root, outPath)}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
