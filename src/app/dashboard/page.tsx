"use client";

import {

  GraduationCap,

  TrendingUp,

  Briefcase,

  IndianRupee,

  Building2,

  MapPin,

  Bell,

  ArrowUpRight,

} from "lucide-react";

export default function Dashboard() {

  return (

    <main className="min-h-screen bg-slate-100 p-8">

      {/* Header */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold">

          Dashboard

        </h1>

        <p className="text-gray-500 mt-2">

          Welcome to your College Discovery analytics.

        </p>

      </div>

      {/* Hero Banner */}

      <section

        className="
        bg-gradient-to-r
        from-blue-700
        to-indigo-700
        rounded-3xl
        p-10
        text-white
        mb-12
        shadow-xl
        hover:scale-[1.01]
        transition
        duration-300
        "

      >

        <div className="flex justify-between flex-wrap gap-8">

          <div>

            <h2 className="text-4xl font-bold mb-4">

              Discover Your Future

            </h2>

            <p className="text-lg">

              Compare colleges, placements and career opportunities.

            </p>

          </div>

          <button

            className="
            bg-white
            text-blue-700
            px-8
            py-4
            rounded-2xl
            font-bold
            hover:scale-110
            transition
            "

          >

            Explore Now

          </button>

        </div>

      </section>

      {/* Statistics */}

      <div className="grid md:grid-cols-4 gap-8 mb-12">

        <Card

          title="Colleges"

          value="25+"

          icon={<GraduationCap size={32} />}

        />

        <Card

          title="Placements"

          value="95%"

          icon={<Briefcase size={32} />}

        />

        <Card

          title="Avg Package"

          value="8.5 LPA"

          icon={<IndianRupee size={32} />}

        />

        <Card

          title="Growth"

          value="+18%"

          icon={<TrendingUp size={32} />}

        />

      </div>

      {/* Two Column Layout */}

      <div className="grid lg:grid-cols-2 gap-8 mb-12">

        {/* Progress */}

        <div className="bg-white rounded-3xl p-8 shadow-lg">

          <h2 className="text-3xl font-bold mb-8">

            Performance

          </h2>

          <Progress

            title="Placements"

            value={95}

          />

          <Progress

            title="Infrastructure"

            value={88}

          />

          <Progress

            title="Academics"

            value={92}

          />

          <Progress

            title="Research"

            value={84}

          />

        </div>

        {/* Activity */}

        <div className="bg-white rounded-3xl p-8 shadow-lg">

          <h2 className="text-3xl font-bold mb-8">

            Recent Activity

          </h2>

          <Activity text="Compared COEP and VJTI" />

          <Activity text="Saved PICT Pune" />

          <Activity text="Predicted JEE Rank" />

          <Activity text="Viewed Placements" />

        </div>

      </div>

      {/* Bottom */}

      <div className="grid md:grid-cols-2 gap-8">

        {/* Recruiters */}

        <div className="bg-white rounded-3xl p-8 shadow-lg">

          <h2 className="text-3xl font-bold mb-8">

            Top Recruiters

          </h2>

          <div className="grid grid-cols-2 gap-4">

            {[

              "Google",

              "Microsoft",

              "Amazon",

              "TCS",

              "Infosys",

              "Accenture",

            ].map((company) => (

              <div

                key={company}

                className="
                bg-slate-100
                p-5
                rounded-2xl
                flex
                items-center
                gap-3
                hover:scale-105
                transition
                "

              >

                <Building2 size={20} />

                {company}

              </div>

            ))}

          </div>

        </div>

        {/* Cities */}

        <div className="bg-white rounded-3xl p-8 shadow-lg">

          <h2 className="text-3xl font-bold mb-8">

            Trending Cities

          </h2>

          {["Pune","Mumbai","Bengaluru","Hyderabad"].map(

            (city)=>(

            <div

              key={city}

              className="
              flex
              justify-between
              items-center
              p-5
              mb-4
              rounded-2xl
              bg-slate-100
              hover:scale-105
              transition
              "

            >

              <div className="flex items-center gap-3">

                <MapPin size={20} />

                {city}

              </div>

              <ArrowUpRight />

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}

function Card({

  title,

  value,

  icon,

}: any) {

  return (

    <div

      className="
      bg-white
      rounded-3xl
      p-8
      shadow-lg
      hover:-translate-y-2
      hover:shadow-2xl
      transition-all
      duration-300
      "

    >

      <div className="flex justify-between">

        <div>

          <p className="text-gray-500">

            {title}

          </p>

          <h2 className="text-5xl font-bold mt-3">

            {value}

          </h2>

        </div>

        <div className="text-blue-600">

          {icon}

        </div>

      </div>

    </div>

  );

}

function Progress({

  title,

  value,

}: any) {

  return (

    <div className="mb-8">

      <div className="flex justify-between mb-2">

        <span>

          {title}

        </span>

        <span>

          {value}%

        </span>

      </div>

      <div className="bg-slate-200 h-3 rounded-full">

        <div

          className="
          bg-blue-600
          h-3
          rounded-full
          transition-all
          duration-1000
          "

          style={{

            width:`${value}%`

          }}

        />

      </div>

    </div>

  );

}

function Activity({

  text,

}: any) {

  return (

    <div

      className="
      flex
      items-center
      gap-4
      mb-6
      bg-slate-100
      p-5
      rounded-2xl
      hover:scale-105
      transition
      "

    >

      <Bell size={18} />

      {text}

    </div>

  );

}