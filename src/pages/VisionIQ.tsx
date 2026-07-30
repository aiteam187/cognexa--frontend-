import {
  BarChart3,
  Bell,
  Brain,
  Camera,
  Check,
  Cpu,
  ScanEye,
  ShieldCheck,
  Target,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { AIGradientBorder } from "../components/AIGradientBorder";
import DrawOutlineButton from "../components/DrawOutlineButton";
import SEO from "../components/SEO";
import LiveDetectionDashboard from "../components/LiveDetectionDashboard";
import TabletVisionShowcase from "../components/TabletVisionShowcase";
import CountUp from "../components/CountUp";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-gray-600">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0E8FFB]" />
      <span>{children}</span>
    </li>
  );
}

const stats = [
  { value: "50+", label: "AI models" },
  { value: "99%+", label: "detection accuracy" },
  { value: "24x7", label: "monitoring" },
  { value: "Real-time", label: "alerts" },
];

const pipeline = [
  {
    icon: Camera,
    title: "CCTV Cameras",
    description: "Live & archived video input",
  },
  {
    icon: Cpu,
    title: "AI Processing",
    description: "Deep learning analysis",
  },
  {
    icon: Target,
    title: "Detection",
    description: "50+ AI models in action",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Dashboards & insights",
  },
  {
    icon: Bell,
    title: "Alerts",
    description: "Instant notifications",
  },
];

const detections = [
  {
    src: "/det1.webp",
    alt: "Vision IQ detecting vehicles, pedestrians, and traffic signals on a busy street",
    title: "Vehicle & Pedestrian Detection",
    description:
      "Tracks cars, people, and traffic signals across the frame in real time.",
  },
  {
    src: "/det2.webp",
    alt: "Vision IQ detecting a deer near a loading dock at night",
    title: "Animal Presence Detection",
    description:
      "Flags animals near restricted or hazardous zones before they become a safety issue.",
  },
  {
    src: "/det3.webp",
    alt: "Vision IQ verifying a worker's helmet, goggles, gloves, and safety vest",
    title: "PPE Kit Compliance Detection",
    description:
      "Checks helmets, goggles, gloves, and safety vests against site rules in real time.",
  },
  {
    src: "/det4.webp",
    alt: "Vision IQ detecting a fire hazard inside a building",
    title: "Fire Hazard Detection",
    description:
      "Spots fire and smoke early, so teams can respond before it spreads.",
  },
];

function VisionIQ() {
  return (
    <>
      <SEO
        title="Vision IQ — AI Computer Vision"
        description="Turn your existing CCTV cameras into an intelligent AI-powered monitoring system. Vision IQ detects safety risks, security threats, and operational issues in real time."
        path="/vision-iq"
        image="/visionhero.webp"
      />
      {/* Hero — dark, product-focused */}
      <section className="relative overflow-hidden bg-gray-950">
        <img
          src="/visionhero.webp"
          alt=""
          aria-hidden
          fetchPriority="high"
          className="hero-banner-img absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-950/30" />

        <div className="relative mx-auto flex max-w-[1400px] flex-wrap items-center gap-14 px-5 py-24 sm:py-28">
          <div className="hero-heading flex-1 basis-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0E8FFB]/15 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#38bdf8] uppercase">
              <ScanEye className="h-4 w-4" />
              Computer Vision
            </span>
            <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
              Vision <span className="text-[#0E8FFB]">IQ</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-300">
              Turn your existing CCTV cameras into an intelligent AI-powered
              monitoring system. Vision IQ analyzes video in real time to
              detect safety risks, security threats, and operational issues,
              and alerts your team before incidents become costly problems.
            </p>
            <ul className="mt-6 space-y-2.5">
              <li className="flex items-start gap-2 text-gray-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" />
                <span>Works with your existing CCTV cameras</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" />
                <span>50+ AI models detecting risks in real time</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" />
                <span>Instant, multi-channel alerts to the right team</span>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <DrawOutlineButton
                href="/contacts"
                lineClassName="bg-white"
                className="rounded-md bg-[#0E8FFB] px-6 py-3 font-semibold text-white uppercase shadow-md transition duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
              >
                Book a demo
              </DrawOutlineButton>
              <DrawOutlineButton
                href="#how-it-works"
                lineClassName="bg-[#38bdf8]"
                className="rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-[#38bdf8] hover:text-[#38bdf8]"
              >
                How it works
              </DrawOutlineButton>
            </div>
          </div>

          <div className="hero-card flex-1 basis-100" style={{ animationDelay: "200ms" }}>
            <AIGradientBorder className="rounded-2xl" tone="brand">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-900">
                <img
                  src="/visionhero.webp"
                  alt="Vision IQ AI analyzing video and generating real-time insights"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent p-5 pt-12">
                  <p className="text-sm font-semibold tracking-wide text-white uppercase">
                    Smarter Detection. Faster Response. Safer Operations.
                  </p>
                </div>
              </div>
            </AIGradientBorder>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-gray-100 bg-white py-14">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 100}
                className="hover-lift rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-200 hover:border-[#0E8FFB]/30 hover:shadow-lg"
              >
                <div className="text-3xl font-bold text-[#0E8FFB] sm:text-4xl">
                  <CountUp value={stat.value} />
                </div>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tablet mode — live feed to AI detection */}
      <section className="bg-gray-950 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <TabletVisionShowcase />
        </div>
      </section>

      {/* Live monitoring dashboard */}
      <section className="border-t border-white/5 bg-gray-950 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/15 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#38bdf8] uppercase">
              Command center
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Your live monitoring dashboard
            </h2>
            <p className="mt-4 text-gray-400">
              Every camera, every detection, every alert, on one screen. This
              is what your security team sees, updating in real time.
            </p>
          </Reveal>

          <Reveal delay={150} className="mx-auto mt-12 max-w-6xl">
            <AIGradientBorder className="rounded-2xl" tone="brand" duration={5}>
              <LiveDetectionDashboard />
            </AIGradientBorder>
          </Reveal>
        </div>
      </section>

      {/* Vision IQ in action — real detection examples */}
      <section className="bg-gray-50/60 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
              In action
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              See Vision IQ detect in real time
            </h2>
            <p className="mt-4 text-gray-500">
              Real detections from real feeds: people, vehicles, animals, PPE
              compliance, and fire hazards, flagged the moment they happen.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {detections.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 120} className="hover-lift">
                <AIGradientBorder className="rounded-2xl" tone="brand">
                  <div className="group overflow-hidden rounded-2xl bg-white shadow-lg">
                    <div className="overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="eager"
                        fetchPriority="low"
                        className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-72"
                      />
                    </div>
                    <div className="p-6 text-left">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AIGradientBorder>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline — 5 steps at a glance */}
      <section className="bg-gray-50/60 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
              The pipeline
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Five steps, fully automatic
            </h2>
            <p className="mt-4 text-gray-500">
              Every frame flows through the same continuous loop, from camera
              to alert, with no manual monitoring required.
            </p>
          </Reveal>

          <ol className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {pipeline.map((step, i) => (
              <Reveal
                key={step.title}
                as="li"
                delay={i * 90}
                className="hover-lift relative flex flex-col items-center rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition duration-200 hover:border-[#0E8FFB]/30 hover:shadow-lg"
              >
                <span className="absolute top-3 left-4 text-xs font-bold text-gray-300">
                  0{i + 1}
                </span>
                <span className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0E8FFB]">
                  <step.icon
                    className="h-7 w-7 text-white"
                    strokeWidth={1.5}
                  />
                </span>
                <h4 className="font-semibold text-gray-900">{step.title}</h4>
                <p className="mt-1 text-sm text-gray-500">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* How Cognexa AI works — full flow diagram */}
      <section id="how-it-works" className="bg-white py-20 text-center">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal>
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
              How it works
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-gray-900 sm:text-4xl">
              From camera feed to actionable alert
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              One diagram, the whole pipeline: your CCTV feeds go in, Cognexa
              AI detects what matters, and the right team gets alerted, all in
              real time.
            </p>
          </Reveal>

          <Reveal
            delay={150}
            className="rpa-diagram mx-auto mt-12 max-w-6xl transition-all duration-500 hover:-translate-y-1"
          >
            <AIGradientBorder className="rounded-2xl" tone="brand" duration={5}>
              <div className="rounded-2xl bg-white p-4 shadow-lg sm:p-6">
                <img
                  src="/visioniq.webp"
                  loading="eager"
                  fetchPriority="low"
                  alt="How Cognexa AI Vision IQ works: CCTV cameras feed into the AI processing engine, which detects intruders, crowds, PPE compliance, fire hazards, vehicles, and more, then analyzes and sends real-time alerts"
                  className="mx-auto rounded-xl transition-transform duration-500"
                />
              </div>
            </AIGradientBorder>
          </Reveal>
        </div>
      </section>

      {/* Analyze & Alert */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
              Beyond detection
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Detection is only the beginning
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Reveal className="hover-lift rounded-2xl border border-gray-100 bg-gray-50/60 p-8 transition duration-200 hover:border-emerald-500/30 hover:bg-white hover:shadow-lg sm:p-10">
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10">
                <Brain className="h-7 w-7 text-emerald-600" strokeWidth={1.5} />
              </span>
              <span className="inline-block rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-emerald-600 uppercase">
                Analyze
              </span>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                Understand what's happening, not just what's on camera
              </h3>
              <ul className="mt-5 space-y-2.5">
                <CheckItem>Video analytics & pattern recognition</CheckItem>
                <CheckItem>Behavior analysis & anomaly detection</CheckItem>
                <CheckItem>Risk scoring & prioritization</CheckItem>
                <CheckItem>Smart insights generation</CheckItem>
                <CheckItem>Operational intelligence</CheckItem>
                <CheckItem>Continuous learning</CheckItem>
              </ul>
            </Reveal>

            <Reveal
              delay={120}
              className="hover-lift rounded-2xl border border-gray-100 bg-gray-50/60 p-8 transition duration-200 hover:border-[#0E8FFB]/30 hover:bg-white hover:shadow-lg sm:p-10"
            >
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0E8FFB]/10">
                <Bell className="h-7 w-7 text-[#0E8FFB]" strokeWidth={1.5} />
              </span>
              <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
                Alert
              </span>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                Get the right alert to the right team, instantly
              </h3>
              <ul className="mt-5 space-y-2.5">
                <CheckItem>Instant alerts & notifications</CheckItem>
                <CheckItem>Multi-channel alert delivery</CheckItem>
                <CheckItem>Actionable insights, not just footage</CheckItem>
              </ul>
              <span className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-500">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#0E8FFB]" />
                Every alert is prioritized so teams act on what matters most.
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tagline banner */}
      <Reveal as="section" className="bg-[#0E8FFB] py-14 text-center">
        <div className="mx-auto max-w-[1400px] px-5">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Smarter Detection. Faster Response. Safer Operations.
          </h3>
        </div>
      </Reveal>

      {/* Contact CTA */}
      <Reveal as="section" className="py-20 text-center">
        <div className="mx-auto max-w-[1400px] px-5">
          <h3 className="text-lg font-semibold text-[#0E8FFB]">
            Let's get started
          </h3>
          <h2 className="mx-auto mt-2 max-w-2xl text-3xl font-bold text-gray-900 sm:text-4xl">
            Bring AI-powered vision to your existing cameras
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

export default VisionIQ;
