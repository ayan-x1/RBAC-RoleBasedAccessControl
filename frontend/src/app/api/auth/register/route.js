import { cookies } from "next/headers";

export async function POST(req) {
  const body = await req.json();

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!backendUrl) {
    return Response.json(
      { message: "Backend URL not configured" },
      { status: 500 }
    );
  }

  const res = await fetch(`${backendUrl}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  const contentType = res.headers.get("content-type");

  // 🔥 THIS IS THE IMPORTANT PART
  if (!contentType || !contentType.includes("application/json")) {
    const text = await res.text();
    console.error("Non-JSON response from backend:", text);

    return Response.json(
      { message: "Backend returned invalid response" },
      { status: 502 }
    );
  }

  const data = await res.json();

  if (!res.ok) {
    return Response.json(
      { message: data.message || "Registration failed" },
      { status: res.status }
    );
  }

  const setCookie = res.headers.get("set-cookie");
  if (setCookie) {
    cookies().set(setCookie);
  }

  return Response.json(data);
}
