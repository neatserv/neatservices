import { Send } from "lucide-react";
import AppShell from "../../components/app-shell";

export default function DashboardCampaignsPage() {
  return (
    <AppShell
      title="Campaigns"
      description="Plan and launch high-impact customer outreach."
      activePath="/dashboard/campaigns"
    >
      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
          <Send size={24} />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-slate-950">Campaign builder is on the way</h2>
        <p className="mt-2 text-sm text-slate-500">Create branded campaigns, set schedules, and track performance from one workspace.</p>
      </div>
    </AppShell>
  );
}
