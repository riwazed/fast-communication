import Link from "next/link";
import {
  Wifi,
  Server,
  CreditCard,
  Headphones,
  Building2,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Radio,
  Tv,
  PhoneCall,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { PORTAL_LINK } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/**
 * Educational Service Item Definition
 */
interface ServiceItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  href: string;
  ctaText: string;
  isExternal?: boolean;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ftth-broadband",
    badge: "বাসাবাড়ি ও ব্যক্তিগত",
    title: "অপটিক্যাল ফাইবার ব্রডব্যান্ড (FTTH)",
    subtitle: "সরাসরি ফাইবার অপটিক ক্যাবল সংযোগ",
    description:
      "তামার তারের পরিবর্তে সরাসরি আপনার ডিভাইস পর্যন্ত হাই-স্পিড অপটিক্যাল ফাইবার ক্যাবল দেওয়া হয়। এতে রোদ-বৃষ্টি বা দূরত্বের কারণে সিগন্যাল দুর্বল হয় না এবং ২৪ ঘণ্টা সমান আপলোড ও ডাউনলোড স্পিড নিশ্চিত থাকে।",
    benefits: [
      "বাফারিংহীন ব্রাউজিং ও নিরবচ্ছিন্ন স্পিড",
      "আল্ট্রা-লো লেটেন্সি (লো পিং), যা গেমিংয়ের জন্য আদর্শ",
      "আবহাওয়া-সহনশীল আধুনিক ফাইবার অপটিক নেটওয়ার্ক",
    ],
    icon: Wifi,
    iconBg: "bg-primary/10 text-primary",
    iconColor: "text-primary",
    href: "/packages",
    ctaText: "প্যাকেজসমূহ দেখুন",
  },
  {
    id: "ftp-bdix",
    badge: "বিনোদন ও স্ট্রিমিং",
    title: "হাই-স্পিড FTP ও BDIX সাপোর্ট",
    subtitle: "লোকাল ক্যাশ ও মিডিয়া সার্ভার",
    description:
      "ইন্টারন্যাশনাল ব্যান্ডউইথের ওপর নির্ভর না করে স্থানীয় BDIX নেটওয়ার্ক ও উচ্চগতির FTP সার্ভার ব্যবহারের সুযোগ। এর ফলে কোনো ধরনের বাফারিং ছাড়াই ফুল এইচডি ও 4K ভিডিও, মুভি ও সফটওয়্যার সর্বোচ্চ স্পিডে ডাউনলোড করা যায়।",
    benefits: [
      "২০০+ Mbps পর্যন্ত লোকাল বাফারিংহীন স্ট্রিমিং",
      "জনপ্রিয় বাংলাদেশি ও আন্তর্জাতিক কনটেন্ট ক্যাশ সুবিধা",
      "লাইভ টিভি ও অনলাইন লার্নিং প্ল্যাটফর্মে দ্রুত অ্যাক্সেস",
    ],
    icon: Server,
    iconBg: "bg-brand-orange/10 text-brand-orange",
    iconColor: "text-brand-orange",
    href: "/ftp-services",
    ctaText: "FTP সার্ভার তালিকা",
  },
  {
    id: "digital-billing",
    badge: "সহজ লেনদেন",
    title: "স্মার্ট ডিজিটাল বিল পরিশোধ",
    subtitle: "বিকাশ, নগদ ও অনলাইন পেমেন্ট",
    description:
      "অফিসে না গিয়েই নিজের মোবাইল থেকে ঘরে বসে যেকোনো সময় ইন্টারনেট বিল পরিশোধের সুবিধা। পেমেন্ট সম্পন্ন হওয়ার সাথে সাথেই সিস্টেমে স্বয়ংক্রিয়ভাবে অ্যাকাউন্ট আপডেট হয় এবং ডিজিটাল ইনভয়েস তৈরি হয়।",
    benefits: [
      "বিকাশ, নগদ, রকেট ও ভিসা/মাস্টারকার্ড সাপোর্টেড",
      "পেমেন্টের সাথে সাথে স্বয়ংক্রিয় রিকানেকশন সুবিধা",
      "বিল দেওয়ার সঠিক নিয়মাবলী ও স্বচ্ছ হিসাব",
    ],
    icon: CreditCard,
    iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    href: "/billing-process",
    ctaText: "বিল দেওয়ার নিয়মাবলী",
  },
  {
    id: "customer-portal",
    badge: "সেলফ-সার্ভিস",
    title: "গ্রাহক সেলফ-কেয়ার পোর্টাল",
    subtitle: "নিজস্ব অ্যাকাউন্ট নিয়ন্ত্রণ প্যানেল",
    description:
      "প্রতিটি গ্রাহকের জন্য রয়েছে ডেডিকেটেড অনলাইন পোর্টাল। আপনার ইন্টারনেট প্যাকেজের মেয়াদ, মোট ব্যান্ডউইথ ব্যবহারের পরিমাণ, বিল পরিশোধের রেকর্ড দেখতে পারবেন এবং যেকোনো সমস্যায় সরাসরি সাপোর্ট টিকিট খুলতে পারবেন।",
    benefits: [
      "রিয়েলটাইম ব্যান্ডউইথ ব্যবহার ও মেয়াদ পর্যবেক্ষণ",
      "অনলাইন বিল পেমেন্ট হিস্ট্রি ও রসিদ ডাউনলোড",
      "সরাসরি পোর্টাল থেকেই সাপোর্ট টিকিট তৈরির সুবিধা",
    ],
    icon: ShieldCheck,
    iconBg: "bg-blue-600/10 text-blue-600 dark:text-blue-400",
    iconColor: "text-blue-600 dark:text-blue-400",
    href: PORTAL_LINK.href,
    ctaText: "কাস্টমার পোর্টালে যান",
    isExternal: true,
  },
  {
    id: "dedicated-support",
    badge: "সার্বক্ষণিক সেবা",
    title: "২৪/৭ ডেডিকেটেড টেকনিক্যাল সাপোর্ট",
    subtitle: "শেরপুর জেলার স্থানীয় সাপোর্ট টিম",
    description:
      "ইন্টারনেটে যেকোনো জটিলতা দেখা দিলে আমাদের শেরপুর জেলার স্থানীয় টেকনিক্যাল টিম দ্রুত সমাধানে প্রস্তুত। ফোন কল, হটলাইন কিংবা সরাসরি অন-সাইট পরিদর্শনের মাধ্যমে দ্রুত ফাইবার লাইন ও রাউটার সমস্যার সমাধান করা হয়।",
    benefits: [
      "সার্বক্ষণিক হেল্পডেস্ক ও কল সেন্টার সহায়তা",
      "ফাইবার অপটিক লাইনের সমস্যায় দ্রুত অন-ফিল্ড সমাধান",
      "নতুন রাউটার ও ওয়াইফাই নেটওয়ার্ক সেটআপ গাইডেন্স",
    ],
    icon: Headphones,
    iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    iconColor: "text-amber-600 dark:text-amber-400",
    href: "/contact-us",
    ctaText: "সাপোর্টে কথা বলুন",
  },
  {
    id: "corporate-enterprise",
    badge: "প্রাতিষ্ঠানিক ও বাণিজ্যিক",
    title: "কর্পোরেট ও SME ডেডিকেটেড লাইন",
    subtitle: "উচ্চ ক্ষমতাসম্পন্ন প্রাতিষ্ঠানিক সমাধান",
    description:
      "ব্যাংক, বিমা, হাসপাতাল, শিক্ষাপ্রতিষ্ঠান ও বাণিজ্যিক অফিসের জন্য ডেডিকেটেড ১:১ আনশেয়ার্ড ব্যান্ডউইথ সংযোগ। রিয়েল স্ট্যাটিক আইপি ও রিডানড্যান্ট ফাইবার নেটওয়ার্কের মাধ্যমে নিশ্চিত করা হয় সর্বোচ্চ নির্ভরযোগ্যতা।",
    benefits: [
      "১:১ আনশেয়ার্ড ডেডিকেটেড সিমেট্রিক ব্যান্ডউইথ",
      "সিকিউর স্ট্যাটিক/রিয়েল আইপি (Public IP) সুবিধা",
      "হাই-প্রায়োরিটি এসএলএ (SLA) ও স্পেশাল টেকনিক্যাল মনিটরিং",
    ],
    icon: Building2,
    iconBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    href: "/contact-us",
    ctaText: "কর্পোরেট সংযোগের পরামর্শ",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative py-14 sm:py-18 md:py-22 lg:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* =============================================================
            Section Header: Context, Eyebrow & Educational Headline
            ============================================================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-primary backdrop-blur-sm">
            <Radio className="size-3.5 shrink-0 animate-pulse text-primary" />
            <span>আমাদের সেবা ও প্রযুক্তিসমূহ</span>
          </div>

          <h2
            id="services-heading"
            className="mt-4 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-[2.65rem] leading-tight sm:leading-[1.2]"
          >
            শেরপুর জেলার গ্রাহকদের জন্য{" "}
            <span className="bg-linear-to-r from-primary via-blue-600 to-brand-orange bg-clip-text text-transparent">
              আধুনিক ও নির্ভরযোগ্য
            </span>{" "}
            ইন্টারনেট সেবা
          </h2>

          <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-relaxed">
            ফাস্ট কমিউনিকেশন কেবল একটি ইন্টারনেট সংযোগ নয়, বরং উচ্চগতির ডিজিটাল
            জীবনযাপনের সম্পূর্ণ সমাধান। জেনে নিন আমাদের প্রতিটি সেবার বৈশিষ্ট্য
            ও সুবিধাসমূহ:
          </p>
        </div>

        {/* =============================================================
            Services Educational Grid: 6 Responsive Structured Cards
            ============================================================= */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card/80 dark:bg-card/50 p-6 sm:p-7 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                {/* Subtle top gradient accent on hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-blue-500 to-brand-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div>
                  {/* Card Header: Icon & Category Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={cn(
                        "flex size-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105",
                        service.iconBg,
                      )}
                    >
                      <Icon className="size-6" />
                    </div>

                    <span className="rounded-full bg-muted/70 px-2.5 py-1 text-[11px] font-medium text-muted-foreground border border-border/50">
                      {service.badge}
                    </span>
                  </div>

                  {/* Service Title & Subtitle */}
                  <h3 className="mt-5 text-lg sm:text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-primary/90 dark:text-primary/80">
                    {service.subtitle}
                  </p>

                  {/* Educational Description */}
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Benefits Checklist */}
                  <div className="mt-5 space-y-2 border-t border-border/50 pt-4">
                    <p className="text-[11px] font-semibold tracking-wider text-foreground/80 uppercase">
                      বিশেষ বৈশিষ্ট্যসমূহ:
                    </p>
                    {service.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-foreground/85"
                      >
                        <CheckCircle2 className="size-3.5 shrink-0 text-emerald-500 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Footer Link */}
                <div className="mt-6 pt-4 border-t border-border/40">
                  {service.isExternal ? (
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary transition-all duration-200 group-hover:text-primary/80 group-hover:gap-2.5"
                    >
                      <span>{service.ctaText}</span>
                      <ExternalLink className="size-3.5 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary transition-all duration-200 group-hover:text-primary/80 group-hover:gap-2.5"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="size-3.5 transition-transform" />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* =============================================================
            Educational Guidance Callout Strip (Help choosing the right service)
            ============================================================= */}
        <div className="mt-12 sm:mt-16 rounded-2xl border border-primary/20 bg-linear-to-r from-primary/10 via-card/90 to-brand-orange/10 p-6 sm:p-8 backdrop-blur-xl shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex size-13 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md shadow-primary/25">
                <Tv className="size-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  আপনার প্রয়োজন অনুযায়ী সেরা সেবাটি বেছে নিতে চান?
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-xl">
                  বাসার জন্য অপটিক্যাল ফাইবার, প্রাতিষ্ঠানিক ডেডিকেটেড ইন্টারনেট
                  কিংবা লোকাল FTP সংযোগ - আমাদের অভিজ্ঞ টিম আপনাকে সঠিক প্যাকেজ
                  নির্বাচনে সার্বক্ষণিক পরামর্শ দিয়ে সহায়তা করবে।
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <Link
                href="/contact-us"
                className={cn(
                  buttonVariants({ variant: "default", size: "default" }),
                  "h-10 px-5 rounded-xl font-semibold shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]",
                )}
              >
                <PhoneCall className="size-3.5" />
                <span>পরামর্শের জন্য যোগাযোগ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
