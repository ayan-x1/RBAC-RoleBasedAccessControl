import Link from "next/link";

export default function Home() {
  return (
    <div className="page-center">
      <main className="card">
        <h1 className="title">RBAC System</h1>

        <p className="subtitle">
          Role-Based Access Control demo using Next.js
        </p>

        <div className="mt-6 flex flex-col gap-4">
          <Link href="/auth/register" className="btn btn-primary">
            Create Account
          </Link>

          <Link href="/auth/login" className="btn btn-secondary">
            Sign In
          </Link>
        </div>

        <p className="mt-6 text-center text-xs text-(--muted)">
          Admin access is restricted
        </p>
      </main>
    </div>
  );
}
