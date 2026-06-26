"use client";

type Props = {
  title: string;
  value: string | number;
  emoji: string;
};

export default function AnimatedStatCard({
  title,
  value,
  emoji,
}: Props) {

  return (

    <div
      className="bg-white rounded-3xl p-8 shadow-lg
      hover:-translate-y-2 hover:shadow-2xl
      transition-all duration-300 cursor-pointer"
    >

      <div className="text-5xl mb-4">

        {emoji}

      </div>

      <h2 className="text-5xl font-bold text-blue-600">

        {value}

      </h2>

      <p className="text-gray-500 mt-3">

        {title}

      </p>

    </div>

  );
}