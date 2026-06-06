"use client";

import { useState } from "react";
import { colleges } from "@/data/colleges";

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  const compareColleges = colleges.filter((college) =>
    selected.includes(college.id)
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Compare Colleges
      </h1>

      {colleges.map((college) => (
        <div key={college.id}>
          <input
            type="checkbox"
            onChange={() => toggle(college.id)}
          />
          {college.name}
        </div>
      ))}

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {compareColleges.map((college) => (
          <div
            key={college.id}
            className="border p-4 rounded"
          >
            <h2>{college.name}</h2>
            <p>Fees: ₹{college.fees}</p>
            <p>Rating: {college.rating}</p>
            <p>Placement: {college.placementRate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}