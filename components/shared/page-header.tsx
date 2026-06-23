import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

type Crumb = { label: string; href?: string };

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
};

export function PageHeader({ eyebrow, title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-night-200 pb-16 pt-36 text-mist-50 md:pb-20 md:pt-44">
      <div className="absolute inset-0 bg-grid-dark [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-fade opacity-50" />
      <div className="container relative z-10">
        {breadcrumbs && (
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-mist-300/55">
            <Link href="/" className="hover:text-mist-50">
              Home
            </Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-mist-50">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-mist-300/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <Reveal>
          <span className="mono-label text-copper-200">{eyebrow}</span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-balance md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-balance leading-relaxed text-mist-300/80">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
