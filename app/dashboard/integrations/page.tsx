import AppShell from "../../components/app-shell";
import { Compass } from "lucide-react";

export default function DashboardIntegrationsPage() {
  return (
    <AppShell
      title="Integrations"
      description="Connect the tools your team already relies on."
      activePath="/dashboard/integrations"
    >
      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
          <Compass size={24} />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-slate-950">Integrations library is loading</h2>
        <p className="mt-2 text-sm text-slate-500">Plug in your CRM, ecommerce tools, and internal systems without friction.</p>
      </div>
    </AppShell>
  );
}
