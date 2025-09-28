"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Footer from "@/components/Footer";
export default function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")
  const contactForm = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/postcontact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, description }),
    });
    const data = await res.json();
    console.log(data);
    setUsername("");
    setEmail("");
    setDescription("")
  };

  return (
    <div className="font-sans min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />

      {/* Hero Section */}
      <main className="w-full max-w-4xl mx-auto text-center py-16 px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Contact Us
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a question, suggestion, or collaboration idea? We’d love to hear
          from you! Use the form below to reach out.
        </p>
      </main>

      {/* Contact Form */}
      <section className="w-full max-w-3xl mx-auto px-6 pb-20">
        <form onSubmit={contactForm} className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                           bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                           bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* description */}
          <div>
            <label className="block mb-2 text-sm font-medium">description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              placeholder="Write your description..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg 
                         bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 
                       transition duration-300"
          >
            Send description
          </button>
        </form>
      </section>
      <Footer/>
    </div>
  );
}
