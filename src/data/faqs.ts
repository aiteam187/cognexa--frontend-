export interface Faq {
  question: string;
  answer: string;
}

export const homeFaqs: Faq[] = [
  {
    question: "What does Cognexa actually do?",
    answer:
      "Cognexa builds AI automation products for businesses: Extracto for invoice data extraction, Vision IQ for camera-based monitoring, Cognexa Agent for real-time voice AI, ANPR for number plate recognition, plus analytics and RPA tooling.",
  },
  {
    question: "Do I need new hardware to get started?",
    answer:
      "No. Extracto works with your existing invoice inbox or upload folder, and Vision IQ and ANPR work with the cameras you already have, no new hardware required.",
  },
  {
    question: "How long does it take to go live?",
    answer:
      "Most teams go live in days, not months. There's no manual setup required, point us at your data source and the relevant product starts working immediately.",
  },
  {
    question: "Can these products integrate with our existing systems?",
    answer:
      "Yes. Our products ship with ready-to-use integrations for common accounting, ERP, and procurement systems, and our team can help set up custom integrations where needed.",
  },
  {
    question: "How do I get pricing or a demo?",
    answer:
      "Reach out through the contact form or book a demo directly, and our team will walk you through pricing based on your use case and scale.",
  },
];

export const helpFaqs: Faq[] = [
  ...homeFaqs,
  {
    question: "How can I reach the Cognexa team?",
    answer:
      "Call us at +91 91 7557 6999 or email support@cognexa.co.in, or use the contact form to reach out and we'll get back to you.",
  },
  {
    question: "What should I include when contacting support?",
    answer:
      "A short description of what you were trying to do, what happened instead, and which product it relates to helps us resolve things faster. Screenshots are welcome too.",
  },
  {
    question: "How is my data handled?",
    answer:
      "See our Privacy Policy for full details on what we collect and how it's used. In short: we don't sell your data, and it's only used to respond to inquiries and improve our products.",
  },
];
