import Link from "next/link";

export default function Hero() {
  return (
    
    <section className="bg-gradient-to-b from-white to-gray-100 transition-colors dark:from-gray-950 dark:to-gray-900">
    
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full border border-gray-300 bg-white px-4 py-1 text-sm font-medium shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
          Think • Question • Discover
        </span>

        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-7xl dark:text-white">
          Modern Philosophy
        </h1>

        <p className="mt-6 max-w-2xl text-base text-gray-600 sm:text-lg md:text-xl dark:text-gray-300">
          Timeless philosophy for modern life—one idea, one action, one day at a
          time.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/articles"
className="rounded-lg bg-black px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 dark:bg-white dark:text-black"          >
            Read Articles
          </Link>

          <Link
            href="/topics"
className="rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"          >
            Explore Topics
          </Link>
        </div>

      </div>
    </section>
  );
}