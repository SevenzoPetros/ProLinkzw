import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { ContactCta } from "@/components/sections/contact-cta";
import { PortfolioCard } from "@/components/cards/portfolio-card";
import { serviceCategories, getServiceBySlug } from "@/lib/data/services";
import { portfolioItems } from "@/lib/data/portfolio";
import { serviceIconMap } from "@/lib/icon-map";
import { buildMetadata, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return serviceCategories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: `${service.name} Services in Zimbabwe`,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = serviceIconMap[service.icon];
  const related = portfolioItems
    .filter((p) => p.services.some((s) => service.subServices.some((sub) => sub.name === s)))
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: service.name,
              description: service.description,
              path: `/services/${service.slug}`,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Services", path: "/services" },
              { name: service.name, path: `/services/${service.slug}` },
            ]),
          ),
        }}
      />

      <PageHeader
        eyebrow={service.eyebrow}
        title={service.name}
        description={service.summary}
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: service.shortName }]}
      />

      <section className="section-pad bg-mist dark:bg-night-200">
        <div className="container grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-copper-50 text-copper-500 dark:bg-copper-400/10 dark:text-copper-200">
              <Icon className="h-6 w-6" />
            </span>
            <p className="mt-6 text-base leading-relaxed text-ink-muted dark:text-mist-300/80">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Discuss this service
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">See related work</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-ink/8 bg-mist-50 p-7 shadow-card dark:border-white/8 dark:bg-night-100">
            <p className="mono-label text-ink-soft dark:text-mist-300/50">What you can expect</p>
            <ul className="mt-5 space-y-4">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 text-sm text-ink-muted dark:text-mist-300/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                  {outcome}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-mist-100 dark:bg-night-100">
        <div className="container">
          <SectionHeading eyebrow="Included" title={`What's inside ${service.shortName}`} />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {service.subServices.map((sub) => (
              <RevealItem key={sub.name}>
                <div className="h-full rounded-2xl border border-ink/8 bg-mist-50 p-6 shadow-card dark:border-white/8 dark:bg-night-200">
                  <h3 className="font-display text-base font-semibold text-ink dark:text-mist-50">
                    {sub.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted dark:text-mist-300/75">
                    {sub.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-pad bg-mist dark:bg-night-200">
          <div className="container">
            <SectionHeading eyebrow="Related work" title="See it in practice" />
            <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
              {related.map((item) => (
                <RevealItem key={item.slug}>
                  <PortfolioCard item={item} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <section className="border-t border-ink/8 bg-mist-100 py-10 dark:border-white/8 dark:bg-night-100">
        <div className="container flex flex-wrap gap-3">
          <span className="mono-label text-ink-soft dark:text-mist-300/50">Other services</span>
          {serviceCategories
            .filter((s) => s.slug !== service.slug)
            .map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-full border border-ink/10 px-4 py-1.5 text-sm text-ink-muted transition-colors hover:border-copper-400 hover:text-copper-500 dark:border-white/10 dark:text-mist-300/75 dark:hover:border-copper-200 dark:hover:text-copper-200"
              >
                {s.shortName}
              </Link>
            ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
