import type { Metadata } from "next";
import { GraduationCap, Users } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem, Reveal } from "@/components/shared/reveal";
import { CareerCard } from "@/components/cards/career-card";
import { jobOpenings, internshipProgram, freelanceInfo } from "@/lib/data/careers";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Careers — Join ProLinkzw Digital",
  description:
    "Explore open positions, our internship program and freelance opportunities at ProLinkzw Digital, Zimbabwe's technology and digital transformation partner.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build your career around real client work"
        description="Every role here works on live projects for real businesses from week one — not internal busywork waiting for a 'real' opportunity."
        breadcrumbs={[{ label: "Careers" }]}
      />

      <section className="section-pad bg-mist dark:bg-night-200">
        <div className="container">
          <SectionHeading eyebrow="Open positions" title="Current openings" />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2" stagger={0.08}>
            {jobOpenings.map((job) => (
              <RevealItem key={job.slug}>
                <CareerCard job={job} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section-pad bg-mist-100 dark:bg-night-100">
        <div className="container grid gap-6 lg:grid-cols-2">
          <Reveal className="flex flex-col rounded-2xl border border-ink/8 bg-mist-50 p-8 shadow-card dark:border-white/8 dark:bg-night-200">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper-50 text-copper-500 dark:bg-copper-400/10 dark:text-copper-200">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink dark:text-mist-50">
              {internshipProgram.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted dark:text-mist-300/75">
              {internshipProgram.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {internshipProgram.tracks.map((track) => (
                <span
                  key={track}
                  className="rounded-full border border-ink/10 px-3 py-1 text-xs text-ink-muted dark:border-white/10 dark:text-mist-300/70"
                >
                  {track}
                </span>
              ))}
            </div>
            <ul className="mt-5 space-y-2 border-t border-ink/8 pt-5 text-sm text-ink-muted dark:border-white/8 dark:text-mist-300/75">
              {internshipProgram.details.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="text-teal-400">—</span>
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col rounded-2xl border border-ink/8 bg-mist-50 p-8 shadow-card dark:border-white/8 dark:bg-night-200">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-500 dark:bg-teal-400/10 dark:text-teal-100">
              <Users className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink dark:text-mist-50">
              {freelanceInfo.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted dark:text-mist-300/75">
              {freelanceInfo.description}
            </p>
            <ul className="mt-5 space-y-2 border-t border-ink/8 pt-5 text-sm text-ink-muted dark:border-white/8 dark:text-mist-300/75">
              {freelanceInfo.categories.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-copper-400">—</span>
                  {c}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Freelance%20enquiry`}
              className="mt-6 inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-copper-400 hover:text-copper-500 dark:border-white/15 dark:text-mist-50 dark:hover:border-copper-200 dark:hover:text-copper-200"
            >
              Send your portfolio
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
