"use client";

import { useState } from "react";
import { colleges } from "@/data/colleges";
import CollegeCard from "@/components/CollegeCard";

export default function CollegesPage() {

  const [search, setSearch] = useState("");

  const filtered = colleges.filter(
    (college) =>
      college.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <main className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Colleges
      </h1>

      <input
        className="w-full border p-4 rounded-xl mb-8"
        placeholder="Search College..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((college) => (
          <CollegeCard
            key={college.id}
            college={college}
          />
        ))}
      </div>

    </main>
  );
}