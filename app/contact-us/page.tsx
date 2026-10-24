import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "যোগাযোগ করুন | ফাস্ট কমিউনিকেশন শেরপুর",
  description:
    "ফাস্ট কমিউনিকেশন শেরপুর অফিসের সাথে সরাসরি যোগাযোগ করুন। নতুন ইন্টারনেট সংযোগ, বিলিং ও ২৪/৭ টেকনিক্যাল সাপোর্ট হেল্পলাইন।",
  keywords: [
    "Fast Communication Contact",
    "Sherpur ISP contact number",
    "ফাস্ট কমিউনিকেশন যোগাযোগ",
    "শেরপুর ইন্টারনেট অফিস ফোন নম্বর",
  ],
};

export default function ContactUsPage() {
  return (
    <ComingSoon
      pageName="যোগাযোগ করুন"
      badge="সাপোর্ট ও ইনকোয়ারি সিস্টেম • শীঘ্রই আসছে"
      title="আমাদের পূর্ণাঙ্গ যোগাযোগ পাতাটি"
      highlightedTitleWord="শীঘ্রই আসছে"
      description="অনলাইন সাপোর্ট টিকিট ওপেন, সরাসরি ইনকোয়ারি পাঠানো এবং কাস্টমার হেল্পডেস্ক ইন্টারফেস তৈরির কাজ চলমান রয়েছে। যেকোনো জরুরি সহায়তা বা নতুন সংযোগের জন্য সরাসরি আমাদের শেরপুর সদর অফিসে যোগাযোগ করুন।"
      upcomingFeatures={[
        "অনলাইন কাস্টমার সাপোর্ট টিকেট ও ট্র্যাকিং",
        "ওয়েবসাইট থেকে সরাসরি নতুন সংযোগের রিকোয়েস্ট",
        "শেরপুর সদরের গুগল ম্যাপ ও অফিস দিকনির্দেশনা",
        "২৪/৭ জরুরি NOC ও লোকাল টেকনিক্যাল হেল্পলাইন",
      ]}
      showPortalCta={true}
      showHelplineCta={true}
    />
  );
}
