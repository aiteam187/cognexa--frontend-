import {
  ArrowUpDown,
  Ban,
  Bell,
  Car,
  Columns3,
  Download,
  Filter,
  Gauge,
  LayoutGrid,
  LogOut,
  MapPin,
  Search,
  Settings,
  ShieldCheck,
  Ticket,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";

interface StatCard {
  label: string;
  value: string;
  icon: typeof Car;
  tone: "neutral" | "blue" | "amber" | "red" | "teal";
}

const stats: StatCard[] = [
  { label: "Total scans", value: "1,842", icon: Car, tone: "neutral" },
  { label: "Entries", value: "962", icon: ShieldCheck, tone: "blue" },
  { label: "Exits", value: "873", icon: Gauge, tone: "blue" },
  { label: "Visitors", value: "41", icon: Ticket, tone: "amber" },
  { label: "Blacklisted", value: "7", icon: Ban, tone: "red" },
  { label: "Today", value: "312", icon: UserCheck, tone: "teal" },
];

const toneStyles: Record<StatCard["tone"], { border: string; icon: string; value: string }> = {
  neutral: { border: "border-gray-200", icon: "text-[#0E8FFB]", value: "text-gray-900" },
  blue: { border: "border-[#0E8FFB]/30", icon: "text-[#0E8FFB]", value: "text-[#0E8FFB]" },
  amber: { border: "border-amber-300", icon: "text-amber-500", value: "text-amber-600" },
  red: { border: "border-rose-300", icon: "text-rose-500", value: "text-rose-600" },
  teal: { border: "border-teal-300", icon: "text-teal-500", value: "text-teal-600" },
};

const navItems = [
  { label: "Dashboard", icon: LayoutGrid, active: true },
  { label: "Live Lanes", icon: Car },
  { label: "Watchlist", icon: ShieldCheck },
  { label: "Reports", icon: TrendingUp },
  { label: "Settings", icon: Settings },
  { label: "User Management", icon: Users },
];

interface Row {
  sr: number;
  plate: string;
  vehicle: string;
  gate: string;
  time: string;
  direction: "Entry" | "Exit";
  status: "Authorized" | "Visitor" | "Blacklisted";
}

const rows: Row[] = [
  { sr: 1842, plate: "8HTK975", vehicle: "Sedan", gate: "Gate 01", time: "10:42", direction: "Entry", status: "Authorized" },
  { sr: 1841, plate: "55 EG 899", vehicle: "SUV", gate: "Gate 02", time: "10:39", direction: "Entry", status: "Visitor" },
  { sr: 1840, plate: "MISFIR3", vehicle: "Hatchback", gate: "Gate 03", time: "10:35", direction: "Exit", status: "Blacklisted" },
  { sr: 1839, plate: "WI 222JF", vehicle: "Truck", gate: "Gate 04", time: "10:31", direction: "Entry", status: "Authorized" },
  { sr: 1838, plate: "TN 09 EF 3345", vehicle: "Sedan", gate: "Gate 01", time: "10:28", direction: "Exit", status: "Authorized" },
];

const statusStyles: Record<Row["status"], string> = {
  Authorized: "bg-[#0E8FFB]/10 text-[#0E8FFB]",
  Visitor: "bg-amber-100 text-amber-700",
  Blacklisted: "bg-rose-100 text-rose-700",
};

function ANPRLogPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-2xl">
      <div className="flex">
        <div className="hidden w-48 shrink-0 border-r border-gray-100 bg-white p-4 lg:block">
          <div className="mb-6 flex items-center gap-1.5 text-lg font-extrabold text-gray-900">
            <span className="text-[#0E8FFB]">AN</span>PR
          </div>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li
                key={item.label}
                className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium ${
                  item.active
                    ? "bg-gradient-to-r from-[#0E8FFB] to-[#38bdf8] text-white shadow-sm"
                    : "text-gray-500"
                }`}
              >
                <item.icon className="h-4 w-4" strokeWidth={2} />
                {item.label}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-2.5 border-t border-gray-100 px-3 pt-4 text-sm font-medium text-gray-400">
            <LogOut className="h-4 w-4" />
            Logout
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-4 border-b border-gray-100 px-4 py-3 sm:px-6">
            <span className="hidden items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-400 sm:flex">
              <Search className="h-3.5 w-3.5" />
              Search plate, gate, vehicle
            </span>
            <div className="flex items-center gap-3 sm:ml-auto">
              <Bell className="h-4 w-4 text-gray-400" />
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0E8FFB]/15 text-xs font-bold text-[#0E8FFB]">
                A
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-[#0c2340] p-4 sm:p-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {stats.map((stat) => {
                const tone = toneStyles[stat.tone];
                return (
                  <div
                    key={stat.label}
                    className={`rounded-xl border-2 bg-white p-3 ${tone.border}`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] font-bold tracking-wide text-gray-500 uppercase">
                        {stat.label}
                      </span>
                      <stat.icon className={`h-4 w-4 shrink-0 ${tone.icon}`} strokeWidth={2} />
                    </div>
                    <div className={`mt-2 text-xl font-bold ${tone.value}`}>
                      {stat.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-4 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-bold text-gray-900">Scan log</h4>
                <p className="text-xs text-gray-400">Every plate read, by gate and direction</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                <span className="flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1">
                  <ArrowUpDown className="h-3 w-3" /> Sort
                </span>
                <span className="flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1">
                  <Filter className="h-3 w-3" /> Filter
                </span>
                <span className="flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1">
                  <Columns3 className="h-3 w-3" /> Columns
                </span>
                <span className="flex items-center gap-1 rounded-md bg-[#0E8FFB] px-2 py-1 text-white">
                  <Download className="h-3 w-3" /> Export
                </span>
              </div>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-xs">
                <thead>
                  <tr className="border-b border-gray-100 text-[10px] font-bold tracking-wide text-gray-400 uppercase">
                    <th className="py-2 pr-3">Plate no.</th>
                    <th className="py-2 pr-3">Vehicle</th>
                    <th className="py-2 pr-3">Gate</th>
                    <th className="py-2 pr-3">Time</th>
                    <th className="py-2 pr-3">Direction</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.sr} className="border-b border-gray-50 text-gray-700">
                      <td className="py-2.5 pr-3 font-mono font-medium text-gray-900">
                        {row.plate}
                      </td>
                      <td className="py-2.5 pr-3">{row.vehicle}</td>
                      <td className="py-2.5 pr-3">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-[#0E8FFB]/60" />
                          {row.gate}
                        </span>
                      </td>
                      <td className="py-2.5 pr-3 text-gray-400">{row.time}</td>
                      <td className="py-2.5 pr-3">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                            row.direction === "Entry"
                              ? "bg-[#0E8FFB]/10 text-[#0E8FFB]"
                              : "bg-fuchsia-500/10 text-fuchsia-600"
                          }`}
                        >
                          <Car className="h-3 w-3" />
                          {row.direction}
                        </span>
                      </td>
                      <td className="py-2.5">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusStyles[row.status]}`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ANPRLogPreview;
