import AppShell from "../../components/app-shell";
import { Workflow } from "lucide-react";

export default function DashboardAutomationPage() {
  return (
    <AppShell
      title="Automation"
      description="Build workflows that make your AI and messaging stack feel effortless."
      activePath="/dashboard/automation"
    >
      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
          <Workflow size={24} />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-slate-950">Workflow automation coming soon</h2>
        <p className="mt-2 text-sm text-slate-500">Automate follow-ups, task routing, and customer triggers across every channel.</p>
      </div>
    </AppShell>
  );
}
