import Link from "next/link";

import {
  MapPin,
  Star,
  Briefcase,
  IndianRupee,
} from "lucide-react";

type Props = {
  college: {
    id: string;
    name: string;
    location: string;
    rating: number;
    fees: number;
    placementRate: string;
  };
};

export default function CollegeCard({ college }: Props) {
  return (
    <div
      className="
      bg-white dark:bg-slate-900
      rounded-3xl
      shadow-lg
      p-8
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
      border border-slate-200 dark:border-slate-700
      "
    >
      {/* College Name */}

      <h2 className="text-2xl font-bold mb-6">
        {college.name}
      </h2>

      {/* Location */}

      <div className="flex items-center gap-3 mb-4 text-gray-600">

        <MapPin
          size={18}
          className="text-red-500"
        />

        <span>
          {college.location}
        </span>

      </div>

      {/* Rating */}

      <div className="flex items-center gap-3 mb-4 text-gray-600">

        <Star
          size={18}
          className="text-yellow-500"
        />

        <span>
          {college.rating}
        </span>

      </div>

      {/* Fees */}

      <div className="flex items-center gap-3 mb-4 text-gray-600">

        <IndianRupee
          size={18}
          className="text-green-600"
        />

        <span>

          ₹{college.fees.toLocaleString()}

        </span>

      </div>

      {/* Placement */}

      <div className="flex items-center gap-3 mb-8 text-gray-600">

        <Briefcase
          size={18}
          className="text-blue-600"
        />

        <span>

          {college.placementRate}

        </span>

      </div>

      {/* Button */}

      <Link

        href={`/college/${college.id}`}

        className="
        w-full
        block
        text-center
        bg-blue-600
        hover:bg-blue-700
        text-white
        py-3
        rounded-xl
        font-semibold
        "

      >

        View Details

      </Link>

    </div>
  );
}