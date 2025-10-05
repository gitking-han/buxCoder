"use client";
import Navbar from "@/components/Navbar";
import { use } from "react";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PostPage({ params }) {
  function htmlToText(html) {
    if (!html) return "";
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  }

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const { slug } = use(params);

  useEffect(() => {
    fetch(`https://dev.to/api/articles/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);

        
      });
  }, [slug]);

  if (!blog) {
    return (
      <div className="font-sans min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
          <p className="mt-4 text-lg">Loading blog...</p>
        </div>
      </div>
    );
  }
 function capitalizeWords(str) {
    if (!str) return "";
    return str
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  return (
    <div className="font-sans min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />

      {/* Post Header */}
      <header className="max-w-4xl mx-auto py-12 px-6 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-4xl font-extrabold">{capitalizeWords(blog.title)}</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          By {blog.user?.name}
        </p>
        {blog.cover_image && (
          <img
            src={blog.cover_image}
            alt={blog.title}
            className="w-full mt-6 rounded-lg shadow-md"
          />
        )}
      </header>

      {/* Post Content */}
      <main className="text-1xl max-w-4xl mx-auto py-12 px-6 prose dark:prose-invert">
        {htmlToText(blog.body_html)
          .split("\n")
          .map((para, i) => (
            <p key={i}>{para}</p>
          ))}
      </main>

      
      <Footer />
    </div>
  );
}
