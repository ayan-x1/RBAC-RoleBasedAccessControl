"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/app/lib/validations/auth.schema";

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "Admin@123";

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    /* ===============================
       STATIC ADMIN LOGIN (NO API)
       =============================== */
    if (
      data.email === ADMIN_EMAIL &&
      data.password === ADMIN_PASSWORD
    ) {
      router.push("/dashboard/admin");
      return;
    }

    /* ===============================
       NORMAL USER LOGIN (API)
       =============================== */
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Login failed");
      }

      router.push("/dashboard/user");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="form-field">
        <label className="label">Email</label>
        <input
          type="email"
          {...register("email")}
          className={`input ${errors.email ? "input-error" : ""}`}
        />
        {errors.email && (
          <p className="error-text">{errors.email.message}</p>
        )}
      </div>

      <div className="form-field">
        <label className="label">Password</label>
        <input
          type="password"
          {...register("password")}
          className={`input ${errors.password ? "input-error" : ""}`}
        />
        {errors.password && (
          <p className="error-text">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary"
      >
        {isSubmitting ? "Signing in..." : "Login"}
      </button>
    </form>
  );
}
