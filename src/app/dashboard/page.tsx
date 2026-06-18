import { colleges } from "@/data/colleges";

export default function Dashboard() {

  return (

    <main className="min-h-screen bg-slate-100 p-10">

      <h1 className="text-5xl font-bold mb-10">

        📊 Dashboard

      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white p-8 rounded-3xl shadow">

          <h2 className="text-5xl font-bold text-blue-600">

            {colleges.length}

          </h2>

          <p>

            Colleges

          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow">

          <h2 className="text-5xl font-bold text-green-600">

            95%

          </h2>

          <p>

            Placement Success

          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow">

          <h2 className="text-5xl font-bold text-purple-600">

            4.8

          </h2>

          <p>

            Average Rating

          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow">

          <h2 className="text-5xl font-bold text-orange-600">

            150+

          </h2>

          <p>

            Courses

          </p>

        </div>

      </div>

    </main>

  );
}