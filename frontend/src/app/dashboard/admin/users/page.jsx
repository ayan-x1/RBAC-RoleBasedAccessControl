import UserTable from "@/app/components/UserTable";

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Manage users</h1>
        <p className="text-sm text-(--muted) mt-1">
          View user accounts and adjust their roles.
        </p>
      </div>

      <UserTable />
    </div>
  );
}
