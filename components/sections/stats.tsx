import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";

const stats = [
  { value: siteConfig.stats.projectsDelivered, suffix: "+", label: "Projects delivered" },
  { value: siteConfig.stats.clientsServed, suffix: "+", label: "Businesses served" },
  { value: siteConfig.stats.yearsActive, suffix: "", label: "Years in operation" },
  { value: siteConfig.stats.satisfactionRate, suffix: "%", label: "Client satisfaction" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-night-200 py-16 text-mist-50 md:py-20">
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="container relative z-10 grid grid-cols-2 gap-10 md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center md:text-left">
            <p className="font-display text-4xl font-bold text-copper-300 md:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 mono-label text-mist-300/60">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
