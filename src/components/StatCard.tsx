"use client";

import { ReactNode } from "react";

type Props = {
 title: string;

 value: string;

 icon: ReactNode;
};

export default function StatCard({

 title,

 value,

 icon,

}: Props) {

 return (

 <div

 className="
 bg-white
 rounded-3xl
 p-8
 shadow-lg
 hover:shadow-2xl
 hover:-translate-y-2
 transition-all
 duration-300
 border
 "

 >

 <div className="flex justify-between items-center">

 <div>

 <p className="text-gray-500">

 {title}

 </p>

 <h2 className="text-5xl font-bold mt-3">

 {value}

 </h2>

 </div>

 <div className="bg-blue-100 p-4 rounded-2xl">

 {icon}

 </div>

 </div>

 </div>

 );

}