import AppShell from "../components/app-shell";

const templates = [
  { name: "Welcome Message", category: "Onboarding" },
  { name: "Follow-Up Reminder", category: "Sales" },
  { name: "Offer Alert", category: "Marketing" },
];

export default function TemplatesPage() {
  return (
    <AppShell
      title="Templates"
      description="Reuse polished messages and campaigns that already work."
      activePath="/templates"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {templates.map((template) => (
          <div key={template.name} className="rounded-[1.5rem] border border-slate-800 bg-slate-900/80 p-6">
            <p className="text-sm text-slate-400">{template.category}</p>
            <h2 className="mt-2 text-xl font-semibold text-white">{template.name}</h2>
            <button className="mt-6 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-400 hover:text-white">
              Use Template
            </button>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
