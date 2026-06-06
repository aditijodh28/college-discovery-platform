"use client";

import { useEffect, useState } from "react";

export default function SavedPage() {
  const [saved, setSaved] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("savedColleges") || "[]"
    );

    setSaved(data);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Saved Colleges
      </h1>

      {saved.length === 0 && (
        <p>No colleges saved yet.</p>
      )}

      {saved.map((college) => (
        <div
          key={college.id}
          className="border p-4 rounded mb-4"
        >
          <h2 className="font-bold">
            {college.name}
          </h2>

          <p>{college.location}</p>
          <p>⭐ {college.rating}</p>
        </div>
      ))}
    </div>
  );
}