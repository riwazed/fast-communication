"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ActiveLink({
  href,
  children,
  className = "",
}: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = href !== "" && pathname.startsWith(href);

  return (
    <Link
      href={href || "#"}
      className={cn(
        buttonVariants({ variant: "ghost", size: "default" }),
        "font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary",
        isActive &&
          "bg-primary text-primary-foreground hover:bg-brand-blue-hover hover:text-primary-foreground",
        className,
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
