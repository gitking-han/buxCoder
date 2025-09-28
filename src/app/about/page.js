"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { Typewriter } from "react-simple-typewriter";
import Footer from "@/components/Footer";


const About = () => {
  return (
    <div className="font-sans min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />

      {/* Hero Section */}
      <main className="w-full max-w-5xl mx-auto text-center py-16 px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          <Typewriter
            words={[
              "About Bux Coder",
              "Our Mission & Vision",
              "The Story Behind the Blog",
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
          Bux Coder is more than just a blog — it’s a growing community of
          developers who love to share, learn, and innovate together. Our aim is
          to inspire coders worldwide with knowledge that is practical,
          beginner-friendly, and impactful.
        </p>
      </main>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 sm:px-12 mb-20">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Bux Coder started with a simple notebook full of code snippets
            and tips. Over time, it transformed into an online platform where
            developers can find clear, simple, and real-world solutions.
            <br /> <br />
            What began as personal notes evolved into a blog visited by
            thousands of developers every month. Today, we continue to publish
            tutorials, share coding tricks, and document our journey as
            developers.
          </p>
        </div>
        <div className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
          <h3 className="text-lg font-bold mb-3">Why Choose Bux Coder?</h3>
          <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            <li>→ Practical tutorials written by real developers</li>
            <li>→ Clean and distraction-free design</li>
            <li>→ Beginner to advanced level coding guides</li>
            <li>→ A community-driven approach to learning</li>
          </ul>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="w-full max-w-6xl mx-auto px-6 sm:px-12 mb-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Vision & Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <h3 className="text-lg font-semibold mb-2">Clarity</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              We believe coding should be simple, clear, and fun. Our tutorials
              are designed to eliminate confusion and make learning engaging.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <h3 className="text-lg font-semibold mb-2">Community</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Developers learn best when they learn together. Bux Coder
              thrives on contributions, feedback, and collaboration.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <h3 className="text-lg font-semibold mb-2">Innovation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Technology moves fast, and so do we. We cover the latest coding
              trends, frameworks, and best practices.
            </p>
          </div>
        </div>
      </section>

      
      

      {/* Mission / CTA */}
      <section className="w-full max-w-3xl mx-auto text-center px-6 pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Join the Journey</h2>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Whether you’re just starting out or you’re an experienced coder,
          Bux Coder is your space to explore, share, and grow.
        </p>
        <button className="border border-black dark:border-white px-6 py-2 rounded-lg font-mono text-sm font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
          Start Reading →
        </button>
      </section>
      <Footer/>
    </div>
  );
};

export default About;

