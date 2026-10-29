import type { Metadata } from "next";
import { CONTACT_INFO, LEGAL_CREDENTIALS } from "@/lib/navigation";

export const PRODUCTION_DOMAIN = "https://www.fastcommunication.com.bd";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_DOMAIN
).replace(/\/$/, "");

export const SITE_NAME_BN = "ফাস্ট কমিউনিকেশন";
export const SITE_NAME_EN = "Fast Communication";
export const SITE_FULL_NAME = "ফাস্ট কমিউনিকেশন (Fast Communication)";

export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/og.webp`,
  width: 1200,
  height: 630,
  alt: "ফাস্ট কমিউনিকেশন (Fast Communication) — শেরপুর জেলার অপটিক্যাল ফাইবার ব্রডব্যান্ড ইন্টারনেট সেবা",
  type: "image/webp",
} as const;

export const DEFAULT_LOCAL_KEYWORDS = [
  "ফাস্ট কমিউনিকেশন",
  "ফাস্ট কমিউনিকেশন শেরপুর",
  "শেরপুর ইন্টারনেট সেবা",
  "শেরপুর ব্রডব্যান্ড ইন্টারনেট",
  "শেরপুর সদর ওয়াইফাই সংযোগ",
  "তেরাবাজার শেরপুর ইন্টারনেট",
  "শেরপুর ফাইবার অপটিক ইন্টারনেট",
  "Fast Communication",
  "Fast Communication Sherpur",
  "ISP in Sherpur",
  "Sherpur broadband internet",
  "Sherpur Sadar fiber internet",
  "Terabazar Sherpur ISP",
  "Sherpur 2100 internet service provider",
];

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const absoluteUrl =
    normalizedPath === "/" ? SITE_URL : `${SITE_URL}${normalizedPath}`;
  const mergedKeywords = Array.from(
    new Set([...keywords, ...DEFAULT_LOCAL_KEYWORDS]),
  );

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: SITE_FULL_NAME,
      locale: "bn_BD",
      type: "website",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : {
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
  };
}

/**
 * Verified Organization / LocalBusiness / InternetServiceProvider JSON-LD.
 * Uses strictly verified business facts present in the codebase.
 */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["InternetServiceProvider", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME_BN,
    alternateName: SITE_NAME_EN,
    url: SITE_URL,
    logo: `${SITE_URL}/fast-comm-logo-light-mode.webp`,
    image: `${SITE_URL}/og.webp`,
    description:
      "ফাস্ট কমিউনিকেশন (Fast Communication) — শেরপুর সদর ও শেরপুর জেলায় অপটিক্যাল ফাইবার ব্রডব্যান্ড (FTTH) ইন্টারনেট সেবা প্রদানকারী প্রতিষ্ঠান।",
    telephone: CONTACT_INFO.phone,
    priceRange: "৳600 - ৳3500",
    taxID: LEGAL_CREDENTIALS.tin,
    identifier: [
      {
        "@type": "PropertyValue",
        name: "TIN",
        value: LEGAL_CREDENTIALS.tin,
      },
      {
        "@type": "PropertyValue",
        name: "Trade License Number",
        value: LEGAL_CREDENTIALS.tradeLicenseNo,
      },
      {
        "@type": "PropertyValue",
        name: "Sherpur Municipality Trade License ID",
        value: LEGAL_CREDENTIALS.tradeLicenseId,
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "তেরাবাজার, শেরপুর টাউন (Terabazar, Sherpur Town)",
      addressLocality: "শেরপুর সদর (Sherpur Sadar)",
      addressRegion: "ময়মনসিংহ বিভাগ (Mymensingh Division)",
      postalCode: "2100",
      addressCountry: "BD",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Sherpur Sadar",
      },
      {
        "@type": "AdministrativeArea",
        name: "Sherpur District",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: CONTACT_INFO.phone,
        contactType: "customer support",
        areaServed: "BD",
        availableLanguage: ["bn", "en"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
    ],
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_FULL_NAME,
    inLanguage: "bn-BD",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function getBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}
