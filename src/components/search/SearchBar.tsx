"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { colleges } from "@/data/colleges";
import {
  Search,
  MapPin,
  GraduationCap,
  X,
  ArrowRight,
} from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const cities = [
    "All",
    ...new Set(colleges.map((college) => college.location)),
  ];

  const filtered = useMemo(() => {
    return colleges.filter((college) => {
      const text = query.toLowerCase();

      const matchesSearch =
        college.name.toLowerCase().includes(text) ||
        college.location.toLowerCase().includes(text) ||
        college.courses.some((course) =>
          course.toLowerCase().includes(text)
        );

      const matchesCity =
        selectedCity === "All" ||
        college.location === selectedCity;

      return matchesSearch && matchesCity;
    });
  }, [query, selectedCity]);

  useEffect(() => {
    if (query.length > 0) setShowSuggestions(true);
    else setShowSuggestions(false);
  }, [query]);

  return (
    <div className="relative">

      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-4">

        <div className="flex flex-col lg:flex-row gap-4 items-center">

          {/* Logo */}

          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            CD
          </div>

          {/* Search */}

          <div className="flex-1 flex items-center gap-3">

           <Search className="text-slate-400 dark:text-slate-500" />

            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search colleges, courses, cities..."
              className="w-full outline-none text-lg bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />

            {query && (
              <button
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* City */}

          <select
            value={selectedCity}
            onChange={(e) =>
              setSelectedCity(e.target.value)
            }
            className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl px-4 py-3"
          >
            {cities.map((city) => (
              <option
                key={city}
                value={city}
              >
                {city}
              </option>
            ))}
          </select>

          {/* Search Button */}

          <button
            className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-8
            py-3
            rounded-xl
            flex
            items-center
            gap-2
            transition
            "
          >
            Search

            <ArrowRight size={18} />
          </button>

        </div>
      </div>

      {/* Suggestions */}

      {showSuggestions && (

        
<div className="absolute w-full bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 mt-3 max-h-96 overflow-y-auto z-50">
          {filtered.length === 0 ? (

            <div className="p-6 text-center text-slate-500 dark:text-slate-400">
              No colleges found.

            </div>

          ) : (

            filtered.slice(0, 8).map((college) => (

              <Link
                href={`/college/${college.id}`}
                key={college.id}
                onClick={() => setShowSuggestions(false)}
                className="
                flex
                justify-between
                items-center
                p-5
                hover:bg-slate-50 dark:hover:bg-slate-800
                transition
                border-b
                "
              >

                <div>
<h3 className="font-bold text-slate-900 dark:text-white">
                  

                    {college.name}

                  </h3>

                  <div className="flex items-center gap-4 mt-2 text-sm text-slate-500 dark:text-slate-400">

                    <span className="flex items-center gap-1">

                      <MapPin size={14} />

                      {college.location}

                    </span>

                    <span className="flex items-center gap-1">

                      <GraduationCap size={14} />

                      {college.courses[0]}

                    </span>

                  </div>

                </div>

                <ArrowRight size={18} />

              </Link>

            ))

          )}

        </div>

      )}

    </div>
  );
}