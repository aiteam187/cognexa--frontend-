import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import DrawOutlineButton from "../components/DrawOutlineButton";
import SEO from "../components/SEO";
import customerServiceImg from "../assets/solutions/customer-service.png";
import employeeExperienceImg from "../assets/solutions/employee-experience.png";
import bfsiImg from "../assets/solutions/bfsi.png";
import healthcareImg from "../assets/solutions/healthcare.png";
import utilitiesImg from "../assets/solutions/utilities.png";
import retailImg from "../assets/solutions/retail.png";

const solutionCards = [
  {
    title: "Customer service",
    description: "Automate & personalize customer support",
    image: customerServiceImg,
    cta: "Find out more",
  },
  {
    title: "Employee Experience",
    description: "Enrich & elevate employee experience",
    image: employeeExperienceImg,
    cta: "See all consultancy",
  },
  {
    title: "Banking, Financial Services, and Insurance (BFSI)",
    description:
      "Solutions for banking, financial services & insurance industry",
    image: bfsiImg,
    cta: "Protect your business",
  },
  {
    title: "Healthcare",
    description: "Solutions for healthcare and pharmaceuticals industry",
    image: healthcareImg,
    cta: "Explore our services",
  },
  {
    title: "Utilities",
    description: "Solutions for oil, gas and utility industry",
    image: utilitiesImg,
    cta: "Stay up and running",
  },
  {
    title: "Retail",
    description: "Solutions for retail and e-commerce industry",
    image: retailImg,
    cta: "Defend your data",
  },
];

function Solutions() {
  return (
    <>
      <SEO
        title="Solutions by Industry"
        description="IT solutions built for every industry: customer service, employee experience, BFSI, healthcare, utilities, and retail. Explore how Cognexa adapts across industries."
        path="/solution"
      />
      {/* Hero */}
      <section className="relative flex h-80 items-center justify-center overflow-hidden bg-gray-950 text-center text-white sm:h-[560px]">
        <img
          src="/solution-hero.webp"
          alt=""
          aria-hidden
          fetchPriority="high"
          className="hero-banner-img absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-950/30 to-gray-950/70" />

        <div className="hero-heading relative mx-auto max-w-3xl px-5">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
            Our Solutions
          </span>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            IT solutions built for every industry
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
            Your business needs powerful solutions and guidance to navigate
            today's marketplace. Explore how Cognexa adapts across industries.
          </p>
          <div className="mt-8">
            <DrawOutlineButton
              href="/contacts"
              lineClassName="bg-white"
              className="rounded-md bg-[#0E8FFB] px-6 py-3 font-semibold text-white uppercase shadow-md transition duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
            >
              Schedule a demo
            </DrawOutlineButton>
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
              By industry
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Solutions tailored to your business
            </h2>
            <p className="mt-4 text-gray-500">
              Whether you're in retail, healthcare, or financial services, our
              automation and AI solutions adapt to the way your industry works.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solutionCards.map((card, i) => (
              <Reveal
                key={card.title}
                delay={(i % 6) * 100}
                className="hover-lift flex flex-col rounded-2xl border border-gray-100 bg-gray-50/60 p-8 transition duration-200 hover:border-[#0E8FFB]/30 hover:bg-white hover:shadow-lg sm:p-10"
              >
                <span className="mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-[#0E8FFB]/10">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-11 w-11 object-contain"
                  />
                </span>
                <h4 className="text-xl font-semibold text-gray-900">
                  {card.title}
                </h4>
                <p className="mt-2 text-base text-gray-500">
                  {card.description}
                </p>
                <div className="mt-6">
                  <Link
                    to="/contacts"
                    className="text-base font-semibold text-[#0E8FFB] hover:underline"
                  >
                    {card.cta} &rarr;
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <Reveal as="section" className="bg-gray-50/60 py-20 text-center">
        <div className="mx-auto max-w-[1400px] px-5">
          <h3 className="text-lg font-semibold text-[#0E8FFB]">
            Let's get started
          </h3>
          <h2 className="mx-auto mt-2 max-w-2xl text-3xl font-bold text-gray-900 sm:text-4xl">
            We will help you overcome your technology challenges
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Call us on{" "}
            <a href="tel:+919975459600" className="font-medium text-[#0E8FFB]">
              +91 99754 59600
            </a>{" "}
            or email us at{" "}
            <a
              href="mailto:contact@cognexa.com"
              className="font-medium text-[#0E8FFB]"
            >
              contact@cognexa.com
            </a>{" "}
            or fill out the following form to start the conversation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <DrawOutlineButton
              href="/contacts"
              lineClassName="bg-white"
              className="rounded-md bg-[#0E8FFB] px-6 py-3 font-semibold text-white uppercase shadow-md transition duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
            >
              Start with a free assessment
            </DrawOutlineButton>
            <DrawOutlineButton
              href="/about"
              lineClassName="bg-[#0E8FFB]"
              className="rounded-md border border-[#0E8FFB] px-6 py-3 font-semibold text-[#0E8FFB] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0E8FFB] hover:text-white"
            >
              Learn more about us
            </DrawOutlineButton>
          </div>
        </div>
      </Reveal>
    </>
  );
}

export default Solutions;
