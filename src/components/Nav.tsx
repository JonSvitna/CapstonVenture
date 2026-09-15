"use client";

import { useState } from "react";

const SERVICES = [
  { label: "Landscaping", href: "#services" },
  { label: "Hardscaping", href: "#services" },
  { label: "Land Clearing", href: "#services" },
  { label: "Excavation", href: "#services" },
  { label: "Demolition", href: "#services" },
  { label: "Site Preparation", href: "#services" },
  { label: "Junk Removal & Hauling", href: "#services" },
];

const INDUSTRIES = [
  { label: "Residential Properties", href: "#services" },
  { label: "Commercial Developments", href: "#services" },
  { label: "Municipal & Public Land", href: "#services" },
];

const SIMPLE_LINKS = [
  { href: "#work", label: "Our Work" },
  { href: "#about", label: "Company" },
  { href: "#contact", label: "Contact" },
];

function MegaMenu({
  label,
  columns,
}: {
  label: string;
  columns: { title: string; items: { label: string; href: string }[] }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition hover:text-pine"
      >
        {label}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path
            d="M1 1l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-4">
          <div className="grid grid-cols-2 gap-8 rounded-2xl border border-black/5 bg-cream p-8 shadow-xl shadow-black/5">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm text-foreground/80 transition hover:text-pine"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold tracking-tight text-pine">
            Capstone
          </span>
          <span className="hidden text-sm uppercase tracking-[0.2em] text-stone sm:inline">
            Land Management
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <MegaMenu
            label="Services"
            columns={[
              { title: "What We Do", items: SERVICES.slice(0, 4) },
              { title: "Also", items: SERVICES.slice(4) },
            ]}
          />
          <MegaMenu
            label="Industries"
            columns={[{ title: "Served", items: INDUSTRIES }]}
          />
          {SIMPLE_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition hover:text-pine"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-pine px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-pine-dark sm:inline-block"
          >
            Request a Quote
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path
                d={mobileOpen ? "M1 1L17 13M1 13L17 1" : "M0 1H18M0 7H18M0 13H18"}
                stroke="#1f3327"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col gap-1 border-t border-black/5 bg-cream px-6 pb-4 md:hidden">
          <p className="mt-3 px-2 text-xs font-semibold uppercase tracking-[0.2em] text-clay">
            Services
          </p>
          {SERVICES.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-2 py-2 text-sm font-medium text-foreground/80 hover:bg-stone-light"
            >
              {link.label}
            </a>
          ))}
          <p className="mt-3 px-2 text-xs font-semibold uppercase tracking-[0.2em] text-clay">
            Company
          </p>
          {SIMPLE_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-2 py-2 text-sm font-medium text-foreground/80 hover:bg-stone-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 rounded-full bg-pine px-5 py-3 text-center text-sm font-semibold text-cream"
          >
            Request a Quote
          </a>
        </nav>
      )}
    </header>
  );
}
