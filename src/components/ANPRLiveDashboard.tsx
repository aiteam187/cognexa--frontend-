import { useEffect, useState } from "react";
import { Car, Gauge, Radio, ShieldAlert, Ticket, Wifi } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import CountUp from "./CountUp";
import ANPRLaneScene from "./ANPRLaneScene";
import { anprImages } from "../data/anprLanes";

interface Lane {
  camLabel: string;
  zone: string;
  src: string;
  alt: string;
  decision?: "granted" | "denied";
  showHud?: boolean;
}

const lanes: Lane[] = [
  {
    camLabel: "GATE 01",
    zone: "Camera Unit",
    ...anprImages.cameraHW,
  },
  {
    camLabel: "GATE 02",
    zone: "Main Entry Lane",
    ...anprImages.composite,
    decision: "granted",
  },
  {
    camLabel: "GATE 03",
    zone: "Toll Plaza",
    ...anprImages.inAction,
    decision: "granted",
    showHud: false,
  },
  {
    camLabel: "GATE 04",
    zone: "Parking Garage",
    ...anprImages.illustration,
    decision: "denied",
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
    icon: ShieldAlert,
    text: "Blacklisted plate detected, entry denied",
    cam: "GATE 04",
    severity: "high",
  },
  {
    icon: Ticket,
    text: "Visitor pass auto-generated",
    cam: "GATE 03",
    severity: "medium",
  },
  {
    icon: Car,
    text: "Vehicle counted: 128 this hour",
    cam: "GATE 01",
    severity: "low",
  },
  {
    icon: Car,
    text: "Entry logged, barrier auto-opened",
    cam: "GATE 02",
    severity: "low",
  },
  {
    icon: Gauge,
    text: "Overstay detected in parking garage",
    cam: "GATE 04",
    severity: "medium",
  },
];

const severityStyles = {
  high: "border-red-500/40 bg-red-500/10 text-red-400",
  medium: "border-amber-500/40 bg-amber-500/10 text-amber-400",
  low: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
};

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function ANPRLiveDashboard() {
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
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
          </span>
          <span className="text-sm font-bold tracking-widest text-white uppercase">
            ANPR <span className="text-[#38bdf8]">Live</span>
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="hidden items-center gap-1.5 sm:flex">
            <Wifi className="h-3.5 w-3.5 text-emerald-400" />4 lanes online
          </span>
          <span className="hidden items-center gap-1.5 sm:flex">
            <Radio className="h-3.5 w-3.5 text-[#38bdf8]" />
            AI engine active
          </span>
          <span className="font-mono tabular-nums">{clock}</span>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1fr_320px]">
        <div className="grid grid-cols-2 gap-2 p-2">
          {lanes.map((lane) => (
            <div
              key={lane.camLabel}
              className="dash-feed group relative aspect-video overflow-hidden rounded-lg bg-gray-900"
            >
              <ANPRLaneScene
                src={lane.src}
                alt={lane.alt}
                camLabel={lane.camLabel}
                zoneLabel={lane.zone}
                decision={lane.decision}
                showHud={lane.showHud}
              />
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 p-4 lg:border-t-0 lg:border-l">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              Real-time alerts
            </h4>
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
                <CountUp value="1,842" />
              </div>
              <div className="text-[10px] text-gray-400">vehicles today</div>
            </div>
            <div>
              <div className="text-lg font-bold text-red-400">
                <CountUp value="7" />
              </div>
              <div className="text-[10px] text-gray-400">blacklist hits</div>
            </div>
            <div>
              <div className="text-lg font-bold text-emerald-400">
                <CountUp value="0.8s" />
              </div>
              <div className="text-[10px] text-gray-400">avg read time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ANPRLiveDashboard;
