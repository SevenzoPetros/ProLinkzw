import { Gauge, MapPinned, ShieldCheck, Headset, Wallet, Layers } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";

const reasons = [
  {
    icon: MapPinned,
    title: "Built for the Zimbabwean market",
    description:
      "Designs and systems account for local connectivity, mobile money behaviour and customer habits — not assumptions imported from elsewhere.",
  },
  {
    icon: Gauge,
    title: "Fast, fixed-timeline delivery",
    description:
      "Most websites launch in 2–6 weeks. You get a real date, set after scoping, and we hold to it.",
  },
  {
    icon: Wallet,
    title: "Transparent, fixed pricing",
    description:
      "A quote means a quote. No surprise line items appearing after work has already started.",
  },
  {
    icon: Layers,
    title: "One team, every layer",
    description:
      "Website, brand, marketing and hosting handled by people who talk to each other daily — not separate vendors passing the blame.",
  },
  {
    icon: Headset,
    title: "Support after launch",
    description:
      "Maintenance, monitoring and marketing retainers mean nothing we build is a one-time handoff you're left to manage alone.",
  },
  {
    icon: ShieldCheck,
    title: "Honest, plain-language scoping",
    description:
      "If something won't move your business forward yet, we'll tell you — even when a smaller invoice is the honest answer.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-mist-100 dark:bg-night-100">
      <div className="container">
        <SectionHeading
          eyebrow="Why ProLinkzw"
          title="Built like a partner, not a vendor"
          description="The work only matters if it changes how customers find and choose your business. Everything below is in service of that."
          align="center"
          className="mx-auto"
        />

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/8 dark:bg-white/8" stagger={0.07}>
          {reasons.map((reason) => (
            <RevealItem key={reason.title}>
              <div className="flex h-full flex-col gap-4 bg-mist-50 p-8 dark:bg-night-100">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-500 dark:bg-teal-400/10 dark:text-teal-100">
                  <reason.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-semibold text-ink dark:text-mist-50">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted dark:text-mist-300/75">
                  {reason.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
