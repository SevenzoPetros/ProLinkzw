import Link from "next/link";
import type { FaqItem } from "@/lib/data/faqs";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

type FaqSectionProps = {
  items: FaqItem[];
  showViewAll?: boolean;
};

export function FaqSection({ items, showViewAll = false }: FaqSectionProps) {
  return (
    <section className="section-pad bg-mist-100 dark:bg-night-100">
      <div className="container max-w-3xl">
        <SectionHeading
          eyebrow="Common questions"
          title="Frequently asked questions"
          align="center"
          className="mx-auto"
        />

        <Reveal className="mt-12" delay={0.1}>
          <Accordion type="single" collapsible className="rounded-2xl border border-ink/8 bg-mist-50 px-6 dark:border-white/8 dark:bg-night-200">
            {items.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        {showViewAll && (
          <p className="mt-8 text-center text-sm text-ink-muted dark:text-mist-300/70">
            Have a different question?{" "}
            <Link href="/contact" className="font-medium text-copper-500 hover:underline dark:text-copper-200">
              Get in touch
            </Link>{" "}
            and we&apos;ll answer it directly.
          </p>
        )}
      </div>
    </section>
  );
}
