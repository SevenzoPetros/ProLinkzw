import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioItem } from "@/lib/data/portfolio";
import { Badge } from "@/components/ui/badge";

const categoryLabel: Record<PortfolioItem["category"], string> = {
  website: "Website",
  branding: "Branding",
  marketing: "Marketing Campaign",
  "case-study": "Case Study",
};

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-mist-50 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover dark:border-white/8 dark:bg-night-100"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-night-100">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-200/70 via-transparent to-transparent" />
        <Badge variant="copper" className="absolute left-4 top-4 bg-night-200/80 text-copper-200 border-copper-200/30">
          {categoryLabel[item.category]}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <span className="mono-label text-ink-soft dark:text-mist-300/50">{item.industry} · {item.year}</span>
        <h3 className="font-display text-lg font-semibold text-ink dark:text-mist-50">{item.title}</h3>
        <p className="text-sm leading-relaxed text-ink-muted dark:text-mist-300/75">{item.summary}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-copper-500 dark:text-copper-200">
          View case study
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
