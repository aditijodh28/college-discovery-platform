"use client";

export default function FloatingButtons() {

  return (

    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">

      <button
        className="w-14 h-14 rounded-full bg-blue-600 text-white text-2xl shadow-lg hover:scale-110 transition"
      >

        🔍

      </button>

      <button
        className="w-14 h-14 rounded-full bg-green-600 text-white text-2xl shadow-lg hover:scale-110 transition"
      >

        ❤️

      </button>

      <button
        className="w-14 h-14 rounded-full bg-purple-600 text-white text-2xl shadow-lg hover:scale-110 transition"
      >

        ⬆️

      </button>

    </div>

  );

}