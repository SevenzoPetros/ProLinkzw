export type PortfolioCategory = "website" | "branding" | "marketing" | "case-study";

export type PortfolioItem = {
  slug: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  industry: string;
  summary: string;
  challenge: string;
  approach: string;
  result: string;
  stats: { label: string; value: string }[];
  image: string;
  year: string;
  services: string[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "savanna-fresh-grocers",
    title: "Online store for a 3-branch grocery chain",
    client: "Savanna Fresh Grocers",
    category: "website",
    industry: "Retail & FMCG",
    summary:
      "An e-commerce platform that lets a 3-branch grocery chain take orders online and route them to the nearest branch for same-day delivery.",
    challenge:
      "Savanna Fresh had three physical branches across Gweru but no way to capture online orders — customers were calling branches directly and orders were getting lost.",
    approach:
      "We built a branch-aware online store with live stock per location, WhatsApp order confirmations, and a simple dashboard staff could manage without technical training.",
    result:
      "Online orders now account for a meaningful share of daily revenue, with staff reporting far fewer missed or duplicated orders.",
    stats: [
      { label: "Increase in weekly orders", value: "61%" },
      { label: "Order errors reduced", value: "80%" },
      { label: "Launch timeline", value: "5 weeks" },
    ],
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    services: ["E-Commerce Stores", "Web Applications", "Hosting Solutions"],
  },
  {
    slug: "zimcraft-furniture",
    title: "Corporate website for a furniture manufacturer",
    client: "ZimCraft Furniture",
    category: "website",
    industry: "Manufacturing",
    summary:
      "A corporate site that turned a workshop known mostly by word-of-mouth into a credible supplier for hotel and office furniture tenders.",
    challenge:
      "ZimCraft had strong craftsmanship but no digital presence, which was costing them larger corporate and tender contracts that required a verifiable web profile.",
    approach:
      "We built a catalogue-style site with a downloadable company profile, project gallery and a quote-request flow tailored to bulk and contract orders.",
    result:
      "The business was shortlisted for two hotel-furnishing tenders within the first quarter of launch, citing the website as part of their credibility assessment.",
    stats: [
      { label: "Tender shortlist", value: "2 in Q1" },
      { label: "Quote requests / month", value: "34" },
    ],
    image:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1600&auto=format&fit=crop",
    year: "2024",
    services: ["Business Websites", "Company Profiles"],
  },
  {
    slug: "nyasha-legal",
    title: "Brand identity for a boutique law firm",
    client: "Nyasha & Partners",
    category: "branding",
    industry: "Professional Services",
    summary:
      "A full identity system — logo, letterheads, signage and a company profile — for a newly formed legal practice.",
    challenge:
      "Three partners leaving a larger firm needed to look established immediately to retain corporate clients who were following them.",
    approach:
      "We developed a restrained, confident mark with a navy-and-brass palette, applied across stationery, signage and a printed company profile delivered before their launch date.",
    result:
      "The firm retained 90% of clients who moved with the partners, several of whom cited the professional materials as reassurance during the transition.",
    stats: [
      { label: "Client retention", value: "90%" },
      { label: "Touchpoints designed", value: "12" },
    ],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
    year: "2024",
    services: ["Logo Design", "Corporate Identity", "Company Profiles"],
  },
  {
    slug: "harare-bites",
    title: "Logo & menu design for a casual dining brand",
    client: "Harare Bites",
    category: "branding",
    industry: "Food & Beverage",
    summary:
      "A playful but premium identity and printed menu system for a casual dining restaurant aiming to compete with established chains.",
    challenge:
      "The restaurant's existing branding looked inconsistent across signage, menus and packaging, undermining a strong product.",
    approach:
      "We unified the identity around a single mark, a warm two-colour palette and a menu layout designed to highlight their best-margin dishes.",
    result:
      "Average order value increased after the new menu layout repositioned signature dishes, and the brand now reads consistently from signage to delivery packaging.",
    stats: [
      { label: "Avg. order value", value: "+18%" },
      { label: "Touchpoints unified", value: "9" },
    ],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    services: ["Logo Design", "Flyers & Posters", "Social Media Graphics"],
  },
  {
    slug: "kutenda-fitness",
    title: "Social media growth for a fitness studio",
    client: "Kutenda Fitness Studio",
    category: "marketing",
    industry: "Health & Wellness",
    summary:
      "A content and paid-ads engine that took a single-location gym from word-of-mouth growth to a consistent stream of trial sign-ups.",
    challenge:
      "Kutenda had passionate trainers and good word-of-mouth, but inconsistent posting and no paid strategy meant growth had plateaued.",
    approach:
      "We introduced a structured content calendar, short-form trainer-led video, and small always-on Facebook and Instagram ad budgets targeted by suburb.",
    result:
      "Trial class bookings grew steadily month over month, with social channels becoming the studio's top acquisition source.",
    stats: [
      { label: "Trial bookings", value: "+140%" },
      { label: "Cost per lead", value: "-46%" },
      { label: "Campaign length", value: "6 months" },
    ],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    services: ["Facebook Marketing", "Instagram Marketing", "Content Creation"],
  },
  {
    slug: "mukoma-agro",
    title: "Google Business & lead generation for an agro-dealer",
    client: "Mukoma Agro Supplies",
    category: "marketing",
    industry: "Agriculture",
    summary:
      "An optimised Google Business presence and a simple lead form that turned local search traffic into walk-in and phone enquiries.",
    challenge:
      "Despite being one of the larger agro-input suppliers in their district, Mukoma Agro was invisible on Google Maps and missing seasonal search traffic entirely.",
    approach:
      "We rebuilt their Google Business profile, ran a structured review campaign, and stood up a lightweight lead-capture page ahead of planting season.",
    result:
      "Profile views and direction requests rose sharply ahead of the planting season, translating into measurable foot traffic increases at their busiest branch.",
    stats: [
      { label: "Profile views", value: "+210%" },
      { label: "Direction requests", value: "+95%" },
    ],
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop",
    year: "2024",
    services: ["Google Business Optimization", "Lead Generation"],
  },
  {
    slug: "vimbai-consulting-case-study",
    title: "From spreadsheets to a client portal",
    client: "Vimbai Consulting Group",
    category: "case-study",
    industry: "Professional Services",
    summary:
      "A custom web application that replaced manual spreadsheet tracking with a client-facing portal for project status and document sharing.",
    challenge:
      "A 12-person consulting firm was managing client deliverables across scattered spreadsheets and email threads, creating version confusion and missed deadlines.",
    approach:
      "We scoped and built a lightweight client portal — project timelines, document uploads and status updates — integrated with their existing email workflow rather than replacing it outright.",
    result:
      "Internal teams report significantly less time spent compiling status updates, and clients now have a single place to check progress instead of emailing for updates.",
    stats: [
      { label: "Status-update time saved", value: "~6 hrs/week" },
      { label: "Active client accounts", value: "40+" },
      { label: "Build timeline", value: "9 weeks" },
    ],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
    year: "2024",
    services: ["Web Applications", "IT Consultancy", "Digital Transformation"],
  },
  {
    slug: "tariro-cosmetics",
    title: "E-commerce relaunch for a beauty brand",
    client: "Tariro Cosmetics",
    category: "case-study",
    industry: "Beauty & Retail",
    summary:
      "A full relaunch of an underperforming online store, rebuilt around mobile checkout speed and a simplified product catalogue.",
    challenge:
      "An existing online store had a high cart-abandonment rate, slow load times on mobile, and no integration with the brand's WhatsApp-based customer service.",
    approach:
      "We rebuilt the storefront on a faster stack, cut the checkout from five steps to two, and connected order confirmations directly into their WhatsApp Business workflow.",
    result:
      "Cart abandonment dropped substantially and mobile checkout completion improved, with the brand now processing the majority of orders without manual follow-up.",
    stats: [
      { label: "Cart abandonment", value: "-37%" },
      { label: "Mobile load time", value: "1.8s" },
      { label: "Orders via WhatsApp flow", value: "70%" },
    ],
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1600&auto=format&fit=crop",
    year: "2025",
    services: ["E-Commerce Stores", "Maintenance & Support"],
  },
];

export function getPortfolioBySlug(slug: string) {
  return portfolioItems.find((p) => p.slug === slug);
}

export const portfolioFilters: { label: string; value: PortfolioCategory | "all" }[] = [
  { label: "All Work", value: "all" },
  { label: "Websites", value: "website" },
  { label: "Branding & Design", value: "branding" },
  { label: "Marketing Campaigns", value: "marketing" },
  { label: "Case Studies", value: "case-study" },
];
