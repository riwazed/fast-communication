import logo from "@/public/fast-comm-logo.webp";
import Image from "next/image";
import Link from "next/link";
import ActiveLink from "./ActiveLink";
import SideBar from "./SideBar";

const navLinks = [
  {
    id: "1",
    name: "প্যাকেজ",
    href: "/packages",
  },
  {
    id: "2",
    name: "বিল পরিশোধ",
    href: "/billing-process",
  },
  {
    id: "3",
    name: "FTP সাপোর্ট",
    href: "/ftp-services",
  },
  {
    id: "5",
    name: "আমাদের সম্পর্কে",
    href: "/about-us",
  },
  {
    id: "6",
    name: "যোগাযোগ করুন",
    href: "/contact-us",
  },
  {
    id: "7",
    name: "কাস্টমার পোর্টাল",
    href: "",
  },
];

export default function Navbar() {
  return (
    <nav className="p-3 w-full border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="ফাস্ট কমিউনিকেশন"
            width={150}
            height={64}
            priority={true}
          />
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <ActiveLink key={link.id} href={link.href}>
              {link.name}
            </ActiveLink>
          ))}
        </div>
        <SideBar />
      </div>
    </nav>
  );
}
