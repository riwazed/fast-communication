import Link from "next/link";
import {
  Check,
  Flame,
  Sparkles,
  ArrowRight,
  PhoneCall,
  Users,
  Server,
  HelpCircle,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Package Definition Interface
 */
interface PackageItem {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  speed: string;
  speedUnit: string;
  price: string;
  period: string;
  idealFor: string;
  devices: string;
  description: string;
  features: string[];
  ctaText: string;
  href: string;
}

const PACKAGES_DATA: PackageItem[] = [
  {
    id: "starter-10",
    name: "স্টার্টার ফাইবার",
    badge: "সাশ্রয়ী ও জনপ্রিয়",
    isPopular: false,
    speed: "১০",
    speedUnit: "Mbps",
    price: "৮০০",
    period: "মাসিক",
    idealFor: "ছোট পরিবার ও সাধারণ ব্রাউজিং",
    devices: "২-৪টি ডিভাইসের জন্য উপযুক্ত",
    description:
      "ফেসবুক, ইউটিউব ফুল এইচডি (1080p) ভিডিও দেখা, অনলাইন ক্লাস ও দৈনন্দিন কাজের জন্য আদর্শ ও নির্ভরযোগ্য সাশ্রয়ী ফাইবার প্যাকেজ।",
    features: [
      "১০ Mbps আনলিমিটেড সিমেট্রিক স্পিড",
      "৫০-১০০ Mbps বাফারিংহীন BDIX ও লোকাল FTP",
      "আল্ট্রা-লো লেটেন্সি (< ৫ ms) স্থিতিশীল সংযোগ",
      "কোনো ডেটা লিমিট বা FUP নেই (১০০% আনলিমিটেড)",
      "বিকাশ, নগদ ও কার্ডে স্বয়ংক্রিয় বিল পরিশোধ",
      "সার্বক্ষণিক ২৪/৭ টেকনিক্যাল সাপোর্ট",
    ],
    ctaText: "সংযোগের আবেদন করুন",
    href: "/contact-us",
  },
  {
    id: "super-20",
    name: "সুপার ফাস্ট ফাইবার",
    badge: "সর্বাধিক জনপ্রিয়",
    isPopular: true,
    speed: "২০",
    speedUnit: "Mbps",
    price: "১২০০",
    period: "মাসিক",
    idealFor: "ফ্রিল্যান্সার ও হেভি স্ট্রিমিং ফ্যামিলি",
    devices: "৪-৮টি ডিভাইসের জন্য আদর্শ",
    description:
      "একই সাথে একাধিক স্মার্ট টিভিতে 4K আল্ট্রা এইচডি ভিডিও স্ট্রিমিং, অনলাইন ফ্রিল্যান্সিং ও বাফারিংহীন ব্রাউজিংয়ের জন্য গ্রাহকদের এক নম্বর পছন্দ।",
    features: [
      "২০ Mbps উচ্চগতির নিরবচ্ছিন্ন ব্যান্ডউইথ",
      "২০০+ Mbps সুপারফাস্ট BDIX ও FTP ক্যাশ স্পিড",
      "একাধিক ডিভাইসে বাফারিংহীন 4K ভিডিও স্ট্রিমিং",
      "স্মুথ অনলাইন গেমিং ও হাই-প্রায়োরিটি রাউটিং",
      "ফ্রি ফাইবার অপটিক্যাল ক্যাবল ইনস্টলেশন সহায়তা",
      "২৪/৭ প্রায়োরিটি হেল্পডেস্ক ও কাস্টমার কেয়ার",
    ],
    ctaText: "এই প্যাকেজটি বেছে নিন",
    href: "/contact-us",
  },
  {
    id: "ultra-30",
    name: "আল্ট্রা প্রো ফাইবার",
    badge: "গেমিং ও হেভি ইউজার",
    isPopular: false,
    speed: "৩০",
    speedUnit: "Mbps",
    price: "১৫০০",
    period: "মাসিক",
    idealFor: "প্রফেশনাল গেমার, আইটি ও অফিস",
    devices: "৮+ ডিভাইস ও হেভি ব্যবহারের জন্য",
    description:
      "কম্পিটিটিভ মাল্টিপ্লেয়ার গেমিং, বড় সাইজের ফাইল ডাউনলোড/আপলোড এবং বাণিজ্যিক প্রতিষ্ঠান বা হোম অফিসের জন্য সর্বোচ্চ গতির আল্ট্রা ফাইবার প্যাকেজ।",
    features: [
      "৩০ Mbps আল্ট্রা-ফাস্ট আনলিমিটেড ফাইবার স্পিড",
      "২০০+ Mbps ম্যাক্সিমাম BDIX ও লোকাল মিডিয়া স্পিড",
      "গেমিংয়ের জন্য ডেডিকেটেড লো-পিং অপ্টিমাইজেশন",
      "প্রয়োজন অনুযায়ী রিয়েল / পাবলিক স্ট্যাটিক আইপি সুবিধা",
      "বড় সাইজের ক্লাউড ব্যাকআপ ও দ্রুত ফাইল ট্রান্সফার",
      "ভিআইপি প্রায়োরিটি অন-সাইট টেকনিক্যাল সাপোর্ট",
    ],
    ctaText: "সংযোগের আবেদন করুন",
    href: "/contact-us",
  },
];

/**
 * BestSellings Component
 *
 * Server-Side Rendered (SSR) Best-Selling Internet Packages Section.
 * Transparently presents three authentic BTRC-standard tiers with comprehensive
 * educational descriptions, target device fit, and transparent feature sets.
 */
export default function BestSellings() {
  return (
    <section
      id="best-sellings"
      aria-labelledby="best-sellings-heading"
      className="relative py-14 sm:py-18 md:py-22 lg:py-28 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* =============================================================
            Section Header: Context, Eyebrow & Title
            ============================================================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-primary backdrop-blur-sm">
            <Flame className="size-3.5 shrink-0 text-brand-orange" />
            <span>জনপ্রিয় ইন্টারনেট প্যাকেজসমূহ</span>
          </div>

          <h2
            id="best-sellings-heading"
            className="mt-4 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-[2.65rem] leading-[1.25] sm:leading-[1.2]"
          >
            শেরপুরে সর্বাধিক পছন্দের{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-brand-orange bg-clip-text text-transparent">
              টপ সেলিং ফাইবার
            </span>{" "}
            প্যাকেজ
          </h2>

          <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-relaxed">
            আপনার পরিবারের সদস্য সংখ্যা ও ব্যবহারের ধরনের ওপর ভিত্তি করে সঠিক
            গতির প্যাকেজটি বেছে নিন। প্রতিটি প্যাকেজেই রয়েছে ১০০% আনলিমিটেড
            ফাইবার ইন্টারনেট ও বাফারিংহীন BDIX সুবিধা:
          </p>
        </div>

        {/* =============================================================
            3-Package Educational Grid
            ============================================================= */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {PACKAGES_DATA.map((pkg) => {
            const isPopular = pkg.isPopular;

            return (
              <article
                key={pkg.id}
                className={cn(
                  "relative flex flex-col justify-between rounded-2xl border p-6 sm:p-8 backdrop-blur-xl transition-all duration-300",
                  isPopular
                    ? "border-primary/80 dark:border-primary/70 bg-card/95 dark:bg-card/80 shadow-2xl shadow-primary/15 ring-2 ring-primary/25 lg:-translate-y-2.5 z-10"
                    : "border-border/75 bg-card/80 dark:bg-card/50 shadow-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1",
                )}
              >
                {/* Popular Badge on Top */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary via-blue-600 to-brand-orange px-4 py-1 text-xs font-bold text-white shadow-md">
                      <Sparkles className="size-3 text-amber-300" />
                      <span>{pkg.badge}</span>
                    </span>
                  </div>
                )}

                <div>
                  {/* Card Header: Package Name & Non-popular badge */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                      {pkg.name}
                    </h3>
                    {!isPopular && pkg.badge && (
                      <span className="rounded-full bg-muted/80 px-2.5 py-0.5 text-xs font-medium text-muted-foreground border border-border/50">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* Target Audience / Device Fit Pill */}
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                      <Users className="size-3" />
                      <span>{pkg.devices}</span>
                    </span>
                    <span className="text-xs text-muted-foreground">
                      • {pkg.idealFor}
                    </span>
                  </div>

                  {/* Bandwidth Speed & Price Display */}
                  <div className="mt-6 rounded-xl border border-border/50 bg-muted/30 p-4">
                    <div className="flex items-baseline justify-between border-b border-border/40 pb-3">
                      <div>
                        <span className="text-xs font-medium text-muted-foreground block">
                          মূল ইন্টারনেট স্পিড
                        </span>
                        <div className="flex items-baseline gap-1 mt-0.5">
                          <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                            {pkg.speed}
                          </span>
                          <span className="text-base font-bold text-primary">
                            {pkg.speedUnit}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-medium text-muted-foreground block">
                          প্যাকেজ মূল্য
                        </span>
                        <div className="flex items-baseline gap-1 mt-0.5 justify-end">
                          <span className="text-2xl sm:text-3xl font-extrabold text-foreground">
                            ৳{pkg.price}
                          </span>
                          <span className="text-xs font-medium text-muted-foreground">
                            /{pkg.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Server className="size-3.5 text-brand-orange" />
                        <span>FTP ও BDIX:</span>
                      </span>
                      <span className="font-semibold text-foreground">
                        ২০০+ Mbps বাফারিংহীন
                      </span>
                    </div>
                  </div>

                  {/* Educational Description */}
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-6 border-t border-border/50 pt-5">
                    <p className="text-[11px] font-semibold tracking-wider text-foreground/80 uppercase mb-3">
                      প্যাকেজের মূল সুবিধাসমূহ:
                    </p>
                    <ul className="space-y-2.5" role="list">
                      {pkg.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-foreground/85 leading-snug"
                        >
                          <div
                            className={cn(
                              "flex size-4.5 shrink-0 items-center justify-center rounded-full mt-0.5",
                              isPopular
                                ? "bg-primary text-white"
                                : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
                            )}
                          >
                            <Check className="size-3" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call to Action Button */}
                <div className="mt-8 pt-5 border-t border-border/40">
                  <Link
                    href={pkg.href}
                    className={cn(
                      buttonVariants({
                        variant: isPopular ? "default" : "outline",
                        size: "lg",
                      }),
                      "w-full h-11 rounded-xl text-sm font-semibold transition-all duration-200",
                      isPopular
                        ? "shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                        : "hover:bg-primary hover:text-primary-foreground hover:border-primary active:scale-[0.98]",
                    )}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="size-4 ml-1.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* =============================================================
            Educational Guidance Strip: How to Choose Your Speed
            ============================================================= */}
        <div className="mt-14 sm:mt-18 rounded-2xl border border-border/70 bg-card/85 dark:bg-card/50 p-6 sm:p-8 backdrop-blur-xl shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Guide Info */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <HelpCircle className="size-4" />
                <span>প্যাকেজ নির্বাচন নির্দেশিকা</span>
              </div>
              <h4 className="mt-2 text-lg sm:text-xl font-bold text-foreground">
                কোন ইন্টারনেট স্পিডটি আপনার জন্য সবচেয়ে উপযুক্ত?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                সাধারণ ফেসবুক ও ব্রাউজিংয়ের জন্য ১০ Mbps যথেষ্ট। তবে ঘরে যদি
                একাধিক স্মার্ট টিভি থাকে কিংবা নিয়মিত ফ্রিল্যান্সিং ও 4K ভিডিও
                দেখা হয়, তাহলে ২০ Mbps বা ৩০ Mbps প্যাকেজ বেছে নেওয়া বুদ্ধিমানের
                কাজ।
              </p>
            </div>

            {/* Quick CTAs */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                href="/packages"
                className={cn(
                  buttonVariants({ variant: "default", size: "default" }),
                  "h-10 px-5 rounded-xl font-semibold shadow-xs justify-center",
                )}
              >
                <span>সব প্যাকেজ বিস্তারিত দেখুন</span>
                <ArrowRight className="size-4 ml-1" />
              </Link>
              <Link
                href="/contact-us"
                className={cn(
                  buttonVariants({ variant: "outline", size: "default" }),
                  "h-10 px-5 rounded-xl font-medium justify-center hover:bg-muted",
                )}
              >
                <PhoneCall className="size-3.5 mr-1 text-primary" />
                <span>সাপোর্টের সাথে পরামর্শ করুন</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
