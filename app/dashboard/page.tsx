import type { ReactNode } from "react";
import { Bot, DollarSign, FileText, MessageSquareText, Send, Sparkles, Users } from "lucide-react";
import AppShell from "../components/app-shell";

type KpiCard = {
  label: string;
  value: string;
  change: string;
  icon: ReactNode;
  accent: string;
};

const kpiCards: KpiCard[] = [
  { label: "Total Contacts", value: "18.2K", change: "+12.4%", icon: <Users size={18} />, accent: "bg-sky-100 text-sky-700" },
  { label: "Active Conversations", value: "1,248", change: "+8.1%", icon: <MessageSquareText size={18} />, accent: "bg-emerald-100 text-emerald-700" },
  { label: "Campaigns Sent", value: "94", change: "+16.0%", icon: <Send size={18} />, accent: "bg-violet-100 text-violet-700" },
  { label: "Templates", value: "67", change: "+4 new", icon: <FileText size={18} />, accent: "bg-amber-100 text-amber-700" },
  { label: "AI Responses Today", value: "3.1K", change: "+24.5%", icon: <Bot size={18} />, accent: "bg-rose-100 text-rose-700" },
  { label: "Revenue (demo)", value: "$42.8K", change: "+9.6%", icon: <DollarSign size={18} />, accent: "bg-indigo-100 text-indigo-700" },
];

const conversations = [
  { customer: "Mina Alvarez", phone: "+1 202 555 0148", lastMessage: "Confirmed delivery window for Friday", assignedAgent: "Ava", status: "Replying" },
  { customer: "Noah Lee", phone: "+1 202 555 0172", lastMessage: "Asked for a product brochure", assignedAgent: "Jules", status: "Follow-up" },
  { customer: "Sofia Chen", phone: "+1 202 555 0189", lastMessage: "Interested in onboarding support", assignedAgent: "Mina", status: "Qualified" },
];

const campaignStats = [
  { label: "Delivered", value: "84%", progress: "84%", bar: "bg-sky-600" },
  { label: "Read", value: "63%", progress: "63%", bar: "bg-emerald-500" },
  { label: "Replied", value: "41%", progress: "41%", bar: "bg-violet-500" },
  { label: "Failed", value: "3%", progress: "3%", bar: "bg-rose-500" },
];

const quickActions = [
  "Import Contacts",
  "New Campaign",
  "Connect WhatsApp",
  "Invite Team Member",
];

export default function DashboardPage() {
  return (
    <AppShell
      title="Dashboard"
      description="A premium view of your growth, conversations, and campaign health."
      activePath="/dashboard"
    >
      <div className="space-y-6">
        <section className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 p-6 text-white shadow-[0_35px_90px_-35px_rgba(15,23,42,0.85)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Welcome back</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Welcome back, Nawab</h2>
              <p className="mt-3 text-sm text-slate-300 sm:text-base">
                Your workspace <span className="font-semibold text-white">Neat Services</span> is running on the <span className="font-semibold text-white">Starter</span> plan with healthy momentum across conversations, campaigns, and AI support.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm text-slate-300">Today’s focus</p>
              <p className="mt-2 text-lg font-semibold">Launch 3 follow-up campaigns</p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {kpiCards.map((card) => (
            <div key={card.label} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-500">{card.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-950">{card.value}</p>
                </div>
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${card.accent}`}>
                  {card.icon}
                </div>
              </div>
              <p className="mt-4 text-sm font-medium text-emerald-600">{card.change} vs last week</p>
            </div>
          ))}
        </section>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Recent conversations</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">Live customer activity</h3>
              </div>
              <button className="rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-sky-300 hover:text-sky-700">
                View all
              </button>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Customer</th>
                    <th className="px-4 py-3 font-semibold">Phone</th>
                    <th className="px-4 py-3 font-semibold">Last Message</th>
                    <th className="px-4 py-3 font-semibold">Assigned Agent</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {conversations.map((conversation) => (
                    <tr key={conversation.customer} className="transition hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-900">{conversation.customer}</td>
                      <td className="px-4 py-3 text-slate-600">{conversation.phone}</td>
                      <td className="px-4 py-3 text-slate-600">{conversation.lastMessage}</td>
                      <td className="px-4 py-3 text-slate-600">{conversation.assignedAgent}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700">
                          {conversation.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="space-y-6">
            <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Campaign performance</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950">Delivery snapshot</h3>
                </div>
                <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">Live</div>
              </div>

              <div className="mt-6 space-y-4">
                {campaignStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700">{stat.label}</span>
                      <span className="font-semibold text-slate-950">{stat.value}</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-100">
                      <div className={`h-2 rounded-full ${stat.bar}`} style={{ width: stat.progress }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-slate-200 bg-sky-50 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Quick actions</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-950">Move faster</h3>
              <div className="mt-4 grid gap-3">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    className="rounded-2xl border border-sky-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-sky-400 hover:text-sky-700"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>

        <section className="rounded-[1.75rem] border border-sky-200 bg-gradient-to-r from-sky-50 to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">WhatsApp connection</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-950">Connect your WhatsApp Business API to begin messaging customers.</h3>
              <p className="mt-2 text-sm text-slate-600">Launch conversations, automate follow-ups, and keep every reply in one place.</p>
            </div>
            <button className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-100 transition hover:bg-sky-700">
              Connect WhatsApp
            </button>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
