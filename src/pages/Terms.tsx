const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using BussinessMoj, you agree to comply with and be bound by these Terms and Conditions. If you are under the age of 13 (or the legal age in your jurisdiction), you may not use this App. If you are using this App on behalf of a company or organization, you represent that you are authorized to bind that entity to these Terms and Conditions.",
  },
  {
    title: "2. User Registration",
    body: "To access certain features of the App, you may need to create an account. You agree to:",
    list: [
      "Provide accurate, current, and complete information during the registration process.",
      "Maintain the confidentiality of your account information and password.",
      "Notify us immediately if you suspect any unauthorized use of your account. You are responsible for all activities that occur under your account.",
    ],
  },
  {
    title: "3. Use of the App",
    body: "You agree to use the App solely for lawful purposes and in accordance with these Terms. You agree not to:",
    list: [
      "Violate any laws or regulations.",
      "Use the App for any fraudulent, unlawful, or harmful purposes.",
      "Harass, abuse, or harm other users or violate their rights.",
      "Distribute viruses or other harmful software.",
      "Impersonate others or provide false information.",
    ],
  },
  {
    title: "4. Content Sharing and Communication",
    body: "You are solely responsible for the content you send, share, or post through the App, including text, images, videos, and other media (\"User Content\"). By sharing User Content, you grant UT MESSENGER a non-exclusive, royalty-free, worldwide license to use, display, and distribute your content through the App and related services.",
    extra:
      "BussinessMoj reserves the right to remove any content that violates these Terms or is deemed inappropriate, at its sole discretion.",
    list: [
      "Is defamatory, offensive, or discriminatory.",
      "Contains hate speech, harassment, or explicit material.",
      "Infringes upon the intellectual property or privacy rights of others.",
    ],
  },
  {
    title: "5. Privacy and Data Collection",
    body: "We respect your privacy and handle your personal data in accordance with our [Privacy Policy]. By using the App, you consent to our collection, use, and sharing of your personal data as described in the Privacy Policy.",
  },
  {
    title: "6. Restrictions and Prohibited Activities",
    body: "You agree not to:",
    list: [
      "Reverse engineer, decompile, or attempt to extract the source code of the App.",
      "Use the App to create a competing service.",
      "Interfere with or disrupt the App's functionality, or other users' ability to enjoy the App.",
    ],
  },
  {
    title: "7. Intellectual Property",
    body: "All content provided through the App, including but not limited to text, graphics, logos, and software, is the property of BussinessMoj or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute such content without proper authorization.",
  },
  {
    title: "8. Third-Party Links",
    body: "The App may contain links to third-party websites, services, or advertisements. These are provided for your convenience, and we do not endorse or take responsibility for the content, products, or services provided by third parties.",
  },
  {
    title: "9. Limitation of Liability",
    body: "To the fullest extent permitted by law, BussinessMoj and its affiliates are not liable for any damages arising from your use or inability to use the App, including but not limited to indirect, incidental, or punitive damages. We do not guarantee that the App will be error-free or uninterrupted.",
  },
  {
    title: "10. Indemnification",
    body: "You agree to indemnify, defend, and hold harmless BussinessMoj, its affiliates, employees, and agents from any claims, damages, or liabilities arising from your use of the App, including any violation of these Terms or any User Content you submit.",
  },
  {
    title: "11. Termination",
    body: "BussinessMoj reserves the right to suspend or terminate your access to the App at any time, without notice, for any reason, including if you violate these Terms or engage in harmful activities.",
  },
  {
    title: "12. Amendments to the Terms",
    body: "We may update or modify these Terms at any time. Any changes will be effective when posted in the App or on our website. Your continued use of the App after any changes constitutes your acceptance of the updated Terms.",
  },
];

function Terms() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-5">
        <h1 className="text-center text-4xl font-bold text-gray-900">
          Terms and Conditions
        </h1>
        <p className="mt-6 font-semibold text-gray-900">Terms and Conditions</p>
        <p className="mt-1 text-base text-gray-500 italic">
          Last Updated: [24-11-2024]
        </p>
        <p className="mt-4 text-gray-600">
          These Terms and Conditions ("Agreement") govern your use of the
          BussinessMoj mobile application and any related services, features,
          or content ("CHATING AND CALLING") provided by BussinessMoj,
          ("BussinessMoj"). By downloading, accessing, or using the App, User
          agree to be bound by these Terms and Conditions, our Privacy
          Policy, and any other applicable policies or guidelines. If you do
          not agree with these terms, you should not use the App.
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
            {section.extra && (
              <p className="mt-2 text-gray-600">{section.extra}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Terms;
