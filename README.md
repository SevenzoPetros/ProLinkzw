# ProLinkzw Digital — Website

A production-grade marketing website for **ProLinkzw Digital**, built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Radix UI primitives and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # ESLint
```

Requires Node.js 18.18+ (Node 20/22 recommended).

## Tech stack

- **Next.js 15** (App Router, Server Components, `generateStaticParams`, `generateMetadata`)
- **React 19** + **TypeScript** (strict mode)
- **Tailwind CSS 3** with a custom design-token theme (see `tailwind.config.ts`)
- **Radix UI** primitives (Accordion, Dialog, Tabs, Label, Separator) wrapped as local shadcn-style components in `components/ui`
- **Framer Motion** for page transitions, scroll reveals and the animated counters
- **next-themes** for light/dark mode
- **lucide-react** for icons
- Fonts are self-hosted via `@fontsource` (Space Grotesk, Plus Jakarta Sans, JetBrains Mono) — no runtime calls to Google Fonts, so the site builds and renders identically in network-restricted environments (CI, intranets, etc.)

## Project structure

```
app/                    Routes (App Router)
  page.tsx              Homepage
  about/                About page
  services/             Services overview + /services/[slug] detail pages
  portfolio/             Portfolio gallery + /portfolio/[slug] case studies
  careers/               Careers overview + /careers/[slug] job detail
  blog/                  Blog listing + /blog/[slug] articles
  contact/               Contact page (working form -> /api/contact)
  faq/, privacy/, terms/ Static informational pages
  api/contact/           Form submission endpoint (validates + logs; wire to email/CRM)
  api/og/                Dynamic Open Graph image generator (next/og)
  sitemap.ts             Dynamic sitemap (all static + dynamic routes)
  robots.ts              robots.txt
  layout.tsx             Root layout: fonts, theme provider, nav/footer, organization JSON-LD

components/
  layout/                Navbar, Footer, ThemeToggle, WhatsAppButton, PageTransition
  sections/               Homepage + page sections (Hero, Stats, FAQ, ProcessTimeline, etc.)
  cards/                  ServiceCard, PortfolioCard, TestimonialCard, BlogCard, CareerCard, TeamCard
  shared/                 Reveal/RevealGroup (scroll animation), AnimatedCounter, SectionHeading,
                          PageHeader, Logo, NetworkGraphic (signature brand motif)
  ui/                     Local Radix-based primitives (button, card, accordion, tabs, input, etc.)

lib/
  data/                   All editable site content (services, portfolio, blog, team, careers, FAQs...)
  site-config.ts          Company name, contact details, social links, nav — edit this first
  seo.ts                  Metadata + JSON-LD builders (Organization, Service, Article, FAQ, JobPosting, Breadcrumb)
  utils.ts                cn() class-merging helper

public/logo/              Brand lockups (light-background and dark-background variants) + favicon mark
```

## Editing content

Almost everything on the site is data-driven — you generally don't need to touch JSX to update copy:

- **Company details, contact info, social links:** `lib/site-config.ts`
- **Services & sub-services:** `lib/data/services.ts`
- **Portfolio / case studies:** `lib/data/portfolio.ts`
- **Testimonials:** `lib/data/testimonials.ts`
- **Team & core values:** `lib/data/team.ts`
- **Blog posts:** `lib/data/blog.ts` (content is an array of paragraph strings — swap for MDX later if you want richer formatting)
- **Job openings / internships / freelance info:** `lib/data/careers.ts`
- **FAQs:** `lib/data/faqs.ts`
- **Process/timeline steps:** `lib/data/process.ts`

Adding a new portfolio item, blog post, service or job automatically creates its detail page and adds it to the sitemap — no routing changes needed.

## Brand logo usage

Two lockups live in `public/logo/`:

- `prolinkzw-light.png` — for light backgrounds (navbar/footer in light mode)
- `prolinkzw-dark.png` — for dark backgrounds (the dark hero/page-header band, dark mode, Open Graph images)

The `Logo` component (`components/shared/logo.tsx`) takes a `variant` of `"light"`, `"dark"`, or `"auto"` (switches with the site theme via CSS only, no flash). The navbar switches automatically between the dark lockup while transparent over a dark hero/page-header band, and the light or dark lockup once scrolled, based on the active theme — so contrast is always correct.

## Going to production

1. **Contact form:** `app/api/contact/route.ts` currently validates submissions and logs them. Wire it up to a real provider (Resend, SendGrid, a CRM webhook, etc.) before launch.
2. **Domain & metadata base:** update `siteConfig.domain` in `lib/site-config.ts` to your real domain — this feeds canonical URLs, the sitemap, robots.txt and Open Graph URLs.
3. **Analytics:** add your analytics snippet (Plausible, GA4, etc.) in `app/layout.tsx`.
4. **Images:** portfolio images currently reference Unsplash placeholders. Swap in real project photography in `lib/data/portfolio.ts` (and update `next.config.ts` `images.remotePatterns` if you host elsewhere, or move them into `public/` and use local paths).
5. Deploy to Vercel, or any Node hosting that supports Next.js 15 (the OG-image route uses the Node runtime, not Edge, so it works on any standard Node host).

## SEO & structured data included

- Per-page `generateMetadata` (titles, descriptions, canonical URLs, Open Graph, Twitter cards)
- JSON-LD: `Organization`/`ProfessionalService` (sitewide), `Service` (service detail pages), `Article` (blog posts), `JobPosting` (career detail pages), `FAQPage` (FAQ page), `BreadcrumbList` (detail pages)
- Dynamic `sitemap.xml` covering every static and dynamic route
- `robots.txt`
- Dynamic Open Graph image generation at `/api/og` (brand lockup + page title, used as the default OG image across the site)
