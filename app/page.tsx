const features = [
  {
    title: "WhatsApp Automation",
    description:
      "Send reminders, follow-ups, and instant replies with AI-driven workflows.",
  },
  {
    title: "AI Chatbot",
    description:
      "Handle customer questions 24/7 with a smart assistant trained for your business.",
  },
  {
    title: "CRM",
    description:
      "Centralize leads, contacts, and customer history in one elegant workspace.",
  },
  {
    title: "Campaigns",
    description:
      "Launch targeted outreach and nurture campaigns across your preferred channels.",
  },
  {
    title: "Analytics",
    description:
      "Track conversions, engagement, and revenue with real-time actionable insights.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "₹999",
    period: "/month",
    features: ["Up to 3 agents", "Basic automations", "Weekly reports"],
    featured: false,
  },
  {
    name: "Growth",
    price: "₹2999",
    period: "/month",
    features: ["Unlimited automations", "Advanced chatbot", "CRM + analytics"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    period: "",
    features: ["Custom onboarding", "Dedicated support", "Tailored integrations"],
    featured: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_30%),linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_100%)] text-slate-900">
      <section className="mx-auto flex max-w-7xl flex-col px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <nav className="mb-16 flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-5 py-3 shadow-sm backdrop-blur">
          <div className="text-lg font-semibold tracking-tight">Neat Services</div>
          <div className="hidden gap-6 text-sm font-medium text-slate-600 sm:flex">
            <a href="#features" className="transition hover:text-slate-900">
              Features
            </a>
            <a href="#pricing" className="transition hover:text-slate-900">
              Pricing
            </a>
          </div>
        </nav>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
              Premium customer engagement for modern teams
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              AI Powered Business Messaging Platform
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
              Automate WhatsApp, manage customers, launch campaigns, and grow your business.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="rounded-full bg-slate-950 px-6 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
              >
                Get Started
              </a>
              <a
                href="#"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Login
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-500">
              <span>⚡ Fast setup</span>
              <span>🔒 Secure messaging</span>
              <span>📈 Built for growth</span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-sky-100 backdrop-blur">
            <div className="rounded-2xl bg-slate-950 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Live engagement</p>
                  <p className="mt-1 text-2xl font-semibold">3.2x faster replies</p>
                </div>
                <div className="rounded-full bg-sky-500/20 px-3 py-1 text-sm font-medium text-sky-300">
                  +48% growth
                </div>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  "Automated reminders sent",
                  "Chatbot resolved 1,240 questions",
                  "Campaign ROI increased by 36%",
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10 lg:py-16">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
            Features
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Everything you need to delight customers at scale
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-xl bg-sky-100 p-3 text-xl">✦</div>
              <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10 lg:py-16">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
            Pricing
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Flexible plans for every growth stage
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-7 shadow-sm ${
                plan.featured
                  ? "border-sky-300 bg-slate-950 text-white shadow-xl"
                  : "border-slate-200 bg-white text-slate-900"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                {plan.featured ? (
                  <span className="rounded-full bg-sky-500/20 px-3 py-1 text-sm font-medium text-sky-300">
                    Popular
                  </span>
                ) : null}
              </div>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-semibold">{plan.price}</span>
                <span className={`text-sm ${plan.featured ? "text-slate-300" : "text-slate-500"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className={plan.featured ? "text-sky-300" : "text-sky-600"}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-white text-slate-950 hover:bg-slate-100"
                    : "bg-slate-950 text-white hover:bg-slate-800"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Choose Plan"}
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
