import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Articles", href: "/articles" },
  { name: "Topics", href: "/topics" },
  { name: "Quotes", href: "/quotes" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Modern Philosophy
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 transition-colors hover:text-black"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="rounded-lg border px-3 py-2 text-sm transition hover:bg-gray-100"
          aria-label="Toggle Theme"
        >
          🌙
        </button>
      </div>
    </nav>
  );
}