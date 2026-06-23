export type BlogCategory = "Technology" | "Marketing" | "Career Guidance" | "SME Growth";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-your-sme-needs-a-website-not-just-a-facebook-page",
    title: "Why your SME needs a website, not just a Facebook page",
    excerpt:
      "A Facebook page is a good start, but it isn't a substitute for a website you control. Here's the practical difference it makes.",
    category: "SME Growth",
    date: "2026-05-12",
    readTime: "6 min read",
    author: "Tinashe Mukamuri",
    authorRole: "Founder & Managing Director",
    content: [
      "Most Zimbabwean SMEs we meet have a Facebook page long before they have a website, and that's reasonable — it's free, fast to set up, and customers are already there. The problem shows up later, once the business starts growing.",
      "A Facebook page is rented space. The platform decides what your page looks like, how it ranks in search, which posts get shown, and whether your account stays accessible at all. A website is owned space — you control the design, the domain, the data you collect, and what happens to it.",
      "There's also a credibility gap. When a customer is deciding between you and a competitor, a proper domain (yourbusiness.co.zw) and a fast, professional site signal stability in a way a page alone doesn't — particularly for B2B sales, tenders, and any deal above a certain size.",
      "None of this means abandon social media. The two should work together: social platforms for discovery and engagement, a website as the place that closes the sale and holds the information that matters — pricing, services, contact details, testimonials — in a format you control.",
      "The practical starting point is usually smaller than business owners expect: a five-page site with clear services, a contact path, and a handful of strong testimonials outperforms a twenty-page site that never gets finished.",
    ],
  },
  {
    slug: "ats-resume-screening-what-it-actually-checks",
    title: "ATS resume screening: what it actually checks (and what it doesn't)",
    excerpt:
      "Applicant tracking systems reject more CVs on formatting than on substance. Here's what the software is really looking at.",
    category: "Career Guidance",
    date: "2026-04-28",
    readTime: "5 min read",
    author: "Kudakwashe Manyowa",
    authorRole: "Career Services Lead",
    content: [
      "Most job seekers assume an ATS (Applicant Tracking System) is making a judgment about whether they're qualified. In reality, the software is mostly doing pattern matching: extracting text from your document and checking it against keywords from the job description.",
      "This means a strong candidate can be rejected for entirely mechanical reasons — a CV built in a table or text boxes that the parser can't read correctly, a PDF saved from a design tool that strips out text layers, or a skills section that uses different terminology than the job posting.",
      "What the software is genuinely checking: contact information in a parseable format, section headers it recognises (Experience, Education, Skills), keyword overlap with the job description, and sometimes formatting consistency like date ranges.",
      "What it is not checking: tone, personality, or anything you'd call 'fit' in a human sense. That judgment comes later, from a recruiter, once your CV has cleared the first filter.",
      "The practical fix is unglamorous: simple single-column formatting, standard section headers, and tailoring your skills language to mirror the specific job description for each application rather than sending one generic CV everywhere.",
    ],
  },
  {
    slug: "google-business-profile-mistakes-losing-you-customers",
    title: "5 Google Business Profile mistakes quietly losing you customers",
    excerpt:
      "If your business doesn't show up when someone searches nearby, you're losing customers before they ever reach your door.",
    category: "Marketing",
    date: "2026-04-15",
    readTime: "7 min read",
    author: "Ruvimbo Chitemerere",
    authorRole: "Digital Marketing Lead",
    content: [
      "Google Business Profile is the single highest-leverage, lowest-cost marketing tool most Zimbabwean SMEs aren't using properly. It's free, and it's often the first thing a potential customer sees before they ever visit your website.",
      "The first common mistake is an unclaimed or unverified listing — meaning anyone, including a competitor, can edit your business hours or location. The second is inconsistent business hours between Google, Facebook and your actual operating hours, which erodes trust the first time a customer arrives to a closed door.",
      "Third: no photos, or outdated ones. Listings with recent, real photos get meaningfully more direction requests and calls than listings with stock images or none at all. Fourth: ignoring reviews — both not asking happy customers for them, and not responding to negative ones, which is often more visible to potential customers than the review itself.",
      "Fifth, and most overlooked: not using Google Posts and the Q&A section, which are free real estate to answer the questions customers are already asking before they call.",
      "Fixing all five typically takes under a day of work and tends to show measurable results — more calls, more direction requests — within the first month.",
    ],
  },
  {
    slug: "choosing-between-shared-hosting-and-cloud-hosting-zimbabwe",
    title: "Shared hosting vs cloud hosting: what actually matters for a Zimbabwean SME",
    excerpt:
      "Hosting providers will sell you on specs you don't need. Here's what actually affects your site's speed and reliability.",
    category: "Technology",
    date: "2026-03-30",
    readTime: "6 min read",
    author: "Privilege Sibanda",
    authorRole: "Systems & Hosting Lead",
    content: [
      "Hosting decisions get oversold constantly, usually toward whatever plan has the highest margin for the provider rather than what the business actually needs. For most SME websites and online stores in Zimbabwe, the decision is simpler than the marketing suggests.",
      "Shared hosting is fine for brochure sites and low-traffic stores — a handful of pages, modest images, a few hundred visitors a day. The main risk is 'noisy neighbours': if another site on the same server gets a traffic spike, yours can slow down too.",
      "Cloud or VPS hosting becomes worth the extra cost once you have meaningful e-commerce traffic, need guaranteed uptime for a client-facing tool, or run a web application with a database that needs consistent performance.",
      "What matters more than the hosting tier in most cases: server location relative to your customers, whether a CDN is in front of your images, and whether backups are actually configured and tested — not just listed as a feature.",
      "Our rule of thumb: start on the simplest hosting that meets your current traffic, and treat upgrading as a response to real usage data rather than a hedge against hypothetical growth.",
    ],
  },
  {
    slug: "linkedin-profile-checklist-zimbabwe-professionals",
    title: "The 12-point LinkedIn profile checklist we use with every client",
    excerpt:
      "Most LinkedIn profiles are a digital CV nobody reads. Here's how to make yours a tool recruiters actually find.",
    category: "Career Guidance",
    date: "2026-03-18",
    readTime: "8 min read",
    author: "Kudakwashe Manyowa",
    authorRole: "Career Services Lead",
    content: [
      "LinkedIn search works differently from Google, and most professionals optimise for neither. Recruiters search by keyword combinations — job title, skill, sometimes location — so a profile needs to be readable by that search logic, not just by a human scrolling through it.",
      "The headline is the most under-used real estate on the platform. 'Marketing professional' tells a recruiter nothing searchable. 'Digital Marketing Specialist | Meta Ads & SEO | Harare' gives the search algorithm three things to match against.",
      "The About section should open with what you do and for whom, not a personality statement — save the personality for the interview. Experience entries should mirror CV best practice: achievements with numbers where possible, not just task lists.",
      "Beyond the obvious fields, the checklist we run includes: a professional photo with a plain background, a custom profile URL, skills ordered by relevance with the top three pinned, recommendations requested from the right people (not just anyone), and consistent activity — even occasional comments on industry posts keep a profile from looking dormant.",
      "None of this replaces the CV. It's a different surface with a different search logic, and treating it as a copy-paste of your CV is the single biggest mistake we see.",
    ],
  },
  {
    slug: "what-digital-transformation-means-for-a-10-person-business",
    title: "What 'digital transformation' actually means for a 10-person business",
    excerpt:
      "The phrase gets used for enterprise software rollouts costing millions. Here's the realistic, scaled-down version.",
    category: "SME Growth",
    date: "2026-02-27",
    readTime: "7 min read",
    author: "Tinashe Mukamuri",
    authorRole: "Founder & Managing Director",
    content: [
      "Digital transformation, as a phrase, gets attached to enterprise projects involving years of timeline and seven-figure budgets — which makes it sound irrelevant to a ten-person business running mostly on WhatsApp and spreadsheets. It isn't.",
      "At the scale of an SME, digital transformation usually means three to five specific changes: moving customer enquiries from scattered WhatsApp chats into a shared system, replacing a manual stock spreadsheet with something that updates in real time, automating the invoices and receipts that currently get typed from scratch each time.",
      "The sequencing matters more than the tools. We typically advise fixing the highest-friction manual process first — usually whatever is causing the most repeated errors or wasted hours — rather than trying to digitise everything simultaneously.",
      "A staged approach also protects the business from the real risk in transformation projects: disruption to operations that are currently working, even if inefficiently. Each change should be small enough to roll back if it doesn't fit how the team actually works.",
      "The end state isn't 'fully digital' as an abstract goal. It's specific: fewer manual errors, faster turnaround on customer requests, and decisions made from real numbers instead of memory.",
    ],
  },
  {
    slug: "ecommerce-checkout-mistakes-costing-zimbabwean-stores-sales",
    title: "The checkout mistakes costing Zimbabwean online stores real sales",
    excerpt:
      "Cart abandonment is rarely about price. It's almost always about friction at the exact moment someone is ready to pay.",
    category: "Technology",
    date: "2026-02-10",
    readTime: "6 min read",
    author: "Chiedza Nyathi",
    authorRole: "Head of Web Engineering",
    content: [
      "When an online store underperforms, the instinct is to blame pricing or product. In our experience rebuilding underperforming stores, the more common cause is friction in the last sixty seconds of the checkout — exactly when the customer has already decided to buy.",
      "The most common offender is mandatory account creation before checkout. Forcing a new password and email verification at the point of purchase loses a meaningful share of otherwise-committed buyers. A guest checkout option, with account creation offered afterward, consistently performs better.",
      "Second is payment method mismatch — building a checkout around card payments alone when a large share of customers want to pay via mobile money or on delivery. The checkout needs to reflect how people actually pay locally, not how a template assumes they pay.",
      "Third is load time on mobile. Most traffic to Zimbabwean e-commerce stores is mobile, often on inconsistent connections, and a checkout page loaded with unoptimised images will lose customers before the page even finishes rendering.",
      "Fourth, and easy to fix: unclear delivery cost and timeline shown only at the final step. Surfacing delivery cost earlier reduces the 'surprise fee' abandonment that shows up clearly in cart analytics.",
    ],
  },
  {
    slug: "instagram-vs-facebook-where-should-your-business-focus",
    title: "Instagram vs Facebook: where should your business actually focus?",
    excerpt:
      "Running both platforms well with a limited budget is harder than running one properly. Here's how to choose.",
    category: "Marketing",
    date: "2026-01-22",
    readTime: "5 min read",
    author: "Ruvimbo Chitemerere",
    authorRole: "Digital Marketing Lead",
    content: [
      "We get asked constantly whether a business should be on Facebook, Instagram, or both — and the honest answer is that running both platforms well usually beats running both platforms badly, but most SME budgets only support doing one properly at a time.",
      "Facebook still leads for reach and for local community-group style discovery in Zimbabwe, particularly for businesses serving a broad age range or operating in service categories like trades, retail and local food. Marketplace and group-sharing behaviour also still drive meaningful organic reach there.",
      "Instagram performs better for visually-led brands — fashion, beauty, food presentation, interior and design-led products — and tends to skew toward a younger, more urban audience actively looking for visual inspiration rather than passively scrolling.",
      "Our usual recommendation for a limited budget: pick the platform that matches your product's visual strength and your customer's age range as the primary channel, run it consistently, and treat the second platform as a lighter cross-post rather than a second full strategy.",
      "Once a business has the budget and content pipeline to support both properly — typically once social is contributing a meaningful share of leads — splitting attention across both becomes worth revisiting.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogCategories: BlogCategory[] = [
  "Technology",
  "Marketing",
  "Career Guidance",
  "SME Growth",
];
