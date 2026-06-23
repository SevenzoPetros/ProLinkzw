"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data/process";
import { SectionHeading } from "@/components/shared/section-heading";

export function ProcessTimeline() {
  return (
    <section className="section-pad bg-mist dark:bg-night-200">
      <div className="container">
        <SectionHeading
          eyebrow="How we work"
          title="A five-step process, the same for every project"
          description="Whether it's a five-page website or a full brand and marketing engagement, the structure stays the same — only the scope changes."
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-16">
          <div className="absolute left-[27px] top-2 hidden h-[calc(100%-1rem)] w-px bg-ink/10 md:left-1/2 md:block dark:bg-white/10" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ originY: 0 }}
            className="absolute left-[27px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-copper-400 via-teal-400 to-teal-400 md:left-1/2 md:block"
          />

          <div className="flex flex-col gap-12 md:gap-14">
            {processSteps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.step}
                  className={`relative flex flex-col items-center gap-4 md:flex-row md:items-center ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-mist bg-copper-400 font-display text-sm font-bold text-white dark:border-night-200 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                    {step.step}
                  </span>

                  <div className={`w-full md:w-1/2 ${isEven ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="rounded-2xl border border-ink/8 bg-mist-50 p-6 shadow-card dark:border-white/8 dark:bg-night-100"
                    >
                      <span className="font-mono text-xs font-medium text-copper-500 dark:text-copper-200">
                        {step.step}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-semibold text-ink dark:text-mist-50">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted dark:text-mist-300/75">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
