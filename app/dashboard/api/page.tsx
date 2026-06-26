import AppShell from "../../components/app-shell";
import { CircleDashed } from "lucide-react";

export default function DashboardApiPage() {
  return (
    <AppShell
      title="API & Webhooks"
      description="Connect apps and automate with robust developer controls."
      activePath="/dashboard/api"
    >
      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
          <CircleDashed size={24} />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-slate-950">Developer hooks are in progress</h2>
        <p className="mt-2 text-sm text-slate-500">Securely connect your stack through APIs and webhook events.</p>
      </div>
    </AppShell>
  );
}
