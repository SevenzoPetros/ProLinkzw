import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-night-200 text-mist-50">
      <div className="absolute inset-0 bg-grid-dark opacity-50" />
      <div className="container relative z-10 flex flex-col items-start py-24">
        <span className="mono-label text-copper-200">404</span>
        <h1 className="mt-4 max-w-lg font-display text-3xl font-bold leading-tight md:text-4xl">
          This page doesn&apos;t exist — but your project still can.
        </h1>
        <p className="mt-4 max-w-md text-mist-300/75">
          The page you&apos;re looking for may have moved or never existed. Head back home or get in touch.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to homepage
          </Link>
        </Button>
      </div>
    </section>
  );
}
