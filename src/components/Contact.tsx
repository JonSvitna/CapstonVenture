export default function Contact() {
  return (
    <section id="contact" className="bg-stone-light/60">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-5 lg:gap-16 lg:px-10 lg:py-28">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay">
            Get Started
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium text-pine sm:text-4xl">
            Tell us about the site.
          </h2>
          <p className="mt-4 text-stone">
            Share a few details and we&apos;ll respond with next steps within
            48 hours — most projects get a full estimate on the first visit.
          </p>

          <dl className="mt-10 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-pine">Phone</dt>
              <dd className="text-stone">(000) 000-0000</dd>
            </div>
            <div>
              <dt className="font-semibold text-pine">Email</dt>
              <dd className="text-stone">projects@capstoneventuregroup.com</dd>
            </div>
            <div>
              <dt className="font-semibold text-pine">Service Area</dt>
              <dd className="text-stone">New York & surrounding region</dd>
            </div>
          </dl>
        </div>

        <form className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-pine">Name</span>
              <input
                type="text"
                name="name"
                required
                className="rounded-xl border border-black/10 bg-cream px-4 py-3 outline-none transition focus:border-pine"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-pine">Phone or email</span>
              <input
                type="text"
                name="contact"
                required
                className="rounded-xl border border-black/10 bg-cream px-4 py-3 outline-none transition focus:border-pine"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
              <span className="font-medium text-pine">Property address</span>
              <input
                type="text"
                name="address"
                className="rounded-xl border border-black/10 bg-cream px-4 py-3 outline-none transition focus:border-pine"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
              <span className="font-medium text-pine">
                What does the site need?
              </span>
              <textarea
                name="details"
                rows={5}
                required
                className="resize-none rounded-xl border border-black/10 bg-cream px-4 py-3 outline-none transition focus:border-pine"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 rounded-full bg-clay px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-clay-light"
          >
            Request My Estimate
          </button>
          <p className="mt-3 text-xs text-stone">
            We reply within 48 hours. No obligation.
          </p>
        </form>
      </div>
    </section>
  );
}
