"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const ROLE_OPTIONS = [
  { value: "user", label: "User" },
  { value: "manager", label: "Manager" },
];

function RoleSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const updatePosition = () => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        setPosition({
          top: rect.bottom + window.scrollY + 4,
          left: rect.left + window.scrollX,
          width: rect.width,
        });
      }
    };

    if (open) {
      updatePosition();
      window.addEventListener("scroll", updatePosition, true);
      window.addEventListener("resize", updatePosition);
      return () => {
        window.removeEventListener("scroll", updatePosition, true);
        window.removeEventListener("resize", updatePosition);
      };
    }
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !triggerRef.current ||
        !menuRef.current ||
        triggerRef.current.contains(event.target) ||
        menuRef.current.contains(event.target)
      ) {
        return;
      }
      setOpen(false);
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  // Ensure value defaults to "user" if not provided
  const normalizedValue = value || "user";
  const selected = ROLE_OPTIONS.find((r) => r.value === normalizedValue) ?? ROLE_OPTIONS[0];

  const handleSelect = (val) => {
    onChange(val);
    setOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen((prev) => !prev);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  };

  const menuContent = open && (
    <div
      ref={menuRef}
      className="fixed z-9999 overflow-hidden rounded-var(--radius) border border-(--border) bg-(--surface) text-sm shadow-lg"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: `${position.width}px`,
      }}
    >
      {ROLE_OPTIONS.map((role) => (
        <button
          key={role.value}
          type="button"
          onClick={() => handleSelect(role.value)}
          className={`flex w-full cursor-pointer items-center px-3 py-2 text-left ${
            role.value === normalizedValue
              ? "bg-[rgba(37,99,235,0.06)] font-medium text-(--fg)"
              : "text-(--fg) hover:bg-gray-50"
          }`}
        >
          {role.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="relative w-full">
      <button
        type="button"
        ref={triggerRef}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className="flex w-full items-center justify-between rounded-var(--radius) border border-(--border) bg-(--surface) px-3 py-2 text-left text-sm text-(--fg) shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-var(--ring)"
      >
        <span>{selected.label}</span>
        <span className="ml-2 text-xs text-(--muted)">▾</span>
      </button>

      {typeof window !== "undefined" && createPortal(menuContent, document.body)}
    </div>
  );
}

export default function UserTable() {
  const [users, setUsers] = useState([
    { id: 1, email: "user1@test.com", role: "user" },
    { id: 2, email: "user2@test.com", role: "manager" },
  ]);

  const updateRole = (id, role) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, role } : u)));
  };

  return (
    <div className="rounded-2xl border border-(--border) bg-(--surface) shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50/60">
            <tr className="text-left text-xs font-medium text-(--muted)">
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
              <tr
                key={user.id}
                className="border-t border-(--border) last:border-b-0 hover:bg-gray-50/60"
              >
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">
                  <RoleSelect
                    value={user.role || "user"}
                    onChange={(role) => updateRole(user.id, role)}
                  />
            </td>
                <td className="px-4 py-3">
                  <button className="inline-flex items-center rounded-full border border-red-200 px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-50">
                    Delete
                  </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    </div>
  );
}
