import {
  Bell,
  Brain,
  Camera,
  Car,
  Check,
  Cpu,
  Database,
  ScanLine,
  ShieldCheck,
  Ticket,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { AIGradientBorder } from "../components/AIGradientBorder";
import DrawOutlineButton from "../components/DrawOutlineButton";
import SEO from "../components/SEO";
import ANPRCaptureShowcase from "../components/ANPRCaptureShowcase";
import ANPRLiveDashboard from "../components/ANPRLiveDashboard";
import ANPRLogPreview from "../components/ANPRLogPreview";
import CountUp from "../components/CountUp";
import { anprImages } from "../data/anprLanes";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-gray-600">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0E8FFB]" />
      <span>{children}</span>
    </li>
  );
}

const stats = [
  { value: "99%+", label: "plate-read accuracy" },
  { value: "24x7", label: "lane monitoring" },
  { value: "<1s", label: "decision time" },
  { value: "Multi-lane", label: "ready" },
];

const pipeline = [
  {
    icon: Camera,
    title: "Capture",
    description: "Entry, exit & toll lane cameras",
  },
  {
    icon: Cpu,
    title: "Plate Detection",
    description: "AI reads plates in any condition",
  },
  {
    icon: Database,
    title: "Match & Verify",
    description: "Checked against watchlists",
  },
  {
    icon: ShieldCheck,
    title: "Access Decision",
    description: "Barrier & gate control",
  },
  {
    icon: Bell,
    title: "Analytics & Alerts",
    description: "Logs, dashboards & notifications",
  },
];

const flow = [
  { icon: Camera, label: "Camera at gate" },
  { icon: ScanLine, label: "AI plate OCR" },
  { icon: Database, label: "Watchlist match" },
  { icon: ShieldCheck, label: "Gate decision" },
  { icon: Bell, label: "Dashboard & alerts" },
];

function ANPR() {
  return (
    <>
      <SEO
        title="ANPR — Automatic Number Plate Recognition"
        description="Cognexa's ANPR reads vehicle plates at every gate, lane, and toll point in real time, matches them against watchlists, and automates entry, exit, and access decisions."
        path="/anpr"
        image={anprImages.composite.src}
      />
      {/* Hero — dark, product-focused */}
      <section className="relative overflow-hidden bg-gray-950">
        <img
          src={anprImages.composite.src}
          alt=""
          aria-hidden
          fetchPriority="high"
          className="hero-banner-img absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-950/30" />

        <div className="relative mx-auto flex max-w-[1400px] flex-wrap items-center gap-14 px-5 py-24 sm:py-28">
          <div className="hero-heading flex-1 basis-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0E8FFB]/15 px-5 py-2 text-base font-bold tracking-wide text-[#38bdf8] uppercase">
              <Car className="h-4 w-4" />
              Automatic Number Plate Recognition
            </span>
            <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
              <span className="text-[#0E8FFB]">ANPR</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-300">
              Cognexa's ANPR reads vehicle plates at every gate, lane, and toll
              point in real time, matches them against watchlists, and
              automates entry, exit, and access decisions, no manual logging
              required.
            </p>
            <ul className="mt-6 space-y-2.5">
              <li className="flex items-start gap-2 text-gray-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" />
                <span>Works with your existing entry, exit & toll cameras</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" />
                <span>Matches plates against watchlists in real time</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" />
                <span>Automates barrier control, logs, and alerts</span>
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
                  src={anprImages.composite.src}
                  alt={anprImages.composite.alt}
                  fetchPriority="high"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent p-5 pt-12">
                  <p className="text-sm font-semibold tracking-wide text-white uppercase">
                    Every Plate Read. Every Vehicle Tracked. Instantly.
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

      {/* Lane showcase — vehicle approach to gate decision */}
      <section className="bg-gray-950 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <ANPRCaptureShowcase />
        </div>
      </section>

      {/* Live monitoring dashboard */}
      <section className="border-t border-white/5 bg-gray-950 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/15 px-5 py-2 text-base font-bold tracking-wide text-[#38bdf8] uppercase">
              Command center
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Your live gate &amp; lane dashboard
            </h2>
            <p className="mt-4 text-gray-400">
              Every lane, every plate, every decision, on one screen. This is
              what your security team sees, updating in real time.
            </p>
          </Reveal>

          <Reveal delay={150} className="mx-auto mt-12 max-w-6xl">
            <AIGradientBorder className="rounded-2xl" tone="brand" duration={5}>
              <ANPRLiveDashboard />
            </AIGradientBorder>
          </Reveal>
        </div>
      </section>

      {/* ANPR in action — scan log */}
      <section className="bg-gray-50/60 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-5 py-2 text-base font-bold tracking-wide text-[#0E8FFB] uppercase">
              In action
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              See ANPR read and match plates in real time
            </h2>
            <p className="mt-4 text-gray-500">
              Every scan logged automatically: plate number, vehicle, gate,
              direction, and status, no manual entry required.
            </p>
          </Reveal>

          <Reveal
            delay={150}
            className="hover-lift mx-auto mt-12 max-w-6xl transition-all duration-500"
          >
            <AIGradientBorder className="rounded-2xl" tone="brand" duration={5}>
              <ANPRLogPreview />
            </AIGradientBorder>
          </Reveal>
        </div>
      </section>

      {/* Pipeline — 5 steps at a glance */}
      <section className="bg-gray-50/60 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-5 py-2 text-base font-bold tracking-wide text-[#0E8FFB] uppercase">
              The pipeline
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Five steps, fully automatic
            </h2>
            <p className="mt-4 text-gray-500">
              Every vehicle flows through the same continuous loop, from
              camera to logged decision, with no manual monitoring required.
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
                <h3 className="font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* How ANPR works — full flow diagram */}
      <section id="how-it-works" className="bg-white py-20 text-center">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal>
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-5 py-2 text-base font-bold tracking-wide text-[#0E8FFB] uppercase">
              How it works
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-gray-900 sm:text-4xl">
              From camera feed to actionable decision
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              One flow, start to finish: your lane cameras feed in, Cognexa AI
              reads and matches the plate, and the right decision, and the
              right team, gets notified instantly.
            </p>
          </Reveal>

          <Reveal
            delay={150}
            className="rpa-diagram mx-auto mt-12 max-w-6xl transition-all duration-500 hover:-translate-y-1"
          >
            <AIGradientBorder className="rounded-2xl" tone="brand" duration={5}>
              <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-10">
                <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-8">
                  {flow.map((step, i) => (
                    <div key={step.label} className="flex items-center gap-2">
                      <div className="flex w-28 flex-col items-center text-center sm:w-32">
                        <span className="mb-3 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0E8FFB]/10">
                          <step.icon
                            className="h-7 w-7 text-[#0E8FFB]"
                            strokeWidth={1.5}
                          />
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          {step.label}
                        </span>
                      </div>
                      {i < flow.length - 1 && (
                        <span className="hidden text-2xl text-[#0E8FFB]/40 sm:block">
                          &rarr;
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AIGradientBorder>
          </Reveal>
        </div>
      </section>

      {/* Verify & Automate */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-5 py-2 text-base font-bold tracking-wide text-[#0E8FFB] uppercase">
              Beyond recognition
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Reading the plate is only the beginning
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Reveal className="hover-lift rounded-2xl border border-gray-100 bg-gray-50/60 p-8 transition duration-200 hover:border-emerald-500/30 hover:bg-white hover:shadow-lg sm:p-10">
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10">
                <Brain className="h-7 w-7 text-emerald-600" strokeWidth={1.5} />
              </span>
              <span className="inline-block rounded-full bg-emerald-500/10 px-5 py-2 text-base font-bold tracking-wide text-emerald-600 uppercase">
                Verify
              </span>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                Know who's coming and going, not just log it
              </h3>
              <ul className="mt-5 space-y-2.5">
                <CheckItem>Plate matching against watchlists & whitelists</CheckItem>
                <CheckItem>Duplicate visit & loitering detection</CheckItem>
                <CheckItem>Vehicle-type classification</CheckItem>
                <CheckItem>Low-light & weather-robust plate reads</CheckItem>
                <CheckItem>Multi-format & multi-region plate support</CheckItem>
                <CheckItem>Continuous learning</CheckItem>
              </ul>
            </Reveal>

            <Reveal
              delay={120}
              className="hover-lift rounded-2xl border border-gray-100 bg-gray-50/60 p-8 transition duration-200 hover:border-[#0E8FFB]/30 hover:bg-white hover:shadow-lg sm:p-10"
            >
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0E8FFB]/10">
                <Ticket className="h-7 w-7 text-[#0E8FFB]" strokeWidth={1.5} />
              </span>
              <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-5 py-2 text-base font-bold tracking-wide text-[#0E8FFB] uppercase">
                Automate
              </span>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                Turn a plate read into an action, instantly
              </h3>
              <ul className="mt-5 space-y-2.5">
                <CheckItem>Automatic barrier & gate control</CheckItem>
                <CheckItem>Visitor pass generation on arrival</CheckItem>
                <CheckItem>Parking & toll billing integration</CheckItem>
                <CheckItem>Entry & exit register, zero manual entry</CheckItem>
              </ul>
              <span className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-500">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#0E8FFB]" />
                Every decision is logged so teams can audit any gate, any time.
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tagline banner */}
      <Reveal as="section" className="bg-[#0E8FFB] py-14 text-center">
        <div className="mx-auto max-w-[1400px] px-5">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Every Plate Read. Every Vehicle Tracked. Instantly.
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
            Bring automatic plate recognition to your gates and lanes
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

export default ANPR;
