const COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Landscaping", href: "#services" },
      { label: "Hardscaping", href: "#services" },
      { label: "Land Clearing", href: "#services" },
      { label: "Excavation", href: "#services" },
      { label: "Demolition", href: "#services" },
      { label: "Site Preparation", href: "#services" },
      { label: "Junk Removal & Hauling", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Work", href: "#work" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Request a Quote", href: "#contact" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Residential", href: "#services" },
      { label: "Commercial", href: "#services" },
      { label: "Municipal & Public Land", href: "#services" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-pine-dark">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="font-display text-lg font-semibold text-cream">
              Capstone
            </p>
            <p className="mt-1 text-sm text-cream/50">
              Land Management Division
            </p>
            <a href="mailto:projects@capstoneventuregroup.com" className="mt-6 block text-sm text-cream/50 transition hover:text-cream">
              projects@capstoneventuregroup.com
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/40">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-cream/70 transition hover:text-cream"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-8 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Capstone Venture Group. All rights
            reserved.
          </p>
          <p>New York and surrounding region</p>
        </div>
      </div>
    </footer>
  );
}
