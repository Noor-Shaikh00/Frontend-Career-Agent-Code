"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link"; // ✅ Import Link for internal navigation

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-4 shadow-md flex justify-between items-center rounded-md">
      <div className="text-2xl font-bold tracking-wide">CareerMate 💼</div>

      <button onClick={() => setOpen(!open)} className="md:hidden">
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <nav
        className={`${
          open ? "block" : "hidden"
        } md:flex gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-indigo-700 md:bg-transparent px-6 py-4 md:p-0 rounded-b-md md:rounded-none transition-all duration-300`}
      >
        {/* ✅ Replaced <a> with <Link> for internal routes */}
        <Link href="/" className="block hover:underline">
          Home
        </Link>
        <Link href="/about" className="block hover:underline">
          About
        </Link>
        <Link href="/explore" className="block hover:underline">
          Explore
        </Link>
        <Link href="/services" className="block hover:underline">
          Services
        </Link>
        <Link href="/contact" className="block hover:underline">
          Contact
        </Link>
      </nav>
    </header>
  );
}
