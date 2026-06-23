"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BlogCard } from "@/components/cards/blog-card";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { blogPosts, blogCategories, type BlogCategory } from "@/lib/data/blog";

export function BlogList() {
  const [active, setActive] = useState<BlogCategory | "all">("all");
  const filtered = active === "all" ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <Tabs value={active} onValueChange={(v) => setActive(v as BlogCategory | "all")}>
      <TabsList>
        <TabsTrigger value="all">All posts</TabsTrigger>
        {blogCategories.map((c) => (
          <TabsTrigger key={c} value={c}>
            {c}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value={active}>
        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {filtered.map((post) => (
            <RevealItem key={post.slug}>
              <BlogCard post={post} />
            </RevealItem>
          ))}
        </RevealGroup>
      </TabsContent>
    </Tabs>
  );
}
