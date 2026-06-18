import type { Metadata } from "next";
import { Target, Eye } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { TeamCard } from "@/components/cards/team-card";
import { ContactCta } from "@/components/sections/contact-cta";
import { companyStory, missionVision } from "@/lib/data/about";
import { coreValues, teamMembers } from "@/lib/data/team";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About ProLinkzw Digital — Our Story, Mission & Team",
  description:
    "Learn how ProLinkzw Digital became Zimbabwe's technology and digital transformation partner, our mission and vision, the values behind our work, and the team delivering it.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A Harare-based team building digital infrastructure for Zimbabwean SMEs"
        description="From our first five-page website to a full-service technology partner — here's the story, the people and the principles behind it."
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="section-pad bg-mist dark:bg-night-200">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <span className="mono-label text-copper-500 dark:text-copper-200">{companyStory.title}</span>
            <div className="mt-5 space-y-4">
              {companyStory.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-ink-muted dark:text-mist-300/80">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1} className="rounded-2xl border border-ink/8 bg-mist-50 p-7 shadow-card dark:border-white/8 dark:bg-night-100">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-copper-50 text-copper-500 dark:bg-copper-400/10 dark:text-copper-200">
                <Target className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-mist-50">
                {missionVision.mission.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted dark:text-mist-300/75">
                {missionVision.mission.description}
              </p>
            </Reveal>
            <Reveal delay={0.2} className="rounded-2xl border border-ink/8 bg-mist-50 p-7 shadow-card dark:border-white/8 dark:bg-night-100">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-500 dark:bg-teal-400/10 dark:text-teal-100">
                <Eye className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-mist-50">
                {missionVision.vision.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted dark:text-mist-300/75">
                {missionVision.vision.description}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist-100 dark:bg-night-100">
        <div className="container">
          <SectionHeading
            eyebrow="Core values"
            title="The principles that shape how we work"
            align="center"
            className="mx-auto"
          />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2" stagger={0.08}>
            {coreValues.map((value) => (
              <RevealItem key={value.title}>
                <div className="h-full rounded-2xl border border-ink/8 bg-mist-50 p-7 shadow-card dark:border-white/8 dark:bg-night-200">
                  <h3 className="font-display text-base font-semibold text-ink dark:text-mist-50">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted dark:text-mist-300/75">
                    {value.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section-pad bg-mist dark:bg-night-200">
        <div className="container">
          <SectionHeading
            eyebrow="The team"
            title="The people behind the work"
            description="A small, senior team — every project gets direct access to the people actually doing the work, not just account managers relaying messages."
            align="center"
            className="mx-auto"
          />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {teamMembers.map((member) => (
              <RevealItem key={member.name}>
                <TeamCard member={member} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
