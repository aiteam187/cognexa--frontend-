import {
  AlarmClock,
  Bot,
  CalendarCheck,
  Check,
  Headset,
  Mic,
  Star,
  TrendingUp,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { AIGradientBorder } from "../components/AIGradientBorder";
import DrawOutlineButton from "../components/DrawOutlineButton";
import SEO from "../components/SEO";
import CognexaInterviewCall from "../components/CognexaInterviewCall";
import CognexaInterviewerPreview from "../components/CognexaInterviewerPreview";
import CognexaInterviewerDashboard from "../components/CognexaInterviewerDashboard";
import CountUp from "../components/CountUp";
import interviewerHeroImg from "../assets/home/brand-voice.webp";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-gray-600">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0E8FFB]" />
      <span>{children}</span>
    </li>
  );
}

function FeaturePoint({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}) {
  return (
    <li className="flex items-start gap-3.5 rounded-xl border border-gray-100 bg-gray-50/60 p-4 transition duration-200 hover:border-[#0E8FFB]/30 hover:bg-white hover:shadow-md">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0E8FFB]/10">
        <Icon className="h-5 w-5 text-[#0E8FFB]" strokeWidth={2} />
      </span>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="mt-0.5 text-sm text-gray-500">{description}</p>
      </div>
    </li>
  );
}

const stats = [
  { value: "5", label: "conversation types" },
  { value: "24x7", label: "availability" },
  { value: "Real-time", label: "voice AI" },
  { value: "Auto", label: "scoring & scheduling" },
];

const agentCapabilities = [
  {
    icon: TrendingUp,
    title: "Lead Generation",
    description:
      "Qualifies inbound leads with a natural conversation and hands off warm prospects to sales.",
  },
  {
    icon: CalendarCheck,
    title: "Arrange Meetings",
    description:
      "Finds a slot that works for everyone and books it straight into the calendar.",
  },
  {
    icon: Mic,
    title: "Interviews",
    description:
      "Runs real-time voice interviews and shortlists candidates automatically.",
  },
  {
    icon: Headset,
    title: "Customer Support",
    description:
      "Resolves common questions instantly and escalates the rest to the right team.",
  },
  {
    icon: AlarmClock,
    title: "Enquiry & Reminder Agent",
    description:
      "Answers product enquiries and follows up with timely reminders, so nothing slips through.",
  },
];

function CognexaAgent() {
  return (
    <>
      <SEO
        title="Cognexa Agent — Real-Time Voice AI"
        description="A real-time voice AI that generates and qualifies leads, arranges meetings, supports customers, runs interviews, and follows up on enquiries, all from one platform."
        path="/cognexa-agent"
        image={interviewerHeroImg}
      />
      {/* Hero — dark, product-focused */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-950/30" />

        <div className="relative mx-auto flex max-w-[1400px] flex-wrap items-center gap-14 px-5 py-24 sm:py-28">
          <div className="hero-heading flex-1 basis-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0E8FFB]/15 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#38bdf8] uppercase">
              <Bot className="h-4 w-4" />
              Voice AI
            </span>
            <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
              Cognexa <span className="text-[#0E8FFB]">Agent</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-300">
              A real-time voice AI that talks like a real person, not a
              script. It generates and qualifies leads, arranges meetings,
              supports customers, runs interviews, and follows up on
              enquiries and reminders, all from one platform.
            </p>
            <ul className="mt-6 space-y-2.5">
              <li className="flex items-start gap-2 text-gray-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" />
                <span>Conducts real-time voice conversations, not scripted forms</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" />
                <span>Scores, shortlists, and schedules automatically</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" />
                <span>Available 24x7, no scheduling delays</span>
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
                  src={interviewerHeroImg}
                  alt="Candidate talking with Cognexa Interviewer, Cognexa's real-time AI hiring agent"
                  fetchPriority="high"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent p-5 pt-12">
                  <p className="text-sm font-semibold tracking-wide text-white uppercase">
                    One AI. Every Conversation. Real Time.
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

      {/* Five capabilities */}
      <section id="how-it-works" className="bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
              Cognexa Agent
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              One AI for every conversation your business has
            </h2>
            <p className="mt-4 text-gray-500">
              Five capabilities, one platform, all running on the same
              real-time voice engine.
            </p>
          </Reveal>

          <ul className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
            {agentCapabilities.map((cap) => (
              <Reveal
                key={cap.title}
                as="li"
                className="hover-lift rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#0E8FFB]/30 hover:shadow-lg"
              >
                <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0E8FFB]/10">
                  <cap.icon className="h-6 w-6 text-[#0E8FFB]" strokeWidth={1.5} />
                </span>
                <h4 className="font-semibold text-gray-900">{cap.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {cap.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* A closer look — interviews in detail */}
      <section className="bg-gray-50/60 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
              A closer look
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              One capability in detail: real-time interviews
            </h2>
            <p className="mt-4 text-gray-500">
              Every conversation Cognexa Agent runs works the same way, live
              and natural. Here's what that looks like for interviews, one of
              its five capabilities.
            </p>
          </Reveal>

          <div className="mt-16 flex flex-wrap items-center gap-14">
            <Reveal className="hover-lift flex-1 basis-100">
              <AIGradientBorder className="rounded-2xl" tone="brand">
                <img
                  src={interviewerHeroImg}
                  alt="Candidate talking with Cognexa Interviewer, Cognexa's real-time AI hiring agent"
                  loading="eager"
                  fetchPriority="low"
                  width={1000}
                  height={732}
                  className="rounded-2xl shadow-lg"
                />
              </AIGradientBorder>
            </Reveal>
            <Reveal delay={120} className="flex-1 basis-100">
              <h3 className="text-2xl font-bold text-gray-900">
                Interviews candidates in real time, not just chat.
              </h3>
              <p className="mt-3 text-gray-500">
                Cognexa Interviewer holds a natural, spoken conversation with
                each candidate the same day they apply, asking follow-up
                questions and responding the way an experienced interviewer
                would.
              </p>
              <ul className="mt-5 space-y-2.5">
                <CheckItem>Conducts real-time voice interviews, not scripted forms</CheckItem>
                <CheckItem>Scores and shortlists candidates automatically</CheckItem>
                <CheckItem>Available 24x7, no scheduling delays</CheckItem>
              </ul>
            </Reveal>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-14">
            <Reveal className="order-2 flex-1 basis-100 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900">
                Meetings booked without the back-and-forth.
              </h3>
              <p className="mt-3 text-gray-500">
                The moment a candidate is a fit, Cognexa Interviewer finds a
                slot that works for both sides and sends the calendar invite,
                no email thread required.
              </p>
              <ul className="mt-6 space-y-3">
                <FeaturePoint
                  icon={Mic}
                  title="Real-time voice interviews"
                  description="Speaks and listens naturally, like talking to a real interviewer."
                />
                <FeaturePoint
                  icon={CalendarCheck}
                  title="Automatic meeting scheduling"
                  description="Finds a slot, books it, and syncs invites to every calendar."
                />
                <FeaturePoint
                  icon={Star}
                  title="Candidate scoring & shortlisting"
                  description="Ranks candidates so recruiters focus on the strongest fits first."
                />
              </ul>
            </Reveal>
            <Reveal
              delay={120}
              className="hover-lift order-1 flex-1 basis-100 md:order-2"
            >
              <CognexaInterviewerPreview />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Live interview call */}
      <section className="bg-white py-20 text-center">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal>
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
              In action
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-gray-900 sm:text-4xl">
              Watch a real-time interview in progress
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              This is what a live conversation with Cognexa Interviewer looks
              like, questions, answers, and scheduling, all in real time.
            </p>
          </Reveal>

          <Reveal
            delay={150}
            className="hover-lift mx-auto mt-12 max-w-4xl transition-all duration-500"
          >
            <AIGradientBorder className="rounded-2xl" tone="brand" duration={5}>
              <CognexaInterviewCall />
            </AIGradientBorder>
          </Reveal>
        </div>
      </section>

      {/* Dashboard */}
      <section className="bg-gray-50/60 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
              Command center
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              One dashboard for every candidate
            </h2>
            <p className="mt-4 text-gray-500">
              Track every interview, scheduling, and shortlist across roles,
              all in one place.
            </p>
          </Reveal>
          <Reveal
            delay={150}
            className="hover-lift mx-auto mt-10 max-w-6xl transition-all duration-500"
          >
            <AIGradientBorder className="rounded-2xl" tone="brand" duration={5}>
              <CognexaInterviewerDashboard />
            </AIGradientBorder>
          </Reveal>
        </div>
      </section>

      {/* Tagline banner */}
      <Reveal as="section" className="bg-[#0E8FFB] py-14 text-center">
        <div className="mx-auto max-w-[1400px] px-5">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            One AI. Every Conversation. Real Time.
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
            Put a real-time voice AI to work for your team
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

export default CognexaAgent;
