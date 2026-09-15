import Image from "next/image";

const FACTS = [
  { value: "48hr", label: "Estimate turnaround" },
  { value: "7", label: "Services under one crew" },
  { value: "1", label: "Point of contact" },
];

export default function About() {
  return (
    <section id="about" className="border-y border-black/5 bg-stone-light/40">
      <div className="relative h-64 w-full overflow-hidden bg-stone-light sm:h-80 lg:h-96">
        <Image
          src="/images/about-crew.jpg"
          alt="Two-person crew installing and leveling bluestone pavers"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-dark/35 via-transparent to-transparent" />
        <p className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-pine-dark/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm lg:left-10">
          Built by the people who walk the site
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-5 lg:gap-16 lg:px-10 lg:py-24">
        <div className="lg:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay">
            Company
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium text-pine sm:text-4xl">
            Capstone Venture Group runs land management as one accountable
            operation, not a chain of subcontractors.
          </h2>
          <p className="mt-6 max-w-xl text-stone">
            We built the land management division to fix a specific problem:
            property owners coordinating five different contractors for one
            outcome. One team, one schedule, one point of contact from
            walkthrough to final grade.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-pine transition hover:text-clay"
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 self-center lg:col-span-2">
          {FACTS.map((fact) => (
            <div key={fact.label}>
              <p className="font-display text-3xl font-medium text-pine">
                {fact.value}
              </p>
              <p className="mt-1 text-sm text-stone">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
