import SEO from "../components/SEO";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using the Cognexa website or any of its services (Extracto, Vision IQ, Cognexa Agent, and related products), you agree to comply with and be bound by these Terms and Conditions. If you are using our services on behalf of a company or organization, you represent that you are authorized to bind that entity to these Terms.",
  },
  {
    title: "2. Description of Services",
    body: "Cognexa provides AI-powered business automation services, including invoice data extraction, computer vision monitoring, real-time voice AI, analytics, and robotic process automation. Features, availability, and pricing may vary by engagement and are subject to change.",
  },
  {
    title: "3. Requesting a Demo or Contacting Us",
    body: "When you submit a form on our website (for example, to request a demo or ask a question), you agree to:",
    list: [
      "Provide accurate, current, and complete information.",
      "Use the contact and demo request forms only for genuine business inquiries.",
      "Not use automated means to submit forms or extract data from the website.",
    ],
  },
  {
    title: "4. Acceptable Use",
    body: "You agree to use our website and services solely for lawful purposes. You agree not to:",
    list: [
      "Violate any applicable laws or regulations.",
      "Use our website or services for any fraudulent, unlawful, or harmful purpose.",
      "Attempt to gain unauthorized access to our systems or interfere with the operation of our website.",
      "Distribute viruses or other harmful software through our website.",
      "Impersonate any person or entity or misrepresent your affiliation with any person or entity.",
    ],
  },
  {
    title: "5. Privacy and Data Collection",
    body: "We respect your privacy and handle your personal data in accordance with our Privacy Policy. By using our website, you consent to our collection, use, and handling of your data as described there.",
  },
  {
    title: "6. Intellectual Property",
    body: "All content on this website, including but not limited to text, graphics, logos, product names, and software, is the property of Cognexa or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute such content without our prior written authorization.",
  },
  {
    title: "7. Third-Party Links",
    body: "Our website may contain links to third-party websites or services. These are provided for your convenience, and we do not endorse or take responsibility for the content, products, or services provided by third parties.",
  },
  {
    title: "8. Disclaimer and Limitation of Liability",
    body: "Our website and services are provided \"as is\" without warranties of any kind, express or implied. To the fullest extent permitted by law, Cognexa and its affiliates are not liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, our website or services. We do not guarantee that our website will be error-free or uninterrupted.",
  },
  {
    title: "9. Indemnification",
    body: "You agree to indemnify and hold harmless Cognexa, its affiliates, employees, and agents from any claims, damages, or liabilities arising from your misuse of our website or services, or your violation of these Terms.",
  },
  {
    title: "10. Governing Law",
    body: "These Terms are governed by the laws of India, without regard to conflict of law principles. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Pune, Maharashtra.",
  },
  {
    title: "11. Changes to These Terms",
    body: "We may update these Terms from time to time. Any changes will be posted on this page with an updated revision date. Your continued use of our website after changes are posted constitutes your acceptance of the updated Terms.",
  },
  {
    title: "12. Contact Us",
    body: "If you have any questions about these Terms, please contact us at contact@cognexa.com.",
  },
];

function Terms() {
  return (
    <>
      <SEO
        title="Terms and Conditions"
        description="Terms and conditions for using Cognexa's products and services."
        path="/terms"
      />
      <section className="py-20">
      <div className="mx-auto max-w-3xl px-5">
        <h1 className="text-center text-4xl font-bold text-gray-900">
          Terms and Conditions
        </h1>
        <p className="mt-6 font-semibold text-gray-900">Terms and Conditions</p>
        <p className="mt-1 text-base text-gray-500 italic">
          Last Updated: 27-07-2026
        </p>
        <p className="mt-4 text-gray-600">
          These Terms and Conditions ("Agreement") govern your use of the
          Cognexa website and any related services provided by Cognexa
          ("Cognexa", "we", "us", or "our"). By accessing or using our
          website, you agree to be bound by these Terms and Conditions, our
          Privacy Policy, and any other applicable policies. If you do not
          agree with these terms, please do not use our website.
        </p>

        {sections.map((section) => (
          <div key={section.title} className="mt-8">
            <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
            <p className="mt-2 text-gray-600">{section.body}</p>
            {section.list && (
              <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      </section>
    </>
  );
}

export default Terms;
