import Link from "next/link";
import Logo from "./Logo";
import { LogIn } from "lucide-react";
import ActiveLink from "./ActiveLink";
import SideBar from "./SideBar";
import { ThemeToggle } from "./theme-toggle";
import { MAIN_NAV_LINKS, PORTAL_LINK } from "@/lib/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/85 backdrop-blur-md transition-all duration-200">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Brand Logo & Location Tag */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 transition-transform duration-200 hover:scale-[1.02]"
            aria-label="ফাস্ট কমিউনিকেশন হোমপেজ"
          >
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="মূল মেনু"
        >
          {MAIN_NAV_LINKS.map((link) => (
            <ActiveLink key={link.id} href={link.href}>
              {link.name}
            </ActiveLink>
          ))}
        </nav>

        {/* Action Controls & Mobile Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle on Desktop */}
          <div className="hidden lg:flex">
            <ThemeToggle />
          </div>

          {/* Customer Portal CTA Button */}
          <a
            href={PORTAL_LINK.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default" }),
              "hidden sm:inline-flex items-center gap-1.5 rounded-lg font-medium shadow-xs transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]",
            )}
          >
            <LogIn className="size-3.5" />
            <span>{PORTAL_LINK.name}</span>
          </a>

          {/* Mobile Sidebar Trigger */}
          <SideBar />
        </div>
      </div>
    </header>
  );
}
