"use client";

import Link from "next/link";
import AnimatedCounter from "../AnimatedCounter";
import {
  GraduationCap,
  ArrowRight,
  Building2,
  TrendingUp,
  Users,
  MapPin,
  Award,
  BriefcaseBusiness,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background */}
      <div className="absolute inset-0 dark:hidden bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),radial-gradient(circle_at_bottom_right,#c7d2fe,transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center gap-3 rounded-full bg-white dark:bg-slate-900 shadow-lg border px-5 py-3">

              <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

                #1

              </div>

              <span className="font-semibold text-slate-700 dark:text-slate-200">

                AI Powered College Discovery Platform

              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-10 text-6xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">

              Discover

              <span className="block text-blue-600">

                Your Dream

              </span>

              <span className="block text-blue-600">

                College

              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-xl leading-10 text-slate-600 dark:text-slate-300">

              Compare colleges, predict admissions, explore placements,
              discover scholarships and make confident career decisions
              with one modern platform.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex gap-5">

              <Link
                href="/college"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold shadow-lg transition hover:scale-105 hover:bg-blue-700"
              >
                Explore Colleges

                <ArrowRight size={18} />

              </Link>

              <Link
                href="/predictor"
                className="rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-8 py-4 font-semibold shadow hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-800 transition">
                AI Predictor
              </Link>

            </div>

            {/* Companies */}

            <div className="mt-14">

              <p className="mb-5 text-slate-500 dark:text-slate-400 font-medium">

                Trusted by students aiming for top companies

              </p>

              <div className="grid grid-cols-4 gap-4 max-w-xl">

                {[
                  "Google",
                  "Microsoft",
                  "Amazon",
                  "Adobe",
                  "Infosys",
                  "TCS",
                  "Accenture",
                  "Oracle",
                ].map((company) => (

                  <div
                    key={company}
                   className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-3 text-center font-medium shadow-sm transition hover:shadow-md">
                    {company}
                  </div>

                ))}

              </div>

            </div>

            {/* Bottom Stats */}

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">

              <Stat
                icon={<GraduationCap size={22} />}
                value={<AnimatedCounter end={25} suffix="+" />}
                label="Colleges"
              />

              <Stat
                icon={<Building2 size={22} />}
                value={<AnimatedCounter end={150} suffix="+" />}
                label="Courses"
              />

              <Stat
                icon={<TrendingUp size={22} />}
                value={<AnimatedCounter end={95} suffix="%" />}
                label="Placements"
              />

              <Stat
                icon={<Users size={22} />}
                value={<AnimatedCounter end={50} suffix="K+" />}
                label="Students"
              />

            </div>

          </div>

          {/* RIGHT COLUMN START */}

          <div className="flex flex-col gap-6">

                 {/* ================= AI Recommendation ================= */}

      <div className="bg-white dark:bg-slate-900 rounded-[28px] shadow-xl border border-slate-100 dark:border-slate-700 p-7">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-green-600 font-bold">
              AI Recommendation
            </p>

            <h2 className="text-4xl font-extrabold mt-3 text-slate-900 dark:text-white">
              Best Match
            </h2>

            <p className="text-slate-500 dark:text-slate-400 mt-3">
              Based on placements, fees and ranking.
            </p>

          </div>

          <div className="text-7xl font-black text-blue-600">
            96%
          </div>

        </div>

      </div>

      {/* ================= College Card ================= */}

      <div className="bg-white dark:bg-slate-900 rounded-[34px] shadow-xl border border-slate-100 dark:border-slate-700 p-8">
        <div className="flex items-start gap-5">

          <div className="h-20 w-20 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">

            <GraduationCap size={34} />

          </div>

          <div>

            <h2 className="text-4xl font-black text-slate-900 dark:text-white">
              COEP Technological University

            </h2>

            <div className="flex items-center gap-2 mt-3 text-slate-500 dark:text-slate-400">
              <MapPin size={18} />

              Pune, Maharashtra

            </div>

          </div>

        </div>

        {/* Stats Grid */}

        <div className="grid grid-cols-2 gap-6 mt-10">

          <Card
            title="Placement"
            value="95%"
          />

          <Card
            title="Average Package"
            value="₹8.5 LPA"
          />

          <Card
            title="Highest Package"
            value="₹65 LPA"
          />

          <Card
            title="NIRF Ranking"
            value="#18"
          />

        </div>

      </div>

      {/* Bottom Cards */}

      <div className="grid grid-cols-2 gap-6">
        
        </div>

               {/* Students Card */}

      <div className="bg-white dark:bg-slate-900 rounded-[30px] shadow-xl border border-slate-100 dark:border-slate-700 p-7">

        <div className="flex items-center gap-3 mb-6">

          <Users size={24} className="text-blue-600" />

          <h3 className="text-2xl font-bold">
            Students Placed
          </h3>

        </div>

        <h2 className="text-6xl font-black text-blue-600">
          12,500+
        </h2>

        <p className="mt-6 text-slate-500 dark:text-slate-400 text-lg leading-8">
          Students placed in top companies
        </p>

      </div>

      {/* Recruiters Card */}

      <div className="bg-white dark:bg-slate-900 rounded-[30px] shadow-xl border border-slate-100 dark:border-slate-700 p-7">

        <div className="flex items-center gap-3 mb-6">

          <BriefcaseBusiness
            size={22}
            className="text-blue-600"
          />

          <h3 className="text-2xl font-bold">
            Top Recruiters
          </h3>

        </div>

        <div className="flex flex-col gap-6">

          {[
            "Google",
            "Microsoft",
            "Amazon",
            "Adobe",
            "Infosys",
            "TCS",
          ].map((company) => (

            <div
              key={company}
            className="flex
              items-center
              justify-between
              rounded-xl
              border
              border-slate-200 dark:border-slate-700
              px-4
              py-3
              hover:bg-slate-50 dark:bg-slate-800
              transition
              "
            >

              <span className="font-medium text-slate-900 dark:text-white">
                {company}
              </span>

              <Award
                size={18}
                className="text-blue-600"
              />

            </div>

          ))}

        </div>

      </div>

      </div>

      </div>

      </div>

      </section>
  );
}

function Stat({
  value,
  label,
  icon,
}: {
  value: React.ReactNode;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className="
      rounded-2xl
      bg-white dark:bg-slate-900
      border
      border-slate-200 dark:border-slate-700
      p-5
      shadow-lg
      hover:shadow-xl
      transition-all
      duration-300
      hover:-translate-y-1
      "
    >
      <div className="text-blue-600 mb-3">
        {icon}
      </div>

      <h3 className="text-3xl font-bold text-slate-900 dark:text-white">

        {value}
      </h3>

      <p className="text-slate-500 dark:text-slate-400 mt-1">
        {label}
      </p>
    </div>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      className="
      rounded-2xl
      border
      border-slate-200 dark:border-slate-700
      bg-slate-50 dark:bg-slate-800
      p-6
      hover:bg-blue-50 dark:hover:bg-slate-700
      transition-all
      duration-300
      "
    >
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        
        {title}
      </p>

      <h3 className="mt-3 text-3xl font-bold text-blue-600">
        {value}
      </h3>
    </div>
  );
}