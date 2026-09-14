const CATEGORIES = [
  "Landscaping",
  "Hardscaping",
  "Land Clearing",
  "Excavation & Demolition",
  "Junk Removal",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-pine-dark">
      {/* Abstract topographic backdrop, stands in for site photography */}
      <div className="absolute inset-0 bg-noise opacity-[0.08]" />
      <svg
        className="absolute -right-40 -top-40 h-[600px] w-[600px] text-pine opacity-40"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="115" stroke="currentColor" strokeWidth="0.6" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay-light">
          Capstone Venture Group
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.08] text-cream sm:text-5xl lg:text-6xl">
          Land management, handled end to end —
          <span className="italic text-clay-light"> one crew, no handoffs.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-cream/70">
          From first walkthrough to final grade, Capstone plans, clears, builds,
          and finishes residential and commercial properties without the usual
          chain of subcontractors.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-clay px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-clay-light"
          >
            Get a 48-Hour Estimate
          </a>
          <a
            href="#work"
            className="rounded-full border border-cream/25 px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-cream/10"
          >
            See Recent Work
          </a>
        </div>

        <ul className="mt-14 flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => (
            <li
              key={cat}
              className="rounded-full border border-cream/15 bg-cream/5 px-4 py-2 text-sm text-cream/80"
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
