"use client";

import Link from "next/link";
import AnimatedCounter from "../AnimatedCounter";
import {
  GraduationCap,
  ArrowRight,
  Sparkles,
  MapPin,
  Building2,
  TrendingUp,
  Users,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
    <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-blue-300/30 blur-[120px]" />
    <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-300/30 blur-[120px]" />
    <div className="absolute top-1/2 left-1/2 h-80 w-80 rounded-full bg-purple-300/20 blur-[100px]" />
    <div className="absolute top-32 left-20 w-3 h-3 rounded-full bg-blue-500 animate-ping"></div>

<div className="absolute bottom-20 right-32 w-4 h-4 rounded-full bg-purple-500 animate-pulse"></div>

<div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-indigo-500 animate-bounce"></div>
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-100" />

      {/* Blur Circles */}

      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />

     <div
  className="
  relative
  max-w-7xl
  mx-auto
  px-6
  py-24
  animate-[fadeIn_1s_ease]
  "
>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

  {/* Premium Badge */}

  <div
    className="
    inline-flex
    items-center
    gap-3
    bg-white
    border
    border-blue-100
    shadow-xl
    rounded-full
    px-6
    py-3
    mb-8
    hover:scale-105
    transition-all
    duration-300
    "
  >

    <div
      className="
      w-8
      h-8
      rounded-full
      bg-gradient-to-r
      from-blue-600
      to-indigo-600
      text-white
      flex
      items-center
      justify-center
      font-bold
      "
    >
      #1
    </div>

    <span className="font-semibold text-slate-700">
      AI Powered College Discovery Platform
    </span>

  </div>

  {/* Heading */}

  <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900">

    Discover

    <span className="block text-blue-600">
      Your Dream College
    </span>

  </h1>
            
            <p className="mt-8 text-xl text-slate-600 leading-9 max-w-xl">

              Compare colleges, predict admissions, explore placements,
              discover scholarships and make confident career decisions
              with one modern platform.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/college"
                className="
                group
                bg-blue-600
                text-white
                px-8
                py-4
                rounded-2xl
                font-semibold
                flex
                items-center
                gap-2
                hover:bg-blue-700
                hover:scale-110
                hover:-translate-y-1
                hover:shadow-2xl
                active:scale-95
                transition-all
                duration-300
                "
              >
                Explore Colleges

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </Link>

              <Link
                href="/predictor"
                className="
                bg-white
                border
                border-slate-300
                px-8
                py-4
                rounded-2xl
                font-semibold
                hover:bg-slate-50
                hover:scale-110
                hover:-translate-y-1
                hover:shadow-2xl
                active:scale-95
                transition-all
                duration-300
                "
              >
                AI Predictor
              </Link>

            </div>

<div className="mt-12">

  <p className="text-gray-500 mb-4 font-medium">

    Trusted by students aiming for top companies

  </p>

  <div className="flex flex-wrap gap-5">

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
        className="
        px-5
        py-3
        rounded-xl
        bg-white
        shadow
        hover:shadow-xl
        hover:-translate-y-1
        transition
        "
      >
        {company}
      </div>

    ))}

  </div>

</div>

            {/* Quick Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">

              <Stat
                value={<AnimatedCounter end={25} suffix="+" />}
                label="Colleges"
                icon={<GraduationCap size={22} />}
              />

              <Stat
                value={<AnimatedCounter end={150} suffix="+" />}
                label="Courses"
                icon={<Building2 size={22} />}
              />

              <Stat
                value={<AnimatedCounter end={95} suffix="%" />}
                label="Placements"
                icon={<TrendingUp size={22} />}
              />

              <Stat
                value={<AnimatedCounter end={50} suffix="K+" />}
                label="Students"
                icon={<Users size={22} />}
              />

            </div>

          </div>

        {/* RIGHT */}

<div className="relative hidden lg:block">

  {/* Main Card */}

<div
  className="
  relative
  z-20
  bg-white/80
  backdrop-blur-xl
  rounded-[36px]
  shadow-2xl
  border
  border-white/40
  p-10
  "
>

    <div className="flex items-center gap-4">

      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white">

        <GraduationCap size={30} />

      </div>

      <div>

        <h2 className="text-2xl font-bold">

          COEP Technological University

        </h2>

        <p className="text-slate-500 flex items-center gap-2 mt-2">

          <MapPin size={16} />

          Pune, Maharashtra

        </p>

      </div>

    </div>

    <div className="grid grid-cols-2 gap-5 mt-10">

      <Card title="Placement" value="95%" />

      <Card title="Average Package" value="₹8.5 LPA" />

      <Card title="Highest Package" value="₹65 LPA" />

      <Card title="NIRF Ranking" value="#18" />

    </div>

  </div>

  {/* Floating Card */}

  <div
    className="
    absolute
    -left-10
    top-10
    bg-white
    rounded-3xl
    shadow-xl
    p-6
    w-56
    animate-bounce
    "
    style={{
      animationDuration: "5s",
    }}
  >

    <div className="text-green-600 text-sm font-semibold">

      AI Recommendation

    </div>

    <h3 className="font-bold text-xl mt-2">

      Best Match

    </h3>

    <p className="text-slate-500 mt-2">

      Based on placements and fees

    </p>

    <div className="mt-4 text-3xl font-bold text-blue-600">

      96%

    </div>

  </div>

  {/* Floating Recruiters */}

  <div
    className="
    absolute
    -right-10
    bottom-12
    bg-white
    rounded-3xl
    shadow-xl
    p-6
    w-64
    "
  >

    <h3 className="font-bold mb-4">

      Top Recruiters

    </h3>

    <div className="grid grid-cols-2 gap-3">

      {[
        "Google",
        "Microsoft",
        "Amazon",
        "Adobe",
        "TCS",
        "Infosys",
      ].map((company) => (

        <div
          key={company}
          className="
          bg-slate-100
          rounded-xl
          p-3
          text-center
          text-sm
          hover:bg-blue-600
          hover:text-white
          transition
          cursor-pointer
          "
        >
          {company}
        </div>

      ))}

    </div>

  </div>

</div>
        </div>

      </div>
{/* Scroll Down */}

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block">

  <div className="w-7 h-12 rounded-full border-2 border-blue-600 flex justify-center">

    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 animate-bounce"></div>

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
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 shadow-md hover:shadow-xl transition">
      <div className="text-blue-600 mb-3">
        {icon}
      </div>

      <h3 className="text-3xl font-bold">
        {value}
      </h3>

      <p className="text-slate-500">
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
    <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
      <p className="text-slate-500">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-blue-600">
        {value}
      </h3>
    </div>
  );
}