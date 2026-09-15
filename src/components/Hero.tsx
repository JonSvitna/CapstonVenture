import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(20,34,25,.97)_0%,rgba(20,34,25,.88)_44%,rgba(20,34,25,.36)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-noise opacity-[0.07]" />
      <div className="relative mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-between px-6 pb-10 pt-20 lg:px-10 lg:pb-14 lg:pt-28">
        <div className="max-w-3xl pt-8 lg:pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay-light">
            Capstone Venture Group — Land Management
          </p>
          <h1 className="mt-6 max-w-2xl font-display text-5xl font-medium leading-[1.02] text-cream sm:text-6xl lg:text-7xl">
            Raw land in. Finished ground out.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/72 sm:text-lg">
            Clearing, excavation, drainage, hardscape, and finish work—run in
            sequence by one accountable land-management team.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-[0.16em] text-cream/65">
            <span>Residential</span>
            <span>Commercial</span>
            <span>Municipal</span>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-sm rounded-2xl border border-cream/15 bg-pine-dark/45 p-6 backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay-light">
              Featured
            </p>
            <p className="mt-2 font-display text-lg text-cream">
              The Atlas Project — New York, 2025
            </p>
            <a
              href="#work"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-cream/80 transition hover:text-cream"
            >
              See the work
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

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-clay px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-clay-light"
            >
              Request an Estimate
            </a>
            <a
              href="#services"
              className="rounded-full border border-cream/25 px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-cream/10"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
