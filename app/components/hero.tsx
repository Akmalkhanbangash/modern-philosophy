import Link from "next/link";
export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full border px-4 py-1 text-sm font-medium">
          Think • Question • Discover
        </span>

        <h1 className="mt-8 text-5xl font-extrabold tracking-tight md:text-7xl">
          Modern Philosophy
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
          Exploring timeless wisdom, critical thinking, ethics, technology, and
          the ideas shaping our future.
        </p>

       <div className="mt-10 flex flex-col gap-4 sm:flex-row">
  <Link
    href="/articles"
    className="rounded-lg bg-black px-6 py-3 font-semibold text-white hover:opacity-90"
  >
    Read Articles
  </Link>

  <Link
    href="/topics"
    className="rounded-lg border px-6 py-3 font-semibold hover:bg-gray-100"
  >
    Explore Topics
  </Link>
</div>
      </div>
    </section>
  );
}