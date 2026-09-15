const ITEMS = [
  {
    kind: "Case Study",
    title: "What a $0 change order looks like",
    blurb:
      "How we scoped drainage risk on the Atlas Project before groundbreaking, and why it never became a surprise line item.",
  },
  {
    kind: "Field Notes",
    title: "The order operations actually happen in",
    blurb:
      "Clearing, then grading, then hardscape, then finish planting. Skip a step and you redo two.",
  },
  {
    kind: "Perspective",
    title: "Why we don't sub out excavation",
    blurb:
      "One crew that owns the whole sequence catches problems a handoff between contractors usually misses.",
  },
  {
    kind: "Guide",
    title: "What to have ready before your walkthrough",
    blurb:
      "Survey, utility markouts, and a rough budget range get you a sharper estimate in one visit.",
  },
];

export default function EditorialFeed() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay">
        From the Field
      </p>
      <h2 className="mt-4 max-w-xl font-display text-3xl font-medium text-pine sm:text-4xl">
        Notes on how we actually work.
      </h2>

      <div className="mt-14 grid grid-cols-1 divide-y divide-black/5 border-t border-black/5 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {ITEMS.map((item, i) => (
          <a
            href="#contact"
            key={item.title}
            className={`group flex flex-col gap-3 py-8 pr-6 transition hover:bg-stone-light/40 ${
              i % 2 === 0 ? "sm:pl-0" : "sm:pl-8"
            } ${i < 2 ? "" : "border-t border-black/5 sm:border-t"}`}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
              {item.kind}
            </span>
            <h3 className="font-display text-xl font-medium text-pine transition group-hover:text-clay">
              {item.title}
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-stone">
              {item.blurb}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
