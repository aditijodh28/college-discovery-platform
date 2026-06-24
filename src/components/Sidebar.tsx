"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white/40 border-r border-white/10 p-5">
      <h2 className="text-xl font-bold text-blue-400 mb-6">
        CollegeFinder
      </h2>

      <nav className="space-y-4 text-gray-300">
        <Link href="/">📊 Dashboard</Link>
        <Link href="/colleges">🎓 Colleges</Link>
        <Link href="/saved">💾 Saved</Link>
      </nav>
    </div>
  );
}