"use client";

import { useState, type FormEvent } from "react";

const PROJECT_EMAIL = "projects@capstoneventuregroup.com";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const contact = String(data.get("contact") ?? "");
    const address = String(data.get("address") ?? "Not provided");
    const projectType = String(data.get("projectType") ?? "Not selected");
    const details = String(data.get("details") ?? "");
    const subject = encodeURIComponent(`Project estimate request — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone or email: ${contact}\nProperty address: ${address}\nProject type: ${projectType}\n\nSite details:\n${details}`,
    );

    setStatus("Your email app is opening with the project details filled in.");
    window.location.href = `mailto:${PROJECT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="bg-stone-light/60">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-5 lg:gap-20 lg:px-10 lg:py-28">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay">Start Here</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-pine sm:text-5xl">Show us the site. We&apos;ll map the next move.</h2>
          <p className="mt-5 max-w-md leading-relaxed text-stone">Send the property, the problem, and the result you want. We&apos;ll follow up within 48 hours to confirm fit and schedule a walkthrough.</p>

          <div className="mt-10 rounded-2xl border border-black/5 bg-cream p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">What happens next</p>
            <ol className="mt-5 space-y-4 text-sm text-stone">
              <li className="flex gap-3"><span className="font-semibold text-pine">1.</span> We review your site details.</li>
              <li className="flex gap-3"><span className="font-semibold text-pine">2.</span> We confirm the right services and access needs.</li>
              <li className="flex gap-3"><span className="font-semibold text-pine">3.</span> We schedule the walkthrough and estimate.</li>
            </ol>
          </div>

          <div className="mt-8 text-sm">
            <p className="font-semibold text-pine">Prefer email?</p>
            <a className="mt-1 inline-block text-stone underline decoration-clay/40 underline-offset-4 transition hover:text-clay" href={`mailto:${PROJECT_EMAIL}`}>{PROJECT_EMAIL}</a>
            <p className="mt-5 font-semibold text-pine">Service area</p>
            <p className="mt-1 text-stone">New York and surrounding region</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-cream p-6 shadow-xl shadow-pine/5 sm:p-8 lg:col-span-3 lg:p-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm" htmlFor="name">
              <span className="font-medium text-pine">Name</span>
              <input id="name" type="text" name="name" autoComplete="name" required className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-pine" />
            </label>
            <label className="flex flex-col gap-1.5 text-sm" htmlFor="contact-method">
              <span className="font-medium text-pine">Phone or email</span>
              <input id="contact-method" type="text" name="contact" autoComplete="email" required className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-pine" />
            </label>
            <label className="flex flex-col gap-1.5 text-sm sm:col-span-2" htmlFor="address">
              <span className="font-medium text-pine">Property address</span>
              <input id="address" type="text" name="address" autoComplete="street-address" className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-pine" />
            </label>
            <label className="flex flex-col gap-1.5 text-sm sm:col-span-2" htmlFor="project-type">
              <span className="font-medium text-pine">Project type</span>
              <select id="project-type" name="projectType" defaultValue="" className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-pine">
                <option value="" disabled>Select the closest fit</option>
                <option>Land clearing or excavation</option>
                <option>Drainage or site preparation</option>
                <option>Hardscape or retaining wall</option>
                <option>Landscaping or finish work</option>
                <option>Demolition or hauling</option>
                <option>Multi-service project</option>
              </select>
            </label>
            <label className="flex flex-col gap-1.5 text-sm sm:col-span-2" htmlFor="details">
              <span className="font-medium text-pine">What does the site need?</span>
              <textarea id="details" name="details" rows={5} required placeholder="What is there now, what needs to change, and when would you like to begin?" className="resize-none rounded-xl border border-black/10 bg-white px-4 py-3 outline-none transition placeholder:text-stone/50 focus:border-pine" />
            </label>
          </div>

          <button type="submit" className="mt-6 w-full rounded-full bg-clay px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-clay-light sm:w-auto">Prepare My Estimate Request</button>
          <p className="mt-3 text-xs text-stone">This opens a prefilled email so you can review everything before sending.</p>
          <p className="mt-2 text-xs font-medium text-pine" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  );
}
