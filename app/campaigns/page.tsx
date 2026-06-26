import AppShell from "../components/app-shell";

const campaigns = [
  { name: "Welcome Series", status: "Live", reach: "3.2K" },
  { name: "Reactivation Push", status: "Scheduled", reach: "1.8K" },
  { name: "Product Launch", status: "Draft", reach: "0" },
];

export default function CampaignsPage() {
  return (
    <AppShell
      title="Campaigns"
      description="Create, schedule, and optimize your outreach with confidence."
      activePath="/campaigns"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {campaigns.map((campaign) => (
          <div key={campaign.name} className="rounded-[1.5rem] border border-slate-800 bg-slate-900/80 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">{campaign.name}</h2>
              <span className="rounded-full bg-sky-500/20 px-3 py-1 text-sm font-medium text-sky-300">
                {campaign.status}
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-400">Estimated reach: {campaign.reach}</p>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
