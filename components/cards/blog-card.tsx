import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/data/blog";
import { Badge } from "@/components/ui/badge";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col gap-4 rounded-2xl border border-ink/8 bg-mist-50 p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-copper-400/40 hover:shadow-card-hover dark:border-white/8 dark:bg-night-100"
    >
      <div className="flex items-center justify-between">
        <Badge variant="teal">{post.category}</Badge>
        <ArrowUpRight className="h-5 w-5 text-ink-soft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper-500 dark:text-mist-300/40 dark:group-hover:text-copper-200" />
      </div>
      <h3 className="font-display text-lg font-semibold leading-snug text-ink dark:text-mist-50">
        {post.title}
      </h3>
      <p className="flex-1 text-sm leading-relaxed text-ink-muted dark:text-mist-300/75">{post.excerpt}</p>
      <div className="flex items-center gap-4 border-t border-ink/8 pt-4 text-xs text-ink-soft dark:border-white/8 dark:text-mist-300/55">
        <span>{formatDate(post.date)}</span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {post.readTime}
        </span>
      </div>
    </Link>
  );
}
