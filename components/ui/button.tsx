import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-copper-400 text-white shadow-glow hover:bg-copper-500 active:translate-y-px",
        secondary:
          "bg-night-200 text-mist-50 hover:bg-night-50 dark:bg-mist-100 dark:text-night-200 dark:hover:bg-white active:translate-y-px",
        outline:
          "border border-ink/15 text-ink hover:border-copper-400 hover:text-copper-500 dark:border-mist-50/20 dark:text-mist-100 dark:hover:border-copper-200 dark:hover:text-copper-200",
        ghost:
          "text-ink hover:bg-ink/5 dark:text-mist-100 dark:hover:bg-white/5",
        link: "text-copper-500 underline-offset-4 hover:underline dark:text-copper-200",
      },
      size: {
        sm: "h-9 px-4 text-[0.85rem]",
        md: "h-11 px-6",
        lg: "h-[3.25rem] px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
