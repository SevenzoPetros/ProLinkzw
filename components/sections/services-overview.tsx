import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "@/lib/data/services";
import { ServiceCard } from "@/components/cards/service-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

export function ServicesOverview() {
  return (
    <section className="section-pad bg-mist dark:bg-night-200">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Five service lines, one accountable team"
            description="From your first website to the marketing and career systems around it — built and supported by the same team, not a chain of subcontractors."
          />
          <Link
            href="/services"
            className="mb-1 inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-copper-500 transition-colors hover:text-copper-400 dark:text-copper-200"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {serviceCategories.map((service) => (
            <RevealItem key={service.slug}>
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
