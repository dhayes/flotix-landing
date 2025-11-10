export function PricingTable() {
  const tiers = [
    {
      name: "Community",
      price: "Free",
      description: "Open-source and powerful, ideal for individuals and indie users.",
      features: [
        "All core features",
        "Unlimited nodes & pipelines",
        "Local data processing",
        "Community support",
        "MIT licensed",
      ],
      cta: "Get Started",
      link: "https://app.flotix.io",
      highlight: false,
    },
    {
      name: "Pro",
      price: "€19/mo",
      description: "Advanced tools and features for professional data analysts.",
      features: [
        "Advanced visualizations (3D, dashboards)",
        "Plugin manager & version control",
        "Cloud sync & session restore",
        "PDF/HTML exports",
        "Email support",
      ],
      cta: "Upgrade to Pro",
      link: "#",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Custom deployments, compliance, and dedicated support.",
      features: [
        "On-prem / private cloud deployment",
        "SSO & access control",
        "Large dataset support",
        "Audit logs & admin dashboards",
        "SLA & onboarding support",
      ],
      cta: "Contact Sales",
      link: "#",
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="bg-[#111318] text-white py-24 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-2">Pricing</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Flexible plans for individuals, professionals, and organizations
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {tiers.map((tier, i) => (
          <div
            key={i}
            className={`rounded-xl border p-6 flex flex-col justify-between ${
              tier.highlight
                ? "border-amber-400 bg-white/5"
                : "border-white/10 bg-white/5"
            }`}
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
              <p className="text-3xl font-bold text-white">{tier.price}</p>
              <p className="text-gray-400 text-sm mt-2">{tier.description}</p>

              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-amber-400">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={tier.link}
              className={`mt-8 inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition ${
                tier.highlight
                  ? "bg-amber-400 text-black hover:bg-amber-500"
                  : "border border-white/20 text-white hover:bg-white/10"
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
