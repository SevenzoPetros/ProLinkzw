import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin, Phone, Facebook, Linkedin } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Get a Free Consultation",
  description:
    "Get in touch with ProLinkzw Digital via WhatsApp, email or our contact form. Based in Gweru, Zimbabwe, serving SMEs locally and internationally.",
  path: "/contact",
});

export default function ContactPage() {
  const waLink = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hi ProLinkzw, I'd like to find out more about your services.",
  )}`;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project"
        description="A free 20-minute consultation, no obligation. Reach us directly, or fill in the form and we'll come back to you within one business day."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="section-pad bg-mist dark:bg-night-200">
        <div className="container grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <Reveal className="rounded-2xl border border-ink/8 bg-mist-50 p-7 shadow-card dark:border-white/8 dark:bg-night-100 md:p-9">
            <h2 className="font-display text-xl font-semibold text-ink dark:text-mist-50">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-ink-muted dark:text-mist-300/75">
              Tell us a little about your business and what you need — we&apos;ll follow up with next steps.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={0.05} className="rounded-2xl border border-teal-400/20 bg-teal-50 p-7 dark:bg-teal-400/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-teal-500 dark:bg-night-200 dark:text-teal-200">
                <MessageCircle className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-ink dark:text-mist-50">
                Prefer WhatsApp?
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted dark:text-mist-300/80">
                Fastest way to reach us — typical reply time under 2 hours on business days.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:underline dark:text-teal-200"
              >
                {siteConfig.contact.whatsappDisplay}
              </a>
            </Reveal>

            <Reveal delay={0.1} className="rounded-2xl border border-ink/8 bg-mist-50 p-7 shadow-card dark:border-white/8 dark:bg-night-100">
              <p className="mono-label text-ink-soft dark:text-mist-300/50">Other ways to reach us</p>
              <ul className="mt-5 space-y-5">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-copper-500 dark:text-copper-200" />
                  <div>
                    <p className="text-sm font-medium text-ink dark:text-mist-50">Email</p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm text-ink-muted hover:text-copper-500 dark:text-mist-300/75 dark:hover:text-copper-200"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-copper-500 dark:text-copper-200" />
                  <div>
                    <p className="text-sm font-medium text-ink dark:text-mist-50">Phone</p>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                      className="text-sm text-ink-muted hover:text-copper-500 dark:text-mist-300/75 dark:hover:text-copper-200"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper-500 dark:text-copper-200" />
                  <div>
                    <p className="text-sm font-medium text-ink dark:text-mist-50">Office</p>
                    <p className="text-sm text-ink-muted dark:text-mist-300/75">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.city}, {siteConfig.address.country}
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-6 flex items-center gap-3 border-t border-ink/8 pt-5 dark:border-white/8">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink-muted transition-colors hover:border-copper-400 hover:text-copper-500 dark:border-white/10 dark:text-mist-300/80"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink-muted transition-colors hover:border-copper-400 hover:text-copper-500 dark:border-white/10 dark:text-mist-300/80"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
