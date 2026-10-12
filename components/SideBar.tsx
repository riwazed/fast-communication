import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

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
    id: "7",
    name: "আমাদের সম্পর্কে",
    href: "/about-us",
  },
  {
    id: "6",
    name: "যোগাযোগ করুন",
    href: "/contact-us",
  },
  {
    id: "8",
    name: "কাস্টমার পোর্টাল",
    href: "https://portal.bcncommunication.net/customer/login",
  },
];

export default function SideBar() {
  return (
    <aside className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Button variant={"outline"} size={"icon"} className="hover:bg-white">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="pb-0">
            <SheetTitle>ফাস্ট কমিউনিকেশন</SheetTitle>
            <SheetDescription>
              আমাদের সেবা সমূহ এবং প্যাকেজ দেখুন। দ্রুত ও নির্ভরযোগ্য ইন্টারনেট
              সংযোগের জন্য আমাদের সাথে যোগাযোগ করুন।
            </SheetDescription>
          </SheetHeader>
          <Separator className="bg-gray-300" />
          <div className="flex w-full flex-col gap-1.5 p-4">
            {navLinks.map((link) => (
              <SheetClose key={link.id}>
                <Button className="w-full justify-center">
                  <Link href={link.href}>{link.name}</Link>
                </Button>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </aside>
  );
}
