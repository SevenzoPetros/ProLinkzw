export type JobType = "Full-time" | "Internship" | "Freelance";

export type JobOpening = {
  slug: string;
  title: string;
  department: string;
  type: JobType;
  location: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export const jobOpenings: JobOpening[] = [
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    department: "Web & Software",
    type: "Full-time",
    location: "Harare (hybrid)",
    summary:
      "Build and maintain client websites and web applications, working closely with design to ship clean, fast, accessible interfaces.",
    responsibilities: [
      "Implement responsive interfaces from design files for client websites and internal tools",
      "Maintain and improve existing client sites, including performance and accessibility fixes",
      "Collaborate with backend and design team members on new feature builds",
    ],
    requirements: [
      "1–3 years building production websites or web apps",
      "Strong HTML, CSS and modern JavaScript/TypeScript fundamentals",
      "Experience with a component-based framework (React, Vue, or similar)",
    ],
  },
  {
    slug: "social-media-strategist",
    title: "Social Media Strategist",
    department: "Digital Marketing",
    type: "Full-time",
    location: "Harare",
    summary:
      "Plan and execute content and paid campaigns across Facebook and Instagram for a portfolio of SME clients.",
    responsibilities: [
      "Build monthly content calendars aligned to each client's goals",
      "Manage and optimise paid Meta ad campaigns within set budgets",
      "Report on performance with clear, client-readable monthly summaries",
    ],
    requirements: [
      "2+ years managing business social media accounts professionally",
      "Working knowledge of Meta Ads Manager",
      "Strong written communication for both client reporting and ad copy",
    ],
  },
  {
    slug: "graphic-designer",
    title: "Graphic Designer",
    department: "Branding & Design",
    type: "Full-time",
    location: "Harare",
    summary:
      "Design brand identities, print collateral and social media graphics across a varied roster of SME clients.",
    responsibilities: [
      "Design logos, brand guidelines and supporting collateral for new clients",
      "Produce social media graphics and print materials against brand systems",
      "Prepare print-ready files for signage, flyers and company profiles",
    ],
    requirements: [
      "Solid portfolio across brand identity and print/digital design",
      "Proficiency in Adobe Illustrator and Photoshop or Figma equivalent",
      "Comfortable managing 3–5 concurrent client projects",
    ],
  },
  {
    slug: "career-services-consultant",
    title: "Career Services Consultant",
    department: "Career Services",
    type: "Freelance",
    location: "Remote (Zimbabwe)",
    summary:
      "Write and optimise CVs and LinkedIn profiles for clients across a range of industries, on a per-project basis.",
    responsibilities: [
      "Conduct client intake calls to gather career history and goals",
      "Write achievement-led, ATS-optimised CVs and cover letters",
      "Deliver LinkedIn profile rewrites and brief coaching notes",
    ],
    requirements: [
      "Background in HR, recruitment, or professional CV writing",
      "Strong English writing skills with attention to detail",
      "Able to turn around drafts within agreed deadlines",
    ],
  },
];

export const internshipProgram = {
  title: "ProLinkzw Internship Program",
  description:
    "A 3-month structured internship for recent graduates and final-year students across web development, design and digital marketing. Interns are paired with a senior team member and work on real client projects under supervision — not busywork.",
  tracks: ["Web Development", "Graphic Design", "Digital Marketing", "Career Services"],
  details: [
    "Open twice a year, intake announced on our blog and social channels",
    "Stipend provided for the duration of the program",
    "Strong performers are considered first for full-time openings",
  ],
};

export const freelanceInfo = {
  title: "Freelance & Project-Based Work",
  description:
    "We maintain a network of vetted freelance developers, designers, copywriters and marketers for overflow and specialist project work. If you have a strong portfolio and can deliver reliably against deadlines, we'd like to hear from you even without a current open role.",
  categories: [
    "Frontend & backend developers",
    "Brand and graphic designers",
    "Copywriters & content creators",
    "Photographers & videographers",
  ],
};
