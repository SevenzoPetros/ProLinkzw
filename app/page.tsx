import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { FaqSection } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";
import { buildMetadata } from "@/lib/seo";
import { faqItems } from "@/lib/data/faqs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesOverview />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <ProcessTimeline />
      <FaqSection items={faqItems.slice(0, 6)} showViewAll />
      <ContactCta />
    </>
  );
}
