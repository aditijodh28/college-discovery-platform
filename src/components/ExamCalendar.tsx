export default function ExamCalendar(){

 const exams=[

 "JEE Main",

 "MHT CET",

 "NEET",

 "CAT",

 "GATE",

 "CUET"

 ];

 return(

 <section className="my-20">

 <h2 className="text-4xl font-bold mb-10">

 📅 Upcoming Exams

 </h2>

 <div className="grid md:grid-cols-3 gap-6">

 {exams.map(exam=>(

 <div

 key={exam}

 className="bg-white p-8 rounded-3xl shadow"

 >

 {exam}

 </div>

 ))}

 </div>

 </section>

 );

}