import SEO from "../components/SEO";

const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect different types of information to provide and improve our services to you. This includes the following:",
    groups: [
      {
        label: "Personal Information",
        items: [
          "Account Information: When you create an account, we collect personal details such as your name, email address, phone number, and profile picture.",
          "Chat Content: We collect the messages, images, videos, and other media that you send or receive through the App.",
          "Device Information: We may collect device-related information, including device type, operating system version, and unique device identifiers (e.g., IP address, MAC address).",
          "Usage Data: We collect information about how you interact with the App, such as login times, features used, and any errors encountered.",
        ],
      },
      {
        label: "Non-Personal Information",
        items: [
          "Location Information: If you grant the App permission, we may collect location data to enhance certain features (e.g., location-based services). You can disable location tracking through your device settings.",
          "Cookies and Tracking Technologies: We may use cookies, pixels, and other tracking technologies to personalize your experience, track usage patterns, and improve the App's functionality.",
        ],
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: "We use the information we collect for the following purposes:",
    list: [
      "To Provide and Improve Services: To operate the App, ensure its functionality, and enhance your experience.",
      "User Communication: To send important notifications, updates, and messages related to the App's operation or customer support.",
      "Personalization: To personalize your experience by suggesting contacts or conversations based on your usage and preferences.",
      "Security: To monitor and enhance the security of the App, prevent fraud, and protect your account.",
      "Analytics and Research: To analyze App usage trends and improve features, functionality, and performance.",
      "Legal Compliance: To comply with applicable laws, regulations, or legal processes.",
    ],
  },
  {
    title: "3. How We Share Your Information",
    body: "We do not sell your personal information to third parties. However, we may share your information under the following circumstances:",
    list: [
      "Service Providers: We may share your information with trusted third-party service providers who assist in the operation and improvement of the App, such as cloud storage providers, analytics services, and customer support tools. These service providers are required to protect your information and use it only for the purposes for which it was shared.",
      "Legal Obligations: We may disclose your information if required by law or legal processes (e.g., in response to a subpoena or court order) or when we believe such disclosure is necessary to protect the rights, safety, or property of UT MESSENER, its users, or the public.",
      "Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any such change in ownership or control of your personal data.",
    ],
  },
  {
    title: "4. Data Retention",
    body: "We retain your personal information for as long as necessary to provide the services, comply with our legal obligations, resolve disputes, and enforce our agreements. If you wish to delete your account, you may do so through the app settings or by contacting our support team.",
  },
  {
    title: "5. Security of Your Information",
    body: "We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes using encryption (such as SSL/TLS) and secure data storage practices. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee complete security.",
  },
  {
    title: "6. Your Rights and Choices",
    body: "Depending on your location, you may have the following rights concerning your personal data:",
    list: [
      "Access and Correction: You may access and update your account information at any time through the App settings.",
      "Data Deletion: You can delete your account and personal data through the App or by contacting our support team.",
      "Opt-Out of Communications: You can opt out of receiving promotional or marketing emails by following the unsubscribe instructions in the email.",
      "Withdraw Consent: You may withdraw your consent to certain data processing practices by adjusting your device settings or contacting us.",
    ],
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
        <p className="mt-6 font-semibold text-gray-900">Privacy Policy</p>
        <p className="mt-1 text-base text-gray-500 italic">
          Last Updated: 24-11-2024
        </p>
        <p className="mt-4 text-gray-600">
          Cognexa, we values your privacy and is committed to protecting your
          personal information. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you use our
          chatting app Cognexa. By using our App, you agree to the collection
          and use of your information as described in this Privacy Policy.
        </p>

        {sections.map((section) => (
          <div key={section.title} className="mt-8">
            <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
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
