import { ContactRound } from "lucide-react";
import AppShell from "../../components/app-shell";

export default function DashboardContactsPage() {
  return (
    <AppShell
      title="Contacts"
      description="View and organize your customer base from one place."
      activePath="/dashboard/contacts"
    >
      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
          <ContactRound size={24} />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-slate-950">Contacts management coming soon</h2>
        <p className="mt-2 text-sm text-slate-500">Import, segment, and manage your contacts with a unified CRM experience.</p>
      </div>
    </AppShell>
  );
}
