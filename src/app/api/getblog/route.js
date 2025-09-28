import { promises as fs } from "fs";

export async function GET(req) {
  try {
    // Extract query param
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return Response.json({ error: "Missing id" }, { status: 400 });
    }

    // Load blogs
    const data = await fs.readFile("blogdata/data.json", "utf-8");
    const blogs = JSON.parse(data);

    // Find blog
    const blog = blogs.find((b) => b.id === parseInt(id));

    if (!blog) {
      return Response.json({ error: "Blog not found" }, { status: 404 });
    }

    return Response.json(blog);
  } catch (error) {
    return Response.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}
