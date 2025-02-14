import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

// GET request handler to fetch blog by ID
export async function GET(request, { params }) {
  await dbConnect();

  const { id: blogId } = params;

  if (!blogId) {
    return NextResponse.json({ error: "Missing blog ID" }, { status: 400 });
  }

  try {
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ blog }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
