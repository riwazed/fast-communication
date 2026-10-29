"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Package,
  CreditCard,
  Server,
  Users,
  PhoneCall,
  LogIn,
  Headphones,
  Sparkles,
  MapPin,
} from "lucide-react";

import Logo from "./Logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  CONTACT_INFO,
  LEGAL_NAV_LINKS,
  MAIN_NAV_LINKS,
  PORTAL_LINK,
  type NavItem,
} from "@/lib/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const ICONS_MAP = {
  Package,
  CreditCard,
  Server,
  Users,
  PhoneCall,
  LogIn,
};

export default function SideBar() {
  const pathname = usePathname();

  return (
    <aside className="lg:hidden">
      <Sheet>
        <SheetTrigger
          render={
            <Button
              variant="outline"
              size="icon"
              aria-label="মেনু খুলুন"
              className="size-9 rounded-lg border-border/70 hover:bg-muted"
            />
          }
        >
          <Menu className="size-5" />
        </SheetTrigger>

        <SheetContent side="right" className="flex flex-col p-0 sm:max-w-xs">
          {/* Header */}
          <SheetHeader className="border-b border-border/50 p-4 pb-3">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="inline-block"
                aria-label="ফাস্ট কমিউনিকেশন হোমপেজ"
              >
                <Logo className="h-9 w-auto" />
              </Link>
            </div>
            <SheetTitle className="sr-only">ফাস্ট কমিউনিকেশন মেনু</SheetTitle>
            <div className="mt-2 flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              <Sparkles className="size-3.5 shrink-0 text-primary" />
              <span>শেরপুর জেলার বিশ্বস্ত ইন্টারনেট সেবা</span>
            </div>
          </SheetHeader>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-3 py-3">
            <p className="px-2 pb-2 text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
              মেনু লিংকসমূহ
            </p>
            <nav className="flex flex-col gap-1">
              {MAIN_NAV_LINKS.map((link: NavItem) => {
                const IconComponent = ICONS_MAP[link.iconName];
                const isActive =
                  Boolean(link.href) &&
                  (link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href));

                return (
                  <SheetClose
                    key={link.id}
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors",
                          isActive
                            ? "bg-primary font-semibold text-primary-foreground shadow-xs"
                            : "text-foreground/80 hover:bg-muted hover:text-foreground",
                        )}
                      />
                    }
                  >
                    <span className="flex items-center gap-2.5">
                      <IconComponent
                        className={cn(
                          "size-4.5 shrink-0",
                          isActive
                            ? "text-primary-foreground"
                            : "text-muted-foreground",
                        )}
                      />
                      <span>{link.name}</span>
                    </span>
                    {link.badge && (
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[10px] font-semibold",
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-primary/10 text-primary",
                        )}
                      >
                        {link.badge}
                      </span>
                    )}
                  </SheetClose>
                );
              })}
            </nav>

            <Separator className="my-4" />

            {/* Customer Portal CTA in Drawer */}
            <div className="rounded-xl border border-border/60 bg-muted/40 p-3">
              <div className="mb-2">
                <p className="text-xs font-semibold text-foreground">
                  গ্রাহক সেবা ও বিল
                </p>
                <p className="text-[11px] text-muted-foreground">
                  আপনার অ্যাকাউন্ট লগইন করে সংযোগ স্ট্যাটাস ও বিল চেক করুন
                </p>
              </div>
              <SheetClose
                nativeButton={false}
                render={
                  <a
                    href={PORTAL_LINK.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "default", size: "sm" }),
                      "w-full justify-center gap-2 font-medium shadow-xs",
                    )}
                  />
                }
              >
                <LogIn className="size-3.5" />
                <span>{PORTAL_LINK.name}</span>
              </SheetClose>
            </div>

            {/* Quick Office & Helpline Info in Drawer */}
            <div className="mt-3 rounded-xl border border-border/60 bg-card/60 p-3 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="size-3.5 text-brand-orange shrink-0" />
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="font-mono font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            {/* Legal Policies Compact Grid in Drawer */}
            <div className="mt-4 pt-3 border-t border-border/50">
              <p className="px-1 pb-2 text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                আইনি নীতিমালা
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {LEGAL_NAV_LINKS.map((policy) => {
                  const isPolicyActive = pathname === policy.href;
                  return (
                    <SheetClose
                      key={policy.id}
                      nativeButton={false}
                      render={
                        <Link
                          href={policy.href}
                          className={cn(
                            "rounded-lg border px-2.5 py-1.5 text-center text-[11px] font-medium transition-colors",
                            isPolicyActive
                              ? "border-primary bg-primary/10 text-primary font-semibold"
                              : "border-border/50 bg-muted/30 text-muted-foreground hover:bg-muted hover:text-foreground",
                          )}
                        />
                      }
                    >
                      {policy.shortName}
                    </SheetClose>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="border-t border-border/50 bg-background/50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Headphones className="size-3.5 text-primary" />
                <span>২৪/৭ কাস্টমার সাপোর্ট</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">থিম:</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </aside>
  );
}
