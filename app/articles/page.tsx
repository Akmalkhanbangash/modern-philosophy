export default function Articles() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold">Articles</h1>

      <p className="mt-4 text-gray-300">
        Explore ideas on modern philosophy, society, technology, and meaning.
      </p>

      <div className="mt-8 space-y-4">

        <div className="border border-gray-700 p-4 rounded">
          Why modern humans feel disconnected
        </div>

        <div className="border border-gray-700 p-4 rounded">
          Technology vs Human Meaning
        </div>

        <div className="border border-gray-700 p-4 rounded">
          AI and the future of thinking
        </div>

      </div>

    </main>
  );
}