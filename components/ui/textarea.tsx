import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[140px] w-full rounded-xl border border-ink/12 bg-mist-50 px-4 py-3 text-sm text-ink placeholder:text-ink-soft transition-colors",
        "focus-visible:border-copper-400",
        "dark:border-white/12 dark:bg-night-100 dark:text-mist-50 dark:placeholder:text-mist-300/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

export { Textarea };
