"use client";

import {usePathname} from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Articles", href: "/articles" },
  { name: "Topics", href: "/topics" },
  { name: "Quotes", href: "/quotes" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur transition-colors dark:border-gray-800 dark:bg-gray-900/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-gray-900 transition-colors dark:text-white"
        >
          Modern Philosophy
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors duration-200 ${
  pathname === link.href
  ? "font-semibold text-black dark:text-white"
  : "text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

       <div className="flex items-center gap-3">
  <button
  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  className="rounded-lg border border-gray-300 px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
  aria-label="Toggle Theme"
>
  {mounted ? (theme === "dark" ? "☀️" : "🌙") : "🌙"}
</button>

  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="rounded-lg border border-gray-300 px-3 py-2 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 md:hidden"
    aria-label="Toggle Menu"
  >
    <span className="text-xl">
    {isMenuOpen ? "✕" : "☰"}
    </span>
  </button>
</div>
      </div>
      {isMenuOpen && (
  <div className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 md:hidden">
    <div className="flex flex-col px-6 py-4">
      {navLinks.map((link) => (
        <Link
  key={link.name}
  href={link.href}
  onClick={() => setIsMenuOpen(false)}
  className={`py-3 transition-colors duration-200 ${
    pathname === link.href
  ? "font-semibold text-black dark:text-white"
  : "text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
  }`}
>
  {link.name}
</Link>
      ))}
    </div>
  </div>
)}
    </nav>
  );
}