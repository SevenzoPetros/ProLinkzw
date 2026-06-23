"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NetworkGraphic } from "@/components/shared/network-graphic";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-night-200 text-mist-50">
      <div className="absolute inset-0 bg-grid-dark [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-fade opacity-60" />

      <div className="container relative z-10 grid items-center gap-16 py-24 md:py-32 lg:grid-cols-[1.05fr_0.95fr] lg:py-36">
        <div>
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <span className="mono-label inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-copper-200">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-copper-300" />
              Zimbabwe → Global Digital Partner
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="mt-7 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-[4rem]"
          >
            You imagine,
            <br />
            <span className="text-copper-300">we design.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-mist-300/80"
          >
            We bring your ideas into reality through cutting-edge websites,
            digital marketing, branding and technology solutions tailored
            for Zimbabwean businesses.
          </motion.p>

          <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Get a free consultation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/15 text-mist-50 hover:border-copper-300 hover:text-copper-200">
              <Link href="/portfolio">
                <PlayCircle className="h-4 w-4" />
                View our work
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-mist-300/60"
          >
            <span className="font-mono text-xs uppercase tracking-[0.16em]">Trusted across</span>
            <span>Retail</span>
            <span className="text-white/15">/</span>
            <span>Hospitality</span>
            <span className="text-white/15">/</span>
            <span>Professional Services</span>
            <span className="text-white/15">/</span>
            <span>Agriculture</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <NetworkGraphic className="w-full" />
        </motion.div>
      </div>
    </section>
  );
}
