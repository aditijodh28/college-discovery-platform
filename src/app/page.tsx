"use client";

import Link from "next/link";

import { colleges } from "@/data/colleges";

import StatCard from "@/components/StatCard";

import {
  GraduationCap,
  BarChart3,
  IndianRupee,
  BookOpen,
  MapPin,
  Star,
  Building2,
  Calendar,
} from "lucide-react";

export default function Home() {

  return (

    <main className="bg-slate-50 min-h-screen">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">

        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          <h1 className="text-6xl font-bold mb-8">

            Discover Your Dream College

          </h1>

          <p className="text-xl max-w-3xl mx-auto mb-10">

            Search, compare and predict admissions from India's top colleges.

          </p>

          <div className="flex justify-center gap-6 flex-wrap">

           <Link
  href="/college"

  className="
  bg-white
  text-blue-700
  px-8
  py-4
  rounded-xl
  font-bold

  hover:scale-110
  hover:shadow-2xl

  active:scale-95

  transition-all
  duration-300
  "
>

  Explore Colleges

</Link>

<Link
  href="/predictor"

  className="
  bg-indigo-600
  text-white

  px-8
  py-4

  rounded-xl

  font-bold

  hover:bg-indigo-700

  hover:scale-110

  hover:shadow-2xl

  active:scale-95

  transition-all

  duration-300
  "
>

  AI Predictor

</Link>

          </div>

        </div>

      </section>

      {/* Search */}

      <section className="max-w-6xl mx-auto -mt-10 px-6">

        <div className="bg-white p-8 rounded-3xl shadow-xl">

          <input

            type="text"

            placeholder="Search college, city, course..."

            className="w-full border p-5 rounded-xl text-lg"

          />

        </div>

      </section>

      {/* Stats */}

      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="grid md:grid-cols-4 gap-8">

          <StatCard

            title="Colleges"

            value="25+"

            icon={

              <GraduationCap

                size={40}

                className="text-blue-600"

              />

            }

          />

          <StatCard

            title="Placement"

            value="95%"

            icon={

              <BarChart3

                size={40}

                className="text-green-600"

              />

            }

          />

          <StatCard

            title="Courses"

            value="150+"

            icon={

              <BookOpen

                size={40}

                className="text-purple-600"

              />

            }

          />

          <StatCard

            title="Highest Package"

            value="₹65L"

            icon={

              <IndianRupee

                size={40}

                className="text-orange-600"

              />

            }

          />

        </div>

      </section>

      {/* Featured Colleges */}

      <section className="max-w-7xl mx-auto px-6 mb-20">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-4xl font-bold">

            Featured Colleges

          </h2>

          <span>

            {colleges.length} Results

          </span>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {colleges.slice(0, 6).map((college) => (

            <div

              key={college.id}

              className="bg-white p-8 rounded-3xl shadow hover:shadow-2xl hover:-translate-y-2 transition"

            >

              <h3 className="text-2xl font-bold mb-6">

                {college.name}

              </h3>

              <div className="flex items-center gap-3 mb-3">

                <MapPin size={18} />

                {college.location}

              </div>

              <div className="flex items-center gap-3 mb-3">

                <Star size={18} />

                {college.rating}

              </div>

              <div className="flex items-center gap-3 mb-5">

                <BarChart3 size={18} />

                {college.placementRate}

              </div>

              <Link

                href={`/college/${college.id}`}

                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl"

              >

                View Details

              </Link>

            </div>

          ))}

        </div>

      </section>

      {/* Trending Cities */}

      <section className="max-w-7xl mx-auto px-6 mb-20">

        <h2 className="text-4xl font-bold mb-10">

          Trending Cities

        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {["Pune", "Mumbai", "Bengaluru", "Hyderabad"].map((city) => (

            <div

              key={city}

              className="bg-white p-10 rounded-3xl shadow text-center text-2xl font-bold"

            >

              {city}

            </div>

          ))}

        </div>

      </section>

      {/* Recruiters */}

      <section className="max-w-7xl mx-auto px-6 mb-20">

        <h2 className="text-4xl font-bold mb-10">

          Top Recruiters

        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {[

            "Google",

            "Microsoft",

            "Amazon",

            "TCS",

            "Infosys",

            "Accenture",

            "Wipro",

            "Capgemini",

          ].map((company) => (

            <div

              key={company}

              className="bg-white p-8 rounded-3xl shadow flex items-center justify-center gap-3 font-bold"

            >

              <Building2 size={20} />

              {company}

            </div>

          ))}

        </div>

      </section>

      {/* Exams */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold mb-10">

          Upcoming Exams

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[

            "JEE Main",

            "MHT CET",

            "GATE",

            "CAT",

            "CUET",

            "NEET",

          ].map((exam) => (

            <div

              key={exam}

              className="bg-white p-8 rounded-3xl shadow flex items-center gap-4"

            >

              <Calendar size={22} />

              {exam}

            </div>

          ))}

        </div>

      </section>

    </main>

  );

}