"use client";

import { useState } from "react";
import Link from "next/link";
import { colleges } from "@/data/colleges";
import CollegeCard from "@/components/CollegeCard";
import TrendingColleges from "@/components/TrendingColleges";

import Recruiters from "@/components/Recruiters";

import QuickStats from "@/components/QuickStats";

export default function Home() {
const [search, setSearch] = useState("");

const filtered = colleges.filter(
  (college) =>
    college.name
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    college.location
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    college.courses.some((course) =>
      course
        .toLowerCase()
        .includes(search.toLowerCase())
    )
);

return ( <main className="min-h-screen bg-slate-950 text-white">

  {/* Hero Section */}
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 via-purple-700/20 to-cyan-700/20 blur-3xl"></div>

    <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
      <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
        🎓 India's Smart College Discovery Platform
      </span>

      <h1 className="text-6xl md:text-7xl font-extrabold mt-8 leading-tight">
        Discover Your
        <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Dream College
        </span>
      </h1>

      <p className="max-w-3xl mx-auto mt-8 text-xl text-slate-300">
        Compare colleges, explore placements, predict admissions
        and make smarter career decisions.
      </p>

      <div className="flex justify-center gap-4 mt-10 flex-wrap">
        <Link
          href="/colleges"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold shadow-lg"
        >
          Explore Colleges
        </Link>

        <Link
          href="/compare"
          className="border border-slate-700 hover:bg-slate-800 px-8 py-4 rounded-xl font-semibold"
        >
          Compare Colleges
        </Link>
      </div>
    </div>
  </section>

  {/* Stats */}
  <section className="max-w-7xl mx-auto px-6 -mt-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
        <h2 className="text-4xl font-bold text-cyan-400">
          {colleges.length}
        </h2>
        <p className="text-slate-400 mt-2">
          Colleges
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
        <h2 className="text-4xl font-bold text-green-400">
          95%
        </h2>
        <p className="text-slate-400 mt-2">
          Placement Success
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
        <h2 className="text-4xl font-bold text-purple-400">
          150+
        </h2>
        <p className="text-slate-400 mt-2">
          Courses
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-400">
          ₹65L
        </h2>
        <p className="text-slate-400 mt-2">
          Highest Package
        </p>
      </div>

    </div>
  </section>

  {/* Search */}
  <section className="max-w-4xl mx-auto px-6 mt-20">
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
      <input
        type="text"
        placeholder="🔍 Search colleges by name or location..."
        className="w-full bg-transparent outline-none text-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  </section>

  {/* Featured Colleges */}
  <section className="max-w-7xl mx-auto px-6 mt-20">

    <div className="flex justify-between items-center mb-10">

      <div>
        <p className="text-blue-400 font-semibold mb-2">
          TOP RATED COLLEGES
        </p>

        <h2 className="text-5xl font-extrabold">
          Featured Colleges
        </h2>
      </div>

      <span className="text-slate-400">
        {filtered.length} Results
      </span>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filtered.map((college) => (
        <CollegeCard
          key={college.id}
          college={college}
        />
      ))}
    </div>

  </section>

  {/* Features */}
  <section className="max-w-7xl mx-auto px-6 py-24">

    <h2 className="text-5xl font-bold text-center mb-16">
      Why Students Love It
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <div className="text-5xl mb-4">🎯</div>
        <h3 className="text-2xl font-bold mb-3">
          Admission Predictor
        </h3>
        <p className="text-slate-400">
          Predict your chances using previous cutoffs and ranks.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <div className="text-5xl mb-4">📊</div>
        <h3 className="text-2xl font-bold mb-3">
          Compare Colleges
        </h3>
        <p className="text-slate-400">
          Compare fees, placements and ratings side-by-side.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <div className="text-5xl mb-4">🚀</div>
        <h3 className="text-2xl font-bold mb-3">
          Placement Insights
        </h3>
        <p className="text-slate-400">
          Explore salary trends and top recruiters.
        </p>
      </div>

    </div>
  </section>

  {/* CTA */}
  <section className="py-24 text-center bg-gradient-to-r from-blue-700 to-purple-700">

    <h2 className="text-5xl font-bold mb-6">
      Start Your College Journey Today
    </h2>

    <p className="text-xl mb-8">
      Discover • Compare • Decide
    </p>

    <button className="bg-white text-black px-10 py-4 rounded-xl font-bold hover:scale-105 transition">
      Get Started
    </button>

  </section>
<QuickStats />

<TrendingColleges />

<Recruiters />

</main>

);
}
