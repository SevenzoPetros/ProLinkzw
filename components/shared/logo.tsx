import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "light" | "dark" | "auto";
  className?: string;
  imgClassName?: string;
};

export function Logo({ variant = "auto", className, imgClassName }: LogoProps) {
  const imgClass = cn("h-9 w-auto md:h-10", imgClassName);
  const logoSrc = variant === "light" ? "/logo/prolinkzw-light.png" : "/logo/prolinkzw-dark.png";

  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={logoSrc}
        alt="ProLinkzw Digital"
        width={900}
        height={288}
        priority
        className={imgClass}
      />
    </span>
  );
}
