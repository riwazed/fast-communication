import type { Metadata } from "next";
import Link from "next/link";
import {
  WifiOff,
  Home,
  Package,
  Tv,
  Users,
  PhoneCall,
  MapPin,
  ArrowRight,
  Compass,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "৪০৪ - পাতাটি খুঁজে পাওয়া যায়নি | ফাস্ট কমিউনিকেশন শেরপুর",
  description:
    "দুঃখিত, আপনি যে পাতাটি খুঁজছেন তা পাওয়া যায়নি অথবা স্থানান্তরিত হয়েছে। ফাস্ট কমিউনিকেশন হোমপেজ বা প্যাকেজ তালিকায় ফিরে যান।",
};

const QUICK_ROUTES = [
  {
    name: "ইন্টারনেট প্যাকেজসমূহ",
    description: "৭ Mbps থেকে ৭৫ Mbps ফাইবার প্ল্যান",
    href: "/packages",
    icon: Package,
    iconColor: "text-primary bg-primary/10",
  },
  {
    name: "FTP ও লাইভ টিভি",
    description: "মুভি সার্ভার ও অফিসিয়াল টিভি অ্যাপস",
    href: "/ftp-services",
    icon: Tv,
    iconColor: "text-brand-orange bg-brand-orange/10",
  },
  {
    name: "আমাদের সম্পর্কে",
    description: "নেটওয়ার্ক প্রযুক্তি ও সরকারি লাইসেন্স",
    href: "/about-us",
    icon: Users,
    iconColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
  },
  {
    name: "যোগাযোগ করুন",
    description: "অফিস ঠিকানা ও ২৪/৭ হটলাইন নম্বর",
    href: "/contact-us",
    icon: PhoneCall,
    iconColor: "text-blue-600 dark:text-blue-400 bg-blue-500/10",
  },
];

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex flex-col justify-center py-12 sm:py-16 lg:py-22 overflow-hidden">
      {/* Ambient Background Glow Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 sm:size-125 rounded-full bg-primary/12 blur-[120px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 size-72 rounded-full bg-brand-orange/12 blur-[100px] -z-10"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto rounded-3xl border border-primary/25 bg-linear-to-b from-card/95 via-card/85 to-card/90 p-6 sm:p-10 md:p-14 shadow-2xl backdrop-blur-2xl text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-orange backdrop-blur-sm">
            <WifiOff className="size-4 shrink-0" />
            <span>ত্রুটি কোড: ৪০৪ • পাতাটি খুঁজে পাওয়া যায়নি</span>
          </div>

          {/* Stylized 404 Display */}
          <div className="mt-5 select-none">
            <span className="inline-block text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight bg-linear-to-r from-primary via-blue-600 to-brand-orange bg-clip-text text-transparent leading-none">
              ৪০৪
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            দুঃখিত! আপনার কাঙ্ক্ষিত পাতাটি পাওয়া যায়নি
          </h1>

          {/* Explanation */}
          <p className="mt-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            আপনি যে ওয়েব ঠিকানায় (URL) প্রবেশ করেছেন সেটি সম্ভবত ভুল টাইপ করা
            হয়েছে, পরিবর্তন করা হয়েছে অথবা বর্তমানে অনুপলব্ধ। নিচের বাটন থেকে মূল
            পাতায় ফিরে যান।
          </p>

          {/* Primary Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "w-full sm:w-auto h-12 px-7 rounded-xl font-bold text-base shadow-md shadow-primary/25 transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
              )}
            >
              <Home className="size-4.5 mr-2" />
              <span>হোমপেজে ফিরে যান</span>
            </Link>

            <Link
              href="/packages"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto h-12 px-7 rounded-xl font-semibold text-base border-border/80 hover:bg-muted transition-all hover:scale-[1.02] active:scale-[0.98]",
              )}
            >
              <Compass className="size-4.5 mr-2 text-primary" />
              <span>প্যাকেজসমূহ দেখুন</span>
            </Link>
          </div>

          {/* Quick Helpful Navigation Grid */}
          <div className="mt-10 pt-8 border-t border-border/60 text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground text-center mb-4">
              প্রয়োজনীয় পাতাসমূহে সরাসরি যান
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {QUICK_ROUTES.map((route) => {
                const Icon = route.icon;
                return (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-border/70 bg-muted/30 p-3.5 transition-all duration-200 hover:border-primary/50 hover:bg-muted/60"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={cn(
                          "flex size-10 shrink-0 items-center justify-center rounded-xl",
                          route.iconColor,
                        )}
                      >
                        <Icon className="size-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">
                          {route.name}
                        </span>
                        <span className="block text-xs text-muted-foreground truncate">
                          {route.description}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Direct Support Strip */}
          <div className="mt-6 rounded-2xl border border-primary/15 bg-primary/5 p-3.5 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-5">
            <span className="inline-flex items-center gap-1.5">
              <PhoneCall className="size-3.5 text-brand-orange shrink-0" />
              <span>২৪/৭ হটলাইন:</span>
              <a
                href={CONTACT_INFO.phoneHref}
                className="font-mono font-bold text-primary hover:underline"
              >
                {CONTACT_INFO.phone}
              </a>
            </span>
            <span className="hidden sm:inline text-border">•</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-primary shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

