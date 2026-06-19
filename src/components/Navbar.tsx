"use client";

import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="font-bold text-2xl text-blue-600">
          CollegeFinder
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
 href="/colleges"
 className="hover:text-blue-600"
>

Colleges

</Link>

          <Link
            href="/compare"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
          >
            Compare
          </Link>

          <Link
            href="/predictor"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
          >
            Predictor
          </Link>

          <Link
            href="/placements"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
          >
            Placements
          </Link>

          <Link
            href="/saved"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
          >
            Saved
          </Link>
          <button className="bg-red-500 text-white px-3 py-2 rounded">
            TEST
          </button>
          <ThemeToggle />
        </div>
      </div>
      <Link href="/dashboard">

Dashboard
</Link>
<Link href="/colleges">
Colleges
</Link>
    </nav>
  );
}