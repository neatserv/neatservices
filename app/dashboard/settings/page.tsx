import { Settings } from "lucide-react";
import AppShell from "../../components/app-shell";

export default function DashboardSettingsPage() {
  return (
    <AppShell
      title="Settings"
      description="Manage your workspace preferences and team controls."
      activePath="/dashboard/settings"
    >
      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
          <Settings size={24} />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-slate-950">Workspace settings are ready to expand</h2>
        <p className="mt-2 text-sm text-slate-500">Fine-tune team access, integrations, and account preferences here.</p>
      </div>
    </AppShell>
  );
}
