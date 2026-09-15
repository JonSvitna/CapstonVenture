const STEPS = [
  {
    number: "01",
    title: "Walk the site",
    text: "We review access, grade, drainage, utilities, and the finished outcome you want.",
  },
  {
    number: "02",
    title: "Build the sequence",
    text: "You get one scope that puts clearing, ground work, construction, and finish work in the right order.",
  },
  {
    number: "03",
    title: "Run one crew",
    text: "A single point of contact owns the schedule, site conditions, and daily coordination.",
  },
  {
    number: "04",
    title: "Leave it finished",
    text: "Final grade, cleanup, and walkthrough are part of the plan—not loose ends after the heavy work.",
  },
];

export default function Process() {
  return (
    <section className="bg-pine text-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay-light">
              How It Runs
            </p>
            <h2 className="mt-4 max-w-lg font-display text-3xl font-medium sm:text-4xl">
              One plan from first cut to final grade.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-cream/65 lg:justify-self-end">
            The value is not simply having seven services. It is knowing the
            order they belong in—and having one team accountable when field
            conditions change.
          </p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.number} className="bg-pine-dark/75 p-7 lg:min-h-64">
              <span className="font-display text-3xl italic text-clay-light">
                {step.number}
              </span>
              <h3 className="mt-10 font-display text-xl font-medium">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
