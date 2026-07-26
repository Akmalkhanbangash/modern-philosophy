import Link from "next/link";

type NotFoundCardProps = {
  title: string;
  message: string;
  backHref: string;
  backLabel: string;
};

export default function NotFoundCard({
  title,
  message,
  backHref,
  backLabel,
}: NotFoundCardProps) {
  return (
    <main className="min-h-screen bg-white px-6 py-20 transition-colors dark:bg-black">
      <div className="mx-auto max-w-3xl text-center">

        <div className="text-7xl">📖</div>

        <h1 className="mt-8 text-5xl font-bold text-gray-900 dark:text-white">
          {title}
        </h1>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          {message}
        </p>

        <Link
          href={backHref}
          className="mt-10 inline-block rounded-lg bg-black px-6 py-3 text-white transition hover:opacity-90 dark:bg-white dark:text-black"
        >
          {backLabel}
        </Link>

      </div>
    </main>
  );
}