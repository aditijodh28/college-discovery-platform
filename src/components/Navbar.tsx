"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathname = usePathname();

  const navItems = [

    {
      name: "Home",
      href: "/",
    },

    {
      name: "Colleges",
      href: "/colleges",
    },

    {
      name: "Compare",
      href: "/compare",
    },

    {
      name: "Predictor",
      href: "/predictor",
    },

    {
      name: "Placements",
      href: "/placements",
    },

    {
      name: "Dashboard",
      href: "/dashboard",
    },

    {
      name: "Saved",
      href: "/saved",
    },

  ];

  return (

    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">

      <div className="max-w-7xl mx-auto px-6 h-16">

        <div className="flex justify-between items-center h-full">

          {/* Left */}

          <div className="flex items-center gap-10">

            <Link
              href="/"
              className="text-3xl font-bold text-blue-600"
            >

              🎓 CollegeFinder

            </Link>

            <nav className="hidden md:flex gap-8">

              {navItems.map((item) => (

                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition

                  ${
                    pathname === item.href

                      ? "text-blue-600 border-b-2 border-blue-600"

                      : "text-gray-700 hover:text-blue-600"
                  }
                  `}
                >

                  {item.name}

                </Link>

              ))}

            </nav>

          </div>

          {/* Right */}

          <div className="flex items-center gap-5">

            {/* Search */}

            <input

              type="text"

              placeholder="🔍 Search"

              className="hidden md:block border rounded-full px-4 py-2 outline-none"

            />

            {/* Notifications */}

            <button className="text-2xl">

              🔔

            </button>

            {/* Saved */}

            <button className="text-2xl">

              ❤️

            </button>

            {/* Profile */}

            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">

              AJ

            </div>

          </div>

        </div>

      </div>

    </header>

  );
}