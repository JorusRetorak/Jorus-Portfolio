export default function AvailabilityBadge() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-full w-fit mx-auto md:mx-0">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
      </span>
      <span className="text-sm text-slate-300">Available for work</span>
    </div>
  );
}