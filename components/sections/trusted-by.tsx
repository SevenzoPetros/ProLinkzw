const clients = [
  "Savanna Fresh Grocers",
  "ZimCraft Furniture",
  "Nyasha & Partners",
  "Harare Bites",
  "Kutenda Fitness",
  "Mukoma Agro Supplies",
  "Vimbai Consulting",
  "Tariro Cosmetics",
];

export function TrustedBy() {
  const loop = [...clients, ...clients];

  return (
    <section className="border-y border-ink/8 bg-mist-50 py-10 dark:border-white/8 dark:bg-night-200">
      <div className="container mb-6 text-center">
        <p className="mono-label text-ink-soft dark:text-mist-300/50">
          Trusted by growing Zimbabwean businesses
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-mist-50 to-transparent dark:from-night-200" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-mist-50 to-transparent dark:from-night-200" />
        <div className="flex w-max animate-marquee gap-16">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex items-center whitespace-nowrap font-display text-xl font-semibold text-ink/25 dark:text-mist-50/20"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
