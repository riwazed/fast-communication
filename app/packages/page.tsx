import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Zap,
  Sparkles,
  Wifi,
  Server,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  PhoneCall,
  HelpCircle,
  Award,
  Tv,
  CreditCard,
  Building2,
  MapPin,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import PackagesFilterClient from "@/components/PackagesFilterClient";
import { ALL_PACKAGES, INCLUDED_SERVICES, PACKAGE_FAQS } from "@/lib/packages";

export const metadata: Metadata = {
  title: "ইন্টারনেট প্যাকেজসমূহ | ফাস্ট কমিউনিকেশন শেরপুর",
  description:
    "শেরপুর সদরে ফাস্ট কমিউনিকেশনের ৯টি প্রিমিয়াম ফাইবার অপটিক ইন্টারনেট প্যাকেজ। ৭ Mbps থেকে ৭৫ Mbps পর্যন্ত সাশ্রয়ী বাসাবাড়ি, ফ্রিল্যান্সিং, গেমিং ও করপোরেট ব্রডব্যান্ড সংযোগ। ১০০% আনলিমিটেড স্পিড ও ২০০+ Mbps BDIX ক্যাশ।",
  keywords: [
    "Fast Communication Packages",
    "Internet packages Sherpur",
    "Sherpur broadband packages",
    "শেরপুর ইন্টারনেট প্যাকেজ",
    "ফাস্ট কমিউনিকেশন প্যাকেজ তালিকা",
    "শেরপুর ব্রডব্যান্ড বিল ও স্পিড",
    "Sherpur fiber internet price",
  ],
};

const HIGHLIGHTS = [
  {
    id: "unlimited",
    icon: Wifi,
    title: "১০০% আনলিমিটেড ফাইবার",
    description:
      "কোনো ডেটা লিমিট বা FUP ক্যাপ নেই। পুরো মাস সমান গতি বজায় থাকে।",
    badge: "সিমেট্রিক স্পিড",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: "bdix",
    icon: Server,
    title: "২০০+ Mbps BDIX ও FTP",
    description: "ইউটিউব, ফেসবুক, লাইভ টিভি ও ৫০+ লোকাল এফটিপিতে সর্বোচ্চ গতি।",
    badge: "বাফারিংহীন",
    color: "text-brand-orange",
    bgColor: "bg-brand-orange/10",
  },
  {
    id: "low-ping",
    icon: Zap,
    title: "আল্ট্রা-লো লেটেন্সি (< ৫ ms)",
    description:
      "গেমিং, জুম মিটিং ও আন্তর্জাতিক ফ্রিল্যান্সিংয়ে নিখুঁত স্থিতিশীলতা।",
    badge: "গেমিং অপ্টিমাইজড",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    id: "support",
    icon: Clock,
    title: "২৪/৭ শেরপুর অন-সাইট সেবা",
    description:
      "শেরপুর সদরে দক্ষ টেকনিক্যাল টিম সার্বক্ষণিক লাইনের সুরক্ষায় নিয়োজিত।",
    badge: "দ্রুত সমাধান",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
];

export default function PackagesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* =============================================================
          1. Hero Header & Context Section
          ============================================================= */}
      <section className="relative py-10 sm:py-14 lg:py-20 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="ব্রেডক্রাম্ব"
            className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8"
          >
            <Link
              href="/"
              className="transition-colors hover:text-primary font-medium"
            >
              হোম
            </Link>
            <ChevronRight className="size-3.5 text-muted-foreground/60" />
            <span className="text-foreground font-semibold">
              ইন্টারনেট প্যাকেজসমূহ
            </span>
          </nav>

          {/* Hero Header Content */}
          <div className="mx-auto max-w-3xl text-center">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-primary backdrop-blur-sm">
              <Zap className="size-3.5 shrink-0 text-brand-orange" />
              <span>
                ফাস্ট কমিউনিকেশন শেরপুর • ১০০% অপটিক্যাল ফাইবার নেটওয়ার্ক
              </span>
            </div>

            {/* Main Title */}
            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[2.85rem] leading-tight sm:leading-[1.2]">
              আপনার প্রয়োজন অনুযায়ী সেরা{" "}
              <span className="bg-linear-to-r from-primary via-blue-600 to-brand-orange bg-clip-text text-transparent">
                ফাইবার ইন্টারনেট
              </span>{" "}
              প্যাকেজ
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-relaxed">
              বাসাবাড়ির সাধারণ ফেসবুক-ইউটিউব ব্রাউজিং থেকে শুরু করে হাই-এন্ড
              মাল্টিপ্লেয়ার গেমিং, ফ্রিল্যান্সিং ও করপোরেট অফিস — শেরপুর সদরের
              প্রতিটি এলাকার জন্য আমাদের রয়েছে ৯টি নির্ভরযোগ্য আনলিমিটেড ফাইবার
              প্যাকেজ।
            </p>
          </div>

          {/* =============================================================
              Highlights 4-Grid Strip
              ============================================================= */}
          <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {HIGHLIGHTS.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-border/70 bg-card/75 p-5 backdrop-blur-xl shadow-xs transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={cn(
                        "flex size-10 items-center justify-center rounded-xl",
                        item.bgColor,
                        item.color,
                      )}
                    >
                      <Icon className="size-5" />
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border/40">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============================================================
          2. Interactive 9 Packages Directory Grid (Client Filtered)
          ============================================================= */}
      <section
        id="packages-list"
        aria-labelledby="packages-list-heading"
        className="py-12 sm:py-16 md:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
            <h2
              id="packages-list-heading"
              className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight"
            >
              সকল ফাইবার অপটিক প্যাকেজ তালিকা
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              আপনার বাজেট ও ব্যবহারের সুবিধাজনক ক্যাটাগরি বেছে নিন অথবা সকল
              প্যাকেজের গতি তুলনা করুন:
            </p>
          </div>

          {/* Filter and Responsive Grid */}
          <PackagesFilterClient />
        </div>
      </section>

      {/* =============================================================
          3. Quick Comparison Matrix Table
          ============================================================= */}
      <section className="py-12 sm:py-16 border-y border-border/60 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Award className="size-3.5" />
              <span>এক নজরে তুলনা</span>
            </div>
            <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
              ৯টি প্যাকেজের পূর্ণাঙ্গ স্পেসিফিকেশন ও মূল্য তালিকা
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              আপনার প্রয়োজন ও বাজেটের সাথে প্রতিটি প্যাকেজের পার্থক্য সহজেই
              যাচাই করুন:
            </p>
          </div>

          {/* 1. Desktop & Tablet Comparative Table (md and up) */}
          <div className="hidden md:block overflow-x-auto rounded-2xl border border-border/70 bg-card/90 shadow-md backdrop-blur-xl">
            <table className="w-full min-w-162.5 text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-border/80 bg-muted/50 text-foreground font-bold">
                  <th scope="col" className="py-3.5 px-4 sm:px-5">
                    প্যাকেজের নাম
                  </th>
                  <th scope="col" className="py-3.5 px-3 sm:px-4">
                    ক্যাটাগরি
                  </th>
                  <th scope="col" className="py-3.5 px-3 sm:px-4 text-center">
                    ইন্টারনেট স্পিড
                  </th>
                  <th scope="col" className="py-3.5 px-3 sm:px-4 text-center">
                    BDIX / FTP
                  </th>
                  <th scope="col" className="py-3.5 px-3 sm:px-4 text-center">
                    উপযুক্ত ডিভাইস
                  </th>
                  <th scope="col" className="py-3.5 px-3 sm:px-4 text-center">
                    রিয়েল আইপি
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-4 sm:px-5 text-right font-bold text-foreground"
                  >
                    মাসিক রেট
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50 text-foreground/85">
                {ALL_PACKAGES.map((pkg) => {
                  return (
                    <tr
                      key={pkg.id}
                      className={cn(
                        "transition-colors hover:bg-muted/40",
                        pkg.isPopular && "bg-primary/5 font-medium",
                      )}
                    >
                      <td className="py-3.5 px-4 sm:px-5 font-semibold text-foreground">
                        <div className="flex items-center gap-2">
                          <span>{pkg.name}</span>
                          {pkg.isPopular && (
                            <span className="rounded-full bg-primary/15 text-primary text-[10px] font-bold px-2 py-0.5">
                              পপুলার
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3.5 px-3 sm:px-4 text-muted-foreground">
                        {pkg.categoryLabel}
                      </td>
                      <td className="py-3.5 px-3 sm:px-4 text-center font-bold text-foreground">
                        <span className="text-primary text-base">
                          {pkg.speed}
                        </span>{" "}
                        {pkg.speedUnit}
                      </td>
                      <td className="py-3.5 px-3 sm:px-4 text-center text-xs text-foreground/80">
                        {pkg.bdixSpeed}
                      </td>
                      <td className="py-3.5 px-3 sm:px-4 text-center text-xs text-muted-foreground">
                        {pkg.devices}
                      </td>
                      <td className="py-3.5 px-3 sm:px-4 text-center">
                        {pkg.hasRealIp ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                            <CheckCircle2 className="size-3.5" />
                            <span>অন্তর্ভুক্ত</span>
                          </span>
                        ) : (
                          <span className="text-xs text-muted-foreground">
                            ঐচ্ছিক
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 sm:px-5 text-right font-extrabold text-foreground text-sm sm:text-base">
                        ৳{pkg.price}{" "}
                        <span className="text-xs font-normal text-muted-foreground">
                          /মাস
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* 2. Mobile Comparative Cards View (Under md / Phones) */}
          <div className="block md:hidden space-y-3">
            {ALL_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={cn(
                  "rounded-2xl border p-4 backdrop-blur-xl transition-all",
                  pkg.isPopular
                    ? "border-primary/80 bg-card/95 shadow-md shadow-primary/10 ring-1 ring-primary/25"
                    : "border-border/75 bg-card/85 shadow-xs",
                )}
              >
                {/* Mobile Card Header */}
                <div className="flex items-start justify-between gap-2 border-b border-border/40 pb-2.5">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-sm sm:text-base text-foreground">
                        {pkg.name}
                      </h4>
                      {pkg.isPopular && (
                        <span className="rounded-full bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5">
                          পপুলার
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-medium text-primary">
                      {pkg.categoryLabel}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <span className="text-lg font-extrabold text-foreground">
                      ৳{pkg.price}
                    </span>
                    <span className="text-[11px] text-muted-foreground block -mt-1">
                      /মাস
                    </span>
                  </div>
                </div>

                {/* 2x2 Stats Grid for Mobile */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl bg-muted/40 p-2.5 border border-border/40">
                    <span className="text-[10px] text-muted-foreground block">
                      ইন্টারনেট স্পিড
                    </span>
                    <div className="font-bold text-primary mt-0.5">
                      <span className="text-sm">{pkg.speed}</span>{" "}
                      {pkg.speedUnit}
                    </div>
                  </div>

                  <div className="rounded-xl bg-muted/40 p-2.5 border border-border/40">
                    <span className="text-[10px] text-muted-foreground block">
                      BDIX ও FTP ক্যাশ
                    </span>
                    <span className="font-semibold text-foreground mt-0.5 block">
                      {pkg.bdixSpeed}
                    </span>
                  </div>

                  <div className="rounded-xl bg-muted/40 p-2.5 border border-border/40">
                    <span className="text-[10px] text-muted-foreground block">
                      উপযুক্ত ডিভাইস
                    </span>
                    <span className="font-medium text-foreground mt-0.5 block">
                      {pkg.devices}
                    </span>
                  </div>

                  <div className="rounded-xl bg-muted/40 p-2.5 border border-border/40">
                    <span className="text-[10px] text-muted-foreground block">
                      রিয়েল আইপি
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 block font-medium",
                        pkg.hasRealIp
                          ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                          : "text-muted-foreground",
                      )}
                    >
                      {pkg.hasRealIp ? "অন্তর্ভুক্ত" : "ঐচ্ছিক"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================================
          4. Included Value-Add Services With Every Package
          ============================================================= */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <Sparkles className="size-3.5 text-emerald-500" />
              <span>বাড়তি সুবিধা ও ভ্যালু সার্ভিস</span>
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              প্রতিটি প্যাকেজের সাথেই বিনামূল্যে অন্তর্ভুক্ত
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              ফাস্ট কমিউনিকেশনের গ্রাহক হিসেবে আপনি কেবল ইন্টারনেট স্পিডই পান
              না, বরং উপভোগ করেন আধুনিক ডিজিটাল লাইফস্টাইলের পূর্ণাঙ্গ
              ইকোসিস্টেম:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {INCLUDED_SERVICES.map((srv, idx) => (
              <div
                key={srv.id}
                className="relative rounded-2xl border border-border/70 bg-card/80 p-6 backdrop-blur-xl shadow-xs transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-sm">
                    ০{idx + 1}
                  </div>
                  <CheckCircle2 className="size-4 text-emerald-500" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {srv.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quick links to Exclusive APKs & FTP */}
          <div className="mt-10 rounded-2xl border border-primary/20 bg-linear-to-r from-primary/10 via-card to-brand-orange/10 p-6 sm:p-8 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md shadow-primary/20">
                <Tv className="size-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-foreground">
                  আমাদের এক্সক্লুসিভ লাইভ টিভি অ্যাপস ডাউনলোড করুন
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                  Appolo TV ও StreamX লাইভ টিভি অ্যাপ দিয়ে ১০০+ চ্যানেল দেখুন
                  বিনামূল্যে।
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/ftp-services"
                className={cn(
                  buttonVariants({ variant: "default", size: "default" }),
                  "w-full sm:w-auto h-10 px-5 rounded-xl font-semibold shadow-xs justify-center",
                )}
              >
                <span>অ্যাপস ও এফটিপি দেখুন</span>
                <ArrowRight className="size-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================================
          5. Frequently Asked Questions (FAQ)
          ============================================================= */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-border/60 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <HelpCircle className="size-3.5" />
              <span>সহায়তা ও প্রশ্নোত্তর</span>
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              প্যাকেজ ও সংযোগ সংক্রান্ত সচরাচর জিজ্ঞাসিত প্রশ্ন
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              নতুন সংযোগ ও প্যাকেজের নিয়মাবলী সম্পর্কে গ্রাহকদের গুরুত্বপূর্ণ
              প্রশ্নের উত্তর:
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {PACKAGE_FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-border/75 bg-card/85 p-5 sm:p-6 backdrop-blur-xl transition-all duration-200 open:shadow-md open:border-primary/40"
              >
                <summary className="flex cursor-pointer items-center justify-between font-bold text-foreground text-sm sm:text-base select-none list-none">
                  <span className="flex items-center gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                      ?
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <span className="ml-3 text-muted-foreground transition-transform duration-200 group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="mt-4 pt-3 border-t border-border/40 text-xs sm:text-sm text-muted-foreground leading-relaxed pl-9">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================================
          6. High-Converting Bottom CTA Card
          ============================================================= */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-linear-to-b from-card/95 via-card/85 to-card/90 p-7 sm:p-10 md:p-12 shadow-xl backdrop-blur-2xl">
            {/* Ambient Background Glows */}
            <div
              aria-hidden="true"
              className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-[90px] pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-orange/15 blur-[90px] pointer-events-none"
            />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="size-3.5" />
                <span>শেরপুর সদরে ১২-২৪ ঘণ্টার মধ্যে সংযোগ নিশ্চয়তা</span>
              </div>

              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                কোন প্যাকেজটি আপনার জন্য সেরা বুঝতে পারছেন না?
              </h2>

              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                আমাদের অভিজ্ঞ নেটওয়ার্ক টিমের সাথে সরাসরি কথা বলে আপনার
                ডিভাইসের সংখ্যা ও বাজেট অনুযায়ী সেরা পরামর্শ নিন। শেরপুর সদরের
                যেকোনো এলাকায় তাৎক্ষণিক নতুন সংযোগ পেতে এখনই যোগাযোগ করুন।
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <a
                  href={CONTACT_INFO.phoneHref}
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "w-full sm:w-auto h-12 px-7 rounded-xl font-bold shadow-md shadow-primary/25 hover:shadow-lg transition-all",
                  )}
                >
                  <PhoneCall className="size-4.5 mr-2" />
                  <span>কল করুন: {CONTACT_INFO.phone}</span>
                </a>

                <Link
                  href="/about-us"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "w-full sm:w-auto h-12 px-6 rounded-xl font-semibold border-border/80 hover:bg-muted transition-all",
                  )}
                >
                  <Building2 className="size-4.5 mr-2 text-primary" />
                  <span>আমাদের সম্পর্কে জানুন</span>
                </Link>
              </div>

              {/* Footer Trust Note */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-primary" />
                  <span>{CONTACT_INFO.address}</span>
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <CreditCard className="size-3.5 text-primary" />
                  <span>বিকাশ ও নগদে সহজ মাসিক বিল পরিশোধ</span>
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5 text-emerald-500" />
                  <span>২৪/৭ টেকনিক্যাল সাপোর্ট ও লোকাল সার্ভিস</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
