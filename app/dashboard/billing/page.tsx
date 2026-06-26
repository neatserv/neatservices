import AppShell from "../../components/app-shell";
import { BriefcaseBusiness } from "lucide-react";

export default function DashboardBillingPage() {
  return (
    <AppShell
      title="Billing"
      description="Review plans, invoices, and account usage."
      activePath="/dashboard/billing"
    >
      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
          <BriefcaseBusiness size={24} />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-slate-950">Billing overview is ready for expansion</h2>
        <p className="mt-2 text-sm text-slate-500">Keep subscriptions, invoices, and usage history organized in one place.</p>
      </div>
    </AppShell>
  );
}
