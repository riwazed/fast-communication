import { Wifi, Zap } from "lucide-react";

export default function PageLoading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="relative min-h-[100vh] flex flex-col justify-center py-12 sm:py-16 overflow-hidden"
    >
      {/* Top Optical Fiber Indeterminate Progress Bar (below sticky h-16 Navbar) */}
      <div
        aria-hidden="true"
        className="fixed top-16 inset-x-0 z-50 h-1 overflow-hidden bg-primary/15 pointer-events-none"
      >
        <div className="h-full w-2/5 rounded-full bg-linear-to-r from-primary via-blue-500 to-brand-orange animate-fiber-progress" />
      </div>

      {/* Ambient Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 size-80 sm:size-110 rounded-full bg-primary/10 blur-[110px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-1/4 size-64 rounded-full bg-brand-orange/10 blur-[90px] -z-10"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Main Branded Fiber Pulse Indicator Card */}
        <div className="w-full max-w-md rounded-3xl border border-primary/25 bg-card/90 dark:bg-card/65 p-7 sm:p-9 shadow-xl backdrop-blur-2xl text-center flex flex-col items-center">
          {/* Concentric Optical Fiber Spinner & Pulse */}
          <div className="relative flex size-20 items-center justify-center">
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-primary/15 animate-ping"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full border-2 border-primary/20 border-t-primary border-r-brand-orange animate-spin"
            />
            <div className="relative flex size-13 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/25 shadow-sm">
              <Wifi className="size-6" />
            </div>
          </div>

          {/* Status Copy */}
          <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
            <Zap className="size-3 text-brand-orange shrink-0" />
            <span>ফাস্ট কমিউনিকেশন • অপটিক্যাল নেটওয়ার্ক</span>
          </div>

          <h2 className="mt-3 text-lg sm:text-xl font-extrabold tracking-tight text-foreground">
            পাতা লোড হচ্ছে...
          </h2>

          <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            তথ্য প্রস্তুত করা হচ্ছে, অনুগ্রহ করে কিছুক্ষণ অপেক্ষা করুন।
          </p>

          {/* Animated Micro Progress Dots */}
          <div
            aria-hidden="true"
            className="mt-5 flex items-center justify-center gap-2"
          >
            <span className="size-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
            <span className="size-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]" />
            <span className="size-2 rounded-full bg-brand-orange animate-bounce" />
          </div>
        </div>

        {/* Subtle Content Skeleton Preview Grid for Visual Continuity */}
        <div
          aria-hidden="true"
          className="mt-10 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 opacity-60"
        >
          {[0, 1, 2].map((idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border/60 bg-card/60 dark:bg-card/35 p-5 backdrop-blur-md space-y-3 animate-pulse"
            >
              <div className="flex items-center justify-between">
                <div className="size-9 rounded-xl bg-muted" />
                <div className="h-4 w-16 rounded-full bg-muted" />
              </div>
              <div className="h-4 w-3/4 rounded-md bg-muted" />
              <div className="space-y-1.5">
                <div className="h-3 w-full rounded-md bg-muted/80" />
                <div className="h-3 w-4/5 rounded-md bg-muted/80" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
