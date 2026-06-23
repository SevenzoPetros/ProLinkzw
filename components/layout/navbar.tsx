"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, ArrowUpRight } from "lucide-react";
import { mainNav } from "@/lib/site-config";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Every page opens with a dark navy header band the navbar sits on top of.
  // While unscrolled, the navbar is transparent over that dark band, so the
  // logo needs the dark-background lockup for contrast. Once scrolled past
  // it, the navbar gets a frosted background matching the active theme.
  const logoVariant = !scrolled ? "dark" : resolvedTheme === "dark" ? "dark" : "light";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink/8 bg-mist-50/85 backdrop-blur-md dark:border-white/8 dark:bg-night-200/85"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="ProLinkzw Digital home">
          <Logo variant={logoVariant} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {mainNav.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors",
                  scrolled
                    ? "text-ink-muted hover:text-ink dark:text-mist-300/80 dark:hover:text-mist-50"
                    : "text-mist-300/80 hover:text-mist-50",
                  active && (scrolled ? "text-ink dark:text-mist-50" : "text-mist-50"),
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-copper-400" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle className={scrolled ? undefined : "text-mist-50 hover:bg-white/10"} />
          <Button asChild variant="primary" size="md">
            <Link href="/contact">
              Get a free consult
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle className={scrolled ? undefined : "text-mist-50 hover:bg-white/10"} />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className={scrolled ? undefined : "text-mist-50 hover:bg-white/10"}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <Logo variant="dark" />
              <nav className="mt-4 flex flex-1 flex-col gap-1">
                {mainNav.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-lg px-3 py-3 font-display text-lg font-medium text-mist-100 transition-colors hover:bg-white/5"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <Button asChild variant="primary" size="lg" className="w-full">
                  <Link href="/contact">
                    Get a free consult
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

