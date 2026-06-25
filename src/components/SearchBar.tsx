"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div
      className="
      bg-white
      rounded-full
      shadow-xl
      border
      border-slate-200
      h-16
      flex
      items-center
      px-4
      hover:shadow-2xl
      transition-all
      duration-300
      "
    >
      {/* Project Logo */}

      <div
        className="
        w-10
        h-10
        rounded-full
        bg-blue-600
        text-white
        flex
        items-center
        justify-center
        font-bold
        text-sm
        mr-4
        "
      >
        CD
      </div>

      {/* Search Icon */}

      <Search
        size={22}
        className="text-slate-400 mr-3"
      />

      {/* Input */}

      <input
        type="text"
        placeholder="Search colleges, locations, courses..."
        className="
        flex-1
        outline-none
        bg-transparent
        text-lg
        text-slate-700
        "
      />
    </div>
  );
}