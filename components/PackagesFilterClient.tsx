"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Check,
  Sparkles,
  Users,
  Server,
  Filter,
  Globe,
  Wifi,
  Laptop,
  Briefcase,
  Layers,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ALL_PACKAGES,
  PACKAGE_CATEGORIES,
  type PackageCategory,
  type PackageItem,
} from "@/lib/packages";

const CATEGORY_ICONS: Record<PackageCategory, React.ElementType> = {
  all: Layers,
  home: Wifi,
  freelance: Laptop,
  corporate: Briefcase,
};

export default function PackagesFilterClient() {
  const [selectedCategory, setSelectedCategory] =
    useState<PackageCategory>("all");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "speed-desc">(
    "default",
  );

  const filteredPackages = useMemo(() => {
    const result =
      selectedCategory === "all"
        ? [...ALL_PACKAGES]
        : ALL_PACKAGES.filter((pkg) => pkg.category === selectedCategory);

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.priceNumber - b.priceNumber);
    } else if (sortBy === "speed-desc") {
      result.sort((a, b) => b.speedNumber - a.speedNumber);
    }

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <div className="space-y-10">
      {/* =============================================================
          Controls: Filter Tabs & Sorting
          ============================================================= */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4 rounded-2xl border border-border/70 bg-card/70 p-3 sm:p-4 backdrop-blur-xl shadow-xs">
        {/* Category Pills: 2-col on mobile, flex wrap on tablet/desktop */}
        <div
          role="tablist"
          aria-label="প্যাকেজ ক্যাটাগরি"
          className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-1.5 sm:gap-2 w-full lg:w-auto"
        >
          {PACKAGE_CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.id];
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "relative inline-flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 rounded-xl px-2.5 sm:px-3.5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer text-center",
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/25"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <Icon className="size-3.5 shrink-0" />
                <span className="truncate">{cat.label}</span>
                <span
                  className={cn(
                    "inline-flex size-4.5 sm:size-5 items-center justify-center rounded-full text-[10px] sm:text-[11px] font-bold shrink-0",
                    isSelected
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-background text-muted-foreground border border-border/60",
                  )}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Sorting Dropdown: Full width on mobile, inline on desktop */}
        <div className="flex items-center justify-between sm:justify-end gap-2 w-full lg:w-auto pt-2 lg:pt-0 border-t border-border/40 lg:border-t-0 text-xs sm:text-sm">
          <span className="text-muted-foreground font-medium flex items-center gap-1.5 shrink-0">
            <Filter className="size-3.5 text-primary" />
            <span>সাজান:</span>
          </span>
          <select
            aria-label="প্যাকেজ সাজান"
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as "default" | "price-asc" | "speed-desc",
              )
            }
            className="flex-1 sm:flex-initial rounded-xl border border-border/80 bg-background px-3 py-2 text-xs sm:text-sm font-medium text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
          >
            <option value="default">প্রস্তাবিত ক্রম (Default)</option>
            <option value="price-asc">কম মূল্য থেকে বেশি (৳)</option>
            <option value="speed-desc">সর্বোচ্চ গতি থেকে (Mbps)</option>
          </select>
        </div>
      </div>

      {/* Office Connection Callout Banner */}
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 backdrop-blur-sm">
        <div className="flex items-start gap-3 text-left">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mt-0.5">
            <PhoneCall className="size-4.5" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-semibold text-foreground leading-snug">
              প্যাকেজ রেট নির্ধারিত • নতুন সংযোগ পেতে সরাসরি অফিসে কল করুন
            </p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              যেকোনো প্যাকেজের সংযোগ নিতে আমাদের শেরপুর সদরের অফিসে যোগাযোগ বা
              ফোন করুন।
            </p>
          </div>
        </div>
        <Link
          href="/contact-us"
          className="w-full sm:w-auto justify-center shrink-0 inline-flex items-center gap-1.5 rounded-xl border border-primary/30 bg-background/80 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
        >
          <span>অফিসের তথ্য দেখুন</span>
          <ArrowRight className="size-3.5" />
        </Link>
      </div>

      {/* =============================================================
          9 Packages Responsive Grid
          ============================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {filteredPackages.map((pkg: PackageItem) => {
          const isPopular = pkg.isPopular;

          return (
            <article
              key={pkg.id}
              className={cn(
                "relative flex flex-col justify-between rounded-2xl border p-6 sm:p-7 backdrop-blur-xl transition-all duration-300",
                isPopular
                  ? "border-primary/80 dark:border-primary/70 bg-card/95 dark:bg-card/85 shadow-xl shadow-primary/15 ring-2 ring-primary/25 lg:-translate-y-2 z-10"
                  : "border-border/75 bg-card/80 dark:bg-card/50 shadow-xs hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1",
              )}
            >
              {/* Popular Glow Badge on Top */}
              {isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-primary via-blue-600 to-brand-orange px-4 py-1 text-xs font-bold text-white shadow-md">
                    <Sparkles className="size-3 text-amber-300" />
                    <span>{pkg.badge}</span>
                  </span>
                </div>
              )}

              <div>
                {/* Header: Package Name & Badge */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-semibold tracking-wider text-primary uppercase block">
                      {pkg.categoryLabel}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-0.5">
                      {pkg.name}
                    </h3>
                  </div>

                  {!isPopular && pkg.badge && (
                    <span className="shrink-0 rounded-full bg-muted/80 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground border border-border/50">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                {/* Target Devices / Use Case Pill */}
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    <Users className="size-3" />
                    <span>{pkg.devices}</span>
                  </span>
                  <span className="text-xs text-muted-foreground">
                    • {pkg.idealFor}
                  </span>
                </div>

                {/* Bandwidth Speed & Price Display Box */}
                <div className="mt-5 rounded-xl border border-border/60 bg-muted/30 p-4">
                  <div className="flex items-baseline justify-between border-b border-border/40 pb-3">
                    <div>
                      <span className="text-xs font-medium text-muted-foreground block">
                        ইন্টারনেট স্পিড
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

                  {/* BDIX & Cache Speed Callout */}
                  <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Server className="size-3.5 text-brand-orange" />
                      <span>FTP ও BDIX ক্যাশ:</span>
                    </span>
                    <span className="font-semibold text-foreground">
                      {pkg.bdixSpeed}
                    </span>
                  </div>

                  {/* Real IP Indicator if present */}
                  {pkg.hasRealIp && (
                    <div className="mt-2 pt-2 border-t border-border/30 flex items-center justify-between text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      <span className="flex items-center gap-1">
                        <Globe className="size-3" />
                        <span>রিয়েল আইপি (Static IP):</span>
                      </span>
                      <span>সাপোর্টেড / ফ্রি</span>
                    </div>
                  )}
                </div>

                {/* Package Educational Summary */}
                <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>

                {/* Features Checklist */}
                <div className="mt-5 border-t border-border/50 pt-4">
                  <p className="text-[11px] font-semibold tracking-wider text-foreground/80 uppercase mb-3">
                    প্যাকেজের মূল সুবিধাসমূহ:
                  </p>
                  <ul className="space-y-2" role="list">
                    {pkg.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-foreground/85 leading-snug"
                      >
                        <div
                          className={cn(
                            "flex size-4 shrink-0 items-center justify-center rounded-full mt-0.5",
                            isPopular
                              ? "bg-primary text-white"
                              : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
                          )}
                        >
                          <Check className="size-2.5" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
