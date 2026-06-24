"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import {
  Sun,
  Moon,
} from "lucide-react";

export default function DarkModeButton() {

  const {
    theme,
    setTheme,
  } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {

    setMounted(true);

  }, []);

  // Prevent hydration error

  if (!mounted) {

    return (

      <div

        className="

        w-12

        h-12

        "

      />

    );

  }

  return (

    <button

      onClick={() =>

        setTheme(

          theme === "dark"

          ? "light"

          : "dark"

        )
      }

      className="

      w-12

      h-12

      flex

      items-center

      justify-center

      rounded-full

      bg-slate-200

      dark:bg-slate-700

      hover:scale-110

      transition-all

      duration-300

      "

    >

      {

        theme === "dark"

        ?

        <Sun size={22} />

        :

        <Moon size={22} />

      }

    </button>

  );

}