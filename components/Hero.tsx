import Link from "next/link";
import {
  ArrowRight,
  PhoneCall,
  Zap,
  Server,
  Headphones,
  ShieldCheck,
  Activity,
  Wifi,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { PORTAL_LINK } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden py-10 sm:py-14 md:py-18 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            {/* Trust Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-primary shadow-xs backdrop-blur-sm">
              <span className="relative flex size-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span>শেরপুর জেলার সেরা ও বিশ্বস্ত ইন্টারনেট সেবা</span>
            </div>

            {/* Main Headline (single <h1> per page for SEO) */}
            <h1
              id="hero-heading"
              className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] leading-[1.25] sm:leading-[1.2] lg:leading-[1.18]"
            >
              শেরপুর জুড়ে{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-brand-orange bg-clip-text text-transparent">
                দ্রুত ও নিরবচ্ছিন্ন
              </span>{" "}
              ফাইবার ব্রডব্যান্ড
            </h1>

            {/* Supporting Copy */}
            <p className="mt-4 sm:mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg sm:leading-relaxed">
              ফাস্ট কমিউনিকেশন দিচ্ছে বাফারিংহীন 4K স্ট্রিমিং, উচ্চগতির ডাউনলোড
              এবং সার্বক্ষণিক নির্ভরযোগ্য ফাইবার অপটিক ইন্টারনেট সংযোগ। বাসা
              কিংবা অফিসের জন্য বেছে নিন আপনার পছন্দের সাশ্রয়ী প্যাকেজ।
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-7 sm:mt-8 flex w-full flex-col sm:w-auto sm:flex-row items-center gap-3 sm:gap-4">
              <Link
                href="/packages"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-full sm:w-auto h-12 px-7 rounded-xl text-base font-semibold shadow-md shadow-primary/25 transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]",
                )}
              >
                <span>প্যাকেজসমূহ দেখুন</span>
                <ArrowRight className="size-4.5" />
              </Link>

              <Link
                href="/contact-us"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-auto h-12 px-7 rounded-xl text-base font-medium border-border/80 bg-background/70 backdrop-blur-sm hover:bg-muted transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
                )}
              >
                <PhoneCall className="size-4 text-primary" />
                <span>নতুন সংযোগের আবেদন</span>
              </Link>
            </div>

            {/* Key Service Highlights / Micro-Trust Indicators */}
            <div className="mt-10 w-full pt-8 border-t border-border/60">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-left">
                {/* Feature 1: Pure Fiber */}
                <div className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-muted/40">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Zap className="size-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-foreground">
                      ১০০% অপটিক্যাল ফাইবার
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      লো পিং ও স্থিতিশীল স্পিড
                    </p>
                  </div>
                </div>

                {/* Feature 2: High-Speed FTP */}
                <div className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-muted/40">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    <Server className="size-5 text-brand-orange" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-foreground">
                      হাই-স্পিড FTP ও BDIX
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      বাফারিংহীন মুভি ও কন্টেন্ট
                    </p>
                  </div>
                </div>

                {/* Feature 3: 24/7 Support */}
                <div className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-muted/40">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Headphones className="size-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-foreground">
                      ২৪/৭ কাস্টমার সাপোর্ট
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      সার্বক্ষণিক টেকনিক্যাল সহায়তা
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            {/* Ambient decorative glow behind the card */}
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary/30 via-brand-orange/20 to-primary/10 blur-xl opacity-60 dark:opacity-40 -z-10"
            />

            {/* Glassmorphic Live Network Card */}
            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/85 dark:bg-card/60 p-6 sm:p-7 shadow-xl backdrop-blur-xl transition-all">
              {/* Card Header: Live Network Status */}
              <div className="flex items-center justify-between border-b border-border/50 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Wifi className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      ফাস্ট কমিউনিকেশন
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      শেরপুর অপটিক্যাল নেটওয়ার্ক
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="relative flex size-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  <span>অনলাইন</span>
                </div>
              </div>

              {/* Performance Stats Metric Grid */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                {/* Metric 1: Ping / Latency */}
                <div className="rounded-xl border border-border/60 bg-muted/40 p-3.5 transition-all hover:bg-muted/60">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="text-xs font-medium">লেটেন্সি (Ping)</span>
                    <Activity className="size-3.5 text-primary" />
                  </div>
                  <div className="mt-1.5 flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-foreground tracking-tight">
                      &lt; ৫
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">
                      ms
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    আল্ট্রা-লো গেমিং পিং
                  </p>
                </div>

                {/* Metric 2: Local FTP & BDIX */}
                <div className="rounded-xl border border-border/60 bg-muted/40 p-3.5 transition-all hover:bg-muted/60">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="text-xs font-medium">FTP ও BDIX</span>
                    <Server className="size-3.5 text-brand-orange" />
                  </div>
                  <div className="mt-1.5 flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-foreground tracking-tight">
                      ১০০+
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">
                      Mbps
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-primary font-medium">
                    বাফারিং ছাড়া ডাউনলোড
                  </p>
                </div>

                {/* Metric 3: Uptime Reliability */}
                <div className="rounded-xl border border-border/60 bg-muted/40 p-3.5 transition-all hover:bg-muted/60">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="text-xs font-medium">
                      নেটওয়ার্ক আপটাইম
                    </span>
                    <ShieldCheck className="size-3.5 text-emerald-500" />
                  </div>
                  <div className="mt-1.5 flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-foreground tracking-tight">
                      ৯৯.৯%
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-muted-foreground font-medium">
                    নিরবচ্ছিন্ন সেবা গ্যারান্টি
                  </p>
                </div>

                {/* Metric 4: Direct Optical Fiber FTTH */}
                <div className="rounded-xl border border-border/60 bg-muted/40 p-3.5 transition-all hover:bg-muted/60">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="text-xs font-medium">সংযোগ প্রযুক্তি</span>
                    <Zap className="size-3.5 text-brand-yellow" />
                  </div>
                  <div className="mt-1.5 flex items-baseline gap-1">
                    <span className="text-lg font-bold text-foreground">
                      FTTH ফাইবার
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-muted-foreground font-medium">
                    সরাসরি অপটিক্যাল ক্যাবল
                  </p>
                </div>
              </div>

              {/* Service Features Checklist */}
              <div className="mt-5 space-y-2 rounded-xl bg-primary/5 p-3.5 border border-primary/10">
                <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                  <CheckCircle2 className="size-3.5 shrink-0 text-emerald-500" />
                  <span>বাফারিংহীন ইউটিউব ও 4K ভিডিও স্ট্রিমিং</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                  <CheckCircle2 className="size-3.5 shrink-0 text-emerald-500" />
                  <span>বিকাশ, নগদ ও কার্ডে সহজ অনলাইন বিল পরিশোধ</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                  <CheckCircle2 className="size-3.5 shrink-0 text-emerald-500" />
                  <span>শেরপুর সদর ও আশেপাশের এলাকায় দ্রুত সংযোগ</span>
                </div>
              </div>

              {/* Self-Service Portal Callout Banner */}
              <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between">
                <div className="text-left">
                  <p className="text-xs font-semibold text-foreground">
                    ইতিমধ্যে আমাদের গ্রাহক?
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    বিল ও সংযোগ স্ট্যাটাস জানতে লগইন করুন
                  </p>
                </div>

                <a
                  href={PORTAL_LINK.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "shrink-0 gap-1 rounded-lg text-xs font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all",
                  )}
                >
                  <span>কাস্টমার পোর্টাল</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
