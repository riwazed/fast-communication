import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  FileText,
  Scale,
  Cookie,
  RefreshCcw,
  CheckCircle2,
  PhoneCall,
  MapPin,
  Clock,
  Info,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import JsonLd from "@/components/JsonLd";
import {
  CONTACT_INFO,
  LEGAL_CREDENTIALS,
  LEGAL_NAV_LINKS,
  type LegalLinkItem,
} from "@/lib/navigation";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

export interface LegalHighlight {
  label: string;
  value: string;
  description: string;
}

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  note?: string;
}

export interface LegalPageLayoutProps {
  activeId: LegalLinkItem["id"];
  badgeText: string;
  titlePrefix: string;
  highlightedWord: string;
  titleSuffix?: string;
  englishTitle: string;
  lastUpdated: string;
  summary: string;
  highlights: LegalHighlight[];
  sections: LegalSection[];
}

const POLICY_ICONS: Record<LegalLinkItem["id"], React.ElementType> = {
  privacy: ShieldCheck,
  terms: Scale,
  cookies: Cookie,
  refund: RefreshCcw,
};

export default function LegalPageLayout({
  activeId,
  badgeText,
  titlePrefix,
  highlightedWord,
  titleSuffix,
  englishTitle,
  lastUpdated,
  summary,
  highlights,
  sections,
}: LegalPageLayoutProps) {
  const HeaderIcon = POLICY_ICONS[activeId];
  const activeItem = LEGAL_NAV_LINKS.find((item) => item.id === activeId);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "হোম", path: "/" },
    {
      name: activeItem?.name || englishTitle,
      path: activeItem?.href || "/",
    },
  ]);

  return (
    <div className="relative min-h-screen py-10 sm:py-14 lg:py-20">
      <JsonLd data={breadcrumbJsonLd} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-14">
        {/* =============================================================
            1. Breadcrumbs & Hero Header
            ============================================================= */}
        <div>
          <nav
            aria-label="ব্রেডক্রাম্ব"
            className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-muted-foreground"
          >
            <Link
              href="/"
              className="transition-colors hover:text-primary font-medium"
            >
              হোম
            </Link>
            <ChevronRight className="size-3.5 text-muted-foreground/60" />
            <span className="text-muted-foreground">আইনি নীতিমালা</span>
            <ChevronRight className="size-3.5 text-muted-foreground/60" />
            <span className="font-semibold text-foreground">
              {activeItem?.name}
            </span>
          </nav>

          <header className="mt-7 sm:mt-9 max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-sm">
              <HeaderIcon className="size-3.5 text-brand-orange shrink-0" />
              <span>{badgeText}</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight">
              {titlePrefix}{" "}
              <span className="bg-linear-to-r from-primary via-blue-600 to-brand-orange bg-clip-text text-transparent">
                {highlightedWord}
              </span>
              {titleSuffix ? ` ${titleSuffix}` : ""}
            </h1>

            <p className="text-xs sm:text-sm font-mono font-medium text-muted-foreground">
              {englishTitle} • Fast Communication, Sherpur
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {summary}
            </p>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              <div className="inline-flex items-center gap-1.5 rounded-xl border border-border/70 bg-card/80 px-3.5 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm">
                <Clock className="size-3.5 text-primary shrink-0" />
                <span>সর্বশেষ হালনাগাদ: {lastUpdated}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 backdrop-blur-sm">
                <BadgeCheck className="size-4 text-emerald-500 shrink-0" />
                <span>
                  TIN: {LEGAL_CREDENTIALS.tin} • লাইসেন্স:{" "}
                  {LEGAL_CREDENTIALS.tradeLicenseNo}
                </span>
              </div>
            </div>
          </header>
        </div>

        {/* =============================================================
            2. At-a-Glance Highlights Grid (3 Summary Cards)
            ============================================================= */}
        <section
          aria-label="নীতিমালার মূল সারসংক্ষেপ"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"
        >
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border/75 bg-card/80 dark:bg-card/50 p-5 sm:p-6 shadow-xs backdrop-blur-xl transition-all duration-200 hover:border-primary/40"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary block">
                {item.label}
              </span>
              <span className="mt-1 text-lg sm:text-xl font-extrabold text-foreground block">
                {item.value}
              </span>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </section>

        {/* =============================================================
            3. Main Two-Column Layout (Sidebar + Legal Clauses)
            ============================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Top Sidebar: Legal Switcher, TOC & Company Card */}
          <aside className="lg:col-span-4 lg:sticky lg:top-22 flex flex-col gap-5">
            {/* Policy Pages Switcher */}
            <div className="rounded-2xl border border-border/75 bg-card/85 dark:bg-card/55 p-5 shadow-xs backdrop-blur-xl">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-border/50">
                <FileText className="size-4 text-primary shrink-0" />
                <h2 className="text-sm font-bold text-foreground">
                  আইনি নীতিমালাসমূহ
                </h2>
              </div>
              <nav
                aria-label="আইনি পাতা নেভিগেশন"
                className="flex flex-col gap-1.5"
              >
                {LEGAL_NAV_LINKS.map((item) => {
                  const Icon = POLICY_ICONS[item.id];
                  const isActive = item.id === activeId;
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium transition-all",
                        isActive
                          ? "bg-primary text-primary-foreground font-semibold shadow-sm shadow-primary/20"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      <span className="flex items-center gap-2.5">
                        <Icon
                          className={cn(
                            "size-4 shrink-0",
                            isActive
                              ? "text-primary-foreground"
                              : "text-primary",
                          )}
                        />
                        <span>{item.name}</span>
                      </span>
                      <span
                        className={cn(
                          "text-[10px] font-mono",
                          isActive
                            ? "text-primary-foreground/80"
                            : "text-muted-foreground/70",
                        )}
                      >
                        {item.englishName.split(" ")[0]}
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Table of Contents (Desktop & Tablet quick jump) */}
            <div className="rounded-2xl border border-border/75 bg-card/85 dark:bg-card/55 p-5 shadow-xs backdrop-blur-xl">
              <h2 className="text-sm font-bold text-foreground pb-3 mb-3 border-b border-border/50">
                এই পাতার সূচিপত্র
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm">
                {sections.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className="flex items-start gap-2 text-muted-foreground transition-colors hover:text-primary py-0.5"
                    >
                      <span className="font-mono text-[11px] font-bold text-primary mt-0.5 shrink-0">
                        {sec.number}.
                      </span>
                      <span className="leading-snug">{sec.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Office & Support Card */}
            <address className="not-italic rounded-2xl border border-primary/25 bg-primary/5 p-5 backdrop-blur-xl space-y-3 text-xs">
              <div className="font-bold text-sm text-foreground flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary shrink-0" />
                <span>অফিসিয়াল যোগাযোগ</span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="size-4 text-brand-orange shrink-0" />
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="font-mono font-bold text-sm text-foreground hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="pt-2 border-t border-border/50 text-[11px] text-muted-foreground font-mono">
                TIN: {LEGAL_CREDENTIALS.tin} • License ID:{" "}
                {LEGAL_CREDENTIALS.tradeLicenseId}
              </div>
            </address>
          </aside>

          {/* Right / Main Policy Clauses */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {sections.map((sec) => (
              <section
                key={sec.id}
                id={sec.id}
                aria-labelledby={`${sec.id}-heading`}
                className="scroll-mt-24 rounded-2xl border border-border/75 bg-card/85 dark:bg-card/50 p-6 sm:p-8 shadow-xs backdrop-blur-xl transition-colors hover:border-border"
              >
                <div className="flex items-start gap-3.5 mb-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-sm border border-primary/20">
                    {sec.number}
                  </span>
                  <h2
                    id={`${sec.id}-heading`}
                    className="text-lg sm:text-xl font-bold text-foreground leading-snug pt-1"
                  >
                    {sec.title}
                  </h2>
                </div>

                <div className="space-y-3.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {sec.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {sec.bullets && sec.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2.5 rounded-xl bg-muted/35 p-4 sm:p-5 border border-border/50">
                    {sec.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed"
                      >
                        <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.note && (
                  <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs sm:text-sm text-foreground/90">
                    <Info className="size-4 text-brand-orange shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{sec.note}</p>
                  </div>
                )}
              </section>
            ))}

            {/* Bottom Contact & Support Banner */}
            <div className="rounded-3xl border border-primary/25 bg-linear-to-b from-card/95 via-card/85 to-card/90 p-6 sm:p-8 shadow-lg backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  নীতিমালা বিষয়ে কোনো প্রশ্ন বা সহায়তা প্রয়োজন?
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  আমাদের শেরপুর সদর অফিসে ({CONTACT_INFO.address}) সরাসরি
                  যোগাযোগ করুন অথবা ২৪/৭ হেল্পলাইনে কল করুন।
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto shrink-0">
                <a
                  href={CONTACT_INFO.phoneHref}
                  className={cn(
                    buttonVariants({ variant: "default", size: "default" }),
                    "flex-1 sm:flex-initial rounded-xl font-bold px-5",
                  )}
                >
                  <PhoneCall className="size-4 mr-1.5" />
                  <span className="font-mono">{CONTACT_INFO.phone}</span>
                </a>
                <Link
                  href="/packages"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "default" }),
                    "flex-1 sm:flex-initial rounded-xl font-semibold px-4",
                  )}
                >
                  <span>প্যাকেজ দেখুন</span>
                  <ArrowRight className="size-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
