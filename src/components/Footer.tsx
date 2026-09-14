const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-pine-dark">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="font-display text-lg font-semibold text-cream">
            Capstone Venture Group
          </p>
          <p className="mt-1 text-sm text-cream/50">Land Management Division</p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-2">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream/70 transition hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-cream/40">
          © {new Date().getFullYear()} Capstone Venture Group. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
