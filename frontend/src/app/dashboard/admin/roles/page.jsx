"use client";

import { useState } from "react";

const initialRoles = [
  {
    id: 1,
    name: "Manager",
    description: "Can manage tasks and users",
    usersCount: 3,
  },
  {
    id: 2,
    name: "User",
    description: "Standard user with limited access",
    usersCount: 8,
  },
];

export default function RolesPage() {
  const [roles, setRoles] = useState(initialRoles);
  const [isEditing, setIsEditing] = useState(false);
  const [editingRole, setEditingRole] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const openCreate = () => {
    setIsFormOpen(true);
    setIsEditing(false);
    setEditingRole(null);
    setFormData({ name: "", description: "" });
  };

  const openEdit = (role) => {
    setIsFormOpen(true);
    setIsEditing(true);
    setEditingRole(role);
    setFormData({ name: role.name, description: role.description });
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setIsEditing(false);
    setEditingRole(null);
    setFormData({ name: "", description: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Replace this with real API calls when your backend is ready.
    // Example:
    // const res = await fetch("/api/admin/roles", { method: "POST", body: JSON.stringify(formData) })
    // const data = await res.json();

    if (isEditing && editingRole) {
      setRoles((prev) =>
        prev.map((role) =>
          role.id === editingRole.id
            ? { ...role, name: formData.name, description: formData.description }
            : role
        )
      );
    } else {
      const newRole = {
        id: Date.now(),
        name: formData.name,
        description: formData.description,
        usersCount: 0,
      };
      setRoles((prev) => [...prev, newRole]);
    }

    closeForm();
  };

  const handleDelete = async (id) => {
    // TODO: Replace this with a real DELETE API call.
    // await fetch(`/api/admin/roles/${id}`, { method: "DELETE" });
    setRoles((prev) => prev.filter((role) => role.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Roles</h1>
          <p className="text-sm text-(--muted) mt-1">
            Create and manage roles. Assign permissions to roles in the Permissions page.
          </p>
        </div>
        <button
          onClick={() => (isFormOpen ? closeForm() : openCreate())}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-(--primary) px-4 py-2 text-sm font-medium text-(--primary-fg) shadow-sm transition hover:bg-(--primary-hover)"
        >
          <span className="text-lg leading-none">{isFormOpen ? "-" : "+"}</span>
          <span>{isFormOpen ? "Close form" : "Create role"}</span>
        </button>
      </div>

      {/* Main content grid */}
      <div
        className={`grid gap-6 ${
          isFormOpen ? "lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]" : ""
        }`}
      >
        {/* Roles table */}
        <div className="rounded-2xl border border-(--border) bg-(--surface) shadow-sm">
          <div className="border-b border-(--border) px-4 py-3">
            <h2 className="text-sm font-semibold">Existing roles</h2>
            <p className="mt-1 text-xs text-(--muted)">
              Overview of all roles configured in the system.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-(--border) bg-gray-50/60 text-left text-xs font-medium text-(--muted)">
                  <th className="px-4 py-2">Role name</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2 text-center">Users</th>
                  <th className="px-4 py-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role) => (
                  <tr
                    key={role.id}
                    className="border-b border-(--border) last:border-0 hover:bg-gray-50/60"
                  >
                    <td className="px-4 py-3 text-sm font-medium">
                      {role.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-(--muted)">
                      {role.description}
                    </td>
                    <td className="px-4 py-3 text-center text-sm">
                      {role.usersCount}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => openEdit(role)}
                          className="inline-flex items-center rounded-full border border-(--border) px-3 py-1 text-xs font-medium text-(--fg) hover:bg-gray-50"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(role.id)}
                          className="inline-flex items-center rounded-full border border-red-200 px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {roles.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 py-8 text-center text-sm text-(--muted)"
                    >
                      No roles created yet. Click{" "}
                      <span className="font-medium">Create Role</span> to add
                      your first role.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Role create / edit form */}
        {isFormOpen && (
          <div className="card max-w-full lg:max-w-none">
            <h2 className="text-base font-semibold">
              {isEditing ? "Edit role" : "Create role"}
            </h2>
            <p className="mt-1 text-xs text-(--muted)">
              This form currently updates local state only. Once your APIs are
              ready, you can replace the handlers with real requests.
            </p>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="form-field">
                <label className="label">Role name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                  placeholder="e.g. Manager, User, Support"
                  required
                />
              </div>

              <div className="form-field">
                <label className="label">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="input min-h-20 resize-none"
                  placeholder="Short description of what this role can do"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={closeForm}
                  className="inline-flex items-center rounded-(--radius) border border-(--border) px-4 py-2 text-sm font-medium text-(--fg) hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary px-4 py-2 text-sm font-semibold"
                >
                  {isEditing ? "Save changes" : "Create role"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}