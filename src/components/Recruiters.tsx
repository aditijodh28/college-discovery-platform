export default function Recruiters() {

  const companies = [

    "Google",

    "Microsoft",

    "Amazon",

    "TCS",

    "Infosys",

    "Wipro",

    "Accenture",

    "Capgemini",

    "Oracle",

    "IBM",

  ];

  return (

    <section className="my-20">

      <h2 className="text-4xl font-bold text-center mb-10">

        🏢 Top Recruiters

      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

        {companies.map(company => (

          <div
            key={company}
            className="bg-white p-6 rounded-2xl shadow text-center font-bold hover:shadow-xl"
          >

            {company}

          </div>

        ))}

      </div>

    </section>

  );
}