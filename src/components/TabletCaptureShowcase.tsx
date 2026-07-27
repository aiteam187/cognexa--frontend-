import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Download,
  Printer,
  Share2,
  Sparkles,
} from "lucide-react";
import Reveal from "./Reveal";

const lineItems = [
  { desc: "Cement Bags (50kg)", qty: "40", price: "$8.00", total: "$320.00" },
  { desc: "Steel Rods (12mm)", qty: "25", price: "$14.00", total: "$350.00" },
  { desc: "Site Delivery Charges", qty: "1", price: "$60.00", total: "$60.00" },
];

function Confidence({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <span className="ml-1.5 inline-block rounded-full bg-emerald-100 px-1.5 py-0.5 text-[9px] font-bold text-emerald-700">
      100%
    </span>
  );
}

function InvoiceDoc({ extracted }: { extracted: boolean }) {
  return (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-[1.4rem] bg-gray-900 p-2 shadow-2xl transition-shadow duration-500 ${
        extracted ? "shadow-[0_0_50px_-12px_rgba(16,185,129,0.45)]" : ""
      }`}
    >
      {/* camera notch */}
      <div className="mx-auto mb-1.5 h-1 w-10 shrink-0 rounded-full bg-gray-700" />

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl bg-white">
        {/* toolbar */}
        <div className="flex shrink-0 items-center justify-between gap-2 border-b border-gray-100 bg-gray-50 px-3 py-2">
          <ArrowLeft className="h-3.5 w-3.5 shrink-0 text-gray-400" />
          <span className="truncate text-[10px] font-semibold text-gray-500">
            Invoice View
          </span>
          <div className="flex shrink-0 items-center gap-2 text-gray-400">
            <Download className="h-3.5 w-3.5" />
            <Printer className="h-3.5 w-3.5" />
            <Share2 className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* tabs */}
        <div className="flex shrink-0 gap-4 border-b border-gray-100 px-3 pt-2 text-[10px] font-semibold">
          <span
            className={
              extracted
                ? "pb-2 text-gray-400"
                : "border-b-2 border-[#0E8FFB] pb-2 text-[#0E8FFB]"
            }
          >
            PDF View
          </span>
          <span
            className={
              extracted
                ? "border-b-2 border-[#0E8FFB] pb-2 text-[#0E8FFB]"
                : "pb-2 text-gray-400"
            }
          >
            Data Extraction
          </span>
        </div>

        {/* invoice body */}
        <div className="flex-1 overflow-hidden p-3">
          <div className="flex items-start justify-between">
            <span className="flex items-center gap-1.5 text-[11px] font-extrabold text-gray-900">
              <span className="flex h-4 w-4 items-center justify-center rounded bg-[#0E8FFB] text-[8px] font-black text-white">
                C
              </span>
              Cognexa
            </span>
            <span className="text-sm font-extrabold tracking-wide text-gray-900">
              INVOICE
            </span>
          </div>

          <div className="mt-2 flex items-start justify-between text-[9px] text-gray-500">
            <div>
              <p className="font-semibold text-gray-700">Bill to</p>
              <p>Project Site C</p>
              <p>Procurement Team</p>
            </div>
            <div className="text-right">
              <p>
                Invoice #<Confidence show={extracted} />
                <span className="ml-1 font-semibold text-gray-700">75</span>
              </p>
              <p>
                Date<Confidence show={extracted} />
                <span className="ml-1 font-semibold text-gray-700">
                  25 Jul 2026
                </span>
              </p>
            </div>
          </div>

          <div className="mt-2.5 rounded-md border border-gray-100">
            <div className="grid grid-cols-[1fr_28px_44px_50px] gap-1 border-b border-gray-100 bg-gray-50 px-2 py-1 text-[8px] font-bold tracking-wide text-gray-400 uppercase">
              <span>Item</span>
              <span className="text-right">Qty</span>
              <span className="text-right">Price</span>
              <span className="text-right">Total</span>
            </div>
            {lineItems.map((item) => (
              <div
                key={item.desc}
                className="grid grid-cols-[1fr_28px_44px_50px] gap-1 border-b border-gray-50 px-2 py-1.5 text-[9px] text-gray-600 last:border-0"
              >
                <span className="truncate">
                  {item.desc}
                  <Confidence show={extracted} />
                </span>
                <span className="text-right">{item.qty}</span>
                <span className="text-right">{item.price}</span>
                <span className="text-right font-semibold text-gray-800">
                  {item.total}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-2 flex justify-end">
            <div className="w-28 space-y-0.5 text-[9px] text-gray-500">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$730.00</span>
              </div>
              <div className="flex justify-between">
                <span>
                  GST 18%
                  <Confidence show={extracted} />
                </span>
                <span>$131.40</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-0.5 text-[10px] font-bold text-gray-900">
                <span>Total</span>
                <span>$861.40</span>
              </div>
            </div>
          </div>

          {extracted ? (
            <div className="mt-2.5 space-y-1.5 rounded-lg bg-emerald-50 p-2">
              <p className="flex items-center gap-1 text-[9px] font-semibold text-emerald-700">
                <CheckCircle2 className="h-3 w-3 shrink-0" />
                All fields extracted successfully
              </p>
              <p className="flex items-center gap-1 text-[9px] font-semibold text-emerald-700">
                <CheckCircle2 className="h-3 w-3 shrink-0" />
                Signature verified &amp; synced to ERP
              </p>
            </div>
          ) : (
            <div className="mt-3 flex justify-end">
              <span className="font-serif text-base text-gray-400 italic">
                Signature
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TabletCaptureShowcase() {
  return (
    <div>
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-[#0E8FFB]/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0E8FFB] uppercase">
          Tablet mode
        </span>
        <h3 className="mt-4 text-2xl font-bold text-gray-900">
          From capture to extraction, on any device
        </h3>
        <p className="mt-3 text-gray-500">
          Snap or upload an invoice from a tablet at the gate, and watch
          Extracto turn it into verified, structured data in seconds.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-6">
        <Reveal className="hover-lift w-full max-w-[300px]">
          <div className="mb-3 text-center">
            <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
              1. Capture invoice
            </span>
          </div>
          <div className="h-[480px]">
            <InvoiceDoc extracted={false} />
          </div>
        </Reveal>

        <ArrowRight className="hidden h-6 w-6 shrink-0 text-[#0E8FFB]/40 sm:block" />

        <Reveal delay={120} className="hover-lift w-full max-w-[300px]">
          <div className="mb-3 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
              <Sparkles className="h-3.5 w-3.5" />
              2. Extracted &amp; 100% verified
            </span>
          </div>
          <div className="h-[480px]">
            <InvoiceDoc extracted={true} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default TabletCaptureShowcase;
