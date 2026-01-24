"use client";

import { useState } from "react";

/**
 * All available CRUD operations
 */
const CRUD_OPERATIONS = [
  { id: "create", label: "Create", description: "Create new tasks" },
  { id: "read", label: "Read", description: "View and read tasks" },
  { id: "update", label: "Update", description: "Edit existing tasks" },
  { id: "delete", label: "Delete", description: "Remove tasks" },
];

/**
 * Initial role setup (mocked — will later come from backend)
 */
const initialRoles = [
  {
    id: 1,
    name: "Manager",
    description: "Can manage tasks",
    permissions: ["create", "update", "delete"],
  },
  {
    id: 2,
    name: "User",
    description: "Standard user with limited access",
    permissions: ["read"],
  },
];

/**
 * TEMPORARY RBAC POLICY
 * ---------------------
 * These permissions are LOCKED per role.
 * Change this object later when backend is ready.
 */
const LOCKED_PERMISSIONS_BY_ROLE = {
  User: ["create", "update", "delete"], // read-only for now
};

export default function PermissionsPage() {
  const [roles, setRoles] = useState(initialRoles);

  /**
   * Toggle permission for a role
   */
  const togglePermission = (roleId, permissionId) => {
    setRoles((prev) =>
      prev.map((role) => {
        if (role.id !== roleId) return role;

        const hasPermission = role.permissions.includes(permissionId);

        return {
          ...role,
          permissions: hasPermission
            ? role.permissions.filter((p) => p !== permissionId)
            : [...role.permissions, permissionId],
        };
      })
    );
  };

  /**
   * Placeholder save handler
   * (Replace with real API call later)
   */
  const handleSave = async () => {
    console.log(
      "Saving permissions:",
      roles.map((r) => ({
        roleId: r.id,
        permissions: r.permissions,
      }))
    );

    alert("Permissions saved (mock)");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Permissions
          </h1>
          <p className="text-sm text-(--muted) mt-1">
            Assign CRUD operations to roles. Users inherit permissions from their role.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="inline-flex items-center justify-center rounded-full
            bg-(--primary) px-4 py-2 text-sm font-medium
            text-(--primary-fg) shadow-sm transition
            hover:bg-(--primary-hover)"
        >
          Save Permissions
        </button>
      </div>

      {/* Roles Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {roles.map((role) => (
          <div
            key={role.id}
            className="rounded-2xl border border-(--border)
              bg-(--surface) shadow-sm"
          >
            {/* Role Header */}
            <div className="border-b border-(--border) px-4 py-3">
              <h2 className="text-base font-semibold">{role.name}</h2>
              <p className="mt-1 text-xs text-(--muted)">
                {role.description}
              </p>
            </div>

            {/* Permissions */}
            <div className="p-4 space-y-3">
              {CRUD_OPERATIONS.map((operation) => {
                const hasPermission = role.permissions.includes(operation.id);

                const isLocked =
                  LOCKED_PERMISSIONS_BY_ROLE[role.name]?.includes(
                    operation.id
                  );

                return (
                  <label
                    key={operation.id}
                    className={`flex items-start gap-3 ${
                      isLocked
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={hasPermission}
                      disabled={isLocked}
                      onChange={() =>
                        !isLocked &&
                        togglePermission(role.id, operation.id)
                      }
                      className="mt-1 h-4 w-4 rounded border-(--border)
                        text-(--primary)
                        focus:ring-2 focus:ring-(--ring)
                        disabled:cursor-not-allowed"
                    />

                    <div className="flex-1">
                      <div className="text-sm font-medium text-(--fg)">
                        {operation.label}
                      </div>
                      <div className="text-xs text-(--muted) mt-0.5">
                        {operation.description}
                        {isLocked && (
                          <span className="ml-2 text-red-500">
                            (Locked for this role)
                          </span>
                        )}
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>

            {/* Summary */}
            <div className="border-t border-(--border)
              px-4 py-3 bg-gray-50/60">
              <div className="text-xs text-(--muted)">
                <span className="font-medium">Active permissions:</span>{" "}
                {role.permissions.length > 0 ? (
                  <span className="text-(--fg)">
                    {role.permissions
                      .map(
                        (p) =>
                          CRUD_OPERATIONS.find(
                            (op) => op.id === p
                          )?.label
                      )
                      .join(", ")}
                  </span>
                ) : (
                  <span className="text-red-600">None</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Card */}
      <div className="rounded-2xl border border-(--border)
        bg-blue-50/50 px-4 py-3">
        <p className="text-sm font-medium text-blue-900">
          Permission Assignment Guide
        </p>
        <p className="text-xs text-blue-700 mt-1">
          Disabled permissions are locked by RBAC policy.
          These rules can later be controlled by the backend.
        </p>
      </div>
    </div>
  );
}
