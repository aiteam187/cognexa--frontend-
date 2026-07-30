import { Check } from "lucide-react";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";

const highlights = [
  "Slash operational costs by 60%",
  "Automate across 35+ channels and a range of global languages and dialects",
  "Deploy faster with 100+ plug & play integrations",
];

function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Tell us a bit about your business and we'll show you how Cognexa fits in. Book a demo or reach out to start your automation roadmap."
        path="/contacts"
      />
      <section className="relative flex h-80 items-center justify-center overflow-hidden bg-gray-950 text-center text-white sm:h-[560px]">
        <img
          src="/contact-hero.webp"
          alt=""
          aria-hidden
          fetchPriority="high"
          className="hero-banner-img absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "70% 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/40 to-gray-950/80" />

        <div className="hero-heading relative mx-auto max-w-3xl px-5">
          <span className="inline-block rounded-full bg-white/15 px-5 py-2 text-base font-bold tracking-wide uppercase backdrop-blur-sm">
            Contact Us
          </span>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            Let's build your automation roadmap
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
            Tell us a bit about your business and we'll show you how Cognexa
            fits in.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-14 px-5">
          <Reveal className="flex-1 basis-100">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-5 py-2 text-base font-bold tracking-wide text-[#0E8FFB] uppercase">
              Get in touch
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Looking for the perfect-fit AI automation platform for your
              enterprise?
            </h2>
            <p className="mt-4 text-gray-500">
              Cognexa is an AI-first automation platform crafted to deliver
              exceptional customer experiences across chat, email, and
              invoice workflows.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0E8FFB]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-gray-200 pt-6 text-gray-500">
              <p>
                <a
                  href="https://maps.app.goo.gl/9P8FYwYJNYivCEdX9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#0E8FFB]"
                >
                  Office No. 6, SR. No. 1/1A/1/7/2 &amp; 3, Revati Arcade II,
                  Baner, Pune, Maharashtra 411069
                </a>
              </p>
              <p className="mt-2">
                Phone:{" "}
                <a
                  href="tel:+917557576999"
                  className="font-medium text-[#0E8FFB]"
                >
                  +91 91 7557 6999
                </a>{" "}
                | Mail:{" "}
                <a
                  href="mailto:support@cognexa.co.in"
                  className="font-medium text-[#0E8FFB]"
                >
                  support@cognexa.co.in
                </a>
              </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <iframe
                title="Cognexa office location, Baner, Pune"
                src="https://www.google.com/maps?q=DAccess+Security+Systems+Pvt.+Ltd,18.5583791,73.791428&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </Reveal>

          <Reveal delay={100} className="flex-1 basis-100">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow duration-200 hover:shadow-lg sm:p-10"
            >
              <h3 className="text-xl font-bold text-gray-900">Book a demo</h3>
              <p className="mt-1 text-sm text-gray-500">
                Discover how Cognexa can help transform your customer service
                game.
              </p>

              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name*"
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 transition-colors duration-200 focus:border-[#0E8FFB] focus:ring-2 focus:ring-[#0E8FFB]/20 focus:outline-none"
                />
                <input
                  type="text"
                  name="designation"
                  placeholder="Designation"
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 transition-colors duration-200 focus:border-[#0E8FFB] focus:ring-2 focus:ring-[#0E8FFB]/20 focus:outline-none"
                />
                <input
                  type="email"
                  name="business_email"
                  placeholder="Business Email*"
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 transition-colors duration-200 focus:border-[#0E8FFB] focus:ring-2 focus:ring-[#0E8FFB]/20 focus:outline-none"
                />
                <div className="flex gap-4">
                  <select
                    name="country"
                    required
                    className="w-1/2 rounded-md border border-gray-300 bg-white px-4 py-2.5 transition-colors duration-200 focus:border-[#0E8FFB] focus:ring-2 focus:ring-[#0E8FFB]/20 focus:outline-none"
                  >
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                  </select>
                  <input
                    type="text"
                    name="mobile_number"
                    placeholder="Mobile number*"
                    maxLength={10}
                    required
                    className="w-1/2 rounded-md border border-gray-300 bg-white px-4 py-2.5 transition-colors duration-200 focus:border-[#0E8FFB] focus:ring-2 focus:ring-[#0E8FFB]/20 focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  name="company_name"
                  placeholder="Company Name*"
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 transition-colors duration-200 focus:border-[#0E8FFB] focus:ring-2 focus:ring-[#0E8FFB]/20 focus:outline-none"
                />
                <input
                  type="text"
                  name="company_size"
                  placeholder="Company Size*"
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 transition-colors duration-200 focus:border-[#0E8FFB] focus:ring-2 focus:ring-[#0E8FFB]/20 focus:outline-none"
                />

                <label className="flex items-start gap-2 text-sm text-gray-500">
                  <input
                    type="checkbox"
                    name="privacy_policy"
                    required
                    className="mt-1 accent-[#0E8FFB]"
                  />
                  By clicking submit, you acknowledge your data will be
                  processed according to our Privacy Policy.
                </label>

                <button
                  type="submit"
                  className="w-full rounded-md bg-[#0E8FFB] px-6 py-3 font-semibold text-white uppercase shadow-md transition duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Contact;
