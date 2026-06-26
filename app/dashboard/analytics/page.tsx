import { BarChart3 } from "lucide-react";
import AppShell from "../../components/app-shell";

export default function DashboardAnalyticsPage() {
  return (
    <AppShell
      title="Analytics"
      description="Measure engagement, conversions, and campaign health."
      activePath="/dashboard/analytics"
    >
      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
          <BarChart3 size={24} />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-slate-950">Analytics reporting is being prepared</h2>
        <p className="mt-2 text-sm text-slate-500">Track performance insights, attribution, and growth trends in a clear view.</p>
      </div>
    </AppShell>
  );
}
