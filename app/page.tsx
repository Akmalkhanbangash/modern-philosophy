export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-6xl font-bold text-center">
        Modern Philosophy
      </h1>

      <p className="mt-6 text-xl text-gray-300 text-center max-w-2xl">
        Exploring ideas about society,
        technology, ethics and meaning.
      </p>

      <button className="mt-10 border px-6 py-3 rounded-lg">
        Read Articles
      </button>

    </main>
  );
}