import { useEffect, useState } from "react";
import {
  Bot,
  CheckCircle2,
  Mail,
  MessageCircle,
  Radio,
  Receipt,
  Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import CountUp from "../CountUp";

type Channel = "invoice" | "email" | "chat" | "rpa";
type Status = "resolved" | "active" | "escalated";

interface OpsEvent {
  id: number;
  channel: Channel;
  text: string;
  status: Status;
}

const channelMeta: Record<Channel, { icon: LucideIcon; label: string; color: string }> = {
  invoice: { icon: Receipt, label: "Extracto", color: "text-[#38bdf8]" },
  email: { icon: Mail, label: "Email", color: "text-amber-400" },
  chat: { icon: MessageCircle, label: "Chat", color: "text-emerald-400" },
  rpa: { icon: Bot, label: "RPA", color: "text-fuchsia-400" },
};

const statusMeta: Record<Status, string> = {
  resolved: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
  active: "border-[#0E8FFB]/40 bg-[#0E8FFB]/10 text-[#38bdf8]",
  escalated: "border-amber-500/40 bg-amber-500/10 text-amber-400",
};

const eventPool: Omit<OpsEvent, "id">[] = [
  { channel: "invoice", text: "Extracted invoice #8823 in 1.4s", status: "resolved" },
  { channel: "email", text: "Auto-triaged refund request", status: "resolved" },
  { channel: "chat", text: "Answering product question live", status: "active" },
  { channel: "rpa", text: "Bot synced invoice #4471 to ERP", status: "resolved" },
  { channel: "invoice", text: "Flagged mismatched total on invoice #7710", status: "escalated" },
  { channel: "chat", text: "Booked appointment via chatbot", status: "resolved" },
  { channel: "email", text: "Drafting reply for support ticket #892", status: "active" },
  { channel: "rpa", text: "Synced order data across 3 systems", status: "resolved" },
];

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function LiveOpsDashboard() {
  const now = useClock();
  const [events, setEvents] = useState<OpsEvent[]>(() =>
    eventPool.slice(0, 7).map((e, i) => ({ ...e, id: i })),
  );

  useEffect(() => {
    let nextId = eventPool.length;
    const t = setInterval(() => {
      setEvents((prev) => {
        const next = eventPool[nextId % eventPool.length];
        nextId += 1;
        return [{ ...next, id: nextId }, ...prev.slice(0, 6)];
      });
    }, 2600);
    return () => clearInterval(t);
  }, []);

  const clock = now.toLocaleTimeString("en-GB");

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-gray-950 text-left shadow-2xl">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-bold tracking-widest text-white uppercase">
            Cognexa AI <span className="text-[#38bdf8]">Live</span>
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="hidden items-center gap-1.5 sm:flex">
            <Wifi className="h-3.5 w-3.5 text-emerald-400" />4 channels active
          </span>
          <span className="hidden items-center gap-1.5 sm:flex">
            <Radio className="h-3.5 w-3.5 text-[#38bdf8]" />
            AI engine active
          </span>
          <span className="font-mono tabular-nums">{clock}</span>
        </div>
      </div>

      <div className="grid flex-1 gap-0 lg:grid-cols-[1fr_260px]">
        {/* Live event feed */}
        <div className="p-4 sm:p-6">
          <h4 className="mb-3 text-xs font-bold tracking-widest text-gray-400 uppercase">
            Live operations feed
          </h4>
          <ul className="space-y-2 sm:space-y-3">
            {events.map((event, i) => {
              const channel = channelMeta[event.channel];
              return (
                <li
                  key={event.id}
                  className={`flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 ${
                    i === 0 ? "dash-alert-new" : ""
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5">
                    <channel.icon className={`h-4 w-4 ${channel.color}`} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm text-gray-200">
                      {event.text}
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] text-gray-500">
                      {channel.label} · just now
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap uppercase ${statusMeta[event.status]}`}
                  >
                    {event.status}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Live stats */}
        <div className="border-t border-white/10 p-4 sm:p-6 lg:border-t-0 lg:border-l">
          <h4 className="mb-3 text-xs font-bold tracking-widest text-gray-400 uppercase">
            Today
          </h4>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-xl font-bold text-white">
                <CountUp value="1284" />
              </div>
              <div className="text-[10px] text-gray-400">
                interactions automated
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-xl font-bold text-[#38bdf8]">
                <CountUp value="1.8s" />
              </div>
              <div className="text-[10px] text-gray-400">avg response</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-xl font-bold text-emerald-400">
                <CountUp value="97%" />
              </div>
              <div className="text-[10px] text-gray-400">CSAT score</div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
              <span className="text-[11px] text-gray-300">
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveOpsDashboard;
