import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("access_token");

  const isAuthPage = req.nextUrl.pathname.startsWith("/auth");
  const isProtected = req.nextUrl.pathname.startsWith("/dashboard");

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}
