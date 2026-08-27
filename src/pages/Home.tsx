import {
  Check,
  Zap,
  Plug,
  ShieldCheck,
  ScanEye,
  Bell,
  Target,
  Mic,
  CalendarCheck,
  Star,
  Bot,
  TrendingUp,
  Headset,
  AlarmClock,
  Car,
  Database,
  Ticket,
  Receipt,
  BarChart3,
} from "lucide-react";
import Hero from "../components/Hero/Hero";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import FAQAccordion from "../components/FAQAccordion";
import { homeFaqs } from "../data/faqs";
import { AIGradientBorder } from "../components/AIGradientBorder";
import DrawOutlineButton from "../components/DrawOutlineButton";
import InvoiceExtractPreview from "../components/InvoiceExtractPreview";
import ExtractoDashboardPreview from "../components/ExtractoDashboardPreview";
import TabletCaptureShowcase from "../components/TabletCaptureShowcase";
import TabletVisionShowcase from "../components/TabletVisionShowcase";
import LiveDetectionDashboard from "../components/LiveDetectionDashboard";
import CognexaInterviewCall from "../components/CognexaInterviewCall";
import CognexaInterviewerPreview from "../components/CognexaInterviewerPreview";
import CognexaInterviewerDashboard from "../components/CognexaInterviewerDashboard";
import ANPRCaptureShowcase from "../components/ANPRCaptureShowcase";
import ANPRLiveDashboard from "../components/ANPRLiveDashboard";
import { reasonsToPartner } from "../data/reasonsToPartner";
import { anprImages } from "../data/anprLanes";

import interviewerHeroImg from "../assets/home/brand-voice.webp";

import invoiceScanImg from "../assets/extracto/invoice-scan.webp";
import analyticsImg from "../assets/home/live/analytics.webp";
import analytics2Img from "../assets/home/live/analytics2.webp";
import rpaImg from "../assets/home/live/rpa.webp";
import partnerAzure from "../assets/home/live/partner-1.png";
import partnerAmp from "../assets/home/live/partner-2.png";
import partnerBash from "../assets/home/live/partner-3.png";
import partnerBot from "../assets/home/live/partner-4.webp";

const partnerLogos = [partnerAzure, partnerAmp, partnerBash, partnerBot];

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
    <li className="group flex items-start gap-3.5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition duration-200 hover:border-[#0E8FFB]/30 hover:shadow-md">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0E8FFB]/10 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-5 w-5 text-[#0E8FFB]" strokeWidth={2} />
      </span>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="mt-0.5 text-sm text-gray-500">{description}</p>
      </div>
    </li>
  );
}

function FeaturePointDark({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}) {
  return (
    <li className="group flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/5 p-4 transition duration-200 hover:border-[#38bdf8]/30 hover:bg-white/10">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0E8FFB]/15 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-5 w-5 text-[#38bdf8]" strokeWidth={2} />
      </span>
      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="mt-0.5 text-sm text-gray-400">{description}</p>
      </div>
    </li>
  );
}

function Home() {
  return (
    <>
      <SEO
        title="Cognexa – AI Automation Solutions"
        description="Cognexa builds AI automation solutions for business: Extracto for invoice data extraction, Vision IQ for computer vision monitoring, Cognexa Agent for real-time voice AI, plus analytics and RPA."
        path="/"
        exactTitle
      />
      {/* Hero */}
      <Hero />

      {/* aiAgent — Extracto: AI-powered invoice extraction */}
      <section id="aiAgent" className="bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="sticky top-16 z-10 mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0E8FFB]/20 bg-white/95 px-5 py-2 text-base font-bold tracking-wide text-[#0E8FFB] uppercase shadow-md backdrop-blur-sm">
              <Receipt className="h-5 w-5" />
              Extracto
            </span>
          </div>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Extracto — AI-powered invoice extraction
            </h2>
            <p className="mt-4 text-gray-500">
              Cognexa's Extracto reads any invoice, PDF, scan, or email
              attachment and turns it into clean, structured data your
              accounting systems can act on instantly.
            </p>
          </Reveal>

          <div className="mt-16 flex flex-wrap items-center gap-14">
            <Reveal className="hover-lift flex-1 basis-100">
              <AIGradientBorder className="rounded-2xl" tone="brand">
                <img
                  src={invoiceScanImg}
                  alt="AI extracting structured data from a scanned invoice"
                  loading="eager"
                  fetchPriority="low"
                  width={1000}
                  height={750}
                  className="rounded-2xl shadow-lg"
                />
              </AIGradientBorder>
            </Reveal>
            <Reveal delay={120} className="flex-1 basis-100">
              <h3 className="text-2xl font-bold text-gray-900">
                Turn any invoice into clean, structured data.
              </h3>
              <p className="mt-3 text-gray-500">
                No two vendors format invoices the same way. Extracto reads
                past the layout differences and pulls out vendor details, line
                items, totals, and tax with no templates or manual mapping
                required.
              </p>
              <ul className="mt-5 space-y-2.5">
                <CheckItem>
                  Works with PDFs, scans, photos, and email attachments
                </CheckItem>
                <CheckItem>
                  Captures vendor, line items, totals, and tax automatically
                </CheckItem>
                <CheckItem>
                  Flags mismatched totals and duplicate invoices
                </CheckItem>
              </ul>
            </Reveal>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-14">
            <Reveal className="order-2 flex-1 basis-100 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900">
                Go live in days with zero manual setup.
              </h3>
              <p className="mt-3 text-gray-500">
                Point Extracto at an inbox or upload folder and it starts
                reading invoices immediately. Sync straight into your
                accounting, ERP, or procurement system with ready-to-use
                integrations.
              </p>
              <ul className="mt-6 space-y-3">
                <FeaturePoint
                  icon={Zap}
                  title="No-code extraction"
                  description="Start processing invoices in minutes, no engineering required."
                />
                <FeaturePoint
                  icon={Plug}
                  title="One-click integrations"
                  description="Sync straight into your accounting, ERP, or procurement system."
                />
                <FeaturePoint
                  icon={ShieldCheck}
                  title="Built-in validation"
                  description="Automatically flags missing PO numbers and total mismatches."
                />
              </ul>
            </Reveal>
            <Reveal
              delay={120}
              className="hover-lift order-1 flex-1 basis-100 md:order-2"
            >
              <InvoiceExtractPreview />
            </Reveal>
          </div>

          <div className="mt-20">
            <TabletCaptureShowcase />
          </div>

          <Reveal delay={100} className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              One dashboard for every gate pass and invoice
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Track inward and outward documents by site, vendor, and status
              as Extracto processes them, no spreadsheets required.
            </p>
          </Reveal>
          <Reveal
            delay={150}
            className="hover-lift mx-auto mt-10 max-w-6xl transition-all duration-500"
          >
            <AIGradientBorder className="rounded-2xl" tone="brand" duration={5}>
              <ExtractoDashboardPreview />
            </AIGradientBorder>
          </Reveal>

          <div className="mt-14 text-center">
            <DrawOutlineButton
              href="/extracto"
              lineClassName="bg-[#0E8FFB]"
              className="rounded-md border border-[#0E8FFB]/30 px-6 py-3 font-semibold text-[#0E8FFB] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0E8FFB]/10"
            >
              Explore Extracto
            </DrawOutlineButton>
          </div>
        </div>
      </section>

      {/* visionIQ — Turn cameras into a 24x7 AI inspector */}
      <section id="visionIQ" className="bg-gray-950 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="sticky top-16 z-10 mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#38bdf8]/20 bg-gray-950/95 px-5 py-2 text-base font-bold tracking-wide text-[#38bdf8] uppercase shadow-md backdrop-blur-sm">
              <ScanEye className="h-5 w-5" />
              Vision IQ
            </span>
          </div>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Turn your cameras into a 24x7 AI inspector
            </h2>
            <p className="mt-4 text-gray-400">
              Vision IQ analyzes video in real time to detect safety risks,
              security threats, and operational issues, and alerts your team
              before incidents become costly problems.
            </p>
          </Reveal>

          <div className="mt-16 flex flex-wrap items-center gap-14">
            <Reveal className="hover-lift flex-1 basis-100">
              <AIGradientBorder className="rounded-2xl" tone="brand">
                <img
                  src="/det1.webp"
                  alt="Vision IQ detecting vehicles and pedestrians on a busy street"
                  loading="eager"
                  fetchPriority="low"
                  width={1000}
                  height={1000}
                  className="rounded-2xl shadow-lg"
                />
              </AIGradientBorder>
            </Reveal>
            <Reveal delay={120} className="flex-1 basis-100">
              <h3 className="text-2xl font-bold text-white">
                Works with the cameras you already have
              </h3>
              <p className="mt-3 text-gray-400">
                No new hardware required. Point Vision IQ at your existing
                CCTV feeds and it starts detecting risks immediately, from
                restricted-zone breaches to safety gear compliance.
              </p>
              <ul className="mt-5 space-y-2.5">
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
            </Reveal>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-14">
            <Reveal className="order-2 flex-1 basis-100 md:order-1">
              <h3 className="text-2xl font-bold text-white">
                From detection to action in seconds
              </h3>
              <p className="mt-3 text-gray-400">
                Every frame is analyzed, scored, and routed automatically, so
                the right person finds out the moment something needs
                attention.
              </p>
              <ul className="mt-6 space-y-3">
                <FeaturePointDark
                  icon={Target}
                  title="50+ detection models"
                  description="From PPE compliance to fire and intrusion, out of the box."
                />
                <FeaturePointDark
                  icon={Bell}
                  title="Instant multi-channel alerts"
                  description="Notify the right team the moment a risk is detected."
                />
                <FeaturePointDark
                  icon={ShieldCheck}
                  title="Risk scoring & prioritization"
                  description="Cuts through noise so teams act on what matters most."
                />
              </ul>
            </Reveal>
            <Reveal
              delay={120}
              className="hover-lift order-1 flex-1 basis-100 md:order-2"
            >
              <AIGradientBorder className="rounded-2xl" tone="brand">
                <img
                  src="/det3.webp"
                  alt="Vision IQ verifying PPE compliance on a work site"
                  loading="eager"
                  fetchPriority="low"
                  width={1000}
                  height={563}
                  className="rounded-2xl shadow-lg"
                />
              </AIGradientBorder>
            </Reveal>
          </div>

          <div className="mt-20">
            <TabletVisionShowcase />
          </div>

          <Reveal delay={100} className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-white">
              Your live monitoring dashboard
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-gray-400">
              Every camera, every detection, every alert, on one screen,
              updating in real time.
            </p>
          </Reveal>
          <Reveal
            delay={150}
            className="hover-lift mx-auto mt-10 max-w-6xl transition-all duration-500"
          >
            <AIGradientBorder className="rounded-2xl" tone="brand" duration={5}>
              <LiveDetectionDashboard />
            </AIGradientBorder>
          </Reveal>

          <div className="mt-14 text-center">
            <DrawOutlineButton
              href="/vision-iq"
              lineClassName="bg-[#38bdf8]"
              className="rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-[#38bdf8] hover:text-[#38bdf8]"
            >
              Explore Vision IQ
            </DrawOutlineButton>
          </div>
        </div>
      </section>

      {/* anpr — Automatic number plate recognition for gates, lanes & toll points */}
      <section id="anpr" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="sticky top-16 z-10 mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0E8FFB]/20 bg-gray-50/95 px-5 py-2 text-base font-bold tracking-wide text-[#0E8FFB] uppercase shadow-md backdrop-blur-sm">
              <Car className="h-5 w-5" />
              ANPR
            </span>
          </div>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Automatic number plate recognition for every gate and lane
            </h2>
            <p className="mt-4 text-gray-500">
              ANPR reads vehicle plates at entry, exit, and toll points in
              real time, matches them against watchlists, and automates
              access decisions before incidents or bottlenecks build up.
            </p>
          </Reveal>

          <div className="mt-16 flex flex-wrap items-center gap-14">
            <Reveal className="hover-lift flex-1 basis-100">
              <AIGradientBorder className="rounded-2xl" tone="brand">
                <img
                  src={anprImages.cameraHW.src}
                  alt={anprImages.cameraHW.alt}
                  loading="eager"
                  fetchPriority="low"
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg transition-transform duration-700 hover:scale-105"
                />
              </AIGradientBorder>
            </Reveal>
            <Reveal delay={120} className="flex-1 basis-100">
              <h3 className="text-2xl font-bold text-gray-900">
                Works with the cameras you already have at the gate
              </h3>
              <p className="mt-3 text-gray-500">
                No new hardware required. Point ANPR at your existing entry,
                exit, or toll lane cameras and it starts reading plates
                immediately, in any light or weather.
              </p>
              <ul className="mt-5 space-y-2.5">
                <CheckItem>Works with your existing lane & toll cameras</CheckItem>
                <CheckItem>Reads plates in low light and bad weather</CheckItem>
                <CheckItem>Matches every plate against watchlists instantly</CheckItem>
              </ul>
            </Reveal>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-14">
            <Reveal className="order-2 flex-1 basis-100 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900">
                From plate read to gate decision in seconds
              </h3>
              <p className="mt-3 text-gray-500">
                Every plate is read, matched, and acted on automatically, so
                barriers open for authorized vehicles and your team is
                alerted the moment a watchlist match comes through.
              </p>
              <ul className="mt-6 space-y-3">
                <FeaturePoint
                  icon={Database}
                  title="Watchlist matching"
                  description="Checks every plate against blacklists and whitelists in real time."
                />
                <FeaturePoint
                  icon={ShieldCheck}
                  title="Automatic barrier control"
                  description="Opens gates for authorized vehicles with no manual check required."
                />
                <FeaturePoint
                  icon={Ticket}
                  title="Visitor pass automation"
                  description="Generates visitor passes and logs entries as vehicles arrive."
                />
              </ul>
            </Reveal>
            <Reveal
              delay={120}
              className="hover-lift order-1 flex-1 basis-100 md:order-2"
            >
              <AIGradientBorder className="rounded-2xl" tone="brand">
                <img
                  src={anprImages.inAction.src}
                  alt={anprImages.inAction.alt}
                  loading="eager"
                  fetchPriority="low"
                  className="block h-auto w-full rounded-2xl object-cover shadow-lg transition-transform duration-700 hover:scale-105"
                />
              </AIGradientBorder>
            </Reveal>
          </div>

          <div className="mt-20 rounded-2xl bg-gray-950 px-4 py-16 sm:px-8">
            <ANPRCaptureShowcase />
          </div>

          <Reveal delay={100} className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Your live gate &amp; lane dashboard
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Every lane, every plate, every decision, on one screen, updating
              in real time.
            </p>
          </Reveal>
          <Reveal
            delay={150}
            className="hover-lift mx-auto mt-10 max-w-6xl transition-all duration-500"
          >
            <AIGradientBorder className="rounded-2xl" tone="brand" duration={5}>
              <ANPRLiveDashboard />
            </AIGradientBorder>
          </Reveal>

          <div className="mt-14 text-center">
            <DrawOutlineButton
              href="/anpr"
              lineClassName="bg-[#0E8FFB]"
              className="rounded-md border border-[#0E8FFB]/30 px-6 py-3 font-semibold text-[#0E8FFB] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0E8FFB]/10"
            >
              Explore ANPR
            </DrawOutlineButton>
          </div>
        </div>
      </section>

      {/* cognexa-agent — voice AI agent for lead gen, meetings, interviews, support & reminders */}
      <section id="cognexa-agent" className="bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="sticky top-16 z-10 mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0E8FFB]/20 bg-white/95 px-5 py-2 text-base font-bold tracking-wide text-[#0E8FFB] uppercase shadow-md backdrop-blur-sm">
              <Bot className="h-5 w-5" />
              Cognexa Agent
            </span>
          </div>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Cognexa Agent — one AI for every conversation your business has
            </h2>
            <p className="mt-4 text-gray-500">
              A real-time voice AI that talks like a real person, not a
              script. It generates and qualifies leads, arranges meetings,
              supports customers, runs interviews, and follows up on
              enquiries and reminders, all from one platform.
            </p>
          </Reveal>

          <ul className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
            {agentCapabilities.map((cap, i) => (
              <Reveal
                key={cap.title}
                as="li"
                delay={i * 80}
                className="group rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#0E8FFB]/30 hover:shadow-lg"
              >
                <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0E8FFB]/10 transition-transform duration-300 group-hover:scale-110">
                  <cap.icon className="h-6 w-6 text-[#0E8FFB]" strokeWidth={1.5} />
                </span>
                <h3 className="font-semibold text-gray-900">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {cap.description}
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={100} className="mx-auto mt-20 max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
              A closer look
            </span>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">
              One capability in detail: real-time interviews
            </h3>
            <p className="mt-3 text-gray-500">
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

          <Reveal delay={100} className="mx-auto mt-20 max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Watch a real-time interview in progress
            </h3>
            <p className="mt-3 text-gray-500">
              This is what a live conversation with Cognexa Interviewer looks
              like, questions, answers, and scheduling, all in real time.
            </p>
          </Reveal>
          <Reveal
            delay={150}
            className="hover-lift mx-auto mt-10 max-w-4xl transition-all duration-500"
          >
            <AIGradientBorder className="rounded-2xl" tone="brand" duration={5}>
              <CognexaInterviewCall />
            </AIGradientBorder>
          </Reveal>

          <Reveal delay={100} className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              One dashboard for every candidate
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
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

          <div className="mt-14 text-center">
            <DrawOutlineButton
              href="/cognexa-agent"
              lineClassName="bg-[#0E8FFB]"
              className="rounded-md border border-[#0E8FFB]/30 px-6 py-3 font-semibold text-[#0E8FFB] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0E8FFB]/10"
            >
              Explore Cognexa Agent
            </DrawOutlineButton>
          </div>
        </div>
      </section>

      {/* Partners marquee */}
      <Reveal as="section" className="bg-gray-950 py-14">
        <h2 className="text-center text-2xl font-bold tracking-wide text-white uppercase">
          Our Associated Partners
        </h2>
        <div className="mt-10 overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-14">
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div
                key={i}
                className="hover-lift flex h-28 w-56 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white p-3 shadow-md"
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

      {/* dashboardID — Real-time, data-driven AI analytics */}
      <section id="dashboardID" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="sticky top-16 z-10 mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0E8FFB]/20 bg-gray-50/95 px-5 py-2 text-base font-bold tracking-wide text-[#0E8FFB] uppercase shadow-md backdrop-blur-sm">
              <BarChart3 className="h-5 w-5" />
              AI Analytics
            </span>
          </div>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Real-time, data-driven AI analytics
            </h2>
          </Reveal>

          <div className="mt-8 flex flex-wrap items-center gap-14">
            <Reveal className="hover-lift flex-1 basis-100">
              <AIGradientBorder className="rounded-2xl" tone="brand">
                <img
                  src={analyticsImg}
                  alt="Real-time, data-driven AI analytics for enterprises"
                  loading="eager"
                  fetchPriority="low"
                  width={939}
                  height={593}
                  className="rounded-2xl shadow-lg"
                />
              </AIGradientBorder>
            </Reveal>
            <Reveal delay={120} className="flex-1 basis-100">
              <h3 className="text-2xl font-bold text-gray-900">
                Built for enterprise-scale decision making
              </h3>
              <p className="mt-3 text-gray-500">
                Derive valuable customer insights from essential conversational
                AI metrics such as deflection rate, goal completion rate (GCR),
                CSAT, first response time (FRT) and more with our customer
                service platform.
              </p>
              <ul className="mt-5 space-y-2.5">
                <CheckItem>
                  Live dashboards updated as conversations happen
                </CheckItem>
                <CheckItem>
                  Track deflection rate, GCR, CSAT, and FRT in one place
                </CheckItem>
                <CheckItem>
                  Spot trends early and act before they become issues
                </CheckItem>
              </ul>
            </Reveal>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-14">
            <Reveal className="order-2 flex-1 basis-100 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900">
                Turn every conversation into an insight
              </h3>
              <p className="mt-3 text-gray-500">
                Drill into individual agent and channel performance, benchmark
                results over time, and export reports your whole team can act
                on, no separate BI tools required.
              </p>
              <ul className="mt-5 space-y-2.5">
                <CheckItem>
                  Agent and channel-level performance breakdowns
                </CheckItem>
                <CheckItem>Custom reports, exportable in a click</CheckItem>
                <CheckItem>
                  Historical trends to guide long-term strategy
                </CheckItem>
              </ul>
            </Reveal>
            <Reveal
              delay={120}
              className="hover-lift order-1 flex-1 basis-100 md:order-2"
            >
              <AIGradientBorder className="rounded-2xl" tone="brand">
                <img
                  src={analytics2Img}
                  alt="Turn every conversation into an insight"
                  loading="eager"
                  fetchPriority="low"
                  width={768}
                  height={432}
                  className="rounded-2xl shadow-lg"
                />
              </AIGradientBorder>
            </Reveal>
          </div>
        </div>
      </section>

      {/* rpaCard — Robotic Process Automation Features */}
      <section id="rpaCard" className="bg-white py-20 text-center">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="sticky top-16 z-10 mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0E8FFB]/20 bg-white/95 px-5 py-2 text-base font-bold tracking-wide text-[#0E8FFB] uppercase shadow-md backdrop-blur-sm">
              <Zap className="h-5 w-5" />
              Automation
            </span>
          </div>
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-3xl font-bold text-gray-900 sm:text-4xl">
              Robotic Process Automation Features
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Free your team from repetitive manual work. Cognexa's RPA bots
              handle rule-based, high-volume tasks around the clock, so your
              people can focus on the work that actually needs them.
            </p>
            <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-2.5 text-left">
              <CheckItem>
                Runs 24/7 with no manual intervention required
              </CheckItem>
              <CheckItem>
                Handles high-volume, rule-based workflows accurately
              </CheckItem>
              <CheckItem>
                Frees your team to focus on higher-value work
              </CheckItem>
            </ul>
          </Reveal>

          <Reveal
            delay={150}
            className="rpa-diagram mx-auto mt-12 max-w-6xl transition-all duration-500 hover:-translate-y-1"
          >
            <AIGradientBorder className="rounded-2xl" tone="brand" duration={5}>
              <div className="rounded-2xl bg-white p-4 shadow-lg sm:p-6">
                <img
                  src={rpaImg}
                  alt="Robotic Process Automation Features"
                  loading="eager"
                  fetchPriority="low"
                  width={1000}
                  height={341}
                  className="mx-auto rounded-xl transition-transform duration-500"
                />
              </div>
            </AIGradientBorder>
          </Reveal>
        </div>
      </section>

      {/* Reasons to partner */}
      <section id="why" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-5 py-2 text-base font-bold tracking-wide text-[#0E8FFB] uppercase">
              Why choose us
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Reasons to Partner With Us
            </h2>
          </Reveal>

          <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasonsToPartner.map(({ title, description, icon: Icon }, i) => (
              <Reveal
                key={title}
                as="li"
                delay={i * 80}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#0E8FFB]/30 hover:shadow-lg"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0E8FFB]/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-[#0E8FFB]" strokeWidth={1.5} />
                </span>
                <h3 className="mb-2 font-semibold text-gray-900">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {description}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-5 py-2 text-base font-bold tracking-wide text-[#0E8FFB] uppercase">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-12">
            <FAQAccordion faqs={homeFaqs} />
          </Reveal>
        </div>
      </section>

      {/* Contact CTA */}
      <Reveal as="section" id="contact" className="py-20 text-center">
        <div className="mx-auto max-w-[1400px] px-5">
          <h3 className="text-lg font-semibold text-[#0E8FFB]">
            Let's get started
          </h3>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-gray-900 sm:text-4xl">
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

export default Home;
