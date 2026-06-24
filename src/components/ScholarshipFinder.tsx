export default function ScholarshipFinder(){

 const scholarships=[

 "AICTE Scholarship",

 "National Scholarship",

 "Post Matric",

 "EBC",

 "Merit Scholarship"

 ];

 return(

 <section className="my-20">

 <h2 className="text-4xl font-bold mb-10">

 💰 Scholarships

 </h2>

 <div className="grid md:grid-cols-3 gap-6">

 {scholarships.map(item=>(

 <div

 key={item}

 className="bg-white p-8 rounded-3xl shadow"

 >

 {item}

 </div>

 ))}

 </div>

 </section>

 );

}