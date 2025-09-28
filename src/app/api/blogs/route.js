// src/app/api/blogs/route.js
import { promises as fs } from "fs";

export async function GET() {
  const data = await fs.readFile("blogdata/data.json", "utf-8");
  return Response.json(JSON.parse(data));
}

export async function POST(req) {
  const body = await req.json(); // read request body
  return Response.json({ message: "POST received", body });
}
