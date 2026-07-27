import {
  ArrowUpDown,
  Bell,
  Briefcase,
  CalendarCheck,
  Columns3,
  Download,
  Filter,
  GraduationCap,
  LayoutGrid,
  LogOut,
  Search,
  Settings,
  Star,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";

interface StatCard {
  label: string;
  value: string;
  icon: typeof Users;
  tone: "neutral" | "blue" | "amber" | "teal";
}

const stats: StatCard[] = [
  { label: "Candidates interviewed", value: "128", icon: Users, tone: "neutral" },
  { label: "Interviews scheduled", value: "46", icon: CalendarCheck, tone: "blue" },
  { label: "Shortlisted", value: "19", icon: Star, tone: "amber" },
  { label: "Avg interview time", value: "12m", icon: UserCheck, tone: "teal" },
];

const toneStyles: Record<StatCard["tone"], { border: string; icon: string; value: string }> = {
  neutral: { border: "border-gray-200", icon: "text-[#0E8FFB]", value: "text-gray-900" },
  blue: { border: "border-[#0E8FFB]/30", icon: "text-[#0E8FFB]", value: "text-[#0E8FFB]" },
  amber: { border: "border-amber-300", icon: "text-amber-500", value: "text-amber-600" },
  teal: { border: "border-teal-300", icon: "text-teal-500", value: "text-teal-600" },
};

const navItems = [
  { label: "Dashboard", icon: LayoutGrid, active: true },
  { label: "Candidates", icon: Users },
  { label: "Roles", icon: Briefcase },
  { label: "Interviews", icon: CalendarCheck },
  { label: "Analytics", icon: TrendingUp },
  { label: "Settings", icon: Settings },
];

interface Row {
  id: number;
  candidate: string;
  role: string;
  stage: "Interviewing" | "Interview scheduled" | "Shortlisted";
  score: string;
  time: string;
}

const rows: Row[] = [
  { id: 1, candidate: "Aditi", role: "Backend Engineer", stage: "Shortlisted", score: "92%", time: "2m ago" },
  { id: 2, candidate: "Rohan", role: "Site Supervisor", stage: "Interview scheduled", score: "88%", time: "9m ago" },
  { id: 3, candidate: "Meera", role: "QA Analyst", stage: "Interviewing", score: "—", time: "14m ago" },
  { id: 4, candidate: "Karan", role: "Backend Engineer", stage: "Interview scheduled", score: "85%", time: "26m ago" },
  { id: 5, candidate: "Zara", role: "Procurement Executive", stage: "Shortlisted", score: "94%", time: "38m ago" },
];

const stageStyles: Record<Row["stage"], string> = {
  Interviewing: "bg-[#0E8FFB]/10 text-[#0E8FFB]",
  "Interview scheduled": "bg-amber-50 text-amber-600",
  Shortlisted: "bg-emerald-50 text-emerald-600",
};

/**
 * Static visual preview of the Cognexa Interviewer recruiting dashboard —
 * no live data, no polling, purely a marketing illustration.
 */
function CognexaInterviewerDashboard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-2xl">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden w-48 shrink-0 border-r border-gray-100 bg-white p-4 lg:block">
          <div className="mb-6 flex items-center gap-1.5 text-lg font-extrabold text-gray-900">
            <span className="text-[#0E8FFB]">Co</span>gnexa
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
          {/* Top bar */}
          <div className="flex items-center justify-between gap-4 border-b border-gray-100 px-4 py-3 sm:px-6">
            <span className="hidden items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-400 sm:flex">
              <Search className="h-3.5 w-3.5" />
              Search candidates, roles...
            </span>
            <div className="flex items-center gap-3 sm:ml-auto">
              <Bell className="h-4 w-4 text-gray-400" />
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0E8FFB]/15 text-xs font-bold text-[#0E8FFB]">
                A
              </span>
            </div>
          </div>

          {/* Stat cards */}
          <div className="bg-gradient-to-br from-gray-900 to-[#0c2340] p-4 sm:p-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
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

          {/* Candidate log */}
          <div className="p-4 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  Recent candidates
                </h4>
                <p className="text-xs text-gray-400">
                  Every interview, scored and routed automatically
                </p>
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
              <table className="w-full min-w-[560px] text-left text-xs">
                <thead>
                  <tr className="border-b border-gray-100 text-[10px] font-bold tracking-wide text-gray-400 uppercase">
                    <th className="py-2 pr-3">Candidate</th>
                    <th className="py-2 pr-3">Role</th>
                    <th className="py-2 pr-3">Stage</th>
                    <th className="py-2 pr-3">Score</th>
                    <th className="py-2">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.id} className="border-b border-gray-50 text-gray-700">
                      <td className="py-2.5 pr-3">
                        <span className="flex items-center gap-1.5 font-medium text-gray-900">
                          <GraduationCap className="h-3.5 w-3.5 text-[#0E8FFB]/60" />
                          {row.candidate}
                        </span>
                      </td>
                      <td className="py-2.5 pr-3">{row.role}</td>
                      <td className="py-2.5 pr-3">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${stageStyles[row.stage]}`}
                        >
                          {row.stage}
                        </span>
                      </td>
                      <td className="py-2.5 pr-3 font-semibold text-gray-800">
                        {row.score}
                      </td>
                      <td className="py-2.5 text-gray-400">{row.time}</td>
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

export default CognexaInterviewerDashboard;
