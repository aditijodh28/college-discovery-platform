import { colleges } from "@/data/colleges";

export default function QuickStats() {

  return (

    <section className="grid md:grid-cols-4 gap-6 my-16">

      <div className="bg-blue-600 text-white p-8 rounded-3xl">

        <h2 className="text-5xl font-bold">

          {colleges.length}

        </h2>

        <p>

          Colleges

        </p>

      </div>

      <div className="bg-green-600 text-white p-8 rounded-3xl">

        <h2 className="text-5xl font-bold">

          95%

        </h2>

        <p>

          Placement Success

        </p>

      </div>

      <div className="bg-purple-600 text-white p-8 rounded-3xl">

        <h2 className="text-5xl font-bold">

          4.8

        </h2>

        <p>

          Avg Rating

        </p>

      </div>

      <div className="bg-orange-600 text-white p-8 rounded-3xl">

        <h2 className="text-5xl font-bold">

          150+

        </h2>

        <p>

          Courses

        </p>

      </div>

    </section>

  );
}