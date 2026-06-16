import { colleges } from "@/data/colleges";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export default function CollegeDetails({ params }: Props) {
  const college = colleges.find(
    (item) => item.id === params.id
  );

  if (!college) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">

        <h1 className="text-4xl font-bold mb-4">
          College Not Found
        </h1>

        <Link
          href="/colleges"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Back
        </Link>

      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">

      {/* Banner */}

      <div className="h-72 relative">

        <Image
          src="/colleges/default.jpg"
          alt={college.name}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute bottom-8 left-10 text-white">

          <h1 className="text-5xl font-bold">
            {college.name}
          </h1>

          <p className="text-2xl mt-3">
            📍 {college.location}
          </p>

        </div>

      </div>

      {/* Details */}

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Left */}

          <div className="md:col-span-2 bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-8">
              College Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-blue-50 p-6 rounded-2xl">

                <h3 className="text-gray-500">
                  ⭐ Rating
                </h3>

                <p className="text-4xl font-bold text-blue-600">
                  {college.rating}
                </p>

              </div>

              <div className="bg-green-50 p-6 rounded-2xl">

                <h3 className="text-gray-500">
                  💰 Annual Fees
                </h3>

                <p className="text-4xl font-bold text-green-600">

                  ₹{college.fees.toLocaleString()}

                </p>

              </div>

              <div className="bg-purple-50 p-6 rounded-2xl">

                <h3 className="text-gray-500">
                  📊 Placement Rate
                </h3>

                <p className="text-4xl font-bold text-purple-600">

                  {college.placementRate}

                </p>

              </div>

              <div className="bg-orange-50 p-6 rounded-2xl">

                <h3 className="text-gray-500">
                  📈 Avg Package
                </h3>

                <p className="text-4xl font-bold text-orange-600">

                  {college.averagePackage}

                </p>

              </div>

            </div>

            <div className="mt-10">

              <h2 className="text-3xl font-bold mb-6">

                🚀 Highest Package

              </h2>

              <div className="bg-red-50 p-6 rounded-2xl">

                <p className="text-5xl font-bold text-red-600">

                  {college.highestPackage}

                </p>

              </div>

            </div>

            <div className="mt-12">

              <h2 className="text-3xl font-bold mb-6">

                📚 Courses

              </h2>

              <div className="flex flex-wrap gap-4">

                {college.courses.map((course) => (

                  <div
                    key={course}
                    className="bg-indigo-100 text-indigo-700 px-6 py-3 rounded-full font-semibold"
                  >

                    {course}

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="bg-white rounded-3xl shadow-lg p-8 h-fit">

            <h2 className="text-3xl font-bold mb-8">

              🏢 Top Recruiters

            </h2>

            <div className="space-y-4">

              {[
                "Google",
                "Microsoft",
                "Amazon",
                "TCS",
                "Infosys",
                "Accenture",
                "Wipro",
                "Capgemini",
              ].map((company) => (

                <div
                  key={company}
                  className="bg-slate-100 p-4 rounded-xl font-semibold"
                >

                  {company}

                </div>

              ))}

            </div>

            <Link
              href="/colleges"
              className="block mt-10 bg-blue-600 text-center text-white py-4 rounded-xl font-bold"
            >

              ← Back to Colleges

            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}