import type { Metadata } from "next";
import Link from "next/link";
import {
  Server,
  Tv,
  Radio,
  Download,
  ChevronRight,
  ShieldAlert,
  Zap,
  Sparkles,
  Check,
  Smartphone,
  MonitorPlay,
  ShieldCheck,
  Wifi,
  HelpCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { FTP_SERVERS, LIVE_TV_SERVERS } from "@/lib/ftp";
import FtpDirectoryClient from "@/components/FtpDirectoryClient";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "FTP মুভি সার্ভার ও লাইভ টিভি | ফাস্ট কমিউনিকেশন শেরপুর",
  description:
    "ফাস্ট কমিউনিকেশন শেরপুর ব্রডব্যান্ড নেটওয়ার্কের সেরা হাই-স্পিড FTP মুভি সার্ভার, লাইভ টিভি চ্যানেল এবং এক্সক্লুসিভ লাইভ টিভি অ্যাপস (AppoloTV ও StreamX) ডাউনলোড করুন। ১০০+ Mbps পর্যন্ত বাফারিংহীন লাইভ স্ট্রিমিং।",
  keywords: [
    "Fast Communication FTP",
    "FTP Servers Sherpur",
    "BDIX FTP Server",
    "Live TV Server",
    "AppoloTV apk",
    "StreamX apk",
    "Dflix",
    "Circle FTP",
    "ফাস্ট কমিউনিকেশন এফটিপি",
  ],
};

export default function FtpServicesPage() {
  return (
    <div className="relative min-h-screen py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16 lg:gap-20">
        {/* =========================================================================
            BREADCRUMBS & TOP NAV
            ========================================================================= */}
        <div>
          <nav
            aria-label="ব্রেডক্রাম্ব"
            className="flex items-center gap-2 text-xs text-muted-foreground"
          >
            <Link
              href="/"
              className="transition-colors hover:text-foreground"
            >
              হোম
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="font-medium text-foreground">
              FTP সাপোর্ট ও লাইভ টিভি
            </span>
          </nav>

          {/* =====================================================================
              HERO HEADER SECTION
              ===================================================================== */}
          <header className="mt-8 text-center max-w-4xl mx-auto flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-sm">
              <Zap className="size-3.5 text-brand-orange" />
              <span>১০০+ Mbps আনলিমিটেড BDIX ও লোকাল ক্যাশ</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight">
              হাই-স্পিড{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-brand-orange bg-clip-text text-transparent">
                FTP মুভি সার্ভার
              </span>
              , লাইভ টিভি ও স্ট্রিমিং অ্যাপস
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              ফাস্ট কমিউনিকেশনের অপটিক্যাল ফাইবার নেটওয়ার্কে কোনো বাফারিং ছাড়াই উপভোগ করুন
              সর্বাধিক জনপ্রিয় ১২+ মুভি সার্ভার, ৬+ লাইভ টিভি পোর্টাল এবং সরাসরি ডাউনলোড
              করুন আমাদের অফিসিয়াল লাইভ টিভি অ্যাপস।
            </p>

            {/* Network Requirement Notice Box */}
            <div className="mt-2 inline-flex items-start sm:items-center gap-3 rounded-2xl border border-border/80 bg-card/80 dark:bg-card/40 p-4 text-xs sm:text-sm text-muted-foreground max-w-2xl text-left backdrop-blur-md">
              <ShieldAlert className="size-5 shrink-0 text-brand-orange mt-0.5 sm:mt-0" />
              <span>
                <strong className="text-foreground font-semibold">জরুরি নোটিশ:</strong> এই সার্ভার ও লাইভ টিভি লিংকগুলো শুধুমাত্র{" "}
                <strong className="text-foreground font-semibold">ফাস্ট কমিউনিকেশন ব্রডব্যান্ড লাইনে</strong> সংযুক্ত থাকলে কাজ করবে।
                মোবাইল ইন্টারনেট বা VPN কানেক্টেড থাকলে কাজ করবে না।
              </span>
            </div>

            {/* Quick Jump Anchors */}
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#exclusive-apps"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border/70 bg-card/80 px-3.5 py-1.5 text-xs font-medium text-foreground transition-all hover:border-primary/50 hover:bg-muted"
              >
                <Download className="size-3.5 text-primary" />
                <span>এক্সক্লুসিভ লাইভ টিভি অ্যাপস (.APK)</span>
              </a>
              <a
                href="#servers-directory"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border/70 bg-card/80 px-3.5 py-1.5 text-xs font-medium text-foreground transition-all hover:border-primary/50 hover:bg-muted"
              >
                <Server className="size-3.5 text-primary" />
                <span>FTP সার্ভারসমূহ (১২টি)</span>
              </a>
              <a
                href="#servers-directory"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border/70 bg-card/80 px-3.5 py-1.5 text-xs font-medium text-foreground transition-all hover:border-brand-orange/50 hover:bg-muted"
              >
                <Tv className="size-3.5 text-brand-orange" />
                <span>লাইভ টিভি চ্যানেলসমূহ (৬টি)</span>
              </a>
            </div>
          </header>
        </div>

        {/* =========================================================================
            SECTION 1: EXCLUSIVE APKS DOWNLOAD SHOWCASE (100% SERVER RENDERED)
            ========================================================================= */}
        <section
          id="exclusive-apps"
          aria-labelledby="apps-heading"
          className="relative scroll-mt-24"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border/75 bg-card/80 dark:bg-card/40 p-6 sm:p-8 lg:p-10 shadow-xl backdrop-blur-xl">
            {/* Ambient Background Glows */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-primary/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-brand-orange/10 blur-3xl"
            />

            <div className="relative z-10 flex flex-col gap-8">
              {/* Section Header */}
              <div className="flex flex-col gap-3 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 self-center sm:self-start rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                  <Sparkles className="size-3.5 text-brand-orange" />
                  <span>এক্সক্লুসিভ লাইভ টিভি অ্যাপস</span>
                </div>
                <h2
                  id="apps-heading"
                  className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                >
                  স্মার্টফোন ও অ্যান্ড্রয়েড টিভির জন্য অফিসিয়াল লাইভ টিভি অ্যাপস
                </h2>
                <p className="max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                  ফাস্ট কমিউনিকেশনের হাই-স্পিড BDIX নেটওয়ার্কে সকল দেশি-বিদেশি লাইভ টিভি
                  চ্যানেল ও স্পোর্টস সম্প্রচার বাফারিং ছাড়া উপভোগ করতে আমাদের অফিসিয়াল লাইভ
                  টিভি অ্যাপ দুটি ফ্রিতে ডাউনলোড করুন।
                </p>
              </div>

              {/* Apps Cards Grid */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* App 1: Appolo TV (Primary Blue Themed) */}
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-primary/30 bg-card/90 dark:bg-card/60 p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-sm">
                          <Tv className="size-7" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold text-foreground">
                              Appolo TV
                            </h3>
                            <Badge
                              variant="outline"
                              className="border-primary/30 bg-primary/10 text-primary text-[11px]"
                            >
                              লাইভ টিভি
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Android TV & Mobile • সংস্করণ v2.4.0
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="rounded-md bg-muted px-2 py-1 text-xs font-mono font-medium text-foreground border border-border/50">
                          11.1 MB
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      সরাসরি ১০০+ দেশি ও আন্তর্জাতিক লাইভ টিভি চ্যানেল, স্পোর্টস ও ব্রেকিং
                      নিউজ ফুল এইচডিতে দেখার জন্য জনপ্রিয় লাইভ টিভি অ্যাপ। অ্যান্ড্রয়েড স্মার্ট
                      টিভি রিমোট ও মোবাইল টাচস্ক্রিনের সাথে শতভাগ সামঞ্জস্যপূর্ণ।
                    </p>

                    {/* Highlights */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground/90">
                      <li className="flex items-center gap-2">
                        <Check className="size-3.5 text-primary shrink-0" />
                        <span>১০০+ লাইভ স্যাটেলাইট চ্যানেল</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="size-3.5 text-primary shrink-0" />
                        <span>লাইভ ক্রিকেট, ফুটবল ও স্পোর্টস</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="size-3.5 text-primary shrink-0" />
                        <span>স্মার্ট টিভি ও টিভি বক্স রিমোট অপ্টিমাইজড</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="size-3.5 text-primary shrink-0" />
                        <span>বাফারিংহীন আল্ট্রা-লো লেটেন্সি লাইভ স্ট্রিম</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Smartphone className="size-4 text-primary" />
                      <span>অ্যান্ড্রয়েড ৫.০ বা তদূর্ধ্ব</span>
                    </div>

                    <a
                      href="/downloads/AppoloTV.apk"
                      download="AppoloTV.apk"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]"
                      aria-label="Appolo TV APK ডাউনলোড করুন"
                    >
                      <Download className="size-4" />
                      <span>ডাউনলোড করুন (11.1 MB)</span>
                    </a>
                  </div>
                </div>

                {/* App 2: StreamX (Brand Orange Themed) */}
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-brand-orange/30 bg-card/90 dark:bg-card/60 p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-brand-orange hover:shadow-xl hover:shadow-brand-orange/10 hover:-translate-y-1">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange border border-brand-orange/20 shadow-sm">
                          <Radio className="size-7" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold text-foreground">
                              StreamX
                            </h3>
                            <Badge
                              variant="outline"
                              className="border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-[11px]"
                            >
                              লাইভ টিভি
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            HD Live Broadcast • সংস্করণ v1.8.2
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="rounded-md bg-muted px-2 py-1 text-xs font-mono font-medium text-foreground border border-border/50">
                          53.5 MB
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      উচ্চমানের লাইভ টিভি চ্যানেল সম্প্রচার ও বিনোদনমূলক চ্যানেল দেখার জন্য
                      আরেকটি প্রিমিয়াম লাইভ টিভি অ্যাপ্লিকেশন। নিরবচ্ছিন্ন লাইভ ব্রডকাস্ট,
                      এইচডি ক্লিয়ারিটি এবং একাধিক চ্যানেল ক্যাটাগরি সহজে উপভোগের সুবিধা।
                    </p>

                    {/* Highlights */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground/90">
                      <li className="flex items-center gap-2">
                        <Check className="size-3.5 text-brand-orange shrink-0" />
                        <span>দেশি ও আন্তর্জাতিক লাইভ টিভি চ্যানেল</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="size-3.5 text-brand-orange shrink-0" />
                        <span>লাইভ স্পোর্টস ও সংবাদ চ্যানেল ক্যাটাগরি</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="size-3.5 text-brand-orange shrink-0" />
                        <span>স্মার্টফোন ও টিভি বক্স উভয়ের জন্য উপযুক্ত</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="size-3.5 text-brand-orange shrink-0" />
                        <span>বিজ্ঞাপনমুক্ত মসৃণ লাইভ প্লেব্যাক</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MonitorPlay className="size-4 text-brand-orange" />
                      <span>ফোন ও অ্যান্ড্রয়েড টিভি ফ্রেন্ডলি</span>
                    </div>

                    <a
                      href="/downloads/StreamX.apk"
                      download="StreamX.apk"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-orange/90 hover:shadow-lg active:scale-[0.98]"
                      aria-label="StreamX APK ডাউনলোড করুন"
                    >
                      <Download className="size-4" />
                      <span>ডাউনলোড করুন (53.5 MB)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Android Install Instructions Banner */}
              <div className="rounded-xl border border-border/70 bg-muted/40 p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <ShieldCheck className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">
                        কীভাবে অ্যান্ড্রয়েড ডিভাইসে ইনস্টল করবেন?
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        ১. উপরের বাটনে ক্লিক করে APK ডাউনলোড করুন → ২. ডিভাইসের Settings &gt; Security-তে গিয়ে &quot;Install from Unknown Sources&quot; অন করুন → ৩. ইনস্টল সম্পন্ন হলে সরাসরি উপভোগ করুন।
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-primary">
                    <Wifi className="size-4" />
                    <span>ফাস্ট কমিউনিকেশন নেটওয়ার্কে আনলিমিটেড স্পিড</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: DIRECTORY SEARCH & TAB FILTER (FOCUSED CLIENT COMPONENT)
            ========================================================================= */}
        <FtpDirectoryClient
          ftpServers={FTP_SERVERS}
          tvServers={LIVE_TV_SERVERS}
        />

        {/* =========================================================================
            SECTION 3: GUIDELINES & FAQS (100% SERVER RENDERED)
            ========================================================================= */}
        <section
          id="ftp-faq"
          aria-labelledby="faq-heading"
          className="rounded-3xl border border-border/80 bg-card/60 dark:bg-card/30 p-6 sm:p-8 lg:p-10 shadow-sm backdrop-blur-md"
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <HelpCircle className="size-5" />
              </div>
              <div>
                <h2
                  id="faq-heading"
                  className="text-xl font-bold text-foreground sm:text-2xl"
                >
                  FTP ও লাইভ টিভি সংক্রান্ত সাধারণ প্রশ্ন ও সমাধান
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  যেকোনো সমস্যা এড়াতে নিচের নির্দেশনাবলী অনুসরণ করুন
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="flex flex-col gap-2 rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 p-5">
                <div className="flex items-center gap-2 font-semibold text-sm text-foreground">
                  <Wifi className="size-4 text-primary shrink-0" />
                  <span>সার্ভার কেন ওপেন হচ্ছে না?</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  এই সার্ভারগুলো কেবল ফাস্ট কমিউনিকেশন ব্রডব্যান্ড লাইনে অ্যাক্সেস করা সম্ভব।
                  মোবাইল ডাটা (যেমন গ্রামীণফোন, রবি, বাংলালিংক) বা ডিভাইসে কোনো VPN চালু থাকলে
                  সার্ভারগুলো লোড হবে না। VPN বন্ধ করে পুনরায় চেষ্টা করুন।
                </p>
              </div>

              <div className="flex flex-col gap-2 rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 p-5">
                <div className="flex items-center gap-2 font-semibold text-sm text-foreground">
                  <MonitorPlay className="size-4 text-brand-orange shrink-0" />
                  <span>অ্যান্ড্রয়েড টিভিতে অ্যাপ সেটআপ</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  পেনড্রাইভে APK ফাইলটি কপি করে আপনার স্মার্ট টিভিতে সংযুক্ত করুন এবং ফাইল ম্যানেজার
                  দিয়ে ইনস্টল করুন। অথবা টিভির নিজস্ব ব্রাউজার থেকে সরাসরি এই পেজে ঢুকে ডাউনলোড করুন।
                </p>
              </div>

              <div className="flex flex-col gap-2 rounded-2xl border border-border/60 bg-card/70 dark:bg-card/40 p-5">
                <div className="flex items-center gap-2 font-semibold text-sm text-foreground">
                  <Zap className="size-4 text-primary shrink-0" />
                  <span>FTP ডাউনলোডের সেরা গতি পেতে</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  কম্পিউটার ব্যবহারকারীরা দ্রুত ফাইল ডাউনলোডের জন্য IDM (Internet Download Manager)
                  বা ফ্রি ডাউনলোড ম্যানেজার ব্যবহার করতে পারেন। কোনো বাধা ছাড়াই ১০০+ Mbps স্পিড পাবেন।
                </p>
              </div>
            </div>

            {/* Quick Help Box */}
            <div className="mt-2 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-primary/20 bg-primary/5 p-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <AlertCircle className="size-5 text-primary shrink-0" />
                <p className="text-xs text-foreground/90">
                  সার্ভার সংক্রান্ত যেকোনো সমস্যায় আমাদের ২৪/৭ সাপোর্ট টিমের সাথে যোগাযোগ করুন।
                </p>
              </div>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/90 shrink-0"
              >
                <span>২৪/৭ হেল্পলাইনে যোগাযোগ</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
