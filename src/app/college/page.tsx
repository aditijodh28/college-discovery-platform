"use client";

import { useState } from "react";

import { colleges } from "@/data/colleges";
import CollegeCard from "@/components/college/CollegeCard";
import FilterSidebar from "@/components/FilterSidebar";

export default function CollegesPage() {

  const [search, setSearch] = useState("");

  const [location, setLocation] = useState("");

  const [rating, setRating] = useState("");

  const [maxFees, setMaxFees] = useState("");

  const [course, setCourse] = useState("");

  const filtered = colleges.filter((college) => {

    const matchesSearch =
      college.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesLocation =
      !location ||
      college.location === location;

    const matchesRating =
      !rating ||
      college.rating >= Number(rating);

    const matchesFees =
      !maxFees ||
      college.fees <= Number(maxFees);

    const matchesCourse =
      !course ||
      college.courses.includes(course);

    return (
      matchesSearch &&
      matchesLocation &&
      matchesRating &&
      matchesFees &&
      matchesCourse
    );
  });

  return (

    <main className="min-h-screen bg-slate-100 p-10">

      <h1 className="text-5xl font-bold mb-10">

        🎓 College Explorer

      </h1>

      <div className="grid lg:grid-cols-4 gap-10">

        <div>

          <FilterSidebar

            search={search}
            setSearch={setSearch}

            location={location}
            setLocation={setLocation}

            rating={rating}
            setRating={setRating}

            maxFees={maxFees}
            setMaxFees={setMaxFees}

            course={course}
            setCourse={setCourse}

          />

        </div>

        <div className="lg:col-span-3">

          <div className="flex justify-between mb-8">

            <h2 className="text-3xl font-bold">

              Colleges

            </h2>

            <p>

              {filtered.length} Found

            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {filtered.map((college) => (

              <CollegeCard
                key={college.id}
                college={college}
              />

            ))}

          </div>

        </div>

      </div>

    </main>

  );
}