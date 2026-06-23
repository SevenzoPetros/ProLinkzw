export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "A scoping conversation about your business, your customers and what's actually slowing growth down — not a generic sales pitch.",
  },
  {
    step: "02",
    title: "Propose",
    description:
      "A fixed quote and timeline mapped to your specific goals, with options at different budget levels where relevant.",
  },
  {
    step: "03",
    title: "Design & Build",
    description:
      "Design concepts shared early for feedback, then development in clear milestones you can see progress on, not a black box.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Final testing, handover documentation, and a walkthrough so your team knows how to use and update what we've built.",
  },
  {
    step: "05",
    title: "Support & Grow",
    description:
      "Ongoing maintenance, marketing or advisory support — and a standing relationship for whatever your business needs next.",
  },
];
