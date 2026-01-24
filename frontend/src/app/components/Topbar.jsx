"use client";

import { useRouter } from "next/navigation";

export default function Topbar() {
  const router = useRouter();

  const handleLogout = () => {
    // For now this is just a redirect.
    // Later you can clear cookies / localStorage here.
    router.push("/auth/login");
  };

  return (
    <header className="h-14 border-b border-(--border) bg-(--surface) flex items-center justify-between px-6">
      <div>
        <h1 className="text-sm font-medium text-(--fg)">Admin Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-(--muted)">admin@gmail.com</span>

        <button
          onClick={handleLogout}
          className="btn btn-danger px-4 py-1.5 text-sm"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
