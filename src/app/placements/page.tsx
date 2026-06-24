export default function Placements() {

 return(

 <main className="p-10">

 <h1 className="text-5xl font-bold mb-10">

 💼 Placements

 </h1>

 <div className="grid md:grid-cols-3 gap-8">

 {["Google","Microsoft","Amazon","TCS","Infosys","Wipro"]

 .map((company)=>(

 <div

 key={company}

 className="bg-white p-10 rounded-3xl shadow"

 >

 {company}

 </div>

 ))}

 </div>

 </main>

 );

}