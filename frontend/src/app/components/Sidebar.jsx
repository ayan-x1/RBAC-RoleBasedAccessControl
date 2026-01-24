"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/dashboard/admin" },
  { label: "Manage Users", href: "/dashboard/admin/users" },
  { label: "Roles", href: "/dashboard/admin/roles" },
  { label: "Permissions", href: "/dashboard/admin/permissions" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen border-r border-(--border) bg-(--surface) px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold tracking-tight">
        Admin Panel
      </h2>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors
                ${
                  isActive
                    ? "bg-gray-200 text-gray-900"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
