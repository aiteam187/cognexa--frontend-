import { Zap, Plug, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import { AIGradientBorder } from "./AIGradientBorder";
import InvoiceExtractPreview from "./InvoiceExtractPreview";
import ExtractoDashboardPreview from "./ExtractoDashboardPreview";
import TabletCaptureShowcase from "./TabletCaptureShowcase";
import invoiceScanImg from "../assets/extracto/invoice-scan.jpg";

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

/**
 * Shared "Extracto" showcase used on both case study pages. Kept as one
 * component since CaseStudy and CaseStudyDetail rendered this block
 * identically.
 */
function ExtractoSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1400px] px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
            Extracto
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Enhance Back-Office Efficiency with Extracto
          </h2>
          <p className="mt-4 text-gray-500">
            Cognexa's invoice extraction engine reads any invoice format and
            turns it into clean, structured data your systems can act on
            instantly.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-wrap items-center gap-14">
          <Reveal className="hover-lift flex-1 basis-100">
            <AIGradientBorder className="rounded-2xl" tone="brand">
              <img
                src={invoiceScanImg}
                alt="AI extracting structured data from a scanned invoice"
                className="rounded-2xl shadow-lg"
              />
            </AIGradientBorder>
          </Reveal>
          <Reveal delay={120} className="flex-1 basis-100">
            <h4 className="text-2xl font-bold text-gray-900">
              Turn scanned invoices into clean, structured data
            </h4>
            <p className="mt-3 text-gray-500">
              Extracto reads PDFs, scans, photos, and email attachments alike,
              pulling out vendor details, line items, totals, and tax with no
              templates or manual mapping required.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-14">
          <Reveal className="order-2 flex-1 basis-100 md:order-1">
            <h4 className="text-2xl font-bold text-gray-900">
              Go live in days with zero manual setup
            </h4>
            <p className="mt-3 text-gray-500">
              Connect Extracto to your accounting or ERP system and start
              processing invoices immediately, no training data or engineering
              effort needed.
            </p>
            <ul className="mt-6 space-y-3">
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
              <FeaturePoint
                icon={ShieldCheck}
                title="Built-in validation"
                description="Flags mismatched totals, duplicate invoices, and missing PO numbers automatically."
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
            Track inward and outward documents by site, vendor, and status as
            Extracto processes them, no spreadsheets required.
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
      </div>
    </section>
  );
}

export default ExtractoSection;
