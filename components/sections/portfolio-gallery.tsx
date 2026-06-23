"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PortfolioCard } from "@/components/cards/portfolio-card";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { portfolioItems, portfolioFilters, type PortfolioCategory } from "@/lib/data/portfolio";

export function PortfolioGallery() {
  const [active, setActive] = useState<PortfolioCategory | "all">("all");

  const filtered =
    active === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === active);

  return (
    <div>
      <Tabs value={active} onValueChange={(v) => setActive(v as PortfolioCategory | "all")}>
        <TabsList>
          {portfolioFilters.map((filter) => (
            <TabsTrigger key={filter.value} value={filter.value}>
              {filter.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={active}>
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {filtered.map((item) => (
              <RevealItem key={item.slug}>
                <PortfolioCard item={item} />
              </RevealItem>
            ))}
          </RevealGroup>
          {filtered.length === 0 && (
            <p className="py-16 text-center text-sm text-ink-muted dark:text-mist-300/70">
              No projects in this category yet — check back soon.
            </p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
