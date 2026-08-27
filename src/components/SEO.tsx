import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  /** Absolute or root-relative path to a social preview image, e.g. "/home1.webp" */
  image?: string;
  /** Root-relative path, e.g. "/vision-iq". Defaults to the current path. */
  path?: string;
  /** Use title as-is instead of appending " | Cognexa". For the homepage's brand tagline. */
  exactTitle?: boolean;
  /** Page-specific JSON-LD object (e.g. a SoftwareApplication schema for a product page). */
  structuredData?: Record<string, unknown>;
}

const SITE_NAME = "Cognexa";
const SITE_URL = "https://www.cognexa.co.in";
const DEFAULT_IMAGE = "/home1.webp";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function SEO({
  title,
  description,
  image = DEFAULT_IMAGE,
  path,
  exactTitle = false,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = exactTitle ? title : `${title} | ${SITE_NAME}`;
    const url = SITE_URL + (path ?? window.location.pathname);
    const absoluteImage = image.startsWith("http") ? image : SITE_URL + image;

    document.title = fullTitle;

    upsertMeta("name", "description", description);
    upsertLink("canonical", url);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", absoluteImage);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", absoluteImage);
  }, [title, description, image, path, exactTitle]);

  useEffect(() => {
    if (!structuredData) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [structuredData]);

  return null;
}

export default SEO;
