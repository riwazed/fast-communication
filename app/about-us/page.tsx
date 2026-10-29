import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  BadgeCheck,
  Sparkles,
  Wifi,
  Server,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Target,
  Compass,
  Zap,
  MapPin,
  CreditCard,
  Layers,
  Award,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CONTACT_INFO } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে | ফাস্ট কমিউনিকেশন শেরপুর",
  description:
    "ফাস্ট কমিউনিকেশন — শেরপুর জেলার শীর্ষস্থানীয় ফাইবার অপটিক ব্রডব্যান্ড ইন্টারনেট সেবা প্রদানকারী প্রতিষ্ঠান। আমাদের লক্ষ্য, ভিশন, প্রযুক্তি, সরকারি লাইসেন্স ও গ্রাহক সেবার বিস্তারিত জানুন।",
  keywords: [
    "About Fast Communication",
    "Fast Communication Sherpur",
    "Best ISP in Sherpur",
    "শেরপুর ইন্টারনেট সেবা",
    "ফাস্ট কমিউনিকেশন সম্পর্কে",
    "শেরপুর ব্রডব্যান্ড আইএসপি",
  ],
};

const STATS = [
  {
    id: "uptime",
    value: "৯৯.৯%",
    label: "নেটওয়ার্ক আপটাইম",
    description: "স্থিতিশীল ও নিরবচ্ছিন্ন ফাইবার সংযোগ",
    icon: Wifi,
  },
  {
    id: "bdix-speed",
    value: "২০০+ Mbps",
    label: "BDIX ও FTP স্পিড",
    description: "বাফারিংহীন লোকাল ক্যাশ ও স্ট্রিমিং",
    icon: Zap,
  },
  {
    id: "support",
    value: "২৪/৭",
    label: "সার্বক্ষণিক গ্রাহক সেবা",
    description: "প্রশিক্ষিত স্থানীয় টেকনিক্যাল টিম",
    icon: Clock,
  },
  {
    id: "clients",
    value: "১০০০+",
    label: "সন্তুষ্ট গ্রাহক পরিবার",
    description: "বাসাবাড়ি ও করপোরেট প্রতিষ্ঠান",
    icon: Users,
  },
];

const INFRASTRUCTURE_FEATURES = [
  {
    id: "ftth",
    title: "১০০% অপটিক্যাল ফাইবার (FTTH)",
    description:
      "তামার তারের পুরনো পদ্ধতির বদলে সরাসরি গ্রাহকের রাউটার পর্যন্ত হাই-কোয়ালিটি অপটিক্যাল ফাইবার ক্যাবল সংযোগ দেওয়া হয়, যা রোদ-বৃষ্টিতেও সমান গতি বজায় রাখে।",
    icon: Wifi,
    badge: "আধুনিক প্রযুক্তি",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
  {
    id: "bdix",
    title: "উচ্চগতির BDIX ও লোকাল ক্যাশ",
    description:
      "বাংলাদেশ ইন্টারনেট এক্সচেঞ্জ (BDIX) ও নিজস্ব উচ্চগতির FTP সার্ভারের মাধ্যমে ইউটিউব, ফেসবুক, লাইভ টিভি ও মুভি স্ট্রিমিংয়ে পাওয়া যায় সর্বোচ্চ স্পিড।",
    icon: Server,
    badge: "বাফারিংহীন বিনোদন",
    iconColor: "text-brand-orange",
    iconBg: "bg-brand-orange/10",
  },
  {
    id: "noc",
    title: "২৪/৭ সেন্ট্রাল NOC মনিটরিং",
    description:
      "আমাদের সেন্ট্রাল নেটওয়ার্ক অপারেশন সেন্টার (NOC) সার্বক্ষণিক ফাইবার অপটিক লাইন ও লেটেন্সি রিয়েল-টাইমে মনিটর করে, ফলে সমস্যা হওয়ার আগেই সমাধান নিশ্চিত হয়।",
    icon: Layers,
    badge: "সার্বক্ষণিক নজরদারি",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
  },
  {
    id: "billing",
    title: "স্মার্ট সেলফ-কেয়ার ও ডিজিটাল বিলিং",
    description:
      "ঘরে বসেই বিকাশ, নগদ, রকেট ও প্রধান ব্যাংকিং কার্ডের মাধ্যমে এক ক্লিকে বিল পরিশোধ ও অ্যাকাউন্টের মেয়াদ নবায়নের আধুনিক স্বয়ংক্রিয় সুবিধা।",
    icon: CreditCard,
    badge: "সহজ লেনদেন",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
  {
    id: "support-team",
    title: "স্থানীয় দক্ষ টেকনিক্যাল হেল্পডেস্ক",
    description:
      "শেরপুরের স্থানীয় মাঠপর্যায়ের দক্ষ ইঞ্জিনিয়ারিং টিম, যারা যেকোনো সংযোগ স্থাপন বা কারিগরি প্রয়োজনে তাৎক্ষণিক সেবা দিতে প্রস্তুত।",
    icon: Clock,
    badge: "দ্রুততম সমাধান",
    iconColor: "text-brand-orange",
    iconBg: "bg-brand-orange/10",
  },
  {
    id: "licensed",
    title: "সরকারি অনুমোদন ও বৈধ নিবন্ধন",
    description:
      "TIN ও শেরপুর পৌরসভা কর্তৃক অনুমোদিত বৈধ ট্রেড লাইসেন্সপ্রাপ্ত প্রতিষ্ঠান হিসেবে আমরা সম্পূর্ণ নিয়মতান্ত্রিক ও স্বচ্ছ সেবা প্রদানে দায়বদ্ধ।",
    icon: ShieldCheck,
    badge: "১০০% নির্ভরযোগ্য",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
  },
];

const CORE_VALUES = [
  {
    title: "গ্রাহক সন্তুষ্টিই প্রথম",
    description:
      "আমরা শুধু ইন্টারনেট সংযোগ দিই না, গ্রাহকের দৈনন্দিন পড়াশোনা, অফিস ও বিনোদনের ডিজিটাল ভরসা হিসেবে দায়িত্ব পালন করি।",
  },
  {
    title: "স্বচ্ছতা ও সততা",
    description:
      "কোনো লুকানো চার্জ নেই। প্রতিশ্রুত স্পিড ও সেবার মান সব সময় বজায় রাখা আমাদের অন্যতম প্রধান অঙ্গীকার।",
  },
  {
    title: "উন্নত প্রযুক্তিগত মানদণ্ড",
    description:
      "আন্তর্জাতিক মানের রাউটিং ইকুইপমেন্ট ও অপটিক্যাল ফাইবার ড্রপ ক্যাবল ব্যবহারের মাধ্যমে লো-পিং ও হাই-স্পিড প্রদান।",
  },
  {
    title: "দ্রুততম রেসপন্স টাইম",
    description:
      "২৪ ঘণ্টার মধ্যে নতুন লাইন স্থাপন এবং সংযোগে কোনো জটিলতা দেখা দিলে দ্রুততম সময়ে মাঠপর্যায়ে সমাধান।",
  },
];

export default function AboutUsPage() {
  return (
    <div className="relative min-h-screen py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14 sm:gap-18 lg:gap-24">
        {/* =========================================================================
            BREADCRUMBS & TOP NAV
            ========================================================================= */}
        <div>
          <nav
            aria-label="ব্রেডক্রাম্ব"
            className="flex items-center gap-2 text-xs text-muted-foreground"
          >
            <Link href="/" className="transition-colors hover:text-foreground">
              হোম
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="font-medium text-foreground">আমাদের সম্পর্কে</span>
          </nav>

          {/* =====================================================================
              HERO HEADER SECTION
              ===================================================================== */}
          <header className="mt-8 text-center max-w-4xl mx-auto flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-sm">
              <Sparkles className="size-3.5 text-brand-orange" />
              <span>শেরপুর জেলার বিশ্বস্ত ইন্টারনেট সেবা প্রদানকারী</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight">
              আমাদের লক্ষ্য, শেরপুরের প্রতিটি ঘরে{" "}
              <span className="bg-linear-to-r from-primary via-blue-600 to-brand-orange bg-clip-text text-transparent">
                উচ্চগতির ডিজিটাল সংযোগ
              </span>{" "}
              পৌঁছে দেওয়া
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              ফাস্ট কমিউনিকেশন (Fast Communication) শেরপুর জেলার একটি
              শীর্ষস্থানীয় ও বিশ্বস্ত ব্রডব্যান্ড ইন্টারনেট সেবা প্রদানকারী
              প্রতিষ্ঠান। আধুনিক অপটিক্যাল ফাইবার প্রযুক্তি, বাফারিংহীন BDIX
              স্পিড এবং নিবেদিতপ্রাণ কাস্টমার সাপোর্টের মাধ্যমে আমরা ডিজিটাল
              বাংলাদেশের স্বপ্ন বাস্তবায়নে শেরপুরে নিরবচ্ছিন্ন ভূমিকা রাখছি।
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <BadgeCheck className="size-4 text-emerald-500" />
                <span>সরকারি নিবন্ধন ও লাইসেন্সপ্রাপ্ত</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-xl border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                <Clock className="size-3.5 text-brand-orange" />
                <span>২৪/৭ সার্বক্ষণিক টেকনিক্যাল সাপোর্ট</span>
              </div>
            </div>
          </header>
        </div>

        {/* =========================================================================
            SECTION 1: KEY STATS GRID
            ========================================================================= */}
        <section
          aria-label="কোম্পানি পরিসংখ্যান"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="relative flex flex-col items-center text-center rounded-2xl border border-border/75 bg-card/80 dark:bg-card/50 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 mb-4">
                  <Icon className="size-6" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm font-bold text-foreground">
                  {stat.label}
                </span>
                <span className="mt-1 text-xs text-muted-foreground">
                  {stat.description}
                </span>
              </div>
            );
          })}
        </section>

        {/* =========================================================================
            SECTION 2: OUR STORY, MISSION & VISION (2-COLUMN)
            ========================================================================= */}
        <section
          id="story-mission"
          aria-labelledby="story-heading"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Column 1: Our Story (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-border/75 bg-card/80 dark:bg-card/50 p-7 sm:p-10 shadow-sm backdrop-blur-xl">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                <Target className="size-3.5 text-brand-orange" />
                <span>আমাদের ইতিহাস ও যাত্রা</span>
              </div>

              <h2
                id="story-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
              >
                শেরপুরের মানুষের জন্য উন্নত ও নির্ভরযোগ্য ইন্টারনেট সেবা
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                শেরপুর অঞ্চলের সাধারণ ইন্টারনেট ব্যবহারকারীরা যখন ধীরগতি,
                আবহাওয়া বিঘ্নিত লাইন ও ঘন ঘন সংযোগ বিচ্ছিন্নের সমস্যায় ভুগতেন,
                তখন একটি নির্ভরযোগ্য বিকল্প তৈরির দৃঢ় প্রত্যয় নিয়ে যাত্রা শুরু
                করে{" "}
                <strong className="text-foreground">ফাস্ট কমিউনিকেশন</strong>।
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                আমরা পুরনো কপার ক্যাবলের সীমাবদ্ধতা পেছনে ফেলে সম্পূর্ণ
                অপটিক্যাল ফাইবার নেটওয়ার্ক (FTTH) বাস্তবায়ন করেছি। এর ফলে
                শেরপুরের শিক্ষার্থীদের অনলাইন পড়াশোনা, তরুণদের ফ্রিল্যান্সিং
                ক্যারিয়ার, ব্যবসায়ী প্রতিষ্ঠান ও পরিবারের দৈনন্দিন বিনোদন এখন
                চলছে বাফারিং ছাড়াই নিরবচ্ছিন্ন গতিতে।
              </p>

              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-border/60">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-foreground/90">
                    শেরপুর সদর ও পৌর এলাকার সর্ববৃহৎ ফাইবার কভারেজ
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-foreground/90">
                    রিয়েল-টাইম লো-পিং সমৃদ্ধ ফ্রিল্যান্সিং ও গেমিং নেটওয়ার্ক
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-foreground/90">
                    দ্রুততম সময়ে কারিগরি ত্রুটি সমাধানের অন-ফিল্ড টিম
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-foreground/90">
                    সম্পূর্ণ সরকারি অনুমোদিত ও স্বচ্ছ ব্যবসা পরিচালনা
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div className="flex items-start sm:items-center gap-1.5 text-xs font-medium text-foreground/90">
                <MapPin className="size-3.5 text-primary shrink-0 mt-0.5 sm:mt-0" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <a
                href={CONTACT_INFO.phoneHref}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-primary hover:underline"
              >
                <PhoneCall className="size-3.5 text-brand-orange shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Mission & Vision Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Mission Card */}
            <div className="flex flex-col gap-3 rounded-3xl border border-primary/30 bg-card/90 dark:bg-card/60 p-7 shadow-sm backdrop-blur-xl transition-all hover:border-primary/60">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                  <Target className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    আমাদের মিশন
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Our Core Mission
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-1">
                শেরপুর জেলার প্রতিটি ঘর ও ব্যবসাপ্রতিষ্ঠানে সাশ্রয়ী মূল্যে
                আল্ট্রা-ফাস্ট, বাফারিংহীন অপটিক্যাল ফাইবার ব্রডব্যান্ড পৌঁছে
                দেওয়া এবং ২৪/৭ নিবেদিত গ্রাহক সেবার মাধ্যমে ডিজিটাল ক্ষমতায়ন
                নিশ্চিত করা।
              </p>
            </div>

            {/* Vision Card */}
            <div className="flex flex-col gap-3 rounded-3xl border border-brand-orange/30 bg-card/90 dark:bg-card/60 p-7 shadow-sm backdrop-blur-xl transition-all hover:border-brand-orange/60">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                  <Compass className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    আমাদের ভিশন
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Our Long-term Vision
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-1">
                শেরপুর জেলাকে প্রযুক্তিবান্ধব একটি আধুনিক স্মার্ট অঞ্চলে
                রূপান্তর করতে নেতৃত্ব দেওয়া, যেখানে প্রতিটি মানুষ সমান সুযোগে
                দ্রুতগতির তথ্যের মহাসড়কে সংযুক্ত থাকবে।
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: INFRASTRUCTURE & TECHNOLOGY FEATURES
            ========================================================================= */}
        <section
          id="infrastructure"
          aria-labelledby="infra-heading"
          className="flex flex-col gap-8"
        >
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
              <Server className="size-3.5 text-brand-orange" />
              <span>প্রযুক্তি ও নেটওয়ার্ক সক্ষমতা</span>
            </div>
            <h2
              id="infra-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
            >
              কেন ফাস্ট কমিউনিকেশন অন্যদের চেয়ে আলাদা?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              আমরা সেরা প্রযুক্তির সমন্বয়ে প্রতিটি সংযোগ গড়ে তুলি যেন গ্রাহক পান
              সর্বোচ্চ নির্ভরযোগ্যতা
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INFRASTRUCTURE_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-border/75 bg-card/80 dark:bg-card/50 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-2">
                      <div
                        className={cn(
                          "flex size-12 items-center justify-center rounded-2xl border border-border/60 transition-transform group-hover:scale-105",
                          feature.iconBg,
                          feature.iconColor,
                        )}
                      >
                        <Icon className="size-6" />
                      </div>
                      <Badge
                        variant="outline"
                        className="text-[10px] border-border/60 bg-muted/50 text-muted-foreground"
                      >
                        {feature.badge}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: GOVERNMENT LICENSES & LEGAL ACCREDITATION CARD
            ========================================================================= */}
        <section
          id="legal-credentials"
          aria-labelledby="legal-heading"
          className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-linear-to-b from-card/90 via-card/75 to-card/90 p-7 sm:p-10 lg:p-12 shadow-xl backdrop-blur-2xl"
        >
          {/* Ambient Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 size-80 rounded-full bg-emerald-500/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-24 size-80 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="size-4 text-emerald-500" />
                  <span>আইনগত ও প্রাতিষ্ঠানিক স্বচ্ছতা</span>
                </div>
                <h2
                  id="legal-heading"
                  className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
                >
                  সরকারি নিবন্ধন ও লাইসেন্স তথ্যাদি
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  গ্রাহকদের আস্থার প্রতীক — সম্পূর্ণ বৈধ লাইসেন্স সম্বলিত
                  ব্রডব্যান্ড সেবা
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-border/70 bg-card/80 p-3 self-start sm:self-center">
                <Award className="size-6 text-brand-orange shrink-0" />
                <div className="text-left">
                  <span className="block text-xs font-bold text-foreground">
                    শেরপুর পৌরসভা অনুমোদিত
                  </span>
                  <span className="block text-[11px] text-muted-foreground">
                    রেজিস্টার্ড ইন্টারনেট সার্ভিস প্রোভাইডার
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* TIN Box */}
              <div className="rounded-2xl border border-border/70 bg-card/80 dark:bg-card/50 p-5 backdrop-blur-sm">
                <span className="text-xs font-medium text-muted-foreground block">
                  করদাতা সনাক্তকরণ নম্বর (TIN)
                </span>
                <span className="mt-1 text-lg sm:text-xl font-mono font-extrabold text-foreground tracking-wider block">
                  880092407015
                </span>
                <span className="mt-1 text-[11px] text-muted-foreground block">
                  জাতীয় রাজস্ব বোর্ড (NBR) নিবন্ধিত
                </span>
              </div>

              {/* Trade License No */}
              <div className="rounded-2xl border border-border/70 bg-card/80 dark:bg-card/50 p-5 backdrop-blur-sm">
                <span className="text-xs font-medium text-muted-foreground block">
                  ট্রেড লাইসেন্স নম্বর
                </span>
                <span className="mt-1 text-lg sm:text-xl font-mono font-extrabold text-foreground tracking-wider block">
                  0569-00
                </span>
                <span className="mt-1 text-[11px] text-muted-foreground block">
                  ব্যবসা পরিচালনার সরকারি লাইসেন্স
                </span>
              </div>

              {/* Trade License ID */}
              <div className="rounded-2xl border border-border/70 bg-card/80 dark:bg-card/50 p-5 backdrop-blur-sm">
                <span className="text-xs font-medium text-muted-foreground block">
                  ডিজিটাল ট্রেড লাইসেন্স আইডি
                </span>
                <span className="mt-1 text-lg sm:text-xl font-mono font-extrabold text-foreground tracking-wider block">
                  02-005-0569-00
                </span>
                <span className="mt-1 text-[11px] text-muted-foreground block">
                  শেরপুর পৌরসভা কর্তৃক ইস্যুকৃত
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: OUR CORE VALUES (4-GRID)
            ========================================================================= */}
        <section
          aria-labelledby="values-heading"
          className="flex flex-col gap-6"
        >
          <div className="text-center max-w-xl mx-auto flex flex-col items-center gap-2">
            <h2
              id="values-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
            >
              আমাদের কাজের মূল দর্শন
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              প্রতিটি গ্রাহকের আস্থা ধরে রাখতে যে নীতিগুলো আমরা কঠোরভাবে মেনে
              চলি
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={val.title}
                className="flex flex-col rounded-2xl border border-border/70 bg-card/70 dark:bg-card/40 p-6 backdrop-blur-sm"
              >
                <div className="flex size-8 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-sm mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {val.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: CTA CALLOUT / GET CONNECTED
            ========================================================================= */}
        <section className="relative overflow-hidden rounded-3xl border border-primary/25 bg-linear-to-b from-card/95 via-card/85 to-card/90 p-8 sm:p-12 text-center shadow-xl backdrop-blur-xl">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
              <Zap className="size-3.5 text-brand-orange" />
              <span>নতুন সংযোগ পেতে চান?</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              আজই যুক্ত হোন শেরপুরের সেরা ফাইবার নেটওয়ার্কে
            </h2>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              বাসা কিংবা অফিসের জন্য সেরা ইন্টারনেট প্যাকেজটি বেছে নিন। আমাদের
              টেকনিক্যাল টিম দ্রুততম সময়ে সংযোগ স্থাপন সম্পন্ন করবে।
            </p>

            <div className="mt-2 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href={CONTACT_INFO.phoneHref}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-full sm:w-auto px-7 rounded-xl font-bold shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]",
                )}
              >
                <PhoneCall className="size-4 mr-2" />
                <span className="font-mono">{CONTACT_INFO.phone}</span>
              </a>

              <Link
                href="/packages"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-auto px-7 rounded-xl font-bold hover:bg-muted border-border/80",
                )}
              >
                <span>প্যাকেজসমূহ দেখুন</span>
                <ArrowRight className="size-4 ml-2" />
              </Link>
            </div>

            <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="size-3.5 text-primary shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
