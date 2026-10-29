import type { Metadata } from "next";
import BestSellings from "@/components/BestSellings";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title:
    "ফাস্ট কমিউনিকেশন শেরপুর | ব্রডব্যান্ড ও অপটিক্যাল ফাইবার ইন্টারনেট সেবা",
  description:
    "ফাস্ট কমিউনিকেশন (Fast Communication) — শেরপুর সদর ও শেরপুর জেলায় অপটিক্যাল ফাইবার ব্রডব্যান্ড (FTTH) ইন্টারনেট সেবা প্রদানকারী প্রতিষ্ঠান। বাসাবাড়ি ও অফিসের জন্য ৭ Mbps থেকে ৭৫ Mbps আনলিমিটেড প্যাকেজ, ২০০+ Mbps BDIX এবং ২৪/৭ লোকাল সাপোর্ট।",
  path: "/",
  keywords: [
    "Fast Communication ISP Sherpur",
    "Broadband internet in Sherpur",
    "Fiber optic internet Sherpur Sadar",
    "শেরপুর ইন্টারনেট লাইন",
    "শেরপুর ব্রডব্যান্ড ওয়াইফাই",
  ],
});

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Services />
      <BestSellings />
      <CTA />
    </>
  );
}
