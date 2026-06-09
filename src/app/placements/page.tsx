import { colleges } from "@/data/colleges";

export default function PlacementsPage() {

  return (
    <main className="max-w-7xl mx-auto p-6">

      <h1 className="text-5xl font-bold mb-8">
        Placement Statistics
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {colleges.map((college) => (
          <div
            key={college.id}
            className="p-6 rounded-xl shadow bg-white"
          >
            <h2 className="font-bold text-xl">
              {college.name}
            </h2>

            <p className="mt-2">
              Placement: 95%
            </p>

            <p>Highest Package: ₹20 LPA</p>
          </div>
        ))}

      </div>

    </main>
  );
}