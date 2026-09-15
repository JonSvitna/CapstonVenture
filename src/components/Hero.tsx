export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Full-bleed backdrop standing in for site photography */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pine via-pine to-pine-dark" />
      <div className="absolute inset-0 -z-10 bg-noise opacity-[0.07]" />
      <svg
        className="absolute inset-0 -z-10 h-full w-full opacity-40"
        preserveAspectRatio="none"
        viewBox="0 0 1400 800"
        fill="none"
      >
        <path
          d="M0 620L120 560L240 600L360 500L480 570L600 460L720 540L840 440L960 520L1080 420L1200 500L1400 430V800H0V620Z"
          fill="#142219"
          opacity="0.6"
        />
        <path
          d="M0 700L140 640L280 690L420 600L560 660L700 570L840 640L980 550L1120 620L1260 540L1400 600V800H0V700Z"
          fill="#0e1a12"
          opacity="0.7"
        />
      </svg>

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-between px-6 pb-12 pt-20 lg:px-10 lg:pt-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay-light">
            Capstone Venture Group — Land Management
          </p>
          <h1 className="mt-6 font-display text-4xl font-medium leading-[1.1] text-cream sm:text-5xl lg:text-[3.4rem]">
            We take land from raw to finished, under one crew.
          </h1>
        </div>

        <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-sm rounded-2xl border border-cream/15 bg-cream/[0.06] p-6 backdrop-blur">
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
              Get a 48-Hour Estimate
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
