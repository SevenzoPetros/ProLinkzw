export type SubService = {
  name: string;
  description: string;
};

export type ServiceCategory = {
  slug: string;
  icon:
    | "code"
    | "palette"
    | "megaphone"
    | "briefcase"
    | "server";
  name: string;
  shortName: string;
  eyebrow: string;
  summary: string;
  description: string;
  subServices: SubService[];
  outcomes: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "web-software",
    icon: "code",
    name: "Web & Software",
    shortName: "Web & Software",
    eyebrow: "Build",
    summary:
      "Fast, secure websites and web applications engineered to convert visitors into customers.",
    description:
      "We design and build digital storefronts and internal tools that hold up under real business traffic — from lean brochure sites for new SMEs to multi-vendor e-commerce platforms and bespoke web applications that automate the way your team works.",
    subServices: [
      {
        name: "Website Design",
        description:
          "Custom-designed, mobile-first websites built around your brand and your customer's buying journey.",
      },
      {
        name: "Business Websites",
        description:
          "Professional brochure and corporate sites for SMEs, NGOs and professional practices that need to be found and trusted.",
      },
      {
        name: "E-Commerce Stores",
        description:
          "Online stores with secure checkout, inventory tracking and local payment integrations built for the Zimbabwean market.",
      },
      {
        name: "Web Applications",
        description:
          "Custom dashboards, booking systems and internal tools that replace spreadsheets and manual processes.",
      },
      {
        name: "Maintenance & Support",
        description:
          "Ongoing updates, backups, security monitoring and content edits so your platform keeps running without you thinking about it.",
      },
    ],
    outcomes: [
      "Launch in 2–6 weeks depending on scope",
      "Mobile-first, fast-loading by default",
      "Built on modern, maintainable code",
    ],
  },
  {
    slug: "branding-design",
    icon: "palette",
    name: "Branding & Design",
    shortName: "Branding & Design",
    eyebrow: "Identity",
    summary:
      "Visual identity systems that make a new or growing business look established from day one.",
    description:
      "A strong identity is the difference between a business that looks improvised and one that looks ready to scale. We build the visual language — logo, colours, type, templates — and apply it consistently across every touchpoint your customers see.",
    subServices: [
      {
        name: "Logo Design",
        description:
          "Distinctive marks built to work everywhere — from a phone screen favicon to a shopfront sign.",
      },
      {
        name: "Corporate Identity",
        description:
          "Full brand guidelines covering colour, typography, letterheads, signage and email signatures.",
      },
      {
        name: "Flyers & Posters",
        description:
          "Print and digital promotional material designed for attention spans that move fast.",
      },
      {
        name: "Company Profiles",
        description:
          "Polished PDF and print profiles that present your business credibly to banks, partners and tenders.",
      },
      {
        name: "Social Media Graphics",
        description:
          "On-brand templates and post designs that keep every platform looking consistent.",
      },
    ],
    outcomes: [
      "Brand kit delivered in editable & print-ready formats",
      "Consistent identity across every channel",
      "Designed for both screen and print",
    ],
  },
  {
    slug: "digital-marketing",
    icon: "megaphone",
    name: "Digital Marketing",
    shortName: "Digital Marketing",
    eyebrow: "Grow",
    summary:
      "Targeted campaigns and content that put your business in front of the customers actually looking for you.",
    description:
      "We run marketing the way it should be run for an SME budget — measured, targeted and tied to real outcomes, whether that's footfall, calls, DMs or online orders.",
    subServices: [
      {
        name: "Facebook Marketing",
        description:
          "Page management, ad campaigns and community engagement built for Zimbabwe's most active social platform.",
      },
      {
        name: "Instagram Marketing",
        description:
          "Visual storytelling, reels strategy and influencer-style content for product and lifestyle brands.",
      },
      {
        name: "Google Business Optimization",
        description:
          "Get found on Google Maps and local search with an optimised, review-rich business profile.",
      },
      {
        name: "Content Creation",
        description:
          "Photography, copywriting and short-form video that gives you a steady stream of content to post.",
      },
      {
        name: "Lead Generation",
        description:
          "Funnels, forms and follow-up systems that turn interest into booked calls and paying customers.",
      },
    ],
    outcomes: [
      "Monthly performance reporting",
      "Content calendars planned a month ahead",
      "Campaigns tied to leads, not just likes",
    ],
  },
  {
    slug: "career-services",
    icon: "briefcase",
    name: "Career Services",
    shortName: "Career Services",
    eyebrow: "Advance",
    summary:
      "Professional documents and coaching that help Zimbabwean professionals get noticed by the right employers.",
    description:
      "The same positioning thinking we use for businesses, applied to individual careers — CVs and LinkedIn profiles that get through automated screening and interviews that get you hired.",
    subServices: [
      {
        name: "Professional CV Writing",
        description:
          "Achievement-led CVs tailored to your industry and the roles you're actually applying for.",
      },
      {
        name: "ATS Optimization",
        description:
          "CVs structured and keyworded to pass applicant tracking systems before a human ever sees them.",
      },
      {
        name: "LinkedIn Optimization",
        description:
          "Profile rewrites that improve recruiter search visibility and personal credibility.",
      },
      {
        name: "Career Guidance",
        description:
          "One-on-one sessions to clarify direction, salary expectations and next career moves.",
      },
      {
        name: "Interview Preparation",
        description:
          "Mock interviews and feedback for local and international roles, including remote positions.",
      },
    ],
    outcomes: [
      "ATS-tested document formatting",
      "Tailored to specific job descriptions",
      "Used for local and remote/diaspora roles",
    ],
  },
  {
    slug: "business-technology",
    icon: "server",
    name: "Business Technology",
    shortName: "Business Technology",
    eyebrow: "Operate",
    summary:
      "The infrastructure and advisory layer that keeps everything else — your site, mail and systems — running reliably.",
    description:
      "Domains, hosting, business email and the strategic advice to tie it all together. This is the unglamorous layer that, when it's wrong, breaks everything else — so we treat it with the same care as the visible work.",
    subServices: [
      {
        name: "Email Setup",
        description:
          "Professional @yourbusiness email on Google Workspace or Microsoft 365, configured properly the first time.",
      },
      {
        name: "Domain Registration",
        description:
          "Local .co.zw and international domain registration, DNS management and renewals handled for you.",
      },
      {
        name: "Hosting Solutions",
        description:
          "Fast, secure hosting sized to your traffic, with backups and uptime monitoring included.",
      },
      {
        name: "IT Consultancy",
        description:
          "Independent advice on the right tools and systems for your size and budget — no vendor bias.",
      },
      {
        name: "Digital Transformation",
        description:
          "A staged roadmap for moving manual processes onto digital systems without disrupting operations.",
      },
    ],
    outcomes: [
      "Vendor-neutral recommendations",
      "Documented setup, handed over clearly",
      "Ongoing monitoring available",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return serviceCategories.find((s) => s.slug === slug);
}
