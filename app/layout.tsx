import type { Metadata } from "next";
import { Suspense } from "react";
import { Anek_Bangla } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteBackground from "@/components/SiteBackground";
import PageLoading from "@/components/PageLoading";
import RouteTransitionLoader from "@/components/RouteTransitionLoader";
import JsonLd from "@/components/JsonLd";
import {
  DEFAULT_LOCAL_KEYWORDS,
  DEFAULT_OG_IMAGE,
  getOrganizationJsonLd,
  getWebsiteJsonLd,
  SITE_FULL_NAME,
  SITE_NAME_BN,
  SITE_URL,
} from "@/lib/seo";

const anekBangla = Anek_Bangla({
  variable: "--font-anek-bangla",
  subsets: ["bengali", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "ফাস্ট কমিউনিকেশন শেরপুর | ব্রডব্যান্ড ও অপটিক্যাল ফাইবার ইন্টারনেট সেবা",
    template: "%s",
  },
  description:
    "ফাস্ট কমিউনিকেশন (Fast Communication) — শেরপুর সদর ও শেরপুর জেলায় অপটিক্যাল ফাইবার ব্রডব্যান্ড ইন্টারনেট সেবা প্রদানকারী প্রতিষ্ঠান (তেরাবাজার, শেরপুর-২১০০)। বাসাবাড়ি ও অফিসের জন্য আনলিমিটেড ইন্টারনেট, BDIX ও ২৪/৭ সাপোর্ট।",
  applicationName: SITE_FULL_NAME,
  authors: [{ name: SITE_FULL_NAME, url: SITE_URL }],
  creator: SITE_NAME_BN,
  publisher: SITE_FULL_NAME,
  category: "telecommunications",
  keywords: DEFAULT_LOCAL_KEYWORDS,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title:
      "ফাস্ট কমিউনিকেশন শেরপুর | ব্রডব্যান্ড ও অপটিক্যাল ফাইবার ইন্টারনেট সেবা",
    description:
      "শেরপুর সদরে অপটিক্যাল ফাইবার ব্রডব্যান্ড ইন্টারনেট সংযোগ, ২০০+ Mbps BDIX/FTP এবং ২৪/৭ কাস্টমার সাপোর্ট। তেরাবাজার, শেরপুর-২১০০ | ফোন: +8801901173340।",
    url: SITE_URL,
    siteName: SITE_FULL_NAME,
    locale: "bn_BD",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ফাস্ট কমিউনিকেশন শেরপুর | ব্রডব্যান্ড ও অপটিক্যাল ফাইবার ইন্টারনেট সেবা",
    description:
      "শেরপুর সদরে অপটিক্যাল ফাইবার ব্রডব্যান্ড ইন্টারনেট সংযোগ, ২০০+ Mbps BDIX/FTP এবং ২৪/৭ কাস্টমার সাপোর্ট।",
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "BD-C",
    "geo.placename": "Sherpur Sadar, Sherpur, Bangladesh",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      className={`${anekBangla.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col relative">
        <JsonLd data={[getOrganizationJsonLd(), getWebsiteJsonLd()]} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-primary-foreground focus:shadow-lg"
        >
          মূল বিষয়বস্তুতে যান
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <SiteBackground />
            <Navbar />
            <main id="main-content" className="flex-1 relative z-0">
              <Suspense fallback={null}>
                <RouteTransitionLoader />
              </Suspense>
              <Suspense fallback={<PageLoading />}>{children}</Suspense>
            </main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
