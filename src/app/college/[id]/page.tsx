"use client";

import { useState } from "react";
import { colleges } from "../data/colleges";
import CollegeCard from "../components/CollegeCard";

export default function Home() {
const [search, setSearch] = useState("");

const filtered = colleges.filter(
(college) =>
college.name.toLowerCase().includes(search.toLowerCase()) ||
college.location.toLowerCase().includes(search.toLowerCase())
);

return ( <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

```
  {/* Hero Section */}
  <section className="text-center py-16 px-6">
    <h1 className="text-5xl font-extrabold mb-4">
      🎓 Discover Your Dream College
    </h1>

    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      Compare colleges, predict admissions, explore placements,
      and make smarter education decisions.
    </p>

    <div className="flex justify-center gap-4 mt-8 flex-wrap">
      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
        Explore Colleges
      </button>

      <button className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition">
        Compare Colleges
      </button>
    </div>
  </section>

  {/* Stats */}
  <section className="grid md:grid-cols-4 gap-6 px-6 mb-10">
    <div className="bg-white rounded-2xl p-6 shadow">
      <h2 className="text-3xl font-bold text-blue-600">
        {colleges.length}
      </h2>
      <p>Total Colleges</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow">
      <h2 className="text-3xl font-bold text-green-600">
        95%
      </h2>
      <p>Placement Success</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow">
      <h2 className="text-3xl font-bold text-purple-600">
        4.7
      </h2>
      <p>Average Rating</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow">
      <h2 className="text-3xl font-bold text-orange-600">
        150+
      </h2>
      <p>Courses Available</p>
    </div>
  </section>

  {/* Search */}
  <section className="px-6 mb-10">
    <input
      className="w-full border rounded-2xl p-4 shadow"
      placeholder="🔍 Search by college or city..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </section>

  {/* Colleges */}
  <section className="px-6">
    <h2 className="text-3xl font-bold mb-6">
      Top Colleges
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      {filtered.map((college) => (
        <CollegeCard
          key={college.id}
          college={college}
        />
      ))}
    </div>
  </section>

  {/* Why Choose Us */}
  <section className="py-20 px-6">
    <h2 className="text-4xl font-bold text-center mb-10">
      Why Students Love Our Platform
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="font-bold text-xl mb-3">
          🎯 Accurate Predictions
        </h3>
        <p>
          Find colleges based on rank, category,
          and previous cutoffs.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="font-bold text-xl mb-3">
          📊 Smart Comparisons
        </h3>
        <p>
          Compare placements, fees, ratings,
          and campus facilities instantly.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="font-bold text-xl mb-3">
          🚀 Career Insights
        </h3>
        <p>
          Explore salary trends, recruiters,
          and placement reports.
        </p>
      </div>
    </div>
  </section>

  {/* Footer CTA */}
  <section className="bg-blue-600 text-white text-center py-16 mt-16">
    <h2 className="text-4xl font-bold mb-4">
      Start Your College Journey Today
    </h2>

    <p className="mb-6">
      Discover. Compare. Decide.
    </p>

    <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:scale-105 transition">
      Get Started
    </button>
  </section>
</main>
```

);
}
