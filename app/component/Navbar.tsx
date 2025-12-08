"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`w-full h-16 flex justify-between items-center px-7 fixed z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50" // SCROLLED STATE
          : "bg-transparent" // TOP STATE
      }`}
    >
      <h1 className="text-xl font-bold hidden">HUSTLEBASE RWANDA</h1>
      
      <Link href="/">
        <img src="/logo.png" alt="logo" width={150} />
      </Link>

      <ul className="hidden md:flex ml-8 gap-4 text-slate-600 font-medium">
        <li className="ml-4 cursor-pointer hover:text-blue-600 transition">Home</li>
        <li className="ml-4 cursor-pointer hover:text-blue-600 transition">About</li>
        <li className="ml-4 cursor-pointer hover:text-blue-600 transition">Contact us</li>
      </ul>

      <Link href="/account">
        <button className="bg-green-900 text-white py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-green-800 transition">
          Sign Up
        </button>
      </Link>
    </nav>
  );
}