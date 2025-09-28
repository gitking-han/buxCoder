"use client";
import Navbar from "@/components/Navbar";
import { use } from "react";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

export default function PostPage({ params }) {

  const [blog, setBlog] = useState(null)
  const {slug} = use(params)
  useEffect(() => {
  // console.log("Slug param:", params.slug);
  fetch(`/api/getblog?id=${slug}`)
    .then((res) => res.json())
    .then((data) => setBlog(data));
}, [slug]);

 
  const post = blog;

  if (!post) {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
        <p className="mt-4 text-lg">Loading blog...</p>
      </div>
    </div>
  );
}


  return (
    <div className="font-sans min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />

      {/* Post Header */}
      <header className="max-w-4xl mx-auto py-12 px-6 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-4xl font-extrabold">{post.title}</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">By {post.author}</p>
      </header>

      {/* Post Content */}
      <main className="max-w-4xl mx-auto py-12 px-6 prose dark:prose-invert">
        {post.content.split("\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </main>
      <Footer/>
    </div>
  );
}
