"use client";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "@/components/Navbar";
import Link from "next/link"; // ✅ Import Link
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="font-sans min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* Hero Section with typing animation */}
      <main className="w-full max-w-5xl mx-auto text-center py-12 px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          <Typewriter
            words={[
              "Welcome to Bux Coder",
              "A blog for coders",
              "By a Bux coder",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A blog for coders by a Bux coder. Discover coding tips,
          tutorials, and insights for 2025 and beyond.
        </p>
      </main>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-0 mb-2">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white relative inline-block">
          Popular Blogs
          <span className="absolute left-0 -bottom-1 w-2/3 h-1 bg-blue-500 rounded-full"></span>
        </h1>
      </div>

      {/* Blogs Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-6 auto-rows-fr">
        {blogs.slice(0, 6).map((post, index) => (
          <Link key={index} href={`/blog/${post.id}`} className="h-full">
            <article className="flex flex-col justify-between h-full border border-gray-300 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <div>
                <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {post.content.slice(0, 100)}...
                </p>
              </div>
              <div className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-bold">
                Read more →
              </div>
            </article>
          </Link>
        ))}
      </section>
      <Footer/>
    </div>
  );
}
