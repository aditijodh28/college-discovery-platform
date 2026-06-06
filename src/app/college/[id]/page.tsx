"use client";

import { colleges } from "@/data/colleges";
import { useEffect } from "react";

export default function CollegePage({
  params,
}: {
  params: { id: string };
}) {
  const college = colleges.find((c) => c.id === params.id);

  useEffect(() => {
    if (typeof window !== "undefined" && college) {
      localStorage.setItem("recentCollege", college.name);
    }
  }, [college]);

  if (!college) {
    return (
      <div className="p-6 text-red-500 text-xl">
        College not found
      </div>
    );
  }

  const saveCollege = () => {
    if (typeof window === "undefined") return;

    const saved = JSON.parse(
      localStorage.getItem("savedColleges") || "[]"
    );

    if (!saved.find((c: any) => c.id === college.id)) {
      saved.push(college);

      localStorage.setItem(
        "savedColleges",
        JSON.stringify(saved)
      );

      alert("College Saved Successfully!");
    } else {
      alert("College Already Saved");
    }
  };

  const shareCollege = () => {
    if (typeof window === "undefined") return;

    navigator.clipboard.writeText(window.location.href);
    alert("College link copied!");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">
          {college.name}
        </h1>

        <div className="flex gap-3">
          <button
            onClick={saveCollege}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>

          <button
            onClick={shareCollege}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Share
          </button>
        </div>
      </div>

      {/* Location */}
      <p className="text-gray-600 mt-2">
        📍 {college.location}
      </p>

      {/* Overview */}
      <div className="mt-6 border rounded-lg p-5 shadow">
        <h2 className="text-2xl font-semibold mb-3">
          Overview
        </h2>
        <p>{college.overview}</p>
      </div>

      {/* Statistics */}
      <div className="grid md:grid-cols-4 gap-4 mt-6">
        <div className="border rounded-lg p-4 shadow">
          <h3 className="font-semibold">Fees</h3>
          <p className="text-xl">₹{college.fees}</p>
        </div>

        <div className="border rounded-lg p-4 shadow">
          <h3 className="font-semibold">Rating</h3>
          <p className="text-xl">⭐ {college.rating}</p>
        </div>

        <div className="border rounded-lg p-4 shadow">
          <h3 className="font-semibold">Placement Rate</h3>
          <p className="text-xl">{college.placementRate}</p>
        </div>

        <div className="border rounded-lg p-4 shadow">
          <h3 className="font-semibold">Highest Package</h3>
          <p className="text-xl">{college.highestPackage}</p>
        </div>
      </div>

      {/* Placement Details */}
      <div className="mt-6 border rounded-lg p-5 shadow">
        <h2 className="text-2xl font-semibold mb-3">
          Placement Statistics
        </h2>

        <p>
          Average Package:
          <span className="font-bold ml-2">
            {college.averagePackage}
          </span>
        </p>

        <p className="mt-2">
          Highest Package:
          <span className="font-bold ml-2">
            {college.highestPackage}
          </span>
        </p>

        <p className="mt-2">
          Placement Rate:
          <span className="font-bold ml-2">
            {college.placementRate}
          </span>
        </p>
      </div>

      {/* Courses */}
      <div className="mt-6 border rounded-lg p-5 shadow">
        <h2 className="text-2xl font-semibold mb-4">
          Courses Offered
        </h2>

        <div className="grid md:grid-cols-2 gap-3">
          {college.courses.map((course: string) => (
            <div key={course} className="border rounded p-3">
              {course}
            </div>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-6 border rounded-lg p-5 shadow">
        <h2 className="text-2xl font-semibold mb-4">
          Highlights
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Excellent Placement Opportunities</li>
          <li>Modern Infrastructure</li>
          <li>Industry Collaborations</li>
          <li>Strong Alumni Network</li>
          <li>Research & Innovation Labs</li>
        </ul>
      </div>

      {/* Reviews */}
      <div className="mt-6 border rounded-lg p-5 shadow">
        <h2 className="text-2xl font-semibold mb-4">
          Student Reviews
        </h2>

        <div className="border rounded p-3 mb-3">
          ⭐⭐⭐⭐⭐ Great placements and faculty.
        </div>

        <div className="border rounded p-3 mb-3">
          ⭐⭐⭐⭐ Good campus and facilities.
        </div>

        <div className="border rounded p-3">
          ⭐⭐⭐⭐⭐ Excellent learning environment.
        </div>
      </div>
    </div>
  );
}