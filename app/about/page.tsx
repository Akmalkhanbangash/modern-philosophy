export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-5xl font-bold">About Modern Philosophy</h1>

      <p className="mt-8 text-lg leading-8 text-gray-700">
        Modern Philosophy is a place where timeless philosophical ideas meet
        modern life. Our goal is to make philosophy simple, practical, and
        engaging for everyone—whether you're just curious or a lifelong learner.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-700">
        We believe philosophy shouldn't stay inside universities or textbooks.
        It should help people think more clearly, make better decisions, and
        understand themselves and the world around them.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-700">
  Modern Philosophy was created with a simple belief: great ideas should be
  accessible to everyone. We aim to bridge the gap between academic philosophy
  and everyday life by presenting complex concepts in a way that is practical,
  engaging, and easy to understand.
</p>
<section className="mt-16">
  <h2 className="text-3xl font-bold">Our Principles</h2>

  <div className="mt-8 grid gap-6 md:grid-cols-3">
    <div className="rounded-xl border p-6">
      <h3 className="text-xl font-semibold">Think Clearly</h3>
      <p className="mt-3 text-gray-600">
        Philosophy helps us ask better questions and make better decisions.
      </p>
    </div>

    <div className="rounded-xl border p-6">
      <h3 className="text-xl font-semibold">Stay Curious</h3>
      <p className="mt-3 text-gray-600">
        Every great discovery begins with curiosity and an open mind.
      </p>
    </div>

    <div className="rounded-xl border p-6">
      <h3 className="text-xl font-semibold">Share Ideas</h3>
      <p className="mt-3 text-gray-600">
        Knowledge grows stronger when thoughtful people discuss and challenge ideas.
      </p>
    </div>
  </div>
</section>
    </main>
  );
}