import Image from "next/image";
import LogoLightMode from "@/public/fast-comm-logo-light-mode.webp";
import LogoDarkMode from "@/public/fast-comm-logo-dark-mode.webp";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export default function Logo({ className, priority = true }: LogoProps) {
  return (
    <div className="relative inline-flex items-center">
      {/* Light Mode Logo */}
      <Image
        src={LogoLightMode}
        alt="ফাস্ট কমিউনিকেশন"
        priority={priority}
        className={cn("h-10 w-auto object-contain dark:hidden", className)}
      />

      {/* Dark Mode Logo */}
      <Image
        src={LogoDarkMode}
        alt="ফাস্ট কমিউনিকেশন"
        priority={priority}
        className={cn(
          "hidden h-10 w-auto object-contain dark:block",
          className,
        )}
      />
    </div>
  );
}
