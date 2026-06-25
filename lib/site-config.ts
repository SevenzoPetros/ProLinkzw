export const siteConfig = {
  name: "ProLinkzw Digital",
  shortName: "ProLinkzw",
  domain: "https://www.prolinkzw.co.zw",
  tagline: "You imagine, we design.",
  description:
    "ProLinkzw Digital is Zimbabwe's technology and digital transformation partner — helping SMEs establish, automate, market and grow their businesses through modern websites, branding, digital marketing, career services and IT consultancy.",
  locale: "en_ZW",
  founded: "2021",
  address: {
    street: "Gweru, Zimbabwe, On-site Meetings & consultations - available by appointment",
    city: "",
    country: "",
    region: "",
  },
  contact: {
    whatsapp: "+263711802386",
    whatsapp2: "+263713860948",
    whatsappDisplay: "+263 71 180 2386",
    whatsappDisplay2: "+263 71 386 0948",
    email: "info@prolinkzw.co.zw",
    supportEmail: "support@prolinkzw.co.zw",
    phone: "+263711802386",
    phone2: "+263713860948",
  },
  social: {
    facebook: "",
    instagram: "https://instagram.com/prolinkzw",
    linkedin: "https://www.linkedin.com/company/prolinkzw",
    twitter: "https://x.com/prolinkzw",
  },
  stats: {
    projectsDelivered: 180,
    clientsServed: 95,
    yearsActive: 5,
    teamMembers: 14,
    satisfactionRate: 98,
  },
  keywords: [
    "Website Design Zimbabwe",
    "Web Development Zimbabwe",
    "Graphic Design Zimbabwe",
    "Digital Marketing Zimbabwe",
    "CV Writing Zimbabwe",
    "Social Media Management Zimbabwe",
    "SME Technology Solutions Zimbabwe",
    "IT Consultancy Gweru",
    "Digital Transformation Zimbabwe",
  ],
};

export type NavLink = {
  label: string;
  href: string;
};

export const mainNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
