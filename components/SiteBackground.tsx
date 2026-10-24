import React from "react";

/**
 * SiteBackground
 *
 * A high-performance, accessible, responsive background system tailored to
 * Fast Communication's brand identity (Broadband & Fiber Internet ISP).
 *
 * Design features:
 * - ISP-inspired data grid / fiber constellation dot-matrix with soft radial fade mask
 * - Ambient chromatic glowing orbs (Royal/Electric Blue + Warm Fast Comm Orange accent)
 * - Coordinated light and dark themes using OKLCH and brand tokens
 * - Micro-noise overlay to prevent color banding and add tactile glass depth
 * - Smooth hardware-accelerated ambient drift (auto-disabled with prefers-reduced-motion)
 * - Zero hydration mismatch & zero runtime JS overhead
 * - pointer-events-none, aria-hidden for 100% accessibility & unobtrusive usability
 */
export default function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
      style={{ clipPath: "inset(0)" }}
    >
      {/* -----------------------------------------------------------------
          Layer 1: Base Ambient Surface & Horizon Sheen
          ----------------------------------------------------------------- */}
      <div className="absolute inset-0 bg-background transition-colors duration-300" />

      {/* Light Mode: Visible, graceful sky-azure luminous horizon wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-15%,rgba(7,86,197,0.08)_0%,rgba(219,234,254,0.45)_35%,rgba(248,250,252,0)_75%)] dark:hidden" />

      {/* Light Mode: Subtle warm sunrise glow at bottom-right edge */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,rgba(255,101,0,0.035)_0%,transparent_60%)] dark:hidden" />

      {/* Dark Mode: Deep cosmic navy ambient glow (kept faithful to original) */}
      <div className="hidden dark:block absolute inset-0 bg-[radial-gradient(ellipse_120%_75%_at_50%_-10%,rgba(59,130,246,0.12)_0%,rgba(7,21,47,0)_75%)]" />

      {/* -----------------------------------------------------------------
          Layer 2: Fiber / Network Grid & Dot Matrix Texture
          Calibrated so texture is cleanly visible in light mode yet completely non-intrusive
          ----------------------------------------------------------------- */}
      <div
        className="absolute inset-0 opacity-[0.55] dark:opacity-[0.28]"
        style={{
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 12%, black 25%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 12%, black 25%, transparent 85%)",
        }}
      >
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            {/* Fine Network Dot Matrix */}
            <pattern
              id="fc-dot-grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="16"
                cy="16"
                r="1"
                className="fill-blue-900/30 dark:fill-primary/45"
              />
            </pattern>

            {/* Micro Fiber Mesh Lines */}
            <pattern
              id="fc-mesh-lines"
              width="96"
              height="96"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 96 0 L 0 0 0 96"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeDasharray="2 6"
                className="text-blue-900/12 dark:text-primary/18"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#fc-mesh-lines)" />
          <rect width="100%" height="100%" fill="url(#fc-dot-grid)" />
        </svg>
      </div>

      {/* -----------------------------------------------------------------
          Layer 3: Ambient Luminous Orbs
          Light mode: richer pastel tones so shapes and depth are discernible
          Dark mode: smooth cosmic glow
          ----------------------------------------------------------------- */}
      {/* Orb 1: Primary Royal/Electric Blue (Upper Left to Center) */}
      <div
        className="animate-bg-drift-1 absolute -top-24 left-[5%] md:left-[12%] h-[340px] w-[340px] sm:h-[480px] sm:w-[480px] lg:h-[640px] lg:w-[640px] rounded-full blur-[80px] sm:blur-[110px] lg:blur-[140px]
          bg-linear-to-br from-blue-400/22 via-primary/14 to-transparent
          dark:from-blue-600/18 dark:via-primary/14 dark:to-transparent"
      />

      {/* Orb 2: Brand Orange Accent (Upper Right) - Fast Comm Energy */}
      <div
        className="animate-bg-drift-2 absolute -top-20 right-[3%] md:right-[10%] h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[520px] lg:w-[520px] rounded-full blur-[80px] sm:blur-[120px] lg:blur-[150px]
          bg-linear-to-bl from-amber-400/18 via-orange-400/12 to-transparent
          dark:from-orange-500/13 dark:via-amber-500/7 dark:to-transparent"
      />

      {/* Orb 3: Atmospheric Grounding (Mid Page Depth) */}
      <div
        className="animate-bg-pulse-soft absolute top-[40%] left-[25%] md:left-[35%] h-[260px] w-[260px] sm:h-[360px] sm:w-[460px] lg:h-[460px] lg:w-[680px] -translate-x-1/2 rounded-full blur-[90px] sm:blur-[130px] lg:blur-[160px]
          bg-linear-to-tr from-sky-300/15 via-blue-200/10 to-transparent
          dark:from-indigo-600/12 dark:via-blue-900/14 dark:to-transparent"
      />

      {/* -----------------------------------------------------------------
          Layer 4: Signal Propagation Echo Arcs (Tasteful Depth Detail)
          Concentric signal wave arcs in the upper-right corner hinting at
          wireless broadcast & fiber data radiating from the hub
          ----------------------------------------------------------------- */}
      <svg
        className="absolute -top-16 -right-16 w-[420px] h-[420px] opacity-[0.4] dark:opacity-[0.25]"
        viewBox="0 0 420 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="420"
          cy="0"
          r="160"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 8"
          className="text-orange-500/25 dark:text-orange-400/20"
        />
        <circle
          cx="420"
          cy="0"
          r="260"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 10"
          className="text-primary/20 dark:text-primary/18"
        />
        <circle
          cx="420"
          cy="0"
          r="360"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 12"
          className="text-blue-500/15 dark:text-blue-400/12"
        />
      </svg>

      {/* -----------------------------------------------------------------
          Layer 5: Fiber Optic Signal Waves & Network Connection Nodes
          Graceful flowing data paths with tiny interactive-feeling glowing junctions
          ----------------------------------------------------------------- */}
      <svg
        className="absolute top-0 left-0 w-full h-[480px] sm:h-[620px] opacity-[0.55] dark:opacity-[0.25]"
        viewBox="0 0 1440 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Light Mode Gradient: Distinct, crisp Royal Blue to Warm Orange */}
          <linearGradient
            id="fiber-beam-light"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#0756C5" stopOpacity="0" />
            <stop offset="25%" stopColor="#0756C5" stopOpacity="0.38" />
            <stop offset="65%" stopColor="#FF6500" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#0756C5" stopOpacity="0" />
          </linearGradient>

          {/* Dark Mode Gradient: Luminous Electric Blue to Warm Amber */}
          <linearGradient
            id="fiber-beam-dark"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="35%" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#FF6500" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>

          <linearGradient
            id="fiber-secondary"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="0" />
            <stop
              offset="50%"
              stopColor="var(--brand-blue)"
              stopOpacity="0.28"
            />
            <stop
              offset="100%"
              stopColor="var(--brand-yellow)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        {/* Primary Signal Path - Light Mode */}
        <path
          d="M -100,120 C 300,40 600,260 1000,140 C 1200,80 1400,220 1550,180"
          stroke="url(#fiber-beam-light)"
          strokeWidth="1.25"
          strokeLinecap="round"
          className="dark:hidden animate-bg-pulse-soft"
        />

        {/* Primary Signal Path - Dark Mode */}
        <path
          d="M -100,120 C 300,40 600,260 1000,140 C 1200,80 1400,220 1550,180"
          stroke="url(#fiber-beam-dark)"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="hidden dark:block animate-bg-pulse-soft"
        />

        {/* Secondary Harmonic Stream */}
        <path
          d="M -50,220 C 350,160 650,380 1100,220 C 1300,160 1450,300 1600,260"
          stroke="url(#fiber-secondary)"
          strokeWidth="1"
          strokeDasharray="4 8"
          strokeLinecap="round"
        />

        {/* Tasteful Network Data Junction Nodes along the main stream */}
        {/* Node 1: Left Junction */}
        <g className="animate-bg-pulse-soft" style={{ animationDelay: "0s" }}>
          <circle
            cx="340"
            cy="118"
            r="4"
            className="fill-primary/30 dark:fill-primary/40"
          />
          <circle
            cx="340"
            cy="118"
            r="1.75"
            className="fill-primary dark:fill-white"
          />
        </g>

        {/* Node 2: Center-Right Fiber Hub */}
        <g className="animate-bg-pulse-soft" style={{ animationDelay: "1.5s" }}>
          <circle
            cx="880"
            cy="168"
            r="4.5"
            className="fill-brand-orange/30 dark:fill-brand-orange/40"
          />
          <circle
            cx="880"
            cy="168"
            r="2"
            className="fill-brand-orange dark:fill-amber-300"
          />
        </g>

        {/* Node 3: Right Boundary Node */}
        <g className="animate-bg-pulse-soft" style={{ animationDelay: "3s" }}>
          <circle
            cx="1220"
            cy="125"
            r="3.5"
            className="fill-primary/25 dark:fill-primary/35"
          />
          <circle
            cx="1220"
            cy="125"
            r="1.5"
            className="fill-primary dark:fill-sky-300"
          />
        </g>
      </svg>

      {/* -----------------------------------------------------------------
          Layer 6: Micro-Noise Glass Texture
          Smooth tactile depth and eliminates banding on all displays
          ----------------------------------------------------------------- */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
