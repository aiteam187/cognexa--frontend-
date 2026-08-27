import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Download,
  ScanLine,
  Share2,
} from "lucide-react";
import Reveal from "./Reveal";
import GateVisionLaneScene from "./GateVisionLaneScene";
import { gateVisionImages } from "../data/gateVisionLanes";

function LaneFeedCard({
  tab,
  src,
  alt,
  showHud,
  note,
}: {
  tab: "hardware" | "result";
  src: string;
  alt: string;
  showHud: boolean;
  note: string;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[1.4rem] bg-gray-900 p-2 shadow-2xl">
      <div className="mx-auto mb-1.5 h-1 w-10 shrink-0 rounded-full bg-gray-700" />

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl bg-gray-950">
        <div className="flex shrink-0 items-center justify-between gap-2 border-b border-white/10 bg-gray-900 px-3 py-2">
          <ArrowLeft className="h-3.5 w-3.5 shrink-0 text-gray-400" />
          <span className="truncate text-[10px] font-semibold text-gray-300">
            Lane Camera View
          </span>
          <div className="flex shrink-0 items-center gap-2 text-gray-400">
            <Download className="h-3.5 w-3.5" />
            <Share2 className="h-3.5 w-3.5" />
          </div>
        </div>

        <div className="flex shrink-0 gap-4 border-b border-white/10 px-3 pt-2 text-[10px] font-semibold">
          <span
            className={
              tab === "result"
                ? "pb-2 text-gray-500"
                : "border-b-2 border-[#38bdf8] pb-2 text-[#38bdf8]"
            }
          >
            The Camera
          </span>
          <span
            className={
              tab === "result"
                ? "border-b-2 border-[#38bdf8] pb-2 text-[#38bdf8]"
                : "pb-2 text-gray-500"
            }
          >
            Plate Read
          </span>
        </div>

        <div className="p-3">
          <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-800">
            <GateVisionLaneScene
              src={src}
              alt={alt}
              camLabel="GATE 02"
              zoneLabel="Main Entry Lane"
              showHud={showHud}
            />
          </div>

          <div className="mt-3 space-y-1.5 rounded-lg bg-white/5 p-2.5">
            <p className="flex items-center gap-1 text-[9px] font-semibold text-emerald-400">
              <CheckCircle2 className="h-3 w-3 shrink-0" />
              {note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GateVisionCaptureShowcase() {
  return (
    <div>
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#0E8FFB]/15 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#38bdf8] uppercase">
          <ScanLine className="h-4 w-4" />
          Live recognition
        </span>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          From vehicle approach to gate decision, instantly
        </h2>
        <p className="mt-4 text-gray-400">
          Any entry, exit, or toll lane becomes a 24x7 checkpoint. GateVision
          reads the plate and decides what happens next, before the vehicle
          reaches the barrier.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-6">
        <Reveal className="hover-lift w-full max-w-[300px]">
          <div className="mb-3 text-center">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-300">
              1. The camera
            </span>
          </div>
          <div className="h-[340px]">
            <LaneFeedCard
              tab="hardware"
              src={gateVisionImages.cameraHW.src}
              alt={gateVisionImages.cameraHW.alt}
              showHud
              note="Mounted at the lane, watching every vehicle that passes"
            />
          </div>
        </Reveal>

        <ArrowRight className="hidden h-6 w-6 shrink-0 text-[#38bdf8]/50 sm:block" />

        <Reveal delay={120} className="hover-lift w-full max-w-[300px]">
          <div className="mb-3 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 px-3 py-1 text-xs font-semibold text-amber-300">
              <ScanLine className="h-3.5 w-3.5" />
              2. Plate read &amp; decision
            </span>
          </div>
          <div className="h-[340px]">
            <LaneFeedCard
              tab="result"
              src={gateVisionImages.inAction.src}
              alt={gateVisionImages.inAction.alt}
              showHud={false}
              note="Plate matched and barrier signal sent, automatically"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default GateVisionCaptureShowcase;
