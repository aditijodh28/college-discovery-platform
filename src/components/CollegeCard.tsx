"use client";

import Link from "next/link";

export default function CollegeCard({ college }: any) {
  const saveCollege = () => {
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
      alert("Already Saved");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">

      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-24 flex items-center justify-center">
        <h2 className="text-white text-2xl font-bold text-center px-2">
          {college.name}
        </h2>
      </div>

      <div className="p-5">

        {/* Location */}
        <p className="text-gray-500 mb-4">
          📍 {college.location}
        </p>

        {/* Stats */}
        <div className="space-y-2">

          <div className="flex justify-between">
            <span>Fees</span>
            <span className="font-semibold text-blue-600">
              ₹{college.fees}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Rating</span>
            <span className="font-semibold text-yellow-500">
              ⭐ {college.rating}
            </span>
          </div>

          {college.placementRate && (
            <div className="flex justify-between">
              <span>Placement</span>
              <span className="font-semibold text-green-600">
                {college.placementRate}
              </span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mt-5">
          <div className="flex justify-between text-sm mb-1">
            <span>Placement Success</span>
            <span>95%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-green-500 h-3 rounded-full w-[95%]"></div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">

          <Link
            href={`/college/${college.id}`}
            className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition"
          >
            View Details
          </Link>

          <button
            onClick={saveCollege}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl font-semibold transition"
          >
            Save
          </button>

        </div>

      </div>
    </div>
  );
}