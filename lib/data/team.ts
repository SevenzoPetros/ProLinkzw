export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Tinashe Mukamuri",
    role: "Founder & Managing Director",
    bio: "Started ProLinkzw after seeing how many capable SMEs were losing business simply because they were hard to find online. Leads strategy and client partnerships.",
    initials: "TM",
  },
  {
    name: "Chiedza Nyathi",
    role: "Head of Web Engineering",
    bio: "Leads the development team across websites, e-commerce builds and custom web applications. Believes most business software is more complicated than it needs to be.",
    initials: "CN",
  },
  {
    name: "Tapiwa Dube",
    role: "Creative & Brand Director",
    bio: "Oversees identity, print and social design work, making sure every brand we touch looks deliberate rather than default.",
    initials: "TD",
  },
  {
    name: "Ruvimbo Chitemerere",
    role: "Digital Marketing Lead",
    bio: "Runs paid and organic campaigns across Meta and Google, with a personal rule that every campaign has to justify its budget in the numbers, not the vibes.",
    initials: "RC",
  },
  {
    name: "Kudakwashe Manyowa",
    role: "Career Services Lead",
    bio: "A former HR recruiter who now writes CVs from the other side of the desk, focused on getting candidates past screening software and into the room.",
    initials: "KM",
  },
  {
    name: "Privilege Sibanda",
    role: "Systems & Hosting Lead",
    bio: "Keeps domains, email and hosting running quietly in the background, and is the first call when something that 'always just worked' suddenly doesn't.",
    initials: "PS",
  },
];

export const coreValues = [
  {
    title: "Plain-language delivery",
    description:
      "We explain what we're building and why in terms a business owner can act on, not jargon that protects the agency.",
  },
  {
    title: "Built for local reality",
    description:
      "Designs and systems account for Zimbabwean connectivity, payment behaviour and customer habits — not generic global assumptions.",
  },
  {
    title: "Outcomes over output",
    description:
      "A delivered website or campaign isn't the finish line. We track whether it actually moved leads, sales or hires.",
  },
  {
    title: "Honest scoping",
    description:
      "If something won't help your business yet, we'll say so — even if it means a smaller invoice today.",
  },
];
