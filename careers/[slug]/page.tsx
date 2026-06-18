import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, MapPin, Mail } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { jobOpenings } from "@/lib/data/careers";
import { buildMetadata, jobPostingJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return jobOpenings.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = jobOpenings.find((j) => j.slug === slug);
  if (!job) return {};

  return buildMetadata({
    title: `${job.title} — Careers at ProLinkzw Digital`,
    description: job.summary,
    path: `/careers/${job.slug}`,
  });
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = jobOpenings.find((j) => j.slug === slug);
  if (!job) notFound();

  const mailtoHref = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    `Application: ${job.title}`,
  )}&body=${encodeURIComponent("Hi ProLinkzw team,\n\nI'd like to apply for the " + job.title + " role. Please find my CV attached.\n\n")}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jobPostingJsonLd({
              title: job.title,
              description: job.summary,
              path: `/careers/${job.slug}`,
              employmentType: job.type,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Careers", path: "/careers" },
              { name: job.title, path: `/careers/${job.slug}` },
            ]),
          ),
        }}
      />

      <section className="relative overflow-hidden bg-night-200 pb-16 pt-36 text-mist-50 md:pb-20 md:pt-44">
        <div className="absolute inset-0 bg-grid-dark [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="container relative z-10">
          <Link href="/careers" className="inline-flex items-center gap-1.5 text-sm text-mist-300/70 hover:text-mist-50">
            <ArrowLeft className="h-4 w-4" />
            Back to careers
          </Link>
          <Reveal className="mt-6">
            <Badge variant="copper">{job.department}</Badge>
            <h1 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl">
              {job.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-mist-300/75">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {job.type}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {job.location}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-mist dark:bg-night-200">
        <div className="container grid gap-12 lg:grid-cols-[1fr_0.7fr]">
          <div className="space-y-8">
            <Reveal>
              <p className="text-base leading-relaxed text-ink-muted dark:text-mist-300/80">{job.summary}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mono-label text-copper-500 dark:text-copper-200">Responsibilities</p>
              <ul className="mt-3 space-y-2.5">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex gap-3 text-sm leading-relaxed text-ink-muted dark:text-mist-300/80">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper-400" />
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mono-label text-copper-500 dark:text-copper-200">Requirements</p>
              <ul className="mt-3 space-y-2.5">
                {job.requirements.map((r) => (
                  <li key={r} className="flex gap-3 text-sm leading-relaxed text-ink-muted dark:text-mist-300/80">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-400" />
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="h-fit rounded-2xl border border-ink/8 bg-mist-50 p-7 shadow-card dark:border-white/8 dark:bg-night-100">
            <p className="mono-label text-ink-soft dark:text-mist-300/50">Ready to apply?</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted dark:text-mist-300/75">
              Send your CV and a short note on why this role fits — we read every application personally.
            </p>
            <a
              href={mailtoHref}
              className="mt-6 flex h-12 items-center justify-center gap-2 rounded-full bg-copper-400 text-sm font-medium text-white shadow-glow transition-colors hover:bg-copper-500"
            >
              <Mail className="h-4 w-4" />
              Apply via email
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
