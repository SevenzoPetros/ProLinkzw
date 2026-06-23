export type FaqItem = {
  question: string;
  answer: string;
  category: "General" | "Web & Software" | "Pricing" | "Career Services";
};

export const faqItems: FaqItem[] = [
  {
    question: "How long does a typical business website take to build?",
    answer:
      "Most brochure-style business websites take 2–4 weeks from signed-off content to launch. E-commerce stores and custom web applications typically take 5–10 weeks depending on scope. We'll give you a specific timeline once we understand what you need.",
    category: "Web & Software",
  },
  {
    question: "Do you only work with businesses in Zimbabwe?",
    answer:
      "No. We're based in Harare and most of our clients are Zimbabwean SMEs, but we also work with diaspora-owned businesses and international clients who want a Zimbabwe-based team that understands the local market alongside global standards.",
    category: "General",
  },
  {
    question: "What does a website actually cost?",
    answer:
      "It depends entirely on scope — a five-page business site costs meaningfully less than an e-commerce platform with payment integration. We provide fixed quotes after an initial scoping conversation, not vague ranges, so you know exactly what you're paying for before work starts.",
    category: "Pricing",
  },
  {
    question: "Can you redesign or fix an existing website instead of rebuilding from scratch?",
    answer:
      "Often, yes. We assess the existing site's codebase and content first — sometimes a targeted redesign or performance fix is the right call, and we'll tell you that even if a full rebuild would be a bigger invoice for us.",
    category: "Web & Software",
  },
  {
    question: "Do you offer payment plans for larger projects?",
    answer:
      "Yes, larger projects (e-commerce builds, web applications, full brand systems) are typically split into milestone payments tied to specific deliverables rather than one upfront lump sum.",
    category: "Pricing",
  },
  {
    question: "What happens after my CV is delivered — can I request changes?",
    answer:
      "Every CV package includes a round of revisions based on your feedback. We also keep an editable copy on file so future updates (a new role, a new qualification) are quick and inexpensive to add.",
    category: "Career Services",
  },
  {
    question: "Will an ATS-optimised CV still look good to a human reader?",
    answer:
      "Yes — ATS optimisation is about structure and keywords, not stripping out design entirely. We design CVs that parse cleanly through screening software while still looking professional and easy to read for the recruiter who reads it next.",
    category: "Career Services",
  },
  {
    question: "Do you provide ongoing support after a website or campaign launches?",
    answer:
      "Yes. Maintenance and support plans cover updates, backups and monitoring for websites, and marketing retainers cover ongoing campaign management and monthly reporting. Nothing we build is meant to be a one-time handoff.",
    category: "General",
  },
];
