"use client";

import { useState } from "react";

import { colleges } from "@/data/colleges";

import {

  MapPin,

  Star,

  IndianRupee,

  Briefcase,

  TrendingUp,

  Building2,

} from "lucide-react";

type College = {

  id: string;

  name: string;

  location: string;

  rating: number;

  fees: number;

  placementRate: string;

  averagePackage: string;

  highestPackage: string;

  courses: string[];

  recruiters: string[];

};

export default function ComparePage() {

  const [college1, setCollege1] =

    useState<College>(colleges[0]);

  const [college2, setCollege2] =

    useState<College>(colleges[1]);

  return (

    <main className="min-h-screen
bg-slate-100
dark:bg-slate-950
text-slate-900
dark:text-white
p-8
transition-colors">

      {/* Header */}

      <div className="text-center mb-12">

        <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">

          Compare Colleges

        </h1>

        <p className="text-slate-500 dark:text-slate-400 text-lg">

          Compare colleges side-by-side.

        </p>

      </div>

      {/* Selectors */}

      <div className="grid md:grid-cols-2 gap-8 mb-12">

        <select

          value={college1.id}

          className="
p-4
rounded-2xl
border
border-slate-300
dark:border-slate-700
bg-white
dark:bg-slate-900
border
border-slate-200
dark:border-slate-700
dark:bg-slate-900
text-slate-900
dark:text-white
"

          onChange={(e) => {

            const selected = colleges.find(

              (c) => c.id === e.target.value

            );

            if (selected) {

              setCollege1(selected);

            }

          }}

        >

          {colleges.map((college) => (

            <option

              key={college.id}

              value={college.id}

            >

              {college.name}

            </option>

          ))}

        </select>

        <select

          value={college2.id}

          className="p-4 rounded-2xl border bg-white"

          onChange={(e) => {

            const selected = colleges.find(

              (c) => c.id === e.target.value

            );

            if (selected) {

              setCollege2(selected);

            }

          }}

        >

          {colleges.map((college) => (

            <option

              key={college.id}

              value={college.id}

            >

              {college.name}

            </option>

          ))}

        </select>

      </div>

      {/* Cards */}

      <div className="grid lg:grid-cols-2 gap-8">

        <CollegeCard

          college={college1}

        />

        <CollegeCard

          college={college2}

        />

      </div>

    </main>

  );

}

function CollegeCard({

  college,

}: {

  college: College;

}) {

  const placement = Number(

    String(

      college.placementRate

    ).replace("%","")

  );

  return (

    <div

      className="

      bg-white

      rounded-3xl

      p-8

      shadow-lg

      hover:shadow-2xl

      hover:-translate-y-2

      transition-all

      duration-300

      "

    >

      <h2 className="text-3xl font-bold mb-8">

        {college.name}

      </h2>

      <Info

        icon={<MapPin size={18} />}

        label="Location"

        value={college.location}

      />

      <Info

        icon={<Star size={18} />}

        label="Rating"

        value={college.rating}

      />

      <Info

        icon={<IndianRupee size={18} />}

        label="Fees"

        value={`₹${college.fees.toLocaleString()}`}

      />

      <Info

        icon={<Briefcase size={18} />}

        label="Placement"

        value={`${placement}%`}

      />

      <Info

        icon={<TrendingUp size={18} />}

        label="Average Package"

        value={college.averagePackage}

      />

      <Info

        icon={<TrendingUp size={18} />}

        label="Highest Package"

        value={college.highestPackage}

      />

      {/* Courses */}

      <div className="mt-10">

        <h3 className="font-bold text-xl mb-4">

          Courses

        </h3>

        <div className="flex flex-wrap gap-3">

          {college.courses.map(

            (course) => (

            <div

              key={course}

              className="

              bg-blue-100

              text-blue-700

              px-4

              py-2

              rounded-full

              "

            >

              {course}

            </div>

          ))}

        </div>

      </div>

      {/* Recruiters */}

      <div className="mt-10">

        <h3 className="font-bold text-xl mb-4">

          Recruiters

        </h3>

        <div className="grid grid-cols-2 gap-3">

          {college.recruiters?.map(

            (company) => (

            <div

              key={company}

              className="

              flex

              items-center

              gap-2

              bg-slate-100
dark:bg-slate-800

              p-3

              rounded-xl

              "

            >

              <Building2 size={18} />

              {company}

            </div>

          ))}

        </div>

      </div>

      {/* Progress Bar */}

      <div className="mt-10">

        <h3 className="font-bold text-xl mb-4">

          Placement Score

        </h3>

        <div className="bg-slate-200 dark:bg-slate-700 h-4 rounded-full">

          <div

            className="

            bg-blue-600

            h-4

            rounded-full

            transition-all

            duration-1000

            "

            style={{

              width:`${placement}%`

            }}

          />

        </div>

      </div>

    </div>

  );

}

function Info({

  icon,

  label,

  value,

}:{

  icon: React.ReactNode;

  label: string;

  value: string | number;

}) {

  return (

    <div

      className="

      flex

      items-center

      justify-between

      py-4

      border-b

      "

    >

      <div

        className="

        flex

        items-center

        gap-3

        "

      >

        {icon}

        <span>{label}</span>

      </div>

      <span className="font-bold">

        {value}

      </span>

    </div>

  );

}