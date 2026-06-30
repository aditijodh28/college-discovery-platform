"use client";

import { useState } from "react";

export default function DarkModeButton() {
  const [dark, setDark] = useState(false);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 rounded bg-black text-white"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}