import LoginForm from "@/app/components/forms/LoginForm";
import BackButton from "@/app/components/ui/BackButton";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="page-center">
      <main className="card">
        <div className="mb-4">
          <BackButton href="/" label="Back" />
        </div>

        <h1 className="title">Welcome Back</h1>

        <p className="subtitle">
          Sign in to your account to continue.
        </p>

        <div className="mt-6">
          <LoginForm />
        </div>

        <p className="mt-6 text-center text-sm">
          Don’t have an account?{" "}
          <Link href="/auth/register" className="link">
            Register
          </Link>
        </p>
      </main>
    </div>
  );
}
