import { useEffect, useState } from "react";
import { CalendarCheck, Mic, Radio, Sparkles, Wifi } from "lucide-react";
import CountUp from "./CountUp";

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function CognexaInterviewerPreview() {
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
            Cognexa Interviewer <span className="text-[#38bdf8]">Live</span>
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="hidden items-center gap-1.5 sm:flex">
            <Wifi className="h-3.5 w-3.5 text-emerald-400" />
            Voice · Calendar sync
          </span>
          <span className="hidden items-center gap-1.5 sm:flex">
            <Radio className="h-3.5 w-3.5 text-[#38bdf8]" />
            AI engine active
          </span>
          <span className="font-mono tabular-nums">{clock}</span>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1fr_220px]">
        {/* Live transcript */}
        <div className="p-4 sm:p-6">
          <div className="space-y-2.5">
            <div className="flex items-start gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Mic className="h-3.5 w-3.5 text-[#38bdf8]" />
              </span>
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/10 px-3.5 py-2 text-xs text-gray-200">
                Could you walk me through your experience with distributed
                systems?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#0E8FFB] px-3.5 py-2 text-xs text-white">
                I led the migration of our monolith to microservices at my
                last company...
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Mic className="h-3.5 w-3.5 text-[#38bdf8]" />
              </span>
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/10 px-3.5 py-2 text-xs text-gray-200">
                <span className="flex items-center gap-1 font-mono text-[10px] text-emerald-400">
                  <CalendarCheck className="h-3 w-3" />
                  Interview scheduled for Thu, 2:00 PM
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-gray-500">
            <Sparkles className="h-3.5 w-3.5 text-[#38bdf8]" />
            <span className="flex-1">Live voice conversation, transcribed in real time</span>
          </div>
        </div>

        {/* Live stats */}
        <div className="border-t border-white/10 p-4 sm:p-6 lg:border-t-0 lg:border-l">
          <h4 className="mb-3 text-xs font-bold tracking-widest text-gray-400 uppercase">
            Today
          </h4>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-xl font-bold text-white">
                <CountUp value="128" />
              </div>
              <div className="text-[10px] text-gray-400">
                candidates interviewed
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-xl font-bold text-[#38bdf8]">
                <CountUp value="46" />
              </div>
              <div className="text-[10px] text-gray-400">
                interviews scheduled
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-xl font-bold text-emerald-400">
                <CountUp value="3x" />
              </div>
              <div className="text-[10px] text-gray-400">faster hiring</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-xl font-bold text-amber-400">
                <CountUp value="24x7" />
              </div>
              <div className="text-[10px] text-gray-400">availability</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CognexaInterviewerPreview;
