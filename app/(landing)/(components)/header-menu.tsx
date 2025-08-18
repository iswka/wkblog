"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    label: "首页",
    href: "/home",
  },
  {
    label: "钥匙库",
    href: "/keys",
  }
];


export default function HeaderMenu() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-6 text-sm text-gray-500 font-medium">
      {menuItems.map((item) => (
        <Link key={item.href} href={item.href} className={cn("hover:text-primary", pathname === item.href && "text-primary")}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}