export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <p className="text-sm text-(--muted) mt-1">
        Manage users, roles, and system access
      </p>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <StatCard title="Total Users" value="12" />
        <StatCard title="Admins" value="1" />
        <StatCard title="Active Roles" value="3" />
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="card p-4">
      <p className="text-sm text-(--muted)">{title}</p>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  );
}
