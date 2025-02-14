"use client"

import { useEffect, useState } from 'react';


const BlogDetails = ({ params: { id} }) => {
    
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}`);
        const data = await response.json();
        setBlog(data.blog);
      } catch (error) {
        console.error('Error fetching blog details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="text-center text-xl font-bold">Loading blog details...</div>;
  }

  if (!blog) {
    return <div className="text-center text-xl font-bold">Blog not found</div>;
  }

  return (
    <div className="container mx-auto p-5">
      <img src={blog.image} alt={blog.title} className="h-64 w-full object-contain lg:object-left object-center" />
      <h1 className="text-3xl font-bold mt-4 mb-2">{blog.title}</h1>
      <p className="text-gray-500 mb-4">By {blog.author} - {new Date(blog.createdAt).toLocaleDateString()}</p>
      <div className="mb-4">
        {blog.tags.map((tag, index) => (
          <span key={index} className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full mr-2">#{tag}</span>
        ))}
      </div>
      <div className="text-lg text-gray-700"  dangerouslySetInnerHTML={{ __html: blog.content }}/>
        
      
    </div>
  );
};

export default BlogDetails;
