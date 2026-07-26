export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 transition-colors dark:bg-black">
  <div className="mx-auto max-w-4xl">
      <h1 className="text-5xl font-bold text-gray-900 transition-colors dark:text-white"> About Modern Philosophy</h1>

      <p className="mt-8 text-lg leading-8 text-gray-700 transition-colors dark:text-gray-300">
        Modern Philosophy is a place where timeless philosophical ideas meet
        modern life. Our goal is to make philosophy simple, practical, and
        engaging for everyone—whether you're just curious or a lifelong learner.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-700 transition-colors dark:text-gray-300">
        We believe philosophy shouldn't stay inside universities or textbooks.
        It should help people think more clearly, make better decisions, and
        understand themselves and the world around them.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-700 transition-colors dark:text-gray-300">
  Modern Philosophy was created with a simple belief: great ideas should be
  accessible to everyone. We aim to bridge the gap between academic philosophy
  and everyday life by presenting complex concepts in a way that is practical,
  engaging, and easy to understand.
</p>
<section className="mt-16 pb-16">
  <h2 className="text-3xl font-bold text-gray-900 transition-colors dark:text-white">Our Principles</h2>

  <div className="mt-8 grid gap-6 md:grid-cols-3">
    <div className="rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 dark:border-gray-800 dark:bg-gray-900">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Think Clearly</h3>
      <p className="mt-3 text-gray-600 transition-colors dark:text-gray-300">
        Philosophy helps us ask better questions and make better decisions.
      </p>
    </div>

    <div className="rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 dark:border-gray-800 dark:bg-gray-900">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Stay Curious</h3>
      <p className="mt-3 text-gray-600 transition-colors dark:text-gray-300">
        Every great discovery begins with curiosity and an open mind.
      </p>
    </div>

    <div className="rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 dark:border-gray-800 dark:bg-gray-900">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Share Ideas</h3>
      <p className="text-gray-600 transition-colors dark:text-gray-300">
        Knowledge grows stronger when thoughtful people discuss and challenge ideas.
      </p>
    </div>
  </div>
</section>
</div>
    </main>
  );
}