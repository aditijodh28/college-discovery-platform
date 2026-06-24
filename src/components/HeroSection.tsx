"use client";

import Link from "next/link";

export default function HeroSection() {

 return(

 <section className="relative overflow-hidden">

 <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"></div>

 <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 text-center text-white">

 <h1 className="text-6xl font-extrabold mb-8">

 🎓 Discover Your Perfect College

 </h1>

 <p className="text-2xl max-w-3xl mx-auto mb-12">

 Compare colleges, predict admissions,

 explore placements and build your career.

 </p>

 <div className="flex justify-center gap-6 flex-wrap">

 <Link

 href="/college"

 className="bg-white text-blue-700 px-10 py-5 rounded-2xl font-bold"

 >

 Explore Colleges

 </Link>

 <Link

 href="/predictor"

 className="bg-blue-500 px-10 py-5 rounded-2xl font-bold"

 >

 AI Predictor

 </Link>

 </div>

 </div>

 </section>

 );

}