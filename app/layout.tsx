import type { Metadata } from "next";
import { Anek_Bangla } from "next/font/google";
import "./globals.css";

const anekBangla = Anek_Bangla({
  variable: "--font-anek-bangla",
  subsets: ["bengali"],
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
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
