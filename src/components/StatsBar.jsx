const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '3', label: 'Shipped Games' }, 
  { value: '100%', label: 'Client Communication' },
];

export default function StatsBar() {
  return (
    <div className="flex flex-wrap justify-center gap-10 md:gap-20 py-8">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="text-4xl font-bold text-white">{s.value}</div>
          <div className="text-slate-400 text-sm mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  );
}