import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-1 border-t border-gray-800 bg-white transition-colors dark:border-gray-800 dark:bg-black">
  <div className="mx-auto max-w-7xl px-6 py-10 text-center">
    <h2 className="text-2xl font-bold text-gray-900 transition-colors dark:text-white">
      Modern Philosophy
    </h2>

    <p className="mt-2 text-gray-600 transition-colors dark:text-gray-300">
      Think Better. Live Better.
    </p>

    <p className="mt-8 text-sm text-gray-500 transition-colors dark:text-gray-400">
      © 2026 Modern Philosophy. All rights reserved.
    </p>
  </div>
</footer>
  );
}