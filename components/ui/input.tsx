import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-xl border border-ink/12 bg-mist-50 px-4 text-sm text-ink placeholder:text-ink-soft transition-colors",
        "focus-visible:border-copper-400",
        "dark:border-white/12 dark:bg-night-100 dark:text-mist-50 dark:placeholder:text-mist-300/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
