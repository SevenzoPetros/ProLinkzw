import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How ProLinkzw Digital collects, uses and protects your information.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" breadcrumbs={[{ label: "Privacy Policy" }]} />
      <section className="section-pad bg-mist dark:bg-night-200">
        <div className="container max-w-2xl space-y-6 text-sm leading-relaxed text-ink-muted dark:text-mist-300/80">
          <p>Last updated: January 2026</p>
          <p>
            This Privacy Policy explains how {siteConfig.name} (&quot;we&quot;, &quot;us&quot;) collects, uses and protects
            information when you use our website or engage our services. By using this site, you agree to
            the practices described below.
          </p>
          <h2 className="font-display text-lg font-semibold text-ink dark:text-mist-50">
            Information we collect
          </h2>
          <p>
            We collect information you provide directly, such as your name, email address, phone number
            and project details submitted through our contact form, as well as basic analytics data about
            how visitors use our website.
          </p>
          <h2 className="font-display text-lg font-semibold text-ink dark:text-mist-50">
            How we use it
          </h2>
          <p>
            Information submitted through our contact form is used solely to respond to your enquiry and,
            where relevant, to deliver the service you&apos;ve requested. We do not sell or rent personal
            information to third parties.
          </p>
          <h2 className="font-display text-lg font-semibold text-ink dark:text-mist-50">
            Contact
          </h2>
          <p>
            Questions about this policy can be sent to{" "}
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
