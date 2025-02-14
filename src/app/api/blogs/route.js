import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();

  const { title, author, category, content, tags, image } = await req.json();

  if (!title || !author || !category || !content || !image) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    const newBlog = new Blog({
      title,
      author,
      category,
      content,
      image,
      tags: tags.split(",").map((tag) => tag.trim()),
    });

    await newBlog.save();
    return NextResponse.json(
      { message: "Blog added successfully.", blog: newBlog },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding blog:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await dbConnect();
  try{
    const blogs = await Blog.find().select("-content");
    if(!blogs){
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ blogs }, { status: 200 });
  }catch(error){
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
 
}


