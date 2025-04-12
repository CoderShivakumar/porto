"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [initialMenu, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`flex justify-between items-center p-5 shadow-md z-50 relative transition-colors duration-600 ${
          initialMenu ? "bg-[rgb(3,7,18)] text-white" : "bg-white text-black"
        }`}
      >
        {/* Left: Logo */}
        <div className="ml-8">
          <Link href="/" className="text-2xl font-semibold">
            <span className={initialMenu ? "text-gray-300" : "text-gray-500"}>
              shiva
            </span>
            <span className={initialMenu ? "text-white" : "text-black"}>
              kumar
            </span>
          </Link>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-4">
          {/* Let's Talk Button */}
          <Link href='/contact-us'>
          <button
            className={`font-bold px-4 py-2 rounded-[51px] border transition-colors duration-300 ${
              initialMenu
                ? "text-white border-white hover:text-gray-300 hover:border-gray-300"
                : "text-black border-black hover:text-gray-500 hover:border-gray-500"
            }`}
          >
            Let's Talk
          </button>
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!initialMenu)}
            className={`font-bold px-4 py-2 rounded-[51px] border transition-colors duration-300 z-50 ${
              initialMenu
                ? "text-white border-white hover:text-gray-300 hover:border-gray-300"
                : "text-black border-black hover:text-gray-500 hover:border-gray-500"
            }`}
            aria-label="Toggle Menu"
          >
            {initialMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Line below navbar */}
      <hr
        className={`w-full border-t ${
          initialMenu ? "border-white" : "border-gray-300"
        }`}
      />

      {/* Fullscreen Menu Overlay */}
      {initialMenu && (
        <div className="fixed inset-0 bg-[rgb(3,7,18)] text-white flex flex-col justify-center items-center gap-10 text-4xl font-semibold z-40 transition-all duration-300">
          <hr className="absolute top-0 w-full border-t border-white" />
          <Link href="/home-page  " onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about-me" onClick={() => setMenuOpen(false)}>
            About Me
          </Link>
          <Link href="/work-page" onClick={() => { console.log("Works clicked"); setMenuOpen(false); }}>
            Works
          </Link>
          <Link href="/certification" onClick={() => { console.log("Certificate clicked..."); setMenuOpen(false); }}>
            Certifications
          </Link>
          <hr className="w-full border-t border-white mt-10" />
        </div>
      )}
    </>
  );
};