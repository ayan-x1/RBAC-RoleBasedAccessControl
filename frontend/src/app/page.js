import Link from "next/link";

export default function Home() {
  return (
    <div className="page-center">
      <main className="card">
        <h1 className="title">Welcome</h1>

        <p className="subtitle">
          Create an account to get started or sign in if you already have one.
        </p>

        <div className="mt-6 flex flex-col gap-4">
          <Link href="/auth/register" className="btn btn-primary">
            Register
          </Link>

          <Link href="/auth/login" className="btn btn-secondary">
            Login
          </Link>
        </div>
      </main>
    </div>
  );
}
