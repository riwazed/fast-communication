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
  href: "https://portal.fastcommunication.com.bd/customer/login",
  iconName: "LogIn",
  isExternal: true,
};

export const CONTACT_INFO = {
  address: "তেরাবাজার, শেরপুর টাউন, শেরপুর সদর, শেরপুর-২১০০",
  phone: "+8801901173340",
  phoneHref: "tel:+8801901173340",
} as const;
