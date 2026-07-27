import { Bot, Cpu, Network, Sparkles } from "lucide-react";
import { reasonsToPartner } from "../data/reasonsToPartner";
import { teamMembers } from "../data/teamMembers";
import Reveal from "../components/Reveal";
import DrawOutlineButton from "../components/DrawOutlineButton";
import partnerAzure from "../assets/home/live/partner-1.png";
import partnerAmp from "../assets/home/live/partner-2.png";
import partnerBash from "../assets/home/live/partner-3.png";
import partnerBot from "../assets/home/live/partner-4.webp";

const partnerLogos = [partnerAzure, partnerAmp, partnerBash, partnerBot];

const capabilities = [
  {
    icon: Bot,
    title: "Robotic Process Automation",
    description:
      "Software robots that handle repetitive, rule-based tasks around the clock, cutting errors and freeing your team.",
  },
  {
    icon: Network,
    title: "IoT Integration",
    description:
      "Connect devices, sensors, and systems into a single automated workflow that reacts in real time.",
  },
  {
    icon: Sparkles,
    title: "Artificial Intelligence",
    description:
      "AI agents that understand text and email, plus Extracto reading invoices automatically, so customers and employees get instant, contextual help.",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description:
      "Models that learn from every interaction, continuously improving accuracy, speed, and outcomes.",
  },
];

function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-80 items-center justify-center overflow-hidden bg-gray-950 text-center text-white sm:h-[560px]">
        <img
          src="/aiimg1.avif"
          alt=""
          aria-hidden
          fetchPriority="high"
          className="hero-banner-img absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-[#0c6fd0]/30 to-gray-950/80" />

        <div className="hero-heading relative mx-auto max-w-3xl px-5">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
            About Cognexa
          </span>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            Building the future of intelligent automation
          </h1>
          <p className="mt-5 text-lg text-white/85">
            Cognexa leads in industrial solutions, extending beyond RPA to
            provide seamless IoT, AI, and ML services, empowering clients to
            move faster in a dynamic digital landscape.
          </p>
        </div>
      </section>

      {/* Mission / capabilities */}
      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="flex flex-wrap items-start gap-14">
            <Reveal className="flex-1 basis-100">
              <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
                Our mission
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">
                Automation that adapts to your business, not the other way
                around
              </h2>
              <p className="mt-4 text-gray-500">
                Robotic Process Automation automates repetitive tasks through
                software robots, boosting efficiency and minimizing errors. We
                take that further, combining RPA with IoT, AI, and ML so every
                part of your operation works together.
              </p>
              <p className="mt-4 text-gray-500">
                Join us as we shape the future of automation, empowering clients
                across industries to do more with less friction.
              </p>
            </Reveal>

            <div className="flex-1 basis-100">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {capabilities.map(({ icon: Icon, title, description }, i) => (
                  <Reveal
                    key={title}
                    delay={i * 100}
                    className="hover-lift rounded-xl border border-gray-100 bg-gray-50/60 p-5 transition duration-200 hover:border-[#0E8FFB]/30 hover:bg-white hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0E8FFB]/10">
                      <Icon
                        className="h-5 w-5 text-[#0E8FFB]"
                        strokeWidth={2}
                      />
                    </span>
                    <h4 className="mt-3 font-semibold text-gray-900">
                      {title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">{description}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners marquee */}
      <Reveal as="section" className="bg-[#0E8FFB] py-14">
        <h3 className="text-center text-2xl font-bold tracking-wide text-white uppercase">
          Our Associated Partners
        </h3>
        <div className="mt-10 overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-14">
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div
                key={i}
                className="hover-lift flex h-28 w-56 shrink-0 items-center justify-center rounded-xl bg-white p-3 shadow-md"
              >
                <img
                  src={logo}
                  alt=""
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Our best leaders */}
      <section className="py-20">
        <div className="mx-auto max-w-[350 px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
              Leadership
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Meet the people behind Cognexa
            </h2>
            <p className="mt-4 text-gray-500">
              Deep industry experience across engineering, product, and customer
              success, focused on getting automation right.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <Reveal
                key={member.name}
                delay={i * 120}
                className="hover-lift rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm transition duration-200 hover:border-[#0E8FFB]/30 hover:shadow-lg"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="mx-auto mb-4 h-28 w-28 rounded-full object-cover ring-4 ring-[#0E8FFB]/10"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium tracking-wide text-[#0E8FFB] uppercase">
                  {member.role}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner with us */}
      <section className="bg-gray-50/60 py-20">
        <div className="mx-auto max-w-[350 px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
              Why choose us
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              10 Reasons to Partner With Us
            </h2>
          </Reveal>

          <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {reasonsToPartner.map(({ title, description, icon: Icon }, i) => (
              <Reveal
                key={title}
                as="li"
                delay={(i % 6) * 80}
                className="flex items-start gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0E8FFB]/10">
                  <Icon className="h-5 w-5 text-[#0E8FFB]" strokeWidth={2} />
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">{title}</h4>
                  <p className="mt-0.5 text-sm text-gray-500">{description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      <Reveal as="section" className="py-20 text-center">
        <div className="mx-auto max-w-[350] px-5">
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

export default About;
