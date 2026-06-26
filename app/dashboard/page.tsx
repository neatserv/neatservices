import AppShell from "../components/app-shell";

const metrics = [
  { label: "Active Conversations", value: "10.4K" },
  { label: "Response Time", value: "1.2 min" },
  { label: "Campaign ROI", value: "3.6x" },
];

export default function DashboardPage() {
  return (
    <AppShell
      title="Dashboard"
      description="A quick view of your conversations, growth, and campaign health."
      activePath="/dashboard"
    >
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/80 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Weekly overview</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Engagement is trending up</h2>
            </div>
            <span className="rounded-full bg-sky-500/20 px-3 py-1 text-sm font-medium text-sky-300">
              +18% this week
            </span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-sm text-slate-400">{metric.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/80 p-6">
          <p className="text-sm text-slate-400">Upcoming tasks</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">Review chatbot responses</li>
            <li className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">Launch weekly campaign</li>
            <li className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">Validate CRM sync</li>
          </ul>
        </div>
      </div>
    </AppShell>
  );
}
