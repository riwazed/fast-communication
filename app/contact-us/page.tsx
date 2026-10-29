import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  PhoneCall,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Headphones,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import JsonLd from "@/components/JsonLd";
import {
  CONTACT_INFO,
  LEGAL_CREDENTIALS,
  PORTAL_LINK,
} from "@/lib/navigation";
import { buildPageMetadata, getBreadcrumbJsonLd, SITE_URL } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  title: "যোগাযোগ করুন — অফিস ঠিকানা ও হটলাইন | ফাস্ট কমিউনিকেশন শেরপুর",
  description:
    "ফাস্ট কমিউনিকেশন শেরপুর অফিসের ঠিকানা ও ফোন নম্বর: তেরাবাজার, শেরপুর টাউন, শেরপুর সদর, শেরপুর-২১০০ | হটলাইন: +8801901173340। নতুন ব্রডব্যান্ড ইন্টারনেট সংযোগ ও ২৪/৭ সাপোর্টের জন্য সরাসরি কল করুন।",
  path: "/contact-us",
  keywords: [
    "Fast Communication Contact",
    "Sherpur ISP contact number",
    "ফাস্ট কমিউনিকেশন যোগাযোগ",
    "শেরপুর ইন্টারনেট অফিস ফোন নম্বর",
    "তেরাবাজার শেরপুর ইন্টারনেট",
    "+8801901173340",
  ],
});

const CONTACT_JSON_LD = [
  getBreadcrumbJsonLd([
    { name: "হোম", path: "/" },
    { name: "যোগাযোগ করুন", path: "/contact-us" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "যোগাযোগ করুন | ফাস্ট কমিউনিকেশন শেরপুর",
    url: `${SITE_URL}/contact-us`,
    mainEntity: {
      "@id": `${SITE_URL}/#organization`,
    },
  },
];

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("তেরাবাজার, শেরপুর টাউন, শেরপুর সদর, শেরপুর-২১০০");

export default function ContactUsPage() {
  return (
    <div className="relative min-h-screen py-10 sm:py-14 lg:py-20">
      <JsonLd data={CONTACT_JSON_LD} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        {/* =============================================================
            1. Breadcrumb & Hero Header
            ============================================================= */}
        <div>
          <nav
            aria-label="ব্রেডক্রাম্ব"
            className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground"
          >
            <Link
              href="/"
              className="transition-colors hover:text-primary font-medium"
            >
              হোম
            </Link>
            <ChevronRight className="size-3.5 text-muted-foreground/60" />
            <span className="font-semibold text-foreground">যোগাযোগ করুন</span>
          </nav>

          <header className="mt-8 max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary backdrop-blur-sm">
              <Sparkles className="size-3.5 text-brand-orange shrink-0" />
              <span>২৪/৭ হেল্পডেস্ক ও কাস্টমার সাপোর্ট</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight">
              আমাদের সাথে সরাসরি{" "}
              <span className="bg-linear-to-r from-primary via-blue-600 to-brand-orange bg-clip-text text-transparent">
                যোগাযোগ করুন
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              নতুন অপটিক্যাল ফাইবার ইন্টারনেট সংযোগ, প্যাকেজ পরামর্শ, বিল পরিশোধ
              কিংবা যেকোনো কারিগরি সহায়তার জন্য সরাসরি আমাদের হটলাইন নম্বরে কল
              করুন অথবা শেরপুর সদর অফিসে চলে আসুন।
            </p>
          </header>
        </div>

        {/* =============================================================
            2. Main Direct Contact Cards (Phone & Address Only — No Form)
            ============================================================= */}
        <section
          aria-label="অফিস ঠিকানা ও ফোন নম্বর"
          className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch"
        >
          {/* Card 1: Phone / 24/7 Hotline */}
          <div className="relative overflow-hidden flex flex-col justify-between rounded-3xl border border-primary/35 bg-card/90 dark:bg-card/60 p-7 sm:p-9 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-primary/70 hover:-translate-y-1">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-20 size-56 rounded-full bg-brand-orange/10 blur-3xl"
            />

            <div className="relative z-10 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange border border-brand-orange/25">
                  <PhoneCall className="size-7" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <Clock className="size-3.5" />
                  <span>২৪/৭ সচল</span>
                </span>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  হটলাইন ও কাস্টমার কেয়ার নম্বর
                </p>
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="mt-1.5 block font-mono text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground transition-colors hover:text-primary select-all"
                >
                  {CONTACT_INFO.phone}
                </a>
                <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  নতুন সংযোগের আবেদন, জরুরি লাইন মেরামত বা যেকোনো তথ্যের জন্য
                  সপ্তাহের যেকোনো দিন, যেকোনো সময় সরাসরি কল করুন।
                </p>
              </div>

              <ul className="space-y-2 pt-3 border-t border-border/50 text-xs text-foreground/85">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                  <span>নতুন ফাইবার ব্রডব্যান্ড ও কর্পোরেট সংযোগ</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                  <span>২৪/৭ টেকনিক্যাল ও রাউটার সাপোর্ট হেল্পডেস্ক</span>
                </li>
              </ul>
            </div>

            <div className="relative z-10 mt-7 pt-5 border-t border-border/50">
              <a
                href={CONTACT_INFO.phoneHref}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-full h-12 rounded-xl font-bold text-base shadow-md shadow-primary/25 transition-all hover:shadow-lg",
                )}
              >
                <PhoneCall className="size-4.5 mr-2" />
                <span>এখনই কল করুন</span>
              </a>
            </div>
          </div>

          {/* Card 2: Office Address */}
          <div className="relative overflow-hidden flex flex-col justify-between rounded-3xl border border-border/80 bg-card/90 dark:bg-card/60 p-7 sm:p-9 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-20 size-56 rounded-full bg-primary/10 blur-3xl"
            />

            <div className="relative z-10 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/25">
                  <MapPin className="size-7" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <span>প্রধান কার্যালয়</span>
                </span>
              </div>

              <address className="not-italic">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  অফিস ঠিকানা
                </p>
                <h2 className="mt-1.5 text-xl sm:text-2xl font-extrabold text-foreground leading-snug">
                  {CONTACT_INFO.address}
                </h2>
                <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  সরাসরি আমাদের শেরপুর সদর অফিসে এসে নতুন সংযোগ নিবন্ধন, প্যাকেজ
                  পরিবর্তন অথবা সরাসরি বিল সংক্রান্ত সেবা গ্রহণ করতে পারেন।
                </p>
              </address>

              <ul className="space-y-2 pt-3 border-t border-border/50 text-xs text-foreground/85">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                  <span>TIN: {LEGAL_CREDENTIALS.tin} (NBR নিবন্ধিত)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                  <span>
                    ট্রেড লাইসেন্স: {LEGAL_CREDENTIALS.tradeLicenseNo} (শেরপুর
                    পৌরসভা)
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative z-10 mt-7 pt-5 border-t border-border/50">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full h-12 rounded-xl font-bold text-base border-border/80 hover:bg-muted transition-all",
                )}
              >
                <MapPin className="size-4.5 mr-2 text-primary" />
                <span>গুগল ম্যাপে অবস্থান দেখুন</span>
                <ExternalLink className="size-4 ml-2 text-muted-foreground" />
              </a>
            </div>
          </div>
        </section>

        {/* =============================================================
            3. Helpful Self-Service Strip for Existing & New Customers
            ============================================================= */}
        <section className="max-w-4xl mx-auto w-full rounded-2xl border border-border/75 bg-card/80 dark:bg-card/45 p-6 sm:p-7 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3.5">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Headphones className="size-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-foreground">
                ইতিমধ্যে আমাদের গ্রাহক অথবা প্যাকেজ দেখতে চান?
              </h3>
              <p className="mt-0.5 text-xs sm:text-sm text-muted-foreground">
                অনলাইনে বিল পরিশোধ করতে কাস্টমার পোর্টালে লগইন করুন অথবা আমাদের
                সকল ফাইবার প্যাকেজ যাচাই করুন।
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
            <Link
              href="/packages"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "h-9 px-4 rounded-xl text-xs font-semibold",
              )}
            >
              <span>প্যাকেজসমূহ</span>
              <ArrowRight className="size-3.5 ml-1" />
            </Link>
            <a
              href={PORTAL_LINK.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "h-9 px-4 rounded-xl text-xs font-semibold",
              )}
            >
              <span>{PORTAL_LINK.name}</span>
              <ExternalLink className="size-3.5 ml-1" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
