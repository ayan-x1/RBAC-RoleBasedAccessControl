// import { cookies } from "next/headers";

// export async function POST(req) {
//   const body = await req.json();

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(body),
//       credentials: "include",
//     }
//   );

//   const data = await res.json();

//   if (!res.ok) {
//     return Response.json(
//       { message: data.message || "Login failed" },
//       { status: res.status }
//     );
//   }

//   const setCookie = res.headers.get("set-cookie");
//   if (setCookie) {
//     cookies().set(setCookie);
//   }

//   return Response.json(data);
// }

import { cookies } from "next/headers";

export async function POST(req) {
  const body = await req.json();

  const res = await fetch(
    "http://localhost:5000/api/auth/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials: "include",
    }
  );

  const data = await res.json();

  if (!res.ok) {
    return Response.json(
      { message: data.message || "Login failed" },
      { status: res.status }
    );
  }

  // Forward cookies to browser
  const setCookie = res.headers.get("set-cookie");
  if (setCookie) {
    cookies().set(setCookie);
  }

  return Response.json(data);
}
