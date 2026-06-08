"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="font-bold text-2xl text-blue-600">
          CollegeFinder
        </h1>

        <div className="flex gap-6">
          <Link href="/">Home</Link>

          <Link href="/colleges">
            Colleges
          </Link>

          <Link href="/compare">
            Compare
          </Link>

          <Link href="/predictor">
            Predictor
          </Link>

          <Link href="/placements">
            Placements
          </Link>

          <Link href="/saved">
            Saved
          </Link>
        </div>
      </div>
    </nav>
  );
}