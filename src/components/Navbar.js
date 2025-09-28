"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md px-6 sm:px-20 py-4 flex items-center justify-between relative z-20">
      {/* Logo */}
      {/* <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Bux Coder
      </h1> */}
      <h1 className="flex items-center space-x-2">
        <Image
          src="/logo.png"   // because it's inside public/
          alt="Bux Coder Logo"
          width={200}        // adjust size
          height={100}
          priority          // optimizes loading for above-the-fold images
        /> 
       
      </h1>


      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
        <li>
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-2xl text-gray-700 dark:text-gray-300 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-md md:hidden">
          <ul className="flex flex-col ml-6.5 space-y-4 py-6 text-gray-700 dark:text-gray-300 font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
