"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/app/lib/validations/auth.schema";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="form-field">
        <label className="label">Name</label>
        <input
          {...register("name")}
          className={`input ${errors.name ? "input-error" : ""}`}
        />
        {errors.name && (
          <p className="error-text">{errors.name.message}</p>
        )}
      </div>

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
        {isSubmitting ? "Creating account..." : "Register"}
      </button>
    </form>
  );
}
