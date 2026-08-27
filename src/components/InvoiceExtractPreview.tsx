import { useEffect, useState } from "react";
import {
  Building2,
  Calendar,
  CheckCircle2,
  Hash,
  Radio,
  Receipt,
  Wallet,
  Wifi,
} from "lucide-react";
import CountUp from "./CountUp";

interface Field {
  icon: typeof Building2;
  label: string;
  value: string;
  top: string;
}

const fields: Field[] = [
  { icon: Building2, label: "Vendor", value: "Nimbus Supplies Pvt Ltd", top: "6px" },
  { icon: Hash, label: "Invoice #", value: "INV-88231", top: "50px" },
  { icon: Calendar, label: "Date", value: "12 Jul 2026", top: "94px" },
  { icon: Wallet, label: "Total", value: "$12,480.00", top: "150px" },
];

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function InvoiceExtractPreview() {
  const now = useClock();
  const clock = now.toLocaleTimeString("en-GB");

  return (
    <div className="overflow-hidden rounded-2xl bg-gray-950 text-left shadow-2xl">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-bold tracking-widest text-white uppercase">
            Extracto <span className="text-[#38bdf8]">Live</span>
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="hidden items-center gap-1.5 sm:flex">
            <Wifi className="h-3.5 w-3.5 text-emerald-400" />
            PDF · scan · email
          </span>
          <span className="hidden items-center gap-1.5 sm:flex">
            <Radio className="h-3.5 w-3.5 text-[#38bdf8]" />
            AI engine active
          </span>
          <span className="font-mono tabular-nums">{clock}</span>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1fr_220px]">
        {/* Mock invoice being scanned */}
        <div className="p-4 sm:p-6">
          <div className="dash-feed relative overflow-hidden rounded-xl border border-white/10 bg-white p-5">
            <div className="dash-scanline pointer-events-none absolute inset-x-0" />

            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <span className="flex items-center gap-1.5 font-mono text-xs font-bold tracking-widest text-gray-400 uppercase">
                <Receipt className="h-3.5 w-3.5" />
                Invoice
              </span>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 uppercase">
                Extracted
              </span>
            </div>

            <div className="relative mt-4 h-[190px]">
              <div className="space-y-3">
                <div className="h-2 w-3/5 rounded bg-gray-100" />
                <div className="h-2 w-2/5 rounded bg-gray-100" />
                <div className="h-2 w-4/5 rounded bg-gray-100" />
                <div className="h-2 w-1/2 rounded bg-gray-100" />
                <div className="h-2 w-3/4 rounded bg-gray-100" />
              </div>

              {/* extracted field chips, positioned over the faded lines */}
              {fields.map((field) => (
                <div
                  key={field.label}
                  className="absolute left-0 flex -translate-y-1/2 items-center gap-1.5 rounded-full border border-[#0E8FFB]/30 bg-[#0E8FFB]/10 py-1 pr-2.5 pl-1.5 shadow-sm"
                  style={{ top: field.top }}
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0E8FFB] text-white">
                    <field.icon className="h-3 w-3" />
                  </span>
                  <span className="text-[10px] font-semibold text-gray-500 uppercase">
                    {field.label}
                  </span>
                  <span className="text-xs font-bold text-gray-900">
                    {field.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live stats */}
        <div className="border-t border-white/10 p-4 sm:p-6 lg:border-t-0 lg:border-l">
          <h4 className="mb-3 text-xs font-bold tracking-widest text-gray-400 uppercase">
            This extraction
          </h4>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-xl font-bold text-white">
                <CountUp value="18" />
              </div>
              <div className="text-[10px] text-gray-400">fields extracted</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-xl font-bold text-[#38bdf8]">
                <CountUp value="1.4s" />
              </div>
              <div className="text-[10px] text-gray-400">processing time</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-xl font-bold text-emerald-400">
                <CountUp value="99.2%" />
              </div>
              <div className="text-[10px] text-gray-400">field accuracy</div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
              <span className="text-xs text-gray-300">
                Synced to accounting system
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceExtractPreview;
