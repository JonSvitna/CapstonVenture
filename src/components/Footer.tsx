const COLUMNS = [
  {
    title: "Services",
    links: [
      "Landscaping",
      "Hardscaping",
      "Land Clearing",
      "Excavation",
      "Demolition",
      "Site Preparation",
      "Junk Removal & Hauling",
    ],
  },
  {
    title: "Company",
    links: ["Our Work", "About", "Contact", "Request a Quote"],
  },
  {
    title: "Industries",
    links: ["Residential", "Commercial", "Municipal & Public Land"],
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
            <p className="mt-6 text-sm text-cream/50">
              projects@capstoneventuregroup.com
            </p>
            <p className="text-sm text-cream/50">(000) 000-0000</p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/40">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#contact"
                      className="text-sm text-cream/70 transition hover:text-cream"
                    >
                      {link}
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
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-cream/70">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-cream/70">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
