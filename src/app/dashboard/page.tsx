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
  Bookmark,
  Search,
  Sparkles,
} from "lucide-react";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between items-center mb-10 gap-6">

        <div>
          <p className="text-blue-600 font-semibold">
            Welcome Back 👋
          </p>

          <h1 className="text-5xl font-extrabold mt-2">
            College Dashboard
          </h1>

          <p className="text-slate-500 mt-2">
            Explore, compare and save colleges for your future.
          </p>
        </div>

        <div className="flex gap-4 flex-wrap">

          <button className="bg-white dark:bg-slate-900 shadow-lg rounded-xl px-6 py-3 hover:scale-105 transition">
            <Search className="inline mr-2" size={18} />
            Search
          </button>

          <button className="bg-blue-600 text-white rounded-xl px-6 py-3 hover:scale-105 transition">
            <Sparkles className="inline mr-2" size={18} />
            AI Recommendation
          </button>

        </div>

      </div>

      {/* Hero */}

      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white p-10 mb-10 shadow-2xl">

        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white dark:bg-slate-900/10 blur-3xl" />

        <div className="relative z-10">

          <h2 className="text-5xl font-bold mb-5">
            Find Your Dream College
          </h2>

          <p className="text-lg max-w-2xl mb-8 opacity-90">
            Compare colleges, predict admissions, analyze placements,
            explore recruiters and build your career.
          </p>

          <button className="bg-white dark:bg-slate-900 text-blue-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            Explore Colleges
          </button>

        </div>

      </section>

      {/* Stats */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        <StatCard
          title="Colleges"
          value="250+"
          color="blue"
          icon={<GraduationCap />}
        />

        <StatCard
          title="Placements"
          value="95%"
          color="green"
          icon={<Briefcase />}
        />

        <StatCard
          title="Average Package"
          value="₹8.5 LPA"
          color="orange"
          icon={<IndianRupee />}
        />

        <StatCard
          title="Growth"
          value="+18%"
          color="purple"
          icon={<TrendingUp />}
        />

      </div>

      {/* Middle */}

      <div className="grid lg:grid-cols-3 gap-8 mb-10">

        {/* Progress */}

        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Performance Analytics
          </h2>

          <Progress title="Placements" value={95} />

          <Progress title="Academics" value={92} />

          <Progress title="Infrastructure" value={88} />

          <Progress title="Research" value={84} />

          <Progress title="Student Satisfaction" value={96} />

        </div>

        {/* Quick Actions */}

        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Quick Actions
          </h2>

          <QuickAction
            icon={<Search size={18} />}
            text="Search Colleges"
          />

          <QuickAction
            icon={<Bookmark size={18} />}
            text="Saved Colleges"
          />

          <QuickAction
            icon={<Bell size={18} />}
            text="Latest Notifications"
          />

          <QuickAction
            icon={<TrendingUp size={18} />}
            text="Placement Trends"
          />

        </div>

      </div>

      {/* Bottom */}

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Recruiters */}

        <div className="bbg-white dark:bg-slate-900 g-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Top Recruiters
          </h2>

          <div className="grid grid-cols-2 gap-4">

            {[
              "Google",
              "Microsoft",
              "Amazon",
              "Infosys",
              "TCS",
              "Accenture",
              "Capgemini",
              "Wipro",
            ].map((company) => (
              <div
                key={company}
                className="bg-slate-100 rounded-2xl p-5 flex items-center gap-3 hover:bg-blue-50 hover:scale-105 transition"
              >
                <Building2 />
                {company}
              </div>
            ))}

          </div>

        </div>

        {/* Cities */}

        <div className="bg-white dark:bg-slate-900 g-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Trending Cities
          </h2>

          {[
            "Pune",
            "Mumbai",
            "Nagpur",
            "Bengaluru",
            "Hyderabad",
            "Delhi",
          ].map((city) => (
            <div
              key={city}
              className="flex justify-between items-center bg-slate-100 rounded-2xl p-5 mb-4 hover:bg-blue-50 hover:translate-x-2 transition"
            >
              <div className="flex gap-3 items-center">
                <MapPin />
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

function StatCard({
  title,
  value,
  icon,
  color,
}: any) {
  return (
    <div className="bg-white dark:bg-slate-900 bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition">

      <div className="flex justify-between">

        <div>

          <p className="text-slate-500">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {value}
          </h2>

        </div>

        <div
          className={`h-14 w-14 rounded-2xl flex items-center justify-center
          ${
            color === "blue"
              ? "bg-blue-100 text-blue-600"
              : color === "green"
              ? "bg-green-100 text-green-600"
              : color === "orange"
              ? "bg-orange-100 text-orange-600"
              : "bg-purple-100 text-purple-600"
          }`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

function Progress({ title, value }: any) {
  return (
    <div className="mb-7">

      <div className="flex justify-between mb-2 font-medium">

        <span>{title}</span>

        <span>{value}%</span>

      </div>

      <div className="h-3 bg-slate-200 rounded-full overflow-hidden">

        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-1000"
          style={{ width: `${value}%` }}
        />

      </div>

    </div>
  );
}

function QuickAction({ icon, text }: any) {
  return (
    <button className="w-full flex items-center gap-4 p-5 rounded-2xl bg-slate-100 hover:bg-blue-600 hover:text-white transition mb-4">
      {icon}
      {text}
    </button>
  );
}