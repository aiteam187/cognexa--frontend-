// Single source of truth for per-route <head> metadata used by
// scripts/prerender.mjs. Keep this in sync with each page's <SEO ... />
// props in src/pages/*.tsx — the build doesn't verify they match.
const SITE_NAME = "Cognexa";
const SITE_URL = "https://www.cognexa.co.in";
const DEFAULT_IMAGE = "/home1.webp";

// For pages whose OG image is a bundled asset (import from src/assets/...)
// rather than a plain /public path, give the source path here so
// prerender.mjs can resolve the real hashed output URL from Vite's manifest.
const ASSET_IMAGES = {
  extracto: "src/assets/extracto/invoice-scan.webp",
  cognexaAgent: "src/assets/home/brand-voice.webp",
};

function softwareApp({ name, path, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description,
    url: `${SITE_URL}${path}`,
    brand: { "@type": "Brand", name: "Cognexa" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/contacts`,
    },
  };
}

export const routes = [
  {
    path: "/about-us",
    title: "About Us",
    description:
      "Cognexa leads in industrial solutions, extending beyond RPA to provide seamless IoT, AI, and ML services, empowering clients to move faster in a dynamic digital landscape.",
  },
  {
    path: "/solution",
    title: "Solutions by Industry",
    description:
      "IT solutions built for every industry: customer service, employee experience, BFSI, healthcare, utilities, and retail. Explore how Cognexa adapts across industries.",
  },
  {
    path: "/case-study",
    title: "Case Studies",
    description:
      "See how businesses use Cognexa's AI and automation solutions to cut costs, speed up support, and delight customers.",
    image: "/case-hero-og.webp",
  },
  {
    path: "/contacts",
    title: "Contact Us",
    description:
      "Tell us a bit about your business and we'll show you how Cognexa fits in. Book a demo or reach out to start your automation roadmap.",
  },
  {
    path: "/terms",
    title: "Terms and Conditions",
    description: "Terms and conditions for using Cognexa's products and services.",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
    description: "How Cognexa collects, uses, and protects your data.",
  },
  {
    path: "/help-topic",
    title: "FAQ & Help",
    description:
      "Find answers to common questions about Cognexa's AI automation products and services.",
  },
  {
    path: "/vision-iq",
    title: "Vision IQ — AI Computer Vision",
    description:
      "Turn your existing CCTV cameras into an intelligent AI-powered monitoring system. Vision IQ detects safety risks, security threats, and operational issues in real time.",
    image: "/visionhero.webp",
    structuredData: softwareApp({
      name: "Vision IQ",
      path: "/vision-iq",
      description:
        "Turn your existing CCTV cameras into an intelligent AI-powered monitoring system. Vision IQ detects safety risks, security threats, and operational issues in real time.",
    }),
  },
  {
    path: "/extracto",
    title: "Extracto — AI Invoice Data Extraction",
    description:
      "Cognexa's Extracto reads any invoice, PDF, scan, or email attachment and turns it into clean, structured data your accounting systems can act on instantly.",
    assetImageKey: "extracto",
    structuredData: softwareApp({
      name: "Extracto",
      path: "/extracto",
      description:
        "Cognexa's Extracto reads any invoice, PDF, scan, or email attachment and turns it into clean, structured data your accounting systems can act on instantly.",
    }),
  },
  {
    path: "/gate-vision",
    title: "GateVision — Smart Number Plate Recognition",
    description:
      "Cognexa's GateVision reads vehicle plates at every gate, lane, and toll point in real time, matches them against watchlists, and automates entry, exit, and access decisions.",
    image: "/gatevision-composite.webp",
    structuredData: softwareApp({
      name: "GateVision",
      path: "/gate-vision",
      description:
        "Cognexa's GateVision reads vehicle plates at every gate, lane, and toll point in real time, matches them against watchlists, and automates entry, exit, and access decisions.",
    }),
  },
  {
    path: "/cognexa-agent",
    title: "Cognexa Agent — Real-Time Voice AI",
    description:
      "A real-time voice AI that generates and qualifies leads, arranges meetings, supports customers, runs interviews, and follows up on enquiries, all from one platform.",
    assetImageKey: "cognexaAgent",
    structuredData: softwareApp({
      name: "Cognexa Agent",
      path: "/cognexa-agent",
      description:
        "A real-time voice AI that generates and qualifies leads, arranges meetings, supports customers, runs interviews, and follows up on enquiries, all from one platform.",
    }),
  },
  {
    path: "/careers",
    title: "Careers",
    description:
      "Help us build the future of intelligent automation. We're a small, fast-moving team building AI that businesses put into production.",
  },
];

export { SITE_NAME, SITE_URL, DEFAULT_IMAGE, ASSET_IMAGES };
