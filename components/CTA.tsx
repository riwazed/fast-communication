import Link from "next/link";
import {
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  FileText,
  Building2,
  BadgeCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * CTA Component
 *
 * High-converting, authoritative Call-to-Action section for Fast Communication.
 * Incorporates authentic government registration credentials (TIN & Trade License)
 * to build unmatched local trust and regulatory transparency for residential
 * and corporate internet subscribers across Sherpur District.
 */
export default function CTA() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative py-14 sm:py-18 md:py-22 lg:py-28 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Ambient Container Card */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-linear-to-b from-card/95 via-card/85 to-card/90 p-7 sm:p-10 md:p-14 lg:p-16 shadow-2xl backdrop-blur-2xl">
          {/* Ambient Corner Glow Orbs */}
          <div
            aria-hidden="true"
            className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-primary/20 blur-[100px] pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-brand-orange/20 blur-[100px] pointer-events-none"
          />

          {/* Top Row: Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 backdrop-blur-sm">
              <BadgeCheck className="size-4 shrink-0 text-emerald-500" />
              <span>১০০% সরকার অনুমোদিত ও লাইসেন্সপ্রাপ্ত আইএসপি</span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-primary backdrop-blur-sm">
              <Sparkles className="size-3.5 shrink-0 text-brand-orange" />
              <span>শেরপুর জেলার নির্ভরযোগ্য নেটওয়ার্ক</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mx-auto mt-6 max-w-3xl text-center">
            <h2
              id="cta-heading"
              className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-[1.2]"
            >
              দ্রুতগতির নিরবচ্ছিন্ন ফাইবার সংযোগ নিতে{" "}
              <span className="bg-linear-to-r from-primary via-blue-600 to-brand-orange bg-clip-text text-transparent">
                আজই যুক্ত হোন
              </span>
            </h2>

            <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-relaxed max-w-2xl mx-auto">
              ফাস্ট কমিউনিকেশন দিচ্ছে দ্রুততম সময়ে অপটিক্যাল ফাইবার সংযোগ,
              বাফারিংহীন BDIX স্পিড এবং সার্বক্ষণিক গ্রাহক সেবা। আপনার বাসা কিংবা
              অফিসে নতুন সংযোগের জন্য এখনই আমাদের সাথে যোগাযোগ করুন।
            </p>
          </div>

          {/* Quick Value Guarantees Checklist */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-foreground/85">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
              <span>২৪ ঘণ্টার মধ্যে দ্রুত সংযোগ স্থাপন</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
              <span>ফ্রি ফাইবার ড্রপ ক্যাবল ইনস্টলেশন সহায়তা</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
              <span>২৪/৭ ডেডিকেটেড হেল্পডেস্ক সাপোর্ট</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <Link
              href="/contact-us"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "w-full sm:w-auto h-12 px-8 rounded-xl text-base font-bold shadow-lg shadow-primary/25 transition-all duration-200 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.02] active:scale-[0.98]",
              )}
            >
              <PhoneCall className="size-4.5 mr-2" />
              <span>নতুন সংযোগের জন্য যোগাযোগ</span>
              <ArrowRight className="size-4.5 ml-2" />
            </Link>

            <Link
              href="/packages"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto h-12 px-7 rounded-xl text-base font-semibold border-border/80 bg-background/70 backdrop-blur-sm hover:bg-muted transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",
              )}
            >
              <span>প্যাকেজসমূহ যাচাই করুন</span>
            </Link>
          </div>

          {/* =============================================================
              Legal & Business Registration Information (Transparency Section)
              ============================================================= */}
          <div className="mt-12 sm:mt-14 pt-8 sm:pt-10 border-t border-border/60">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 text-center sm:text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-5 text-primary shrink-0" />
                <h3 className="text-sm sm:text-base font-bold text-foreground">
                  ব্যবসায়িক ও সরকারি বৈধ নিবন্ধন তথ্য
                </h3>
              </div>
              <p className="text-xs text-muted-foreground">
                গণপ্রজাতন্ত্রী বাংলাদেশ সরকার ও স্থানীয় কর্তৃপক্ষ নিবন্ধিত বৈধ
                প্রতিষ্ঠান
              </p>
            </div>

            {/* 3 Legal Credentials Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {/* Credential 1: TIN Number */}
              <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-muted/40 p-4 sm:p-5 transition-all duration-200 hover:border-primary/40 hover:bg-muted/60">
                <div className="flex items-center justify-between text-muted-foreground mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    টিন সার্টিফিকেট
                  </span>
                  <FileText className="size-4 text-primary" />
                </div>
                <div className="text-xs text-muted-foreground">
                  করদাতা সনাক্তকরণ নম্বর (TIN)
                </div>
                <div className="mt-1 font-mono text-base sm:text-lg font-bold text-foreground tracking-wider select-all">
                  880092407015
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="size-3 shrink-0" />
                  <span>জাতীয় রাজস্ব বোর্ড (NBR) ভেরিফাইড</span>
                </div>
              </div>

              {/* Credential 2: Trade License No */}
              <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-muted/40 p-4 sm:p-5 transition-all duration-200 hover:border-primary/40 hover:bg-muted/60">
                <div className="flex items-center justify-between text-muted-foreground mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                    ট্রেড লাইসেন্স
                  </span>
                  <Building2 className="size-4 text-brand-orange" />
                </div>
                <div className="text-xs text-muted-foreground">
                  লাইসেন্স নম্বর (License No)
                </div>
                <div className="mt-1 font-mono text-base sm:text-lg font-bold text-foreground tracking-wider select-all">
                  0569-00
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="size-3 shrink-0" />
                  <span>ব্যবসা পরিচালনা সনদপত্র</span>
                </div>
              </div>

              {/* Credential 3: Trade License ID */}
              <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-muted/40 p-4 sm:p-5 transition-all duration-200 hover:border-primary/40 hover:bg-muted/60">
                <div className="flex items-center justify-between text-muted-foreground mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    পৌরসভা নিবন্ধন
                  </span>
                  <BadgeCheck className="size-4 text-emerald-500" />
                </div>
                <div className="text-xs text-muted-foreground">
                  ট্রেড লাইসেন্স আইডি (License ID)
                </div>
                <div className="mt-1 font-mono text-base sm:text-lg font-bold text-foreground tracking-wider select-all">
                  02-005-0569-00
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="size-3 shrink-0" />
                  <span>স্থানীয় সরকার কর্তৃপক্ষ অনুমোদিত</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
