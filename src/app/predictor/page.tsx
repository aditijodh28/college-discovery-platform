"use client";

import { useState } from "react";

export default function Predictor() {

 const [rank,setRank]=useState("");

 return(

 <main className="p-10">

 <h1 className="text-5xl font-bold mb-10">

 🎯 Admission Predictor

 </h1>

 <input

 type="number"

 placeholder="Enter Rank"

 value={rank}

 onChange={(e)=>setRank(e.target.value)}

 className="border p-4 rounded-xl"

 />

 {rank && (

 <div className="mt-8 bg-white p-8 rounded-3xl shadow">

 Recommended:

 <ul>

 <li>COEP Pune</li>

 <li>VJTI Mumbai</li>

 <li>PICT Pune</li>

 </ul>

 </div>

 )}

 </main>

 );

}