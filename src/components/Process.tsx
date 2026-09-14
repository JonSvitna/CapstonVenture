const STEPS = [
  {
    number: "01",
    title: "Walkthrough & scope",
    description:
      "We assess the site, talk through the outcome you want, and scope every service the project actually needs.",
  },
  {
    number: "02",
    title: "48-hour estimate",
    description:
      "A clear, itemized proposal — no vague allowances, no surprise change orders once work begins.",
  },
  {
    number: "03",
    title: "One crew, start to finish",
    description:
      "Clearing, excavation, hardscape, and landscaping run in sequence under the same team and site lead.",
  },
  {
    number: "04",
    title: "Final walkthrough & haul-off",
    description:
      "We clear debris, do a joint walkthrough, and sign off only once the site matches the plan.",
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay">
          How It Works
        </p>
        <h2 className="mt-4 font-display text-3xl font-medium text-pine sm:text-4xl">
          A straight line from estimate to sign-off.
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {STEPS.map((step) => (
          <div key={step.number} className="relative pl-2">
            <span className="font-display text-5xl font-medium text-stone-light">
              {step.number}
            </span>
            <h3 className="mt-3 font-display text-lg font-medium text-pine">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
