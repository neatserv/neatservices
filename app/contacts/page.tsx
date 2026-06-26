import AppShell from "../components/app-shell";

const contacts = [
  { name: "Asha Patel", company: "BrightCart", status: "Hot Lead" },
  { name: "Michael Chen", company: "UrbanNest", status: "Qualified" },
  { name: "Riya Desai", company: "Northstar", status: "Follow-up" },
];

export default function ContactsPage() {
  return (
    <AppShell
      title="Contacts"
      description="Manage your customer relationships from one organized workspace."
      activePath="/contacts"
    >
      <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/80 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Customer Directory</h2>
          <button className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700">
            Add Contact
          </button>
        </div>
        <div className="space-y-3">
          {contacts.map((contact) => (
            <div key={contact.name} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-4">
              <div>
                <p className="font-medium text-white">{contact.name}</p>
                <p className="text-sm text-slate-400">{contact.company}</p>
              </div>
              <span className="rounded-full bg-sky-500/20 px-3 py-1 text-sm font-medium text-sky-300">
                {contact.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
