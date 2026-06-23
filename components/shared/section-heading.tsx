import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <span
        className={cn(
          "mono-label inline-flex items-center gap-2",
          light ? "text-copper-200" : "text-copper-500 dark:text-copper-200",
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-4 font-display text-3xl font-semibold leading-[1.15] tracking-tight md:text-4xl",
          light ? "text-mist-50" : "text-ink dark:text-mist-50",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            light ? "text-mist-300/80" : "text-ink-muted dark:text-mist-300/75",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
