import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  /**
   * "light" -> the white-background lockup, for a surface that's always light
   * "dark"  -> the dark-background lockup, for a surface that's always dark
   * "auto"  -> follows the active site theme (light theme -> light lockup,
   *            dark theme -> dark lockup), switched via CSS only so there's
   *            no client-side flash on load
   */
  variant?: "light" | "dark" | "auto";
  className?: string;
  imgClassName?: string;
};

export function Logo({ variant = "light", className, imgClassName }: LogoProps) {
  const imgClass = cn("h-9 w-auto md:h-10", imgClassName);

  if (variant === "auto") {
    return (
      <span className={cn("inline-flex items-center", className)}>
        <Image
          src="/logo/prolinkzw-light.png"
          alt="ProLinkzw Digital"
          width={900}
          height={288}
          priority
          className={cn(imgClass, "dark:hidden")}
        />
        <Image
          src="/logo/prolinkzw-dark.png"
          alt="ProLinkzw Digital"
          width={900}
          height={295}
          priority
          className={cn(imgClass, "hidden dark:block")}
        />
      </span>
    );
  }

  const isDark = variant === "dark";

  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={isDark ? "/logo/prolinkzw-dark.png" : "/logo/prolinkzw-light.png"}
        alt="ProLinkzw Digital"
        width={900}
        height={isDark ? 295 : 288}
        priority
        className={imgClass}
      />
    </span>
  );
}
