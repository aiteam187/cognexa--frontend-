import { useEffect, useState } from "react";
import {
  AlertTriangle,
  Camera,
  Flame,
  HardHat,
  PawPrint,
  Radio,
  ShieldAlert,
  Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import CountUp from "./CountUp";

interface Feed {
  src: string;
  label: string;
  zone: string;
  /** bounding box position as % of the tile */
  box: { top: string; left: string; width: string; height: string };
  boxLabel: string;
  severity: "high" | "medium" | "low";
}

const feeds: Feed[] = [
  {
    src: "/det1.webp",
    label: "CAM 01",
    zone: "Main Street Gate",
    box: { top: "62%", left: "38%", width: "14%", height: "30%" },
    boxLabel: "person 0.97",
    severity: "low",
  },
  {
    src: "/det2.webp",
    label: "CAM 02",
    zone: "Loading Dock",
    box: { top: "38%", left: "46%", width: "22%", height: "52%" },
    boxLabel: "animal 0.48",
    severity: "medium",
  },
  {
    src: "/det3.webp",
    label: "CAM 03",
    zone: "Assembly Line A",
    box: { top: "8%", left: "42%", width: "22%", height: "30%" },
    boxLabel: "no goggles 0.91",
    severity: "medium",
  },
  {
    src: "/det4.webp",
    label: "CAM 04",
    zone: "Warehouse Atrium",
    box: { top: "34%", left: "40%", width: "22%", height: "36%" },
    boxLabel: "FIRE 0.99",
    severity: "high",
  },
];

interface AlertItem {
  id: number;
  icon: LucideIcon;
  text: string;
  cam: string;
  severity: "high" | "medium" | "low";
  time: string;
}

const alertPool: Omit<AlertItem, "id" | "time">[] = [
  {
    icon: Flame,
    text: "Fire hazard detected",
    cam: "CAM 04",
    severity: "high",
  },
  {
    icon: HardHat,
    text: "PPE non-compliance: goggles",
    cam: "CAM 03",
    severity: "medium",
  },
  {
    icon: PawPrint,
    text: "Animal presence near dock",
    cam: "CAM 02",
    severity: "medium",
  },
  {
    icon: ShieldAlert,
    text: "Loitering in restricted zone",
    cam: "CAM 01",
    severity: "medium",
  },
  {
    icon: Camera,
    text: "Vehicle counted: 42 this hour",
    cam: "CAM 01",
    severity: "low",
  },
  {
    icon: AlertTriangle,
    text: "Crowd density rising",
    cam: "CAM 01",
    severity: "low",
  },
];

const severityStyles = {
  high: "border-red-500/40 bg-red-500/10 text-red-400",
  medium: "border-amber-500/40 bg-amber-500/10 text-amber-400",
  low: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
};

const boxStyles = {
  high: "border-red-500 text-red-400",
  medium: "border-amber-400 text-amber-300",
  low: "border-emerald-400 text-emerald-300",
};

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function LiveDetectionDashboard() {
  const now = useClock();
  const [alerts, setAlerts] = useState<AlertItem[]>(() =>
    alertPool.slice(0, 4).map((a, i) => ({
      ...a,
      id: i,
      time: "now",
    })),
  );

  useEffect(() => {
    let nextId = alertPool.length;
    const t = setInterval(() => {
      setAlerts((prev) => {
        const next = alertPool[nextId % alertPool.length];
        nextId += 1;
        return [{ ...next, id: nextId, time: "now" }, ...prev.slice(0, 3)];
      });
    }, 3200);
    return () => clearInterval(t);
  }, []);

  const clock = now.toLocaleTimeString("en-GB");

  return (
    <div className="overflow-hidden rounded-2xl bg-gray-950 text-left shadow-2xl">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
          </span>
          <span className="text-sm font-bold tracking-widest text-white uppercase">
            Vision IQ <span className="text-[#38bdf8]">Live</span>
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="hidden items-center gap-1.5 sm:flex">
            <Wifi className="h-3.5 w-3.5 text-emerald-400" />4 cameras online
          </span>
          <span className="hidden items-center gap-1.5 sm:flex">
            <Radio className="h-3.5 w-3.5 text-[#38bdf8]" />
            AI engine active
          </span>
          <span className="font-mono tabular-nums">{clock}</span>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1fr_320px]">
        {/* Camera grid */}
        <div className="grid grid-cols-2 gap-2 p-2">
          {feeds.map((feed) => (
            <div
              key={feed.label}
              className="dash-feed group relative aspect-video overflow-hidden rounded-lg bg-gray-900"
            >
              <img
                src={feed.src}
                alt={`${feed.label} — ${feed.zone}`}
                loading="eager"
                fetchPriority="low"
                className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />

              {/* scan line */}
              <div className="dash-scanline pointer-events-none absolute inset-x-0" />

              {/* bounding box */}
              <div
                className={`dash-box pointer-events-none absolute border-2 ${boxStyles[feed.severity]}`}
                style={feed.box}
              >
                <span className="absolute -top-5 left-0 rounded-sm bg-gray-950/80 px-1.5 py-0.5 font-mono text-[10px] whitespace-nowrap">
                  {feed.boxLabel}
                </span>
              </div>

              {/* corner HUD */}
              <div className="absolute top-2 left-2 flex items-center gap-1.5 rounded bg-gray-950/70 px-2 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                <span className="font-mono text-[10px] font-semibold text-white">
                  {feed.label}
                </span>
              </div>
              <div className="absolute bottom-2 left-2 rounded bg-gray-950/70 px-2 py-1 font-mono text-[10px] text-gray-300">
                {feed.zone}
              </div>
              <div className="absolute top-2 right-2 rounded bg-gray-950/70 px-2 py-1 font-mono text-[10px] text-emerald-400">
                REC
              </div>
            </div>
          ))}
        </div>

        {/* Alert feed */}
        <div className="border-t border-white/10 p-4 lg:border-t-0 lg:border-l">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              Real-time alerts
            </h3>
            <span className="rounded-full bg-[#0E8FFB]/15 px-2 py-0.5 text-[10px] font-semibold text-[#38bdf8]">
              auto-refresh
            </span>
          </div>
          <ul className="space-y-2">
            {alerts.map((alert, i) => (
              <li
                key={alert.id}
                className={`dash-alert flex items-start gap-2.5 rounded-lg border px-3 py-2.5 ${severityStyles[alert.severity]} ${
                  i === 0 ? "dash-alert-new" : ""
                }`}
              >
                <alert.icon className="mt-0.5 h-4 w-4 shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-white">
                    {alert.text}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] opacity-80">
                    {alert.cam} · just now
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
            <div>
              <div className="text-lg font-bold text-white">
                <CountUp value="302" />
              </div>
              <div className="text-[10px] text-gray-400">events today</div>
            </div>
            <div>
              <div className="text-lg font-bold text-red-400">
                <CountUp value="16" />
              </div>
              <div className="text-[10px] text-gray-400">critical</div>
            </div>
            <div>
              <div className="text-lg font-bold text-emerald-400">
                <CountUp value="1.2s" />
              </div>
              <div className="text-[10px] text-gray-400">avg response</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveDetectionDashboard;
