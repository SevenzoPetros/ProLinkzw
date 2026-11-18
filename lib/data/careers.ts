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
