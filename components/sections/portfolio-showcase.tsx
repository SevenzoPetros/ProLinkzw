import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { portfolioItems } from "@/lib/data/portfolio";
import { PortfolioCard } from "@/components/cards/portfolio-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

export function PortfolioShowcase() {
  const featured = portfolioItems.slice(0, 3);

  return (
    <section className="section-pad bg-mist dark:bg-night-200">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Recent work"
            title="Real businesses, measurable outcomes"
            description="A small sample of the websites, brands and campaigns we've shipped for Zimbabwean SMEs over the past year."
          />
          <Link
            href="/portfolio"
            className="mb-1 inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-copper-500 transition-colors hover:text-copper-400 dark:text-copper-200"
          >
            View full portfolio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {featured.map((item) => (
            <RevealItem key={item.slug}>
              <PortfolioCard item={item} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
