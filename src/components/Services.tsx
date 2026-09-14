import type { ReactNode } from "react";

type Service = {
  name: string;
  description: string;
  icon: ReactNode;
};

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

const SERVICES: Service[] = [
  {
    name: "Landscaping",
    description:
      "Custom turf installation, grading, and strategic planting for residential and commercial properties.",
    icon: (
      <Icon>
        <path d="M12 22V12M12 12c3-4 8-4 8-9-6 0-9 3-9 9M12 12C9 8 4 8 4 3c6 0 9 3 9 9" />
      </Icon>
    ),
  },
  {
    name: "Hardscaping",
    description:
      "Stone retaining walls, patios, driveways, and walkways built with premium materials.",
    icon: (
      <Icon>
        <path d="M3 20h18M5 20v-5l4-2 4 2 4-2 2 1v6M9 13V7l3-2 3 2v6" />
      </Icon>
    ),
  },
  {
    name: "Land Clearing",
    description:
      "Removal of brush, trees, stumps, and undergrowth to prep land for construction or reclamation.",
    icon: (
      <Icon>
        <path d="M12 2l4 6H8l4-6zM12 8v9M6 21l2-4M18 21l-2-4M9 21h6" />
      </Icon>
    ),
  },
  {
    name: "Excavation",
    description:
      "Precision earthmoving — digging, trenching, and foundation preparation done right the first time.",
    icon: (
      <Icon>
        <path d="M4 20l6-6M9 15l6.5-6.5a2 2 0 000-2.8l-.2-.2a2 2 0 00-2.8 0L6 12l-2 6 6-2z" />
      </Icon>
    ),
  },
  {
    name: "Demolition",
    description:
      "Controlled teardowns of small buildings, sheds, concrete pads, and existing structures.",
    icon: (
      <Icon>
        <path d="M3 21h18M5 21V9l4-4 4 4v12M13 21v-8l3-3 3 3v8" />
      </Icon>
    ),
  },
  {
    name: "Site Preparation",
    description:
      "Engineering, grading, leveling, erosion control, and drainage solutions before groundbreaking.",
    icon: (
      <Icon>
        <path d="M2 18h20M4 18l4-8 4 4 3-6 5 10" />
      </Icon>
    ),
  },
  {
    name: "Junk Removal & Hauling",
    description:
      "Fast, thorough debris and construction-waste removal to close out every project clean.",
    icon: (
      <Icon>
        <path d="M3 7h13l2 4h3v6h-2M3 7v10h2M3 7l2-3h7l1 3" />
        <circle cx="8" cy="18" r="1.8" />
        <circle cx="17" cy="18" r="1.8" />
      </Icon>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay">
          What We Do
        </p>
        <h2 className="mt-4 font-display text-3xl font-medium text-pine sm:text-4xl">
          Seven services. One accountable crew.
        </h2>
        <p className="mt-4 text-stone">
          Most projects touch three or four of these before they&apos;re done.
          We run them in sequence under one team, so nothing stalls waiting on
          a subcontractor&apos;s schedule.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-black/5 bg-black/5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <div
            key={service.name}
            className="group flex flex-col gap-4 bg-cream p-8 transition hover:bg-stone-light/60"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pine/10 text-pine transition group-hover:bg-clay/15 group-hover:text-clay">
              {service.icon}
            </div>
            <h3 className="font-display text-lg font-medium text-pine">
              {service.name}
            </h3>
            <p className="text-sm leading-relaxed text-stone">
              {service.description}
            </p>
          </div>
        ))}

        <a
          href="#contact"
          className="group flex flex-col justify-between gap-6 bg-pine p-8 transition hover:bg-pine-dark"
        >
          <div>
            <h3 className="font-display text-lg font-medium text-cream">
              Not sure which service fits?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/60">
              Tell us the site and the outcome you want — we&apos;ll scope it.
            </p>
          </div>
          <span className="flex items-center gap-1.5 text-sm font-semibold text-clay-light">
            Get a scope call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition group-hover:translate-x-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
