import { CheckCircle2, XCircle } from "lucide-react";

interface Box {
  top: string;
  left: string;
  width: string;
  height: string;
}

interface ANPRLaneSceneProps {
  src: string;
  alt: string;
  camLabel: string;
  zoneLabel: string;
  plate?: string;
  confidence?: string;
  box?: Box;
  analyzed?: boolean;
  decision?: "granted" | "denied";
  showHud?: boolean;
  className?: string;
}

const defaultBox: Box = { top: "68%", left: "38%", width: "24%", height: "8%" };

const decisionStyles = {
  granted: "border-emerald-500/50 bg-gray-950/90 text-emerald-400",
  denied: "border-red-500/50 bg-gray-950/90 text-red-400",
};

function ANPRLaneScene({
  src,
  alt,
  camLabel,
  zoneLabel,
  plate,
  confidence,
  box = defaultBox,
  analyzed = false,
  decision,
  showHud = true,
  className = "",
}: ANPRLaneSceneProps) {
  return (
    <div className={`relative h-full w-full overflow-hidden bg-gray-900 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="eager"
        fetchPriority="low"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
      />

      {showHud && (
        <div className="dash-scanline pointer-events-none absolute inset-x-0" />
      )}

      {analyzed && plate && (
        <div
          className="dash-box pointer-events-none absolute border-2 border-[#38bdf8] text-[#38bdf8]"
          style={box}
        >
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-sm bg-gray-950/85 px-1.5 py-0.5 font-mono text-[10px] whitespace-nowrap">
            {plate} · {confidence}
          </span>
        </div>
      )}

      {showHud && (
        <>
          <div className="absolute top-2 left-2 flex items-center gap-1.5 rounded bg-gray-950/70 px-2 py-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
            <span className="font-mono text-[10px] font-semibold text-white">
              {camLabel}
            </span>
          </div>
          <div className="absolute bottom-2 left-2 rounded bg-gray-950/70 px-2 py-1 font-mono text-[10px] text-gray-300">
            {zoneLabel}
          </div>
          <div className="absolute top-2 right-2 rounded bg-gray-950/70 px-2 py-1 font-mono text-[10px] text-emerald-400">
            REC
          </div>
        </>
      )}

      {decision && (
        <div
          className={`absolute right-2 bottom-2 flex items-center gap-1 rounded-full border px-2 py-1 font-mono text-[10px] font-semibold whitespace-nowrap uppercase shadow-lg ${decisionStyles[decision]}`}
        >
          {decision === "granted" ? (
            <CheckCircle2 className="h-3 w-3 shrink-0" />
          ) : (
            <XCircle className="h-3 w-3 shrink-0" />
          )}
          {decision === "granted" ? "Access granted" : "Access denied"}
        </div>
      )}
    </div>
  );
}

export default ANPRLaneScene;
