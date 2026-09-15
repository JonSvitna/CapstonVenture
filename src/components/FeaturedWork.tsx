const PROJECTS = [
  {
    tag: "Featured — 2025",
    title: "The Atlas Project",
    location: "New York",
    description:
      "Full-scope land transformation — clearing, grading, hardscape construction, and finish landscaping — delivered as a single engagement.",
    quote: "“Communication was top-notch and the final outcome was even better.”",
    attribution: "— Richard Robinson",
    dark: true,
    image: "/images/work-atlas.jpg",
  },
  {
    tag: "Commercial",
    title: "Site prep, ground-up",
    location: "Westchester County",
    description:
      "Excavation and drainage engineering ahead of a ground-up commercial build, coordinated around a live construction schedule.",
    dark: false,
    image: "/images/work-commercial.jpg",
  },
  {
    tag: "Residential",
    title: "Backyard hardscape rebuild",
    location: "Long Island",
    description:
      "Retaining walls, a new patio, and finish planting on a sloped lot that a previous contractor had left unresolved.",
    dark: false,
    image: "/images/work-residential.jpg",
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay">
            Recent Work
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium text-pine sm:text-4xl">
            Proof, not promises.
          </h2>
        </div>
        <a
          href="#contact"
          className="text-sm font-semibold text-pine transition hover:text-clay"
        >
          Start a project like these →
        </a>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className={`flex flex-col justify-between gap-8 overflow-hidden rounded-3xl ${
              project.dark
                ? "bg-pine text-cream"
                : "border border-black/5 bg-stone-light/50 text-foreground"
            }`}
          >
            {/* Real photo slot — see IMAGES.md for the prompt for this file */}
            <div
              className="aspect-[4/3] w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${project.image}), linear-gradient(135deg, ${
                  project.dark ? "#1f3327, #142219" : "#e7e2d7, #d8d1c2"
                })`,
              }}
            />

            <div className="flex flex-1 flex-col justify-between gap-8 px-8 pb-8">
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                  project.dark ? "text-clay-light" : "text-clay"
                }`}
              >
                {project.tag}
              </p>
              <h3 className="mt-4 font-display text-xl font-medium">
                {project.title}
              </h3>
              <p className={`mt-1 text-sm ${project.dark ? "text-cream/50" : "text-stone"}`}>
                {project.location}
              </p>
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  project.dark ? "text-cream/70" : "text-stone"
                }`}
              >
                {project.description}
              </p>
            </div>

            {project.quote ? (
              <blockquote
                className={`border-l-2 pl-4 text-sm italic ${
                  project.dark ? "border-clay text-cream/90" : "border-clay text-foreground/80"
                }`}
              >
                {project.quote}
                <footer className={`mt-1 not-italic ${project.dark ? "text-cream/50" : "text-stone"}`}>
                  {project.attribution}
                </footer>
              </blockquote>
            ) : (
              <a
                href="#contact"
                className="text-sm font-semibold text-pine transition hover:text-clay"
              >
                Read the scope →
              </a>
            )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
