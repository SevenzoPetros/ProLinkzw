import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em]",
  {
    variants: {
      variant: {
        copper: "border-copper-400/30 bg-copper-50 text-copper-500 dark:bg-copper-400/10 dark:text-copper-200",
        teal: "border-teal-400/30 bg-teal-50 text-teal-500 dark:bg-teal-400/10 dark:text-teal-100",
        neutral: "border-ink/12 bg-ink/5 text-ink-muted dark:border-white/12 dark:bg-white/5 dark:text-mist-300/80",
        outline: "border-mist-50/30 bg-transparent text-mist-50",
      },
    },
    defaultVariants: {
      variant: "copper",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
