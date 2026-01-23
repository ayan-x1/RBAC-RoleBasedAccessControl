"use client";

import { useState } from "react";

export default function UserTable() {
  const [users, setUsers] = useState([
    { id: 1, email: "user1@test.com", role: "user" },
    { id: 2, email: "user2@test.com", role: "manager" },
  ]);

  const updateRole = (id, role) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, role } : u)));
  };

  return (
    <table className="w-full border border-(--border) rounded">
      <thead className="bg-gray-50">
        <tr>
          <th className="text-left p-3">Email</th>
          <th className="text-left p-3">Role</th>
          <th className="text-left p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="border-t">
            <td className="p-3">{user.email}</td>
            <td className="p-3">
              <select
                value={user.role}
                onChange={(e) => updateRole(user.id, e.target.value)}
                className="input"
              >
                <option value="user">User</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
              </select>
            </td>
            <td className="p-3">
              <button className="text-red-500 text-sm">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
