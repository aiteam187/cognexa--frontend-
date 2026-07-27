import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Download,
  ScanEye,
  Share2,
} from "lucide-react";
import Reveal from "./Reveal";

function CameraFeed({ analyzed }: { analyzed: boolean }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[1.4rem] bg-gray-900 p-2 shadow-2xl">
      {/* camera notch */}
      <div className="mx-auto mb-1.5 h-1 w-10 shrink-0 rounded-full bg-gray-700" />

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl bg-gray-950">
        {/* toolbar */}
        <div className="flex shrink-0 items-center justify-between gap-2 border-b border-white/10 bg-gray-900 px-3 py-2">
          <ArrowLeft className="h-3.5 w-3.5 shrink-0 text-gray-400" />
          <span className="truncate text-[10px] font-semibold text-gray-300">
            Camera View
          </span>
          <div className="flex shrink-0 items-center gap-2 text-gray-400">
            <Download className="h-3.5 w-3.5" />
            <Share2 className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* tabs */}
        <div className="flex shrink-0 gap-4 border-b border-white/10 px-3 pt-2 text-[10px] font-semibold">
          <span
            className={
              analyzed
                ? "pb-2 text-gray-500"
                : "border-b-2 border-[#38bdf8] pb-2 text-[#38bdf8]"
            }
          >
            Live Feed
          </span>
          <span
            className={
              analyzed
                ? "border-b-2 border-[#38bdf8] pb-2 text-[#38bdf8]"
                : "pb-2 text-gray-500"
            }
          >
            AI Analysis
          </span>
        </div>

        {/* feed */}
        <div className="p-3">
          <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-800">
            <img
              src="/det3.webp"
              alt="Worker on an assembly line viewed through a site camera"
              loading="eager"
              fetchPriority="low"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute top-2 left-2 flex items-center gap-1.5 rounded bg-gray-950/70 px-2 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              <span className="font-mono text-[9px] font-semibold text-white">
                CAM 03
              </span>
            </div>
            <div className="absolute bottom-2 left-2 rounded bg-gray-950/70 px-2 py-1 font-mono text-[9px] text-gray-300">
              Assembly Line A
            </div>

            {analyzed && (
              <div
                className="absolute border-2 border-amber-400"
                style={{ top: "8%", left: "42%", width: "22%", height: "30%" }}
              >
                <span className="absolute -top-5 left-0 rounded-sm bg-gray-950/85 px-1.5 py-0.5 font-mono text-[9px] whitespace-nowrap text-amber-300">
                  no goggles 96%
                </span>
              </div>
            )}
          </div>

          {analyzed ? (
            <div className="mt-3 space-y-1.5 rounded-lg bg-white/5 p-2.5">
              <p className="flex items-center gap-1 text-[9px] font-semibold text-amber-400">
                <AlertTriangle className="h-3 w-3 shrink-0" />
                PPE non-compliance detected: goggles missing
              </p>
              <p className="flex items-center gap-1 text-[9px] font-semibold text-emerald-400">
                <CheckCircle2 className="h-3 w-3 shrink-0" />
                Alert sent to site safety team
              </p>
            </div>
          ) : (
            <div className="mt-3 flex items-center justify-between px-0.5 text-[9px] text-gray-500">
              <span>Scanning for risks...</span>
              <span className="font-mono">30 fps</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TabletVisionShowcase() {
  return (
    <div>
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#0E8FFB]/15 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#38bdf8] uppercase">
          <ScanEye className="h-4 w-4" />
          Live detection
        </span>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          From camera feed to actionable alert, instantly
        </h2>
        <p className="mt-4 text-gray-400">
          Any existing camera becomes a 24x7 inspector. Vision IQ watches the
          feed and flags what matters the moment it happens.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-6">
        <Reveal className="hover-lift w-full max-w-[300px]">
          <div className="mb-3 text-center">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-300">
              1. Live camera feed
            </span>
          </div>
          <div className="h-[340px]">
            <CameraFeed analyzed={false} />
          </div>
        </Reveal>

        <ArrowRight className="hidden h-6 w-6 shrink-0 text-[#38bdf8]/50 sm:block" />

        <Reveal delay={120} className="hover-lift w-full max-w-[300px]">
          <div className="mb-3 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 px-3 py-1 text-xs font-semibold text-amber-300">
              <ScanEye className="h-3.5 w-3.5" />
              2. AI detection &amp; alert
            </span>
          </div>
          <div className="h-[340px]">
            <CameraFeed analyzed={true} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default TabletVisionShowcase;
