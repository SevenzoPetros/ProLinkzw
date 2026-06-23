import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { PortfolioGallery } from "@/components/sections/portfolio-gallery";
import { ContactCta } from "@/components/sections/contact-cta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio — Websites, Branding & Marketing Work",
  description:
    "Browse ProLinkzw Digital's portfolio of website projects, graphic design and branding work, marketing campaigns and case studies delivered for Zimbabwean SMEs.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Real projects, real businesses, measurable results"
        description="A selection of websites, brand identities and marketing campaigns we've delivered — filter by category to see work relevant to your project."
        breadcrumbs={[{ label: "Portfolio" }]}
      />

      <section className="section-pad bg-mist dark:bg-night-200">
        <div className="container">
          <PortfolioGallery />
        </div>
      </section>

      <ContactCta />
    </>
  );
}
