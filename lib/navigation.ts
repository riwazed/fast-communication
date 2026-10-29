export interface NavItem {
  id: string;
  name: string;
  href: string;
  iconName:
    | "Package"
    | "CreditCard"
    | "Server"
    | "Users"
    | "PhoneCall"
    | "LogIn";
  badge?: string;
  isExternal?: boolean;
}

export const MAIN_NAV_LINKS: NavItem[] = [
  {
    id: "packages",
    name: "প্যাকেজ",
    href: "/packages",
    iconName: "Package",
  },
  {
    id: "billing",
    name: "বিল পরিশোধ",
    href: "/billing-process",
    iconName: "CreditCard",
  },
  {
    id: "ftp",
    name: "FTP সাপোর্ট",
    href: "/ftp-services",
    iconName: "Server",
  },
  {
    id: "about",
    name: "আমাদের সম্পর্কে",
    href: "/about-us",
    iconName: "Users",
  },
  {
    id: "contact",
    name: "যোগাযোগ করুন",
    href: "/contact-us",
    iconName: "PhoneCall",
  },
];

export const PORTAL_LINK: NavItem = {
  id: "portal",
  name: "কাস্টমার পোর্টাল",
  href: "https://portal.bcncommunication.net/customer/login",
  iconName: "LogIn",
  isExternal: true,
};

export const CONTACT_INFO = {
  address: "তেরাবাজার, শেরপুর টাউন, শেরপুর সদর, শেরপুর-২১০০",
  phone: "+8801901173340",
  phoneHref: "tel:+8801901173340",
} as const;

export interface LegalLinkItem {
  id: "privacy" | "terms" | "cookies" | "refund";
  name: string;
  shortName: string;
  englishName: string;
  href: string;
}

export const LEGAL_NAV_LINKS: LegalLinkItem[] = [
  {
    id: "privacy",
    name: "গোপনীয়তা নীতি",
    shortName: "গোপনীয়তা নীতি",
    englishName: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    id: "terms",
    name: "শর্তাবলী ও নিয়মাবলী",
    shortName: "শর্তাবলী",
    englishName: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
  {
    id: "cookies",
    name: "কুকি নীতি",
    shortName: "কুকি নীতি",
    englishName: "Cookie Policy",
    href: "/cookie-policy",
  },
  {
    id: "refund",
    name: "রিফান্ড ও বাতিলকরণ নীতি",
    shortName: "রিফান্ড নীতি",
    englishName: "Refund Policy",
    href: "/refund-policy",
  },
];

export const LEGAL_CREDENTIALS = {
  tin: "880092407015",
  tradeLicenseNo: "0569-00",
  tradeLicenseId: "02-005-0569-00",
} as const;
