import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-(--border) bg-(--surface) p-4">
      <h2 className="text-lg font-semibold mb-6">Admin Panel</h2>
      <nav className="space-y-2">
        <Link
          href="/dashboard/admin"
          className="block px-3 py-2 rounded hover:bg-gray-100"
        >
          Dashboard
        </Link>
        <Link
          href="/dashboard/admin/users"
          className="block px-3 py-2 rounded hover:bg-gray-100"
        >
          Manage Users
        </Link>
        <Link
          href="/dashboard/admin/roles"
          className="block px-3 py-2 rounded hover:bg-gray-100"
        >
          Roles & Permissions
        </Link>
      </nav>
    </aside>
  );
}
