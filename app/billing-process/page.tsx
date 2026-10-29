import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "বিল পরিশোধ প্রক্রিয়া | ফাস্ট কমিউনিকেশন শেরপুর",
  description:
    "ফাস্ট কমিউনিকেশন শেরপুরের ডিজিটাল বিল পরিশোধ প্রক্রিয়া, বিকাশ, নগদ ও কার্ড পেমেন্ট গাইডলাইন। ঘরে বসে সহজে ইন্টারনেট বিল জমা দিন।",
  path: "/billing-process",
  noIndex: true,
  keywords: [
    "Fast Communication Billing",
    "Sherpur internet bill payment",
    "ফাস্ট কমিউনিকেশন বিল পরিশোধ",
    "শেরপুর ব্রডব্যান্ড বিল বিকাশ",
  ],
});

export default function BillingProcessPage() {
  return (
    <ComingSoon
      pageName="বিল পরিশোধ প্রক্রিয়া"
      badge="পেমেন্ট গেটওয়ে ও গাইডলাইন • শীঘ্রই আসছে"
      title="অনলাইন বিল পরিশোধ সুবিধা"
      highlightedTitleWord="শীঘ্রই আসছে"
      description="বিকাশ, নগদ, রকেট ও ভিসা/মাস্টারকার্ডের মাধ্যমে ঘরে বসে স্বয়ংক্রিয় অনলাইন পেমেন্ট গাইড এবং রিচার্জ সিস্টেম আপডেট করার কাজ চলমান রয়েছে। ইতিমধ্যে আপনার মাসিক বিল পরিশোধ করতে আমাদের সেলফ-কেয়ার পোর্টাল ব্যবহার করুন।"
      upcomingFeatures={[
        "বিকাশ, নগদ ও রকেট ইনস্ট্যান্ট অটো-রিচার্জ",
        "ভিসা, মাস্টারকার্ড ও অনলাইন ব্যাংকিং সুবিধা",
        "তাৎক্ষণিক ডিজিটাল রসিদ ও বিলিং হিস্ট্রি ডাউনলোড",
        "SMS ও ইমেইলে অটোমেটিক রিনিউয়াল নোটিফিকেশন",
      ]}
      showPortalCta={true}
      showHelplineCta={true}
    />
  );
}
