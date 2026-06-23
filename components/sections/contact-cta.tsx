import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";

export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-night-200 py-20 text-mist-50 md:py-28">
      <div className="absolute inset-0 bg-radial-fade opacity-50" />
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="container relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <span className="mono-label text-copper-200">Let&apos;s build something</span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-balance md:text-4xl">
            Tell us what&apos;s slowing your business down — we&apos;ll tell you what it takes to fix it.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-balance text-mist-300/80">
            A free 20-minute consultation, no obligation. We&apos;ll scope your project and give
            you a fixed timeline and price before you commit to anything.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">
              Get a free consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/15 text-mist-50 hover:border-teal-300 hover:text-teal-200"
          >
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              Message us on WhatsApp
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
