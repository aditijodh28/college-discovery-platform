"use client";

import { useState } from "react";

export default function PredictorPage() {
  const [rank, setRank] = useState("");
  const [result, setResult] = useState<string[]>([]);

  const predict = () => {
    const r = Number(rank);

    if (r < 1000)
      setResult(["COEP Pune", "VJTI Mumbai"]);

    else if (r < 5000)
      setResult(["PICT Pune"]);

    else setResult(["Local Engineering Colleges"]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        College Predictor
      </h1>

      <input
        type="number"
        placeholder="Enter Rank"
        value={rank}
        onChange={(e) => setRank(e.target.value)}
        className="border p-2"
      />

      <button
        onClick={predict}
        className="ml-2 bg-black text-white px-4 py-2"
      >
        Predict
      </button>

      <ul className="mt-4">
        {result.map((college) => (
          <li key={college}>{college}</li>
        ))}
      </ul>
    </div>
  );
}