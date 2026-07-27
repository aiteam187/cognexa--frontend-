import { Check } from "lucide-react";
import Reveal from "../components/Reveal";
import { AIGradientBorder } from "../components/AIGradientBorder";
import DrawOutlineButton from "../components/DrawOutlineButton";
import CountUp from "../components/CountUp";
import ExtractoSection from "../components/ExtractoSection";
import heroImg from "../assets/case-study/detail-hero.webp";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-gray-600">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0E8FFB]" />
      <span>{children}</span>
    </li>
  );
}

const stats = [
  { value: "80%", label: "self-served queries" },
  { value: "50%", label: "increase in agent productivity" },
  { value: "60%", label: "savings in operational costs" },
  { value: "40%", label: "increase in CSAT" },
];

function CaseStudyDetail() {
  return (
    <>
      {/* Hero */}
      <section className="py-20">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-14 px-5">
          <Reveal className="hover-lift flex-1 basis-100">
            <AIGradientBorder className="rounded-2xl" tone="brand">
              <img
                src={heroImg}
                loading="eager"
                fetchPriority="low"
                alt="Slash operational costs by 60% with AI-first customer service automation"
                className="rounded-2xl shadow-lg"
              />
            </AIGradientBorder>
          </Reveal>
          <Reveal delay={120} className="flex-1 basis-100">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
              Customer Service
            </span>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">
              Slash operational costs by 60% with AI-first customer service
              automation
            </h3>
            <p className="mt-3 text-gray-500">
              Streamline support operations, accurately address customer
              inquiries across 35+ channels, and save on support costs with our
              cutting-edge unified customer service platform.
            </p>
            <ul className="mt-5 space-y-2.5">
              <CheckItem>90% automation within 30 days</CheckItem>
              <CheckItem>40% increase in CSAT</CheckItem>
              <CheckItem>50% increase in agent productivity</CheckItem>
              <CheckItem>In-house LLM with 1% hallucination</CheckItem>
              <CheckItem>Transfer to agent for complex use cases</CheckItem>
            </ul>
            <a
              href="/contacts"
              className="mt-6 inline-block rounded-md bg-[#0E8FFB] px-6 py-3 font-semibold text-white uppercase shadow-md transition duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
            >
              Book a demo
            </a>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50/60 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
              Results
            </span>
            <h3 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
              Slash operational costs by 60% with AI-first customer service
              automation
            </h3>
            <p className="mt-3 text-gray-500">
              Streamline support operations, accurately address customer
              inquiries across 35+ channels, and save on support costs with our
              cutting-edge unified customer service platform.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 100}
                className="hover-lift rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-200 hover:border-[#0E8FFB]/30 hover:shadow-lg"
              >
                <div className="text-3xl font-bold text-[#0E8FFB]">
                  <CountUp value={stat.value} />
                </div>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Go live 2X faster */}
      <Reveal as="section" className="bg-[#0E8FFB] py-16 text-center">
        <div className="mx-auto max-w-[1400px] px-5">
          <h3 className="text-2xl font-bold text-white">
            Go live 2X faster with pre-built template
          </h3>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/contacts"
              className="rounded-md bg-white px-6 py-3 font-semibold text-gray-900 shadow-md transition duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
            >
              Get Started
            </a>
            <a
              href="/solution"
              className="rounded-md border border-white px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#0E8FFB]"
            >
              Explore for more
            </a>
          </div>
        </div>
      </Reveal>

      {/* Extracto — Invoice Extractor */}
      <ExtractoSection />

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
              href="/solution"
              lineClassName="bg-[#0E8FFB]"
              className="rounded-md border border-[#0E8FFB] px-6 py-3 font-semibold text-[#0E8FFB] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0E8FFB] hover:text-white"
            >
              Find your solutions
            </DrawOutlineButton>
          </div>
        </div>
      </Reveal>
    </>
  );
}

export default CaseStudyDetail;
