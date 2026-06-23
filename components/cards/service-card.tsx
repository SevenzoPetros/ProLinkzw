import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServiceCategory } from "@/lib/data/services";
import { serviceIconMap } from "@/lib/icon-map";

export function ServiceCard({ service }: { service: ServiceCategory }) {
  const Icon = serviceIconMap[service.icon];

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col rounded-2xl border border-ink/8 bg-mist-50 p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-copper-400/40 hover:shadow-card-hover dark:border-white/8 dark:bg-night-100"
    >
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper-50 text-copper-500 dark:bg-copper-400/10 dark:text-copper-200">
          <Icon className="h-5 w-5" />
        </span>
        <ArrowUpRight className="h-5 w-5 text-ink-soft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper-500 dark:text-mist-300/40 dark:group-hover:text-copper-200" />
      </div>

      <h3 className="mt-6 font-display text-xl font-semibold text-ink dark:text-mist-50">
        {service.name}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-muted dark:text-mist-300/75">
        {service.summary}
      </p>

      <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-ink/8 pt-5 dark:border-white/8">
        {service.subServices.slice(0, 4).map((sub) => (
          <li key={sub.name} className="flex items-center gap-2 text-sm text-ink-muted dark:text-mist-300/70">
            <span className="h-1 w-1 shrink-0 rounded-full bg-teal-400" />
            {sub.name}
          </li>
        ))}
      </ul>
    </Link>
  );
}
