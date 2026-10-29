import Link from "next/link";
import {
  Sparkles,
  ChevronRight,
  Clock,
  Home,
  PhoneCall,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Tv,
  Layers,
  MapPin,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT_INFO, PORTAL_LINK } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export interface ComingSoonProps {
  pageName: string;
  badge?: string;
  title: string;
  highlightedTitleWord: string;
  description: string;
  upcomingFeatures?: string[];
  showPortalCta?: boolean;
  showHelplineCta?: boolean;
}

export default function ComingSoon({
  pageName,
  badge = "উন্নয়ন কাজ চলমান • শীঘ্রই আসছে",
  title,
  highlightedTitleWord,
  description,
  upcomingFeatures = [],
  showPortalCta = true,
  showHelplineCta = true,
}: ComingSoonProps) {
  return (
    <div className="relative min-h-[80vh] flex flex-col justify-center py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-125 sm:h-125 rounded-full bg-primary/10 blur-[120px] pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-brand-orange/10 blur-[100px] pointer-events-none -z-10"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="ব্রেডক্রাম্ব"
          className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mb-8 sm:mb-10 justify-center"
        >
          <Link
            href="/"
            className="transition-colors hover:text-primary font-medium"
          >
            হোম
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" />
          <span className="text-foreground font-semibold">{pageName}</span>
        </nav>

        {/* Main Glassmorphic Card */}
        <div className="max-w-3xl mx-auto rounded-3xl border border-primary/25 bg-linear-to-b from-card/95 via-card/85 to-card/90 p-6 sm:p-10 md:p-14 shadow-2xl backdrop-blur-2xl text-center relative">
          {/* Eyebrow Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary backdrop-blur-sm">
            <Clock className="size-3.5 shrink-0 text-brand-orange animate-pulse" />
            <span>{badge}</span>
          </div>

          {/* Heading */}
          <h1 className="mt-5 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight sm:leading-[1.2]">
            {title}{" "}
            <span className="bg-linear-to-r from-primary via-blue-600 to-brand-orange bg-clip-text text-transparent">
              {highlightedTitleWord}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>

          {/* Upcoming Features Checklist (if provided) */}
          {upcomingFeatures.length > 0 && (
            <div className="mt-8 rounded-2xl border border-border/70 bg-muted/30 p-5 sm:p-6 text-left">
              <div className="flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold text-foreground">
                <Sparkles className="size-4 text-brand-orange" />
                <span>যেসব নতুন সুবিধা যুক্ত হচ্ছে:</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-muted-foreground">
                {upcomingFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {showPortalCta && (
              <a
                href={PORTAL_LINK.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-full sm:w-auto h-11 sm:h-12 px-6 rounded-xl text-sm sm:text-base font-bold shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 transition-all",
                )}
              >
                <span>কাস্টমার পোর্টালে যান</span>
                <ExternalLink className="size-4 ml-2" />
              </a>
            )}

            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto h-11 sm:h-12 px-6 rounded-xl text-sm sm:text-base font-semibold border-border/80 hover:bg-muted transition-all",
              )}
            >
              <Home className="size-4 mr-2 text-primary" />
              <span>হোমপেজে ফিরে যান</span>
            </Link>
          </div>

          {/* Alternative Quick Navigation Links */}
          <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">অন্যান্য পাতা:</span>
            <Link
              href="/packages"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Layers className="size-3" />
              <span>প্যাকেজসমূহ</span>
            </Link>
            <span>•</span>
            <Link
              href="/ftp-services"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Tv className="size-3" />
              <span>এফটিপি ও লাইভ টিভি</span>
            </Link>
            <span>•</span>
            <Link
              href="/about-us"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="size-3" />
              <span>আমাদের সম্পর্কে</span>
            </Link>
          </div>

          {/* Helpline & Office Address Footer Note */}
          {showHelplineCta && (
            <div className="mt-6 rounded-2xl bg-primary/5 p-4 text-xs text-foreground/85 border border-primary/15 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
              <div className="flex items-center gap-2">
                <PhoneCall className="size-4 text-brand-orange shrink-0" />
                <span>হটলাইন:</span>
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="font-mono font-bold text-primary hover:underline text-sm"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <span className="hidden sm:inline text-border">•</span>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-4 text-primary shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
