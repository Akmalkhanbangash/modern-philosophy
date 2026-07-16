import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t">
  <div className="mx-auto max-w-7xl px-6 py-10 text-center">
    <h2 className="text-2xl font-bold">
      Modern Philosophy
    </h2>

    <p className="mt-2 text-gray-600">
      Think Better. Live Better.
    </p>

    <p className="mt-8 text-sm text-gray-500">
      © 2026 Modern Philosophy. All rights reserved.
    </p>
  </div>
</footer>
  );
}