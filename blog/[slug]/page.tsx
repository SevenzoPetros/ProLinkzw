import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/components/cards/blog-card";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog";
import { buildMetadata, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const more = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const fallbackMore = more.length > 0 ? more : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: post.title,
              description: post.excerpt,
              path: `/blog/${post.slug}`,
              datePublished: post.date,
              author: post.author,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Blog", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ]),
          ),
        }}
      />

      <section className="relative overflow-hidden bg-night-200 pb-16 pt-36 text-mist-50 md:pb-20 md:pt-44">
        <div className="absolute inset-0 bg-grid-dark [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="container relative z-10 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-mist-300/70 hover:text-mist-50">
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
          <Reveal className="mt-6">
            <Badge variant="copper">{post.category}</Badge>
            <h1 className="mt-4 font-display text-3xl font-bold leading-[1.18] tracking-tight text-balance md:text-4xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-mist-300/70">
              <span>{post.author}, {post.authorRole}</span>
              <span className="text-white/20">/</span>
              <span>{formatDate(post.date)}</span>
              <span className="text-white/20">/</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <article className="section-pad bg-mist dark:bg-night-200">
        <div className="container max-w-3xl space-y-6">
          {post.content.map((paragraph, i) => (
            <Reveal key={i} delay={Math.min(i * 0.04, 0.2)}>
              <p className="text-base leading-relaxed text-ink-muted dark:text-mist-300/80">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </article>

      {fallbackMore.length > 0 && (
        <section className="section-pad bg-mist-100 dark:bg-night-100">
          <div className="container">
            <p className="mono-label text-ink-soft dark:text-mist-300/50">Keep reading</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {fallbackMore.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
