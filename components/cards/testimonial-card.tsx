import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-ink/8 bg-mist-50 p-7 shadow-card dark:border-white/8 dark:bg-night-100">
      <div className="flex items-center gap-0.5 text-copper-400">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-muted dark:text-mist-300/80">
        “{testimonial.quote}”
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-ink/8 pt-5 dark:border-white/8">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 font-display text-sm font-semibold text-teal-500 dark:bg-teal-400/10 dark:text-teal-100">
          {testimonial.initials}
        </span>
        <div>
          <p className="font-display text-sm font-semibold text-ink dark:text-mist-50">{testimonial.name}</p>
          <p className="text-xs text-ink-soft dark:text-mist-300/55">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
