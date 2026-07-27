import { useEffect, useState } from "react";
import { Captions, Gauge, Mic, PhoneOff, User, Video } from "lucide-react";
import CountUp from "./CountUp";

const transcript = [
  { speaker: "ai", text: "Tell me about a time you optimized a slow database query." },
  { speaker: "candidate", text: "We had a report that took 40 seconds. I added a composite index and it dropped to under 2 seconds." },
  { speaker: "ai", text: "Nice. Walk me through how you decided which columns to index." },
];

function useDuration() {
  const [seconds, setSeconds] = useState(494);
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function WaveBars({ active }: { active: boolean }) {
  const heights = [40, 70, 100, 60, 85, 45, 75];
  return (
    <div className="flex h-8 items-center gap-1">
      {heights.map((h, i) => (
        <span
          key={i}
          className={`w-1 rounded-full bg-[#38bdf8] ${active ? "animate-pulse" : ""}`}
          style={{
            height: `${active ? h : 20}%`,
            animationDelay: `${i * 0.12}s`,
            opacity: active ? 1 : 0.3,
          }}
        />
      ))}
    </div>
  );
}

function CognexaInterviewCall() {
  const duration = useDuration();

  return (
    <div className="overflow-hidden rounded-2xl bg-gray-950 text-left shadow-2xl">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
          </span>
          <span className="text-sm font-bold tracking-widest text-white uppercase">
            Live Interview
          </span>
          <span className="hidden rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-gray-300 sm:inline-block">
            Backend Engineer · Round 1
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
          <span>{duration}</span>
        </div>
      </div>

      {/* Video tiles */}
      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:p-6">
        <div className="relative flex aspect-video flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#0c2340] to-gray-950">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0E8FFB]/20 ring-2 ring-[#0E8FFB]/50">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#0E8FFB]" />
          </div>
          <div className="mt-3">
            <WaveBars active />
          </div>
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded bg-gray-950/70 px-2 py-1">
            <span className="text-[10px] font-semibold text-white">
              Cognexa Interviewer
            </span>
          </div>
          <span className="absolute top-2 right-2 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-semibold text-emerald-400">
            Speaking
          </span>
        </div>

        <div className="relative flex aspect-video flex-col items-center justify-center overflow-hidden rounded-xl bg-gray-900">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
            <User className="h-8 w-8 text-gray-400" />
          </div>
          <div className="mt-3">
            <WaveBars active={false} />
          </div>
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded bg-gray-950/70 px-2 py-1">
            <span className="text-[10px] font-semibold text-white">
              Candidate
            </span>
          </div>
          <span className="absolute top-2 right-2 rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold text-gray-300">
            Listening
          </span>
        </div>
      </div>

      {/* Live transcript */}
      <div className="mx-4 mb-4 rounded-xl border border-white/10 bg-white/5 p-3 sm:mx-6 sm:mb-6">
        <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
          <Captions className="h-3.5 w-3.5" />
          Live transcript
        </p>
        <div className="space-y-1.5">
          {transcript.map((line, i) => (
            <p key={i} className="text-xs leading-relaxed">
              <span
                className={
                  line.speaker === "ai"
                    ? "font-semibold text-[#38bdf8]"
                    : "font-semibold text-gray-300"
                }
              >
                {line.speaker === "ai" ? "Cognexa Interviewer" : "Candidate"}:
              </span>{" "}
              <span className="text-gray-300">{line.text}</span>
            </p>
          ))}
        </div>
      </div>

      {/* Stats + controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-5 py-4">
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <Gauge className="h-3.5 w-3.5 text-emerald-400" />
            Confidence <CountUp value="88%" className="font-semibold text-emerald-400" />
          </span>
          <span>
            <CountUp value="7" className="font-semibold text-white" /> questions asked
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gray-300">
            <Mic className="h-4 w-4" />
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gray-300">
            <Video className="h-4 w-4" />
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/90 text-white">
            <PhoneOff className="h-4 w-4" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default CognexaInterviewCall;
