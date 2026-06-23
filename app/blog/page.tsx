import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { BlogList } from "@/components/sections/blog-list";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Technology, Marketing & Career Insights",
  description:
    "Practical articles on technology, digital marketing, career guidance and SME growth from the ProLinkzw Digital team, written for Zimbabwean businesses and professionals.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Practical writing for Zimbabwean businesses and professionals"
        description="No filler. Each article exists because a client asked us the same question more than once."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="section-pad bg-mist dark:bg-night-200">
        <div className="container">
          <BlogList />
        </div>
      </section>
    </>
  );
}
