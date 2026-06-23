import { testimonials } from "@/lib/data/testimonials";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

export function Testimonials() {
  return (
    <section className="section-pad bg-mist-100 dark:bg-night-100">
      <div className="container">
        <SectionHeading
          eyebrow="Client feedback"
          title="What it's like to work with us"
          align="center"
          className="mx-auto"
        />

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {testimonials.slice(0, 6).map((t) => (
            <RevealItem key={t.name}>
              <TestimonialCard testimonial={t} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
