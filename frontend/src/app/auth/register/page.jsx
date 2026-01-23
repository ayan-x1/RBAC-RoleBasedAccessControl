import RegisterForm from "@/app/components/forms/RegisterForm";
import BackButton from "@/app/components/ui/BackButton";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="page-center">
      <main className="card">
        {/* Back Button */}
        <div className="mb-4">
          <BackButton href="/" label="Back" />
        </div>

        <h1 className="title">Create an Account</h1>

        <p className="subtitle">
          Fill the form below to register a new account.
        </p>

        <div className="mt-6">
          <RegisterForm />
        </div>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link href="/auth/login" className="link">
            Login
          </Link>
        </p>
      </main>
    </div>
  );
}
