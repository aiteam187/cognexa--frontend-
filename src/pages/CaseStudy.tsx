import Reveal from "../components/Reveal";
import DrawOutlineButton from "../components/DrawOutlineButton";
import SEO from "../components/SEO";

function CaseStudy() {
  return (
    <>
      <SEO
        title="Case Studies"
        description="See how businesses use Cognexa's AI and automation solutions to cut costs, speed up support, and delight customers."
        path="/case-study"
        image="/case-hero-og.webp"
      />
      {/* Hero intro */}
      <section className="relative flex h-80 items-center justify-center overflow-hidden bg-gray-950 text-center text-white sm:h-[560px]">
        <img
          src="/case-hero.webp"
          alt=""
          aria-hidden
          fetchPriority="high"
          className="hero-banner-img absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-[#0c6fd0]/20 to-gray-950/70" />

        <div className="hero-heading relative mx-auto max-w-3xl px-5">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
            Case Studies
          </span>
          <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
            Real results, powered by Cognexa
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
            See how businesses use our AI and automation solutions to cut costs,
            speed up support, and delight customers.
          </p>
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
            <a href="tel:+917557576999" className="font-medium text-[#0E8FFB]">
              +91 91 7557 6999
            </a>{" "}
            or email us at{" "}
            <a
              href="mailto:support@cognexa.co.in"
              className="font-medium text-[#0E8FFB]"
            >
              support@cognexa.co.in
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

export default CaseStudy;
