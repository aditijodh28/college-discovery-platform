import { colleges } from "@/data/colleges";

export default function TrendingColleges() {

  const top = [...colleges]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (

    <section className="my-16">

      <h2 className="text-4xl font-bold mb-8">

        🔥 Trending Colleges

      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {top.map((college) => (

          <div
            key={college.id}
            className="bg-white p-6 rounded-3xl shadow-lg hover:scale-105 transition"
          >

            <h3 className="text-2xl font-bold">

              {college.name}

            </h3>

            <p>

              📍 {college.location}

            </p>

            <p>

              ⭐ {college.rating}

            </p>

            <p>

              📊 {college.placementRate}

            </p>

          </div>

        ))}

      </div>

    </section>

  );
}