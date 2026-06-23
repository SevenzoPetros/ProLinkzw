import Link from "next/link";
import { ArrowUpRight, MapPin, Clock } from "lucide-react";
import type { JobOpening } from "@/lib/data/careers";
import { Badge } from "@/components/ui/badge";

export function CareerCard({ job }: { job: JobOpening }) {
  return (
    <Link
      href={`/careers/${job.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-ink/8 bg-mist-50 p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-copper-400/40 hover:shadow-card-hover dark:border-white/8 dark:bg-night-100"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <Badge variant="neutral">{job.department}</Badge>
          <h3 className="mt-3 font-display text-lg font-semibold text-ink dark:text-mist-50">
            {job.title}
          </h3>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-soft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper-500 dark:text-mist-300/40 dark:group-hover:text-copper-200" />
      </div>
      <p className="text-sm leading-relaxed text-ink-muted dark:text-mist-300/75">{job.summary}</p>
      <div className="mt-1 flex flex-wrap items-center gap-4 text-xs text-ink-soft dark:text-mist-300/55">
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {job.type}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" />
          {job.location}
        </span>
      </div>
    </Link>
  );
}
