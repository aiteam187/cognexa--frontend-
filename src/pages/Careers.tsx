import { Heart, Rocket, Sparkles, Users } from "lucide-react";
import Reveal from "../components/Reveal";
import DrawOutlineButton from "../components/DrawOutlineButton";
import SEO from "../components/SEO";

const values = [
  {
    icon: Rocket,
    title: "Move fast, ship real automation",
    description:
      "We build products that replace hours of manual work with seconds of AI, and we move at that same pace internally.",
  },
  {
    icon: Sparkles,
    title: "Work on the full stack of AI",
    description:
      "Vision, voice, document understanding, and analytics, all in production, all solving real business problems.",
  },
  {
    icon: Users,
    title: "Small team, real ownership",
    description:
      "No layers of process between you and shipping something a customer uses the next day.",
  },
  {
    icon: Heart,
    title: "Built around outcomes",
    description:
      "We care about the results our automation delivers for customers, not hours logged.",
  },
];

function Careers() {
  return (
    <>
      <SEO
        title="Careers"
        description="Help us build the future of intelligent automation. We're a small, fast-moving team building AI that businesses put into production."
        path="/careers"
      />
      {/* Hero */}
      <section className="relative flex h-80 items-center justify-center overflow-hidden bg-gray-950 text-center text-white sm:h-[560px]">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-[#0c1b33] to-gray-950" />

        <div className="hero-heading relative mx-auto max-w-3xl px-5">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
            Careers
          </span>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            Help us build the future of intelligent automation
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
            We're a small, fast-moving team building AI that businesses put
            into production, not just demos.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
              Why Cognexa
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              What it's like to work here
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, description }, i) => (
              <Reveal
                key={title}
                delay={i * 100}
                className="hover-lift rounded-xl border border-gray-100 bg-gray-50/60 p-6 transition duration-200 hover:border-[#0E8FFB]/30 hover:bg-white hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0E8FFB]/10">
                  <Icon className="h-5 w-5 text-[#0E8FFB]" strokeWidth={2} />
                </span>
                <h4 className="mt-3 font-semibold text-gray-900">{title}</h4>
                <p className="mt-1 text-sm text-gray-500">{description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* No open roles / get in touch */}
      <Reveal as="section" className="bg-gray-50/60 py-20 text-center">
        <div className="mx-auto max-w-[1400px] px-5">
          <h3 className="text-lg font-semibold text-[#0E8FFB]">
            No open roles right now
          </h3>
          <h2 className="mx-auto mt-2 max-w-2xl text-3xl font-bold text-gray-900 sm:text-4xl">
            We're always open to hearing from great people
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            We don't have open positions posted at the moment, but if you'd be
            a great fit for a team building AI-first automation, send us your
            resume at{" "}
            <a
              href="mailto:support@cognexa.co.in"
              className="font-medium text-[#0E8FFB]"
            >
              support@cognexa.co.in
            </a>{" "}
            and tell us what you'd want to work on.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <DrawOutlineButton
              href="mailto:support@cognexa.co.in"
              lineClassName="bg-white"
              className="rounded-md bg-[#0E8FFB] px-6 py-3 font-semibold text-white uppercase shadow-md transition duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
            >
              Email your resume
            </DrawOutlineButton>
            <DrawOutlineButton
              href="/about-us"
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

export default Careers;
