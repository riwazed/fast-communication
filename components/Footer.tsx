import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { connection } from "next/server";
import {
  PhoneCall,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  ExternalLink,
  Lock,
} from "lucide-react";
import Logo from "@/components/Logo";
import { MAIN_NAV_LINKS, PORTAL_LINK } from "@/lib/navigation";
import sslPaymentGateway from "@/public/ssl-payment-gateway.png";

async function CurrentYear() {
  await connection();
  return <>{new Date().getFullYear()}</>;
}

/**
 * Footer Component
 *
 * Server-Side Rendered (SSR) informative footer for Fast Communication.
 * Features comprehensive navigation, contact & NOC support details,
 * official business credentials, and the SSLCOMMERZ secure payment gateway banner.
 */
export default function Footer() {

  return (
    <footer className="relative border-t border-border/70 bg-card/80 dark:bg-card/40 backdrop-blur-xl transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* =============================================================
            Top Section: 4-Column Informative Grid
            ============================================================= */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand Info & Legal Summary (lg:col-span-4) */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <Link
              href="/"
              className="inline-block transition-transform hover:scale-[1.01]"
              aria-label="ফাস্ট কমিউনিকেশন হোমপেজ"
            >
              <Logo className="h-10 w-auto" priority={false} />
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed">
              ফাস্ট কমিউনিকেশন — শেরপুর জেলার একটি বিশ্বস্ত ইন্টারনেট সেবা প্রদানকারী
              প্রতিষ্ঠান। দ্রুতগতির অপটিক্যাল ফাইবার ব্রডব্যান্ড সংযোগ, বাফারিংহীন
              BDIX ও সার্বক্ষণিক কাস্টমার কেয়ার প্রদানে আমরা অঙ্গীকারবদ্ধ।
            </p>

            {/* Quick Legal Credentials Badge */}
            <div className="mt-2 rounded-xl border border-border/60 bg-muted/40 p-3.5 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5 font-semibold text-foreground mb-1">
                <ShieldCheck className="size-4 text-primary shrink-0" />
                <span>সরকারি নিবন্ধন ও লাইসেন্স</span>
              </div>
              <p className="font-mono text-[11px] text-foreground/90">
                TIN: 880092407015 | ট্রেড লাইসেন্স: 0569-00
              </p>
              <p className="text-[10px] text-muted-foreground mt-0.5">
                ট্রেড আইডি: 02-005-0569-00 (শেরপুর পৌরসভা)
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="flex flex-col gap-3 lg:col-span-2 sm:pl-2">
            <h3 className="text-sm font-bold tracking-wider text-foreground uppercase">
              প্রয়োজনীয় লিংক
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm" role="list">
              {MAIN_NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary hover:translate-x-0.5"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={PORTAL_LINK.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-primary transition-colors hover:text-primary/80"
                >
                  <span>{PORTAL_LINK.name}</span>
                  <ExternalLink className="size-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Solutions (lg:col-span-3) */}
          <div className="flex flex-col gap-3 lg:col-span-3">
            <h3 className="text-sm font-bold tracking-wider text-foreground uppercase">
              আমাদের সেবাসমূহ
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground" role="list">
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary shrink-0" />
                <span>অপটিক্যাল ফাইবার ব্রডব্যান্ড (FTTH)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-brand-orange shrink-0" />
                <span>১০০+ Mbps লোকাল BDIX ও FTP সার্ভার</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>ডিজিটাল বিল পরিশোধ (বিকাশ ও নগদ)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-blue-500 shrink-0" />
                <span>গ্রাহক সেলফ-কেয়ার বিলিং পোর্টাল</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-amber-500 shrink-0" />
                <span>কর্পোরেট ও SME ডেডিকেটেড ব্যান্ডউইথ</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & NOC Support (lg:col-span-3) */}
          <div className="flex flex-col gap-3 lg:col-span-3">
            <h3 className="text-sm font-bold tracking-wider text-foreground uppercase">
              যোগাযোগ ও সহায়তা
            </h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              {/* Location */}
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4.5 text-primary shrink-0 mt-0.5" />
                <span>
                  শেরপুর সদর, শেরপুর জেলা, ময়মনসিংহ বিভাগ, বাংলাদেশ।
                </span>
              </div>

              {/* Support Phone / Helpline */}
              <div className="flex items-start gap-2.5">
                <PhoneCall className="size-4.5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">
                    ২৪/৭ হেল্পডেস্ক ও কাস্টমার কেয়ার
                  </p>
                  <p className="text-xs text-muted-foreground">
                    নতুন সংযোগ ও টেকনিক্যাল যেকোনো প্রয়োজনে সরাসরি যোগাযোগ করুন
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-2.5 text-xs">
                <Clock className="size-4 text-emerald-500 shrink-0" />
                <span>সাপোর্ট সময়: ২৪ ঘণ্টা, সপ্তাহে ৭ দিন (সার্বক্ষণিক)</span>
              </div>

              {/* Quick Action Link */}
              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all hover:underline"
                >
                  <span>যোগাযোগ পাতায় যান</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =============================================================
            Middle Section: SSLCOMMERZ Payment Gateway Banner
            ============================================================= */}
        <div className="mt-12 sm:mt-16 rounded-2xl border border-border/70 bg-card/90 dark:bg-card/60 p-5 sm:p-7 shadow-sm backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-border/50 pb-4 mb-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Lock className="size-3.5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">
                  নিরাপদ ডিজিটাল পেমেন্ট মাধ্যমসমূহ
                </h4>
                <p className="text-xs text-muted-foreground">
                  বিকাশ, নগদ, রকেট, ভিসা, মাস্টারকার্ড ও প্রধান ব্যাংকিং কার্ডের মাধ্যমে ইনস্ট্যান্ট বিল পরিশোধ
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground border border-border/50">
              <ShieldCheck className="size-3.5 text-emerald-500" />
              <span>100% সুরক্ষিত গেটওয়ে</span>
            </div>
          </div>

          {/* Payment Gateway Image Banner */}
          <div className="relative w-full flex items-center justify-center overflow-hidden rounded-xl bg-white p-3 sm:p-4 shadow-inner">
            <Image
              src={sslPaymentGateway}
              alt="নিরাপদ ডিজিটাল পেমেন্ট মাধ্যমসমূহ — বিকাশ, নগদ, রকেট, ভিসা, মাস্টারকার্ড, উপায় ও সকল প্রধান ব্যাংক সাপোর্টেড"
              className="h-auto max-h-24 w-full object-contain"
              priority={false}
            />
          </div>
        </div>

        {/* =============================================================
            Bottom Bar: Copyright, Legal & Regional Attribution
            ============================================================= */}
        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground text-center sm:text-left">
          <div>
            <p>
              ©{" "}
              <Suspense fallback={null}>
                <CurrentYear />
              </Suspense>{" "}
              <span className="font-semibold text-foreground">ফাস্ট কমিউনিকেশন</span> (Fast Communication)। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <p className="mt-0.5 text-[11px] text-muted-foreground/80">
              TIN: 880092407015 • ট্রেড লাইসেন্স নং: 0569-00 • আইডি: 02-005-0569-00
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-500" />
              <span>শেরপুর জেলার সেরা ইন্টারনেট সেবা</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
