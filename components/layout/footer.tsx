import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { siteConfig } from "@/lib/site-config";
import { serviceCategories } from "@/lib/data/services";
import { Separator } from "@/components/ui/separator";

const company = [
  { label: "About us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-mist-50 dark:border-white/8 dark:bg-night-200">
      <div className="container section-pad !py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Logo variant="auto" className="md:[&_img]:h-11" />
            <p className="mt-5 text-sm leading-relaxed text-ink-muted dark:text-mist-300/75">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
                { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
                { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink-muted transition-colors hover:border-copper-400 hover:text-copper-500 dark:border-white/10 dark:text-mist-300/80 dark:hover:border-copper-200 dark:hover:text-copper-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mono-label text-ink-soft dark:text-mist-300/50">Services</p>
            <ul className="mt-4 space-y-3">
              {serviceCategories.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-ink-muted transition-colors hover:text-copper-500 dark:text-mist-300/80 dark:hover:text-copper-200"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label text-ink-soft dark:text-mist-300/50">Company</p>
            <ul className="mt-4 space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-ink-muted transition-colors hover:text-copper-500 dark:text-mist-300/80 dark:hover:text-copper-200"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label text-ink-soft dark:text-mist-300/50">Get in touch</p>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-sm text-ink-muted dark:text-mist-300/80">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-copper-500 dark:hover:text-copper-200"
                >
                  {siteConfig.contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-muted dark:text-mist-300/80">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-copper-500 dark:hover:text-copper-200">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-muted dark:text-mist-300/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                <span>
                  {siteConfig.address.street}
                  {siteConfig.address.city && `, ${siteConfig.address.city}`}
                  {siteConfig.address.country && `, ${siteConfig.address.country}`}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-ink-soft dark:text-mist-300/50">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-ink-soft dark:text-mist-300/50">
            <Link href="/privacy" className="hover:text-copper-500 dark:hover:text-copper-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-copper-500 dark:hover:text-copper-200">
              Terms of Service
            </Link>
            <span className="mono-label normal-case tracking-normal">Designed &amp; built by ProLinkzw</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
