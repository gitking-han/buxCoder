// src/app/api/blogs/route.js
import blogs from "@/data/data.json"; // ✅ import directly

export async function GET() {
  return Response.json(blogs);
}

export async function POST(req) {
  const body = await req.json();
  return Response.json({ message: "POST received", body });
}
