import AppShell from "../../components/app-shell";
import { Bot } from "lucide-react";

export default function DashboardAiAgentsPage() {
  return (
    <AppShell
      title="AI Agents"
      description="Deploy smart assistants for support, sales, and operations."
      activePath="/dashboard/ai-agents"
    >
      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
          <Bot size={24} />
        </div>
        <h2 className="mt-4 text-xl font-semibold text-slate-950">AI agents are on the roadmap</h2>
        <p className="mt-2 text-sm text-slate-500">Launch AI-powered assistants tailored to your business workflows.</p>
      </div>
    </AppShell>
  );
}
