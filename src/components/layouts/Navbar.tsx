"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import DarkModeButton from "../common/DarkModeButton"

import {
  House,
  GraduationCap,
  Scale,
  Brain,
  Briefcase,
  Heart,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Home",
      href: "/",
      icon: House,
    },

    {
      name: "Colleges",
      href: "/college",
      icon: GraduationCap,
    },

    {
      name: "Compare",
      href: "/compare",
      icon: Scale,
    },

    {
      name: "Predictor",
      href: "/predictor",
      icon: Brain,
    },

    {
      name: "Placements",
      href: "/placements",
      icon: Briefcase,
    },

    {
      name: "Saved",
      href: "/saved",
      icon: Heart,
    },

    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
  ];

  return (
    <header
      className="
      sticky
      top-0
      z-50

      bg-white/90

      dark:bg-slate-950/90

      backdrop-blur-md

      border-b

      border-slate-200

      dark:border-slate-800

      shadow-sm
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        h-20

        flex

        items-center

        justify-between
        "
      >
        {/* Logo */}

        <Link
          href="/"
          className="
          flex

          items-center

          gap-3

          hover:scale-105

          transition
          "
        >
          <div
            className="
            w-11
            h-11

            rounded-xl

            bg-blue-600

            text-white

            flex

            items-center

            justify-center

            font-bold

            text-lg
            "
          >
            CD
          </div>

          <div>
            <h1
              className="
              font-bold

              text-xl

              text-slate-900

              dark:text-white
              "
            >
              College Discovery
            </h1>

            <p
              className="
              text-xs

              text-gray-500

              dark:text-slate-400
              "
            >
              Discover • Compare • Decide
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav
          className="
          hidden

          lg:flex

          items-center

          gap-2
          "
        >
          {links.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                flex

                items-center

                gap-2

                px-5

                py-3

                rounded-xl

                font-medium

                transition-all

                duration-300

                hover:-translate-y-1

                hover:shadow-lg

                ${
                  pathname === item.href
                    ? "bg-blue-600 text-white"
                    : `
                      text-slate-700

                      dark:text-slate-300

                      hover:bg-slate-100

                      dark:hover:bg-slate-800
                    `
                }
                `}
              >
                <Icon size={18} />

                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}

        <div
          className="
          flex

          items-center

          gap-4
          "
        >
          {/* Dark Mode */}

          <DarkModeButton />

          {/* Mobile Menu */}

          <button
            className="
            lg:hidden

            text-slate-700

            dark:text-white
            "
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div
          className="
          lg:hidden

          bg-white

          dark:bg-slate-950

          border-t

          dark:border-slate-800
          "
        >
          {links.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                flex

                items-center

                gap-3

                px-6

                py-4

                text-slate-700

                dark:text-slate-300

                hover:bg-slate-100

                dark:hover:bg-slate-800

                transition
                "
              >
                <Icon size={18} />

                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}