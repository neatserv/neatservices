const stats = [
  { value: "10K+", label: "Conversations" },
  { value: "500+", label: "Businesses" },
  { value: "99.9%", label: "Uptime" },
  { value: "24×7", label: "Support" },
];

const features = [
  {
    title: "WhatsApp Business API",
    description:
      "Connect your business directly to customers with secure, high-volume messaging workflows.",
  },
  {
    title: "AI Chatbot",
    description:
      "Resolve inquiries instantly with an intelligent assistant that learns from your team.",
  },
  {
    title: "Shared Team Inbox",
    description:
      "Keep conversations organized across sales, support, and operations in one place.",
  },
  {
    title: "CRM & Contacts",
    description:
      "Manage customer profiles, notes, and interaction history without switching tools.",
  },
  {
    title: "Campaign Manager",
    description:
      "Launch segmented, personalized outreach campaigns with real-time delivery insights.",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Measure engagement, conversion rates, and campaign performance at a glance.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "₹999",
    period: "/month",
    features: ["Up to 3 team members", "Core automations", "Basic analytics"],
    featured: false,
  },
  {
    name: "Growth",
    price: "₹2,999",
    period: "/month",
    features: ["Unlimited automations", "AI chatbot", "CRM + campaign manager"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Contact Sales",
    period: "",
    features: ["Dedicated onboarding", "Priority support", "Custom integrations"],
    featured: false,
  },
];

const testimonials = [
  {
    quote:
      "Neat Services helped us cut reply times by 70% while keeping every customer interaction personal.",
    name: "Ananya Rao",
    role: "Head of Growth, BrightCart",
  },
  {
    quote:
      "The chatbot and campaign tools gave our team a serious edge in retention and re-engagement.",
    name: "Karan Mehta",
    role: "Founder, UrbanNest",
  },
];

const faqs = [
  {
    question: "How quickly can we get started?",
    answer: "Most teams are up and running in under a week with guided onboarding and setup support.",
  },
  {
    question: "Can we use our existing WhatsApp Business account?",
    answer: "Yes. Neat Services integrates smoothly with existing business messaging setups.",
  },
  {
    question: "Do you offer support for growing teams?",
    answer: "Absolutely. Growth and Enterprise plans include priority support and tailored onboarding.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef5ff_45%,_#f9fbff_100%)] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <a href="#" className="text-xl font-semibold tracking-tight text-slate-950">
            Neat Services
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-slate-950">
              Features
            </a>
            <a href="#pricing" className="transition hover:text-slate-950">
              Pricing
            </a>
            <a href="#contact" className="transition hover:text-slate-950">
              Contact
            </a>
          </div>
          <a
            href="#"
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
          >
            Login
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
              Premium messaging suite for modern teams
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              AI Powered Business Messaging Platform
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
              Automate customer conversations, manage contacts, launch WhatsApp campaigns, and grow your business with AI.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="rounded-full bg-slate-950 px-6 py-3 text-center font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Get Started
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
              >
                Book Demo
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-500">
              <span className="rounded-full bg-white px-3 py-2 shadow-sm">⚡ Fast deployment</span>
              <span className="rounded-full bg-white px-3 py-2 shadow-sm">🔒 Secure by design</span>
              <span className="rounded-full bg-white px-3 py-2 shadow-sm">📈 Built to scale</span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl shadow-sky-100">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Live operations view</p>
                  <p className="mt-2 text-2xl font-semibold">3.2x faster response times</p>
                </div>
                <div className="rounded-full bg-sky-500/20 px-3 py-1 text-sm font-medium text-sky-300">
                  +48% growth
                </div>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  "Autopilot answered 1,240 queries",
                  "Campaign launch completed in 4 mins",
                  "Team inbox synced across 6 departments",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-slate-50 px-5 py-6 text-center">
              <div className="text-3xl font-semibold text-slate-950">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Features</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A complete toolkit for modern customer engagement
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-sky-100 p-3 text-xl">✦</div>
              <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Pricing</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Flexible plans for every stage of growth
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-7 shadow-sm transition duration-200 hover:-translate-y-1 ${
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
                href="#contact"
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

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Testimonials</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Trusted by ambitious teams around the world
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-lg leading-8 text-slate-700">“{testimonial.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-slate-950">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">FAQ</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Questions teams ask before switching
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-slate-900">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer id="contact" className="border-t border-slate-200 bg-slate-950 py-12 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="text-xl font-semibold text-white">Neat Services</p>
            <p className="mt-2 max-w-md text-sm leading-7 text-slate-400">
              Build better conversations, smarter campaigns, and richer customer experiences in one platform.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="transition hover:text-white">About</a>
            <a href="#" className="transition hover:text-white">Privacy Policy</a>
            <a href="#" className="transition hover:text-white">Terms</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl px-6 text-sm text-slate-500 sm:px-8 lg:px-10">
          Copyright © Neat Services
        </div>
      </footer>
    </main>
  );
}
