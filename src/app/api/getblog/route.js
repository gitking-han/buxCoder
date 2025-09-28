// src/app/api/blog/route.js
import blogs from "@/data/data.json";

export async function GET(req) {
  try {
    // Extract query param
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return Response.json({ error: "Missing id" }, { status: 400 });
    }

    // Find blog
    const blog = blogs.find((b) => String(b.id) === id);

    if (!blog) {
      return Response.json({ error: "Blog not found" }, { status: 404 });
    }

    return Response.json(blog);
  } catch (error) {
    return Response.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}
