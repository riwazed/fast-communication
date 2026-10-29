import type { Metadata } from "next";
import { Anek_Bangla } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteBackground from "@/components/SiteBackground";

const anekBangla = Anek_Bangla({
  variable: "--font-anek-bangla",
  subsets: ["bengali", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ফাস্ট কমিউনিকেশন | শেরপুর জেলার সেরা ইন্টারনেট সেবা",
  description:
    "ফাস্ট কমিউনিকেশন — শেরপুর জেলার একটি বিশ্বস্ত ইন্টারনেট সেবা প্রদানকারী প্রতিষ্ঠান। দ্রুতগতির ব্রডব্যান্ড ও ফাইবার ইন্টারনেট সংযোগ পান।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      className={`${anekBangla.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <SiteBackground />
            <Navbar />
            <main className="flex-1 relative z-0">{children}</main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
