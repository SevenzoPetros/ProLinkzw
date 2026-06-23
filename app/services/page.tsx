import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ServiceCard } from "@/components/cards/service-card";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { ContactCta } from "@/components/sections/contact-cta";
import { serviceCategories } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Our Services — Web, Branding, Marketing, Career & IT Solutions",
  description:
    "Explore ProLinkzw Digital's five service lines: web & software, branding & design, digital marketing, career services and business technology — built for Zimbabwean SMEs.",
  path: "/services",
  keywords: [
    "Website Design Zimbabwe",
    "Web Development Zimbabwe",
    "Graphic Design Zimbabwe",
    "Digital Marketing Zimbabwe",
    "SME Technology Solutions Zimbabwe",
    ...siteConfig.keywords,
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Five service lines. One accountable team."
        description="Every service below is delivered by the same in-house team — no outsourced subcontractors passing your project between agencies."
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="section-pad bg-mist dark:bg-night-200">
        <div className="container">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {serviceCategories.map((service) => (
              <RevealItem key={service.slug}>
                <ServiceCard service={service} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
