const STATS = [
  { value: "48hr", label: "Estimate turnaround" },
  { value: "7", label: "Services under one crew" },
  { value: "2025", label: "Latest flagship project, NY" },
  { value: "100%", label: "Licensed & insured work" },
];

export default function Stats() {
  return (
    <section className="border-b border-black/5 bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 lg:grid-cols-4 lg:px-10">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-3xl font-medium text-pine sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-stone">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
