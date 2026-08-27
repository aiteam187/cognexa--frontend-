import SEO from "../components/SEO";

const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect different types of information to provide and improve our services to you. This includes the following:",
    groups: [
      {
        label: "Information You Provide",
        items: [
          "Contact Form Data: When you submit a demo request or contact form, we collect details such as your name, business email, phone number, company name, and any other information you provide.",
          "Communications: If you email or call us, we retain a record of that correspondence to respond to your inquiry and improve our service.",
        ],
      },
      {
        label: "Information Collected Automatically",
        items: [
          "Usage Data: We collect information about how you interact with our website, such as pages visited, time spent, and referring pages.",
          "Device Information: We may collect device-related information, including browser type, operating system, and IP address.",
          "Cookies and Tracking Technologies: We may use cookies and analytics tools to understand usage patterns and improve our website's functionality.",
        ],
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: "We use the information we collect for the following purposes:",
    list: [
      "To Respond to Inquiries: To respond to demo requests, questions, and other communications you send us.",
      "To Provide and Improve Services: To operate our website and improve its content and functionality.",
      "Security: To monitor and enhance the security of our website and prevent fraud or abuse.",
      "Analytics: To analyze website usage trends and improve our content, features, and performance.",
      "Legal Compliance: To comply with applicable laws, regulations, or legal processes.",
    ],
  },
  {
    title: "3. How We Share Your Information",
    body: "We do not sell your personal information to third parties. However, we may share your information under the following circumstances:",
    list: [
      "Service Providers: We may share your information with trusted third-party service providers who assist us in operating our website, such as hosting providers, analytics services, and email delivery tools. These providers are required to protect your information and use it only for the purposes for which it was shared.",
      "Legal Obligations: We may disclose your information if required by law or legal process, or when we believe such disclosure is necessary to protect the rights, safety, or property of Cognexa, our users, or the public.",
      "Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any such change in ownership or control of your personal data.",
    ],
  },
  {
    title: "4. Data Retention",
    body: "We retain your personal information for as long as necessary to respond to your inquiry, provide our services, comply with our legal obligations, and resolve disputes. If you wish to have your data deleted, you may contact us using the details below.",
  },
  {
    title: "5. Security of Your Information",
    body: "We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction, including encryption (such as SSL/TLS) and secure data storage practices. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee complete security.",
  },
  {
    title: "6. Your Rights and Choices",
    body: "Depending on your location, you may have the following rights concerning your personal data:",
    list: [
      "Access and Correction: You may request access to, or correction of, the personal data we hold about you.",
      "Data Deletion: You can request deletion of your personal data by contacting our support team.",
      "Opt-Out of Communications: You can opt out of receiving promotional or marketing emails by following the unsubscribe instructions in the email, or by contacting us directly.",
    ],
  },
  {
    title: "7. Contact Us",
    body: "If you have any questions about this Privacy Policy or wish to exercise your rights over your personal data, please contact us at support@cognexa.co.in.",
  },
];

function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="How Cognexa collects, uses, and protects your data."
        path="/privacy-policy"
      />
      <section className="py-20">
      <div className="mx-auto max-w-3xl px-5">
        <h1 className="text-center text-4xl font-bold text-gray-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-center text-sm text-gray-500 italic">
          Last Updated: 27-07-2026
        </p>
        <p className="mt-4 text-gray-600">
          Cognexa values your privacy and is committed to protecting your
          personal information. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website or submit a contact or demo request form. By using our
          website, you agree to the collection and use of your information
          as described in this Privacy Policy.
        </p>

        {sections.map((section) => (
          <div key={section.title} className="mt-8">
            <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
            <p className="mt-2 text-gray-600">{section.body}</p>

            {section.groups?.map((group) => (
              <div key={group.label} className="mt-3">
                <p className="font-medium text-gray-800">{group.label}</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

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

export default PrivacyPolicy;
