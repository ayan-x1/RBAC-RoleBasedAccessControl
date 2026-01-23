"use client";

import Sidebar from "@/app/components/Sidebar";
import Topbar from "@/app/components/Topbar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-(--bg)">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
