import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "light" | "dark" | "auto";
  className?: string;
  imgClassName?: string;
};

export function Logo({ className, imgClassName }: LogoProps) {
  const imgClass = cn("h-9 w-auto md:h-10", imgClassName);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/logo/prolinkzw-dark.png"
        alt="ProLinkzw Digital"
        width={900}
        height={295}
        priority
        className={imgClass}
      />
    </span>
  );
}
