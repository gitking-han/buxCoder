"use client";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchBlogs = async (pageNum) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://dev.to/api/articles?per_page=9&page=${pageNum}&top=7`
      );
      const data = await res.json();
      setBlogs(data);

      // Check if there's a "next page" (if returned less than per_page → no more data)
      if (data.length < 9) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs(page);
  }, [page]);

  function capitalizeWords(str) {
    if (!str) return "";
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div className="font-sans min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
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

      {/* Section Header */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-0 mb-2">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white relative inline-block">
          Popular Blogs
          <span className="absolute left-0 -bottom-1 w-2/3 h-1 bg-blue-500 rounded-full"></span>
        </h1>
      </div>

      {/* Blogs Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-6 auto-rows-fr">
        {loading ? (
          <p className="col-span-3 text-center text-gray-600 dark:text-gray-300">
            Loading blogs...
          </p>
        ) : (
          blogs.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="h-full">
              <article className="flex flex-col justify-between border border-gray-300 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 opacity-0 animate-fadeIn">
                <div>
                  {/* Blog Image */}
                  <div className="mb-4">
                    <img
                      src={post.social_image}
                      alt={post.title}
                      className="w-full h-48 object-contain rounded-lg"
                    />
                  </div>

                  <h2 className="text-2xl font-bold mb-3">
                    {capitalizeWords(post.title?.substring(0, 50))}
                  </h2>

                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {post.description}
                  </p>
                </div>

                <div className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-bold">
                  Read more →
                </div>
              </article>
            </Link>
          ))
        )}
      </section>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 py-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className={`cursor-pointer px-4 py-2 rounded-lg font-semibold ${
            page === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          ← Previous
        </button>

        <span className="text-gray-700 dark:text-gray-300 font-semibold">
          Page {page}
        </span>

        <button
          disabled={!hasMore}
          onClick={() => setPage((prev) => prev + 1)}
          className={`cursor-pointer px-4 py-2 rounded-lg font-semibold ${
            !hasMore
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Next →
        </button>
      </div>

      <Footer />
    </div>
  );
}
