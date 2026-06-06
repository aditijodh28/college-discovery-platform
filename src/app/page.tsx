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

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            India's Smart College Discovery Platform
          </span>

          <h1 className="text-6xl font-extrabold mt-6 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Discover Your Dream College
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare colleges, predict admissions, explore placements,
            and make informed career decisions.
          </p>

          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg font-semibold">
              Explore Colleges
            </button>

            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold">
              Compare Colleges
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-4xl font-bold text-blue-600">
              {colleges.length}
            </h2>
            <p className="text-gray-600 mt-2">Total Colleges</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-4xl font-bold text-green-600">
              95%
            </h2>
            <p className="text-gray-600 mt-2">Placement Success</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-4xl font-bold text-purple-600">
              4.8
            </h2>
            <p className="text-gray-600 mt-2">Average Rating</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-4xl font-bold text-orange-600">
              150+
            </h2>
            <p className="text-gray-600 mt-2">Courses Available</p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <input
            type="text"
            placeholder="🔍 Search colleges by name or location..."
            className="w-full p-4 outline-none text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      {/* College Listing */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">
            Top Colleges
          </h2>

          <span className="text-gray-500">
            {filtered.length} Colleges Found
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-14">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">
                Accurate Predictor
              </h3>
              <p className="text-gray-600">
                Predict college admissions using ranks,
                previous cutoffs and exam data.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">
                Compare Colleges
              </h3>
              <p className="text-gray-600">
                Compare placements, fees, ratings,
                and infrastructure side-by-side.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3">
                Career Insights
              </h3>
              <p className="text-gray-600">
                Explore placements, recruiters,
                salary trends and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Start Your College Journey Today
        </h2>

        <p className="text-xl mb-8">
          Discover • Compare • Decide
        </p>

        <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition">
          Get Started
        </button>
      </section>
    </main>
  );
}