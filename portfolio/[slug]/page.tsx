import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactCta } from "@/components/sections/contact-cta";
import { portfolioItems, getPortfolioBySlug, type PortfolioItem } from "@/lib/data/portfolio";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

const categoryLabel: Record<PortfolioItem["category"], string> = {
  website: "Website",
  branding: "Branding",
  marketing: "Marketing Campaign",
  "case-study": "Case Study",
};

export function generateStaticParams() {
  return portfolioItems.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
  if (!item) return {};

  return buildMetadata({
    title: `${item.title} — ${item.client}`,
    description: item.summary,
    path: `/portfolio/${item.slug}`,
    image: item.image,
  });
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
  if (!item) notFound();

  const more = portfolioItems.filter((p) => p.slug !== item.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Portfolio", path: "/portfolio" },
              { name: item.title, path: `/portfolio/${item.slug}` },
            ]),
          ),
        }}
      />

      <section className="relative overflow-hidden bg-night-200 pb-16 pt-36 text-mist-50 md:pb-20 md:pt-44">
        <div className="absolute inset-0 bg-grid-dark [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="container relative z-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm text-mist-300/70 hover:text-mist-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <Reveal className="mt-6">
            <Badge variant="copper">{categoryLabel[item.category]}</Badge>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-balance md:text-4xl">
              {item.title}
            </h1>
            <p className="mt-3 text-mist-300/75">
              {item.client} · {item.industry} · {item.year}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist dark:bg-night-200">
        <div className="container -mt-10 md:-mt-16">
          <Reveal className="relative aspect-[16/8] overflow-hidden rounded-2xl border border-ink/8 shadow-card-hover dark:border-white/8">
            <Image src={item.image} alt={item.title} fill sizes="100vw" className="object-cover" priority />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-mist dark:bg-night-200">
        <div className="container grid gap-12 lg:grid-cols-[1fr_0.7fr]">
          <div className="space-y-10">
            <Reveal>
              <p className="mono-label text-copper-500 dark:text-copper-200">The challenge</p>
              <p className="mt-3 text-base leading-relaxed text-ink-muted dark:text-mist-300/80">
                {item.challenge}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mono-label text-copper-500 dark:text-copper-200">Our approach</p>
              <p className="mt-3 text-base leading-relaxed text-ink-muted dark:text-mist-300/80">
                {item.approach}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mono-label text-copper-500 dark:text-copper-200">The result</p>
              <p className="mt-3 text-base leading-relaxed text-ink-muted dark:text-mist-300/80">
                {item.result}
              </p>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal delay={0.1} className="rounded-2xl border border-ink/8 bg-mist-50 p-7 shadow-card dark:border-white/8 dark:bg-night-100">
              <p className="mono-label text-ink-soft dark:text-mist-300/50">Results at a glance</p>
              <div className="mt-5 grid grid-cols-2 gap-5">
                {item.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl font-bold text-copper-500 dark:text-copper-200">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-ink-muted dark:text-mist-300/65">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15} className="rounded-2xl border border-ink/8 bg-mist-50 p-7 shadow-card dark:border-white/8 dark:bg-night-100">
              <p className="mono-label text-ink-soft dark:text-mist-300/50">Services used</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.services.map((s) => (
                  <Badge key={s} variant="teal">
                    {s}
                  </Badge>
                ))}
              </div>
              <Button asChild size="lg" className="mt-6 w-full">
                <Link href="/contact">
                  Start a similar project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {more.length > 0 && (
        <section className="border-t border-ink/8 bg-mist-100 py-10 dark:border-white/8 dark:bg-night-100">
          <div className="container flex flex-wrap items-center gap-3">
            <span className="mono-label text-ink-soft dark:text-mist-300/50">More work</span>
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                className="rounded-full border border-ink/10 px-4 py-1.5 text-sm text-ink-muted transition-colors hover:border-copper-400 hover:text-copper-500 dark:border-white/10 dark:text-mist-300/75 dark:hover:border-copper-200 dark:hover:text-copper-200"
              >
                {p.client}
              </Link>
            ))}
          </div>
        </section>
      )}

      <ContactCta />
    </>
  );
}
