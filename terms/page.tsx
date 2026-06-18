import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "The terms governing use of the ProLinkzw Digital website and services.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" breadcrumbs={[{ label: "Terms of Service" }]} />
      <section className="section-pad bg-mist dark:bg-night-200">
        <div className="container max-w-2xl space-y-6 text-sm leading-relaxed text-ink-muted dark:text-mist-300/80">
          <p>Last updated: January 2026</p>
          <p>
            These Terms of Service govern your use of the {siteConfig.name} website and any services
            engaged through it. Specific project terms, deliverables and payment schedules are confirmed
            separately in a written quote or agreement before work begins.
          </p>
          <h2 className="font-display text-lg font-semibold text-ink dark:text-mist-50">
            Service engagements
          </h2>
          <p>
            Project scope, timelines and pricing are agreed in writing prior to commencement. Changes to
            agreed scope may affect timeline and cost and will be communicated before additional work
            begins.
          </p>
          <h2 className="font-display text-lg font-semibold text-ink dark:text-mist-50">
            Intellectual property
          </h2>
          <p>
            Ownership of final deliverables (websites, designs, written content) transfers to the client
            upon full payment, unless otherwise agreed in writing. We retain the right to display completed
            work in our portfolio unless a client requests confidentiality.
          </p>
          <h2 className="font-display text-lg font-semibold text-ink dark:text-mist-50">
            Contact
          </h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-copper-500 hover:underline dark:text-copper-200">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
