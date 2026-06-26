import AppShell from "../../components/app-shell";
import { MessageSquareText } from "lucide-react";

export default function DashboardInboxPage() {
  return (
    <AppShell
      title="Inbox"
      description="Monitor messages and conversations from one place."
      activePath="/dashboard/inbox"
    >
      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
          <MessageSquareText size={24} />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-slate-950">Inbox view is coming soon</h2>
        <p className="mt-2 text-sm text-slate-500">Centralize customer conversations and team replies in a unified inbox.</p>
      </div>
    </AppShell>
  );
}
