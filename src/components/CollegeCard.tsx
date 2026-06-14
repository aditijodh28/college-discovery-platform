import Link from "next/link";

export default function CollegeCard({ college }: any) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">

      <h2 className="text-2xl font-bold mb-2">
        {college.name}
      </h2>

      <p className="text-slate-400 mb-4">
        📍 {college.location}
      </p>

      <div className="flex justify-between mb-4">
        <span>⭐ {college.rating}</span>
        <span>{college.placementRate}</span>
      </div>

      <p className="text-slate-400 text-sm mb-4">
        {college.overview}
      </p>

      <Link
        href={`/college/${college.id}`}
        className="block text-center bg-blue-600 hover:bg-blue-700 py-3 rounded-xl"
      >
        View Details
      </Link>

    </div>
  );
}