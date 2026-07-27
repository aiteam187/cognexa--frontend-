import {
  Bell,
  Check,
  FileText,
  Plug,
  ScanLine,
  ShieldCheck,
  UploadCloud,
  Zap,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { AIGradientBorder } from "../components/AIGradientBorder";
import DrawOutlineButton from "../components/DrawOutlineButton";
import InvoiceExtractPreview from "../components/InvoiceExtractPreview";
import ExtractoDashboardPreview from "../components/ExtractoDashboardPreview";
import TabletCaptureShowcase from "../components/TabletCaptureShowcase";
import CountUp from "../components/CountUp";
import invoiceScanImg from "../assets/extracto/invoice-scan.webp";

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
  { value: "Any", label: "invoice format" },
  { value: "99%+", label: "extraction accuracy" },
  { value: "Days", label: "to go live" },
  { value: "Zero", label: "templates required" },
];

const pipeline = [
  {
    icon: UploadCloud,
    title: "Capture",
    description: "PDFs, scans, photos & email attachments",
  },
  {
    icon: ScanLine,
    title: "AI Extraction",
    description: "Reads any layout, no templates",
  },
  {
    icon: ShieldCheck,
    title: "Validation",
    description: "Flags mismatches & duplicates",
  },
  {
    icon: Plug,
    title: "Sync",
    description: "Pushes to ERP & accounting systems",
  },
  {
    icon: Bell,
    title: "Track",
    description: "One dashboard for every document",
  },
];

function Extracto() {
  return (
    <>
      {/* Hero — dark, product-focused */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-950/30" />

        <div className="relative mx-auto flex max-w-[1400px] flex-wrap items-center gap-14 px-5 py-24 sm:py-28">
          <div className="hero-heading flex-1 basis-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0E8FFB]/15 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#38bdf8] uppercase">
              <FileText className="h-4 w-4" />
              Document AI
            </span>
            <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
              Extracto
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-300">
              Cognexa's Extracto reads any invoice, PDF, scan, or email
              attachment and turns it into clean, structured data your
              accounting systems can act on instantly, no templates, no
              manual mapping.
            </p>
            <ul className="mt-6 space-y-2.5">
              <li className="flex items-start gap-2 text-gray-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" />
                <span>Works with PDFs, scans, photos, and email attachments</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" />
                <span>Captures vendor, line items, totals, and tax automatically</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" />
                <span>Flags mismatched totals and duplicate invoices</span>
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
                  src={invoiceScanImg}
                  alt="AI extracting structured data from a scanned invoice"
                  fetchPriority="high"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent p-5 pt-12">
                  <p className="text-sm font-semibold tracking-wide text-white uppercase">
                    Any Format In. Clean Data Out. Instantly.
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

      {/* Tablet mode — physical capture to structured data */}
      <section className="bg-gray-950 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <TabletCaptureShowcase />
        </div>
      </section>

      {/* Live extraction preview */}
      <section className="border-t border-white/5 bg-gray-950 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/15 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#38bdf8] uppercase">
              Command center
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Watch an invoice get extracted, live
            </h2>
            <p className="mt-4 text-gray-400">
              Every field, mapped as it's read: vendor, line items, totals,
              and tax, no manual entry required.
            </p>
          </Reveal>

          <Reveal delay={150} className="mx-auto mt-12 max-w-3xl">
            <AIGradientBorder className="rounded-2xl" tone="brand" duration={5}>
              <InvoiceExtractPreview />
            </AIGradientBorder>
          </Reveal>

          <div className="mt-14 text-center">
            <DrawOutlineButton
              href="/contacts"
              lineClassName="bg-[#38bdf8]"
              className="rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-[#38bdf8] hover:text-[#38bdf8]"
            >
              Book a demo
            </DrawOutlineButton>
          </div>
        </div>
      </section>

      {/* Dashboard — one view for every document */}
      <section className="bg-gray-50/60 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
              In action
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              One dashboard for every gate pass and invoice
            </h2>
            <p className="mt-4 text-gray-500">
              Track inward and outward documents by site, vendor, and status
              as Extracto processes them, no spreadsheets required.
            </p>
          </Reveal>

          <Reveal
            delay={150}
            className="hover-lift mx-auto mt-12 max-w-6xl transition-all duration-500"
          >
            <AIGradientBorder className="rounded-2xl" tone="brand" duration={5}>
              <ExtractoDashboardPreview />
            </AIGradientBorder>
          </Reveal>
        </div>
      </section>

      {/* Pipeline — 5 steps at a glance */}
      <section id="how-it-works" className="bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
              The pipeline
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Five steps, fully automatic
            </h2>
            <p className="mt-4 text-gray-500">
              Every document flows through the same continuous loop, from
              capture to dashboard, with no manual data entry.
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

      {/* Extract & Validate */}
      <section className="bg-gray-50/60 py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
              Beyond extraction
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Reading the document is only the beginning
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Reveal className="hover-lift rounded-2xl border border-gray-100 bg-white p-8 transition duration-200 hover:border-emerald-500/30 hover:shadow-lg sm:p-10">
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10">
                <ShieldCheck className="h-7 w-7 text-emerald-600" strokeWidth={1.5} />
              </span>
              <span className="inline-block rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-emerald-600 uppercase">
                Validate
              </span>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                Catch errors before they hit your books
              </h3>
              <ul className="mt-5 space-y-2.5">
                <CheckItem>Mismatched totals & tax calculations</CheckItem>
                <CheckItem>Duplicate invoice detection</CheckItem>
                <CheckItem>Missing PO number flags</CheckItem>
                <CheckItem>Vendor & line-item cross-checks</CheckItem>
              </ul>
            </Reveal>

            <Reveal
              delay={120}
              className="hover-lift rounded-2xl border border-gray-100 bg-white p-8 transition duration-200 hover:border-[#0E8FFB]/30 hover:shadow-lg sm:p-10"
            >
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0E8FFB]/10">
                <Zap className="h-7 w-7 text-[#0E8FFB]" strokeWidth={1.5} />
              </span>
              <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
                Sync
              </span>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                Go live in days with zero manual setup
              </h3>
              <ul className="mt-5 space-y-3">
                <FeaturePoint
                  icon={Zap}
                  title="No-code extraction"
                  description="Point Extracto at an inbox or upload folder and it starts reading invoices right away."
                />
                <FeaturePoint
                  icon={Plug}
                  title="One-click integrations"
                  description="Sync straight into your accounting, ERP, or procurement system."
                />
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tagline banner */}
      <Reveal as="section" className="bg-[#0E8FFB] py-14 text-center">
        <div className="mx-auto max-w-[1400px] px-5">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Any Format In. Clean Data Out. Instantly.
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
            Stop keying in invoices by hand
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

export default Extracto;
