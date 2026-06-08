"use client";

import { useState } from "react";

export default function PredictorPage() {

  const [rank, setRank] = useState("");

  return (
    <main className="max-w-4xl mx-auto p-6">

      <h1 className="text-5xl font-bold mb-8">
        Admission Predictor
      </h1>

      <input
        type="number"
        placeholder="Enter Rank"
        value={rank}
        onChange={(e) =>
          setRank(e.target.value)
        }
        className="w-full border p-4 rounded-xl"
      />

      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-xl mt-4"
      >
        Predict
      </button>

    </main>
  );
}