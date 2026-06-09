export default function StatCard({ title, value }: any) {
  return (
    <div className="bg-white/10 p-4 rounded-xl border border-white/10">
      <p className="text-gray-400 text-sm">{title}</p>
      <h3 className="text-xl font-bold text-blue-400">{value}</h3>
    </div>
  );
}