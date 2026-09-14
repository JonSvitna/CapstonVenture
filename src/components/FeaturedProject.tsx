export default function FeaturedProject() {
  return (
    <section id="work" className="bg-pine">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay-light">
            Featured Project — 2025
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium text-cream sm:text-4xl">
            The Atlas Project
          </h2>
          <p className="mt-1 text-sm text-cream/50">New York</p>
          <p className="mt-6 max-w-md text-cream/70">
            Full-scope land transformation — clearing, grading, hardscape
            construction, and finish landscaping — delivered as a single
            engagement from site walkthrough to final punch list.
          </p>
          <blockquote className="mt-8 border-l-2 border-clay pl-5 font-display text-xl italic text-cream/90">
            &ldquo;Communication was top-notch and the final outcome was even
            better.&rdquo;
          </blockquote>
          <p className="mt-3 text-sm text-cream/50">— Richard Robinson</p>
        </div>

        <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-3xl border border-cream/10 bg-pine-dark lg:min-h-full">
          <div className="absolute inset-0 bg-noise opacity-10" />
          <svg
            viewBox="0 0 400 300"
            className="h-full w-full text-clay-light/30"
            fill="none"
          >
            <path
              d="M0 220L60 160L120 200L180 120L240 180L300 100L360 160L400 130V300H0V220Z"
              fill="currentColor"
              opacity="0.25"
            />
            <path
              d="M0 250L70 190L140 230L210 150L280 210L340 140L400 180V300H0V250Z"
              fill="currentColor"
              opacity="0.4"
            />
          </svg>
          <span className="absolute bottom-6 right-6 rounded-full bg-cream/10 px-4 py-1.5 text-xs uppercase tracking-widest text-cream/70">
            Project image placeholder
          </span>
        </div>
      </div>
    </section>
  );
}
