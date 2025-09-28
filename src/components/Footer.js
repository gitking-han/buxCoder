"use client";
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
export default function Footer() {
  return (
    <>
    <footer className="bg-white text-gray-950 py-10 mt-10 shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          
            <Image
              src="/logo.png"   // because it's inside public/
              alt="Bux Coder Logo"
              width={150}        // adjust size
              height={100}
              priority          // optimizes loading for above-the-fold images
            />

          
          <p className="mt-2 text-sm leading-relaxed text-gray-800">
            Bux Coder is a blog for coders, by a coder.
            We share coding tutorials, tips, and tricks to help you level up your development skills.
          </p>

          {/* Socials */}
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-100">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
              <FaLinkedin />
            </a>
            <a href="mailto:Buxcoder@email.com" className="hover:text-red-400">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-950 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500">About Us</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-500">Blogs</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500">Contact</Link>
            </li>

          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-950 mb-3">Stay Updated</h3>
          <p className="text-sm text-gray-800 mb-4">
            Subscribe to our newsletter and never miss an update on coding blogs.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-lg bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Bux Coder. Built with ❤️ by Coders for Coders.
      </div>
    </footer>
    </>
  );
}
