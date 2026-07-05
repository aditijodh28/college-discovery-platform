"use client";

type Props = {
  search: string;
  setSearch: (value: string) => void;

  location: string;
  setLocation: (value: string) => void;

  rating: string;
  setRating: (value: string) => void;

  maxFees: string;
  setMaxFees: (value: string) => void;

  course: string;
  setCourse: (value: string) => void;
};

export default function FilterSidebar({
  search,
  setSearch,

  location,
  setLocation,

  rating,
  setRating,

  maxFees,
  setMaxFees,

  course,
  setCourse,
}: Props) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        🔍 Filters
      </h2>

      {/* Search */}

      <input
        type="text"
        placeholder="Search college..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full border p-3 rounded-xl mb-5"
      />

      {/* Location */}

      <select
        value={location}
        onChange={(e) =>
          setLocation(e.target.value)
        }
        className="w-full border p-3 rounded-xl mb-5"
      >

        <option value="">
          All Locations
        </option>

        <option>Pune</option>

        <option>Mumbai</option>

        <option>Nagpur</option>

        <option>Amravati</option>

        <option>Nanded</option>

        <option>Sangli</option>

      </select>

      {/* Rating */}

      <select
        value={rating}
        onChange={(e) =>
          setRating(e.target.value)
        }
        className="w-full border p-3 rounded-xl mb-5"
      >

        <option value="">
          Any Rating
        </option>

        <option value="4">
          4+
        </option>

        <option value="4.5">
          4.5+
        </option>

      </select>

      {/* Fees */}

      <select
        value={maxFees}
        onChange={(e) =>
          setMaxFees(e.target.value)
        }
        className="w-full border p-3 rounded-xl mb-5"
      >

        <option value="">
          Any Fees
        </option>

        <option value="100000">
          Under ₹1,00,000
        </option>

        <option value="150000">
          Under ₹1,50,000
        </option>

        <option value="200000">
          Under ₹2,00,000
        </option>

      </select>

      {/* Course */}

      <select
        value={course}
        onChange={(e) =>
          setCourse(e.target.value)
        }
        className="w-full border p-3 rounded-xl"
      >

        <option value="">
          Any Course
        </option>

        <option>Computer</option>

        <option>IT</option>

        <option>AI</option>

        <option>Data Science</option>

        <option>Mechanical</option>

      </select>

    </div>
  );
}