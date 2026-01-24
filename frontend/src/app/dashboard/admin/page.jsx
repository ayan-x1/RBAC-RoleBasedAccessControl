export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-sm text-(--muted) mt-1">
          Manage users, roles, and system access.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard title="Total users" value="12" />
        <StatCard title="Admins" value="1" />
        <StatCard title="Active roles" value="2" />
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-(--border) bg-(--surface) p-4 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-(--muted)">
        {title}
      </p>
      <p className="mt-2 text-2xl font-semibold text-(--fg)">{value}</p>
    </div>
  );
}
