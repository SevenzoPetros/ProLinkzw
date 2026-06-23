export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Tendai Marufu",
    role: "Founder",
    company: "Savanna Fresh Grocers",
    quote:
      "We went from taking orders over the phone to a proper online store in under two months. The team explained every step in plain language, which mattered because none of us are technical.",
    rating: 5,
    initials: "TM",
  },
  {
    name: "Rumbidzai Chikwava",
    role: "Managing Partner",
    company: "Nyasha & Partners",
    quote:
      "Our brand needed to look established the day we opened, not six months later. ProLinkzw delivered the full identity and printed materials before our launch date with zero drama.",
    rating: 5,
    initials: "RC",
  },
  {
    name: "Blessing Moyo",
    role: "Operations Manager",
    company: "Mukoma Agro Supplies",
    quote:
      "We had no idea our Google listing was costing us walk-in customers until they fixed it. Direction requests on Maps nearly doubled before the next planting season.",
    rating: 5,
    initials: "BM",
  },
  {
    name: "Anesu Sithole",
    role: "Recent Client",
    company: "CV & LinkedIn rewrite",
    quote:
      "I'd applied to over thirty roles with no responses. After the CV rewrite and the ATS fixes, I had three interview invitations in the first two weeks.",
    rating: 5,
    initials: "AS",
  },
  {
    name: "Farai Chidziva",
    role: "Director",
    company: "Vimbai Consulting Group",
    quote:
      "The client portal sounds like a small thing until you've spent years compiling status updates manually. It changed how our whole team works.",
    rating: 5,
    initials: "FC",
  },
  {
    name: "Nokutenda Gumbo",
    role: "Studio Owner",
    company: "Kutenda Fitness Studio",
    quote:
      "They treated our marketing budget like it was their own money — no wasted spend, clear monthly reporting, and trial bookings that actually grew.",
    rating: 5,
    initials: "NG",
  },
];
