import Image from "next/image";

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
    imageAlt: "Finished bluestone patio and illuminated stone retaining wall at dusk",
    scope: "Clear · Grade · Build · Finish",
  },
  {
    tag: "Commercial",
    title: "Site prep, ground-up",
    location: "Westchester County",
    description:
      "Excavation and drainage engineering ahead of a ground-up commercial build, coordinated around a live construction schedule.",
    dark: false,
    image: "/images/work-commercial.jpg",
    imageAlt: "Excavator and dump truck preparing drainage on a commercial construction site",
    scope: "Excavate · Drain · Stage",
  },
  {
    tag: "Residential",
    title: "Backyard hardscape rebuild",
    location: "Long Island",
    description:
      "Retaining walls, a new patio, and finish planting on a sloped lot that a previous contractor had left unresolved.",
    dark: false,
    image: "/images/work-residential.jpg",
    imageAlt: "Fieldstone retaining wall, paver patio, and fire pit on a sloped backyard",
    scope: "Retain · Pave · Plant",
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
            className={`group flex flex-col justify-between gap-8 overflow-hidden rounded-3xl transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pine/10 ${
              project.dark
                ? "bg-pine text-cream"
                : "border border-black/5 bg-stone-light/50 text-foreground"
            }`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-light">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-6 pb-5 pt-14">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
                  {project.scope}
                </p>
              </div>
            </div>

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
                Plan a similar project →
              </a>
            )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
