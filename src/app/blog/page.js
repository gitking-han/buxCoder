"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data)); 
  }, []);

  return (
    <div className="font-sans min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />

      {/* Hero */}
      <header className="text-center py-12 px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold">Our Blog</h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
          Insights, tutorials, and stories from Hunting Coder
        </p>
      </header>

      {/* Blog Grid */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-6 auto-rows-fr">
        {blogs.map((post, index) => (
          <Link key={index} href={`/blog/${post.id}`} className="h-full">
            <article className="flex flex-col justify-between h-full border border-gray-300 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 opacity-0 animate-fadeIn">
              <div>
                <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {post.content}
                </p>
              </div>
              <div className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-bold">
                Read more →
              </div>
            </article>
          </Link>
        ))}
      </main>
      <Footer/>
    </div>
  );
}


