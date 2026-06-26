import Link from "next/link";
import type { ReactNode } from "react";
import {
  BarChart3,
  Bell,
  Bot,
  BriefcaseBusiness,
  CalendarRange,
  ChevronRight,
  CircleDashed,
  Compass,
  ContactRound,
  LayoutDashboard,
  MessageSquareText,
  PanelLeftClose,
  Search,
  Send,
  Settings,
  Sparkles,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  icon: ReactNode;
};

const navItems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { href: "/dashboard/inbox", label: "Inbox", icon: <MessageSquareText size={18} /> },
  { href: "/dashboard/contacts", label: "Contacts", icon: <Users size={18} /> },
  { href: "/dashboard/campaigns", label: "Campaigns", icon: <Send size={18} /> },
  { href: "/dashboard/templates", label: "Templates", icon: <Sparkles size={18} /> },
  { href: "/dashboard/ai-agents", label: "AI Agents", icon: <Bot size={18} /> },
  { href: "/dashboard/automation", label: "Automation", icon: <Workflow size={18} /> },
  { href: "/dashboard/analytics", label: "Analytics", icon: <BarChart3 size={18} /> },
  { href: "/dashboard/integrations", label: "Integrations", icon: <Compass size={18} /> },
  { href: "/dashboard/api", label: "API & Webhooks", icon: <CircleDashed size={18} /> },
  { href: "/dashboard/billing", label: "Billing", icon: <BriefcaseBusiness size={18} /> },
  { href: "/dashboard/settings", label: "Settings", icon: <Settings size={18} /> },
];

export default function AppShell({
  children,
  title,
  description,
  activePath,
}: {
  children: ReactNode;
  title: string;
  description: string;
  activePath: string;
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
        <aside className="w-full border-b border-slate-200 bg-white/90 p-5 backdrop-blur lg:min-h-screen lg:w-72 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold tracking-tight text-slate-950">
              Neat Services
            </Link>
            <button className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:border-sky-300 hover:text-sky-600">
              <PanelLeftClose size={16} />
            </button>
          </div>
          <p className="mt-2 text-sm text-slate-500">Operations center for modern customer engagement.</p>

          <nav className="mt-8 space-y-1.5">
            {navItems.map((item) => {
              const active = activePath === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-2xl px-3.5 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-sky-600 text-white shadow-lg shadow-sky-100"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="rounded-lg bg-white/20 p-1.5">{item.icon}</span>
                    {item.label}
                  </span>
                  <ChevronRight size={15} />
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 bg-[linear-gradient(135deg,_#f8fbff_0%,_#fefefe_100%)] p-4 sm:p-6 lg:p-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.25)] sm:p-6 lg:p-8">
            <header className="flex flex-col gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
                  Workspace
                </p>
                <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{title}</h1>
                <p className="mt-1 text-sm text-slate-500">{description}</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
                  <Search size={16} className="text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-transparent outline-none sm:w-40"
                  />
                </label>
                <button className="relative rounded-full border border-slate-200 p-2.5 text-slate-600 transition hover:border-sky-300 hover:text-sky-600">
                  <Bell size={18} />
                  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-sky-500" />
                </button>
                <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 font-semibold text-white">
                    AM
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Ava Moore</p>
                    <p className="text-xs text-slate-500">Workspace Owner</p>
                  </div>
                </div>
              </div>
            </header>

            <div className="mt-8">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
