"use client"
import { useState } from 'react';
import JoditEditor from 'jodit-react';
import { toast } from 'react-toastify';

const NewBlog = () => {
  const [blog, setBlog] = useState({
    title: '',
    author: '',
    category: '',
    content: '',
    image: '',
    tags: '',
  });
  const [loading,setLoading] = useState(false)

  const handleChange = (e) => {
    const {name,value} = e.target;
    setBlog({...blog,[name]:value})
  };

  const handleContentChange = (content) => {
    setBlog({ ...blog, content });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(loading) return;
     
    if (!blog.title || !blog.author || !blog.category || !blog.content || !blog.image) {
      toast.error('Please fill in all fields.');
      return;
    }

    setLoading(true)
   
    try {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(blog),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('Blog added successfully!');
        setBlog({ title: '', author: '', category: '', content: '', image: '', tags: '' });
      } else {
        toast.error(data.message || 'Failed to add blog');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-12 p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Add New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={blog.title}
          onChange={handleChange}
          placeholder="Blog Title"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="text"
          name="author"
          value={blog.author}
          onChange={handleChange}
          placeholder="Author"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="text"
          name="category"
          value={blog.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />

        <JoditEditor
          value={blog.content}
          onChange={handleContentChange}
        />

        <input
          type="text"
          name="image"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder='Enter image url'
          required
        />

        <input
          type="text"
          name="tags"
          value={blog.tags}
          onChange={handleChange}
          placeholder="Tags (comma-separated)"
          className="w-full p-2 border border-gray-300 rounded"
          
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          {
            loading ? 'Adding blog...' : 'Add Blog'
          }
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
