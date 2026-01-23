import UserTable from "@/app/components/UserTable";
export default function UsersPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Manage Users</h1>
      <UserTable />
    </div>
  );
}
