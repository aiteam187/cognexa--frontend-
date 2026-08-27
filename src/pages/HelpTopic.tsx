import SEO from "../components/SEO";
import FAQAccordion from "../components/FAQAccordion";
import { helpFaqs } from "../data/faqs";

function HelpTopic() {
  return (
    <>
      <SEO
        title="FAQ & Help"
        description="Find answers to common questions about Cognexa's AI automation products and services."
        path="/help-topic"
      />
      <div className="bg-[#0c1b33] py-20 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <h1 className="text-4xl font-bold text-white">
            How can we help?
          </h1>
          <p className="mt-3 text-white/90">
            Find answers to common questions below. Can't find what you're
            looking for? Reach out and we'll be happy to help.
          </p>
          <p className="mt-6 text-base text-white/90">
            Call us at{" "}
            <a href="tel:+917557576999" className="font-semibold underline">
              +91 91 7557 6999
            </a>{" "}
            or email{" "}
            <a
              href="mailto:support@cognexa.co.in"
              className="font-semibold underline"
            >
              support@cognexa.co.in
            </a>
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="sr-only">Frequently asked questions</h2>
          <FAQAccordion faqs={helpFaqs} />
        </div>
      </section>
    </>
  );
}

export default HelpTopic;
