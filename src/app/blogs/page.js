"use client";

import { useEffect, useState } from "react";
import { MoveRight } from 'lucide-react';
import Link from "next/link";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-6 px-4 py-12">
         {
          [1,2,3].map((num,idx)=>{
            return  <div key={idx} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              
              <div className="w-full h-48 animate-pulse bg-gray-200"></div>
              <div className="p-4">
                <div className="text-xl font-semibold mb-3 p-3 animate-pulse bg-gray-200 w-full"></div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {[1,2,3,4].map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-sm animate-pulse px-2 py-1 w-24 h-6 rounded-full"
                    >
                      
                    </span>
                  ))}
                </div>
               
              </div>
            </div>
          })
         }
      </div>
    );
  }

  return (
   <section className="py-12">
     <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-6 p-4">
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
        >
          <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-xs px-3 font-semibold py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link href={`/blogs/${blog._id}`} className="text-sm flex  gap-2 text-blue-600">Read Blog
            <MoveRight />
            </Link>
          </div>
        </div>
      ))}
    </div>
   </section>
  );
};

export default Blogs;
