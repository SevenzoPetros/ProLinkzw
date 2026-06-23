import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { FaqSection } from "@/components/sections/faq";
import { faqItems } from "@/lib/data/faqs";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about pricing, timelines, CV writing and working with ProLinkzw Digital.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(faqItems.map((f) => ({ question: f.question, answer: f.answer })))),
        }}
      />
      <PageHeader
        eyebrow="Support"
        title="Frequently asked questions"
        description="Can't find what you're looking for? Reach out directly and we'll answer it personally."
        breadcrumbs={[{ label: "FAQ" }]}
      />
      <FaqSection items={faqItems} showViewAll />
    </>
  );
}
