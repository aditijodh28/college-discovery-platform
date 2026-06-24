"use client";

export default function SmartSearch(){

 return(

 <section className="max-w-6xl mx-auto my-16">

 <div className="bg-white p-8 rounded-3xl shadow">

 <div className="grid md:grid-cols-4 gap-4">

 <input

 className="border p-4 rounded-xl"

 placeholder="🏫 College"

 />

 <input

 className="border p-4 rounded-xl"

 placeholder="📍 City"

 />

 <input

 className="border p-4 rounded-xl"

 placeholder="📚 Course"

 />

 <input

 className="border p-4 rounded-xl"

 placeholder="📝 Exam"

 />

 </div>

 </div>

 </section>

 );

}