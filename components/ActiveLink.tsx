"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
}

export default function ActiveLink({
  href,
  children,
  className = "",
  isExternal = false,
}: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive =
    Boolean(href) && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <Link
      href={href || "#"}
      className={cn(
        buttonVariants({ variant: "ghost", size: "default" }),
        "relative rounded-lg px-3.5 py-1.5 text-[15px] font-medium text-foreground/80 transition-all duration-200 hover:bg-primary/10 hover:text-primary active:scale-[0.98]",
        isActive &&
          "bg-primary font-semibold text-primary-foreground shadow-xs hover:bg-brand-blue-hover hover:text-primary-foreground",
        className,
      )}
      aria-current={isActive ? "page" : undefined}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}
