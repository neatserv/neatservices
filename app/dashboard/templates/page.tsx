import { Sparkles } from "lucide-react";
import AppShell from "../../components/app-shell";

export default function DashboardTemplatesPage() {
  return (
    <AppShell
      title="Templates"
      description="Reuse polished templates to speed up your workflow."
      activePath="/dashboard/templates"
    >
      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
          <Sparkles size={24} />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-slate-950">Template library coming soon</h2>
        <p className="mt-2 text-sm text-slate-500">Build reusable message blocks and launch faster with your team.</p>
      </div>
    </AppShell>
  );
}
