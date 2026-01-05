"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

const NAV_ITEMS = [
  { href: "/for-you", label: "For you", icon: "🏠" },
  { href: "/library", label: "My Library", icon: "🔖" },
  { href: "/highlights", label: "Highlights", icon: "✍️" },
  { href: "/search", label: "Search", icon: "🔍" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[240px] min-h-screen border-r border-slate-200 px-4 py-6 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2 px-2">
        <div className="h-9 w-9 rounded bg-slate-900" />
        <span className="text-lg font-semibold text-slate-900">Summarist</span>
      </div>

      {/* Nav */}
      <nav className="mt-8 space-y-1">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition",
                active
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
              ].join(" ")}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="mt-auto pt-6 border-t border-slate-200">
        <Link
          href="/settings"
          className={[
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition",
            pathname === "/settings"
              ? "bg-slate-100 text-slate-900"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
          ].join(" ")}
        >
          <span className="text-base">⚙️</span>
          <span>Settings</span>
        </Link>

        <div className="mt-4 flex items-center gap-3 px-3">
          <UserButton afterSignOutUrl="/" />
          <span className="text-sm text-slate-600">Account</span>
        </div>
      </div>
    </aside>
  );
}
