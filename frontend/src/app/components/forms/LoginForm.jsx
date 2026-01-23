"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/app/lib/validations/auth.schema";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log("Login Data:", data);
    // TODO: call login API
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
