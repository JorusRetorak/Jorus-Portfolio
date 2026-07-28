import { motion } from 'framer-motion';

const icons = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
    </svg>
  ),
  layout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path strokeLinecap="round" d="M3 9h18" />
    </svg>
  ),
  cube: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8" />
    </svg>
  ),
  gauge: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 12l4-4M12 7v1" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1M9 11a4 4 0 100-8 4 4 0 000 8zM23 20v-1a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  bulb: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6M10 22h4M12 2a6 6 0 00-4 10.5c.6.6 1 1.4 1 2.3v.2h6v-.2c0-.9.4-1.7 1-2.3A6 6 0 0012 2z" />
    </svg>
  ),
};

const skills = [
  { icon: 'code', title: 'Lua', subtitle: 'Scripting' },
  { icon: 'layout', title: 'UI Design', subtitle: 'Interface & UX' },
  { icon: 'cube', title: 'Game Systems', subtitle: 'Mechanics & Logic' },
  { icon: 'gauge', title: 'Optimization', subtitle: 'Performance' },
  { icon: 'users', title: 'Teamwork', subtitle: 'Collaboration' },
  { icon: 'bulb', title: 'Problem Solving', subtitle: 'Efficient Solutions' },
];

export default function SkillsGrid() {
  return (
    <section className="px-6 md:px-24 py-16 md:py-20">
      <div className="flex items-center gap-4 mb-10">
        <span className="w-6 h-px bg-amber-400" />
        <h2 className="text-sm tracking-[0.2em] text-amber-400 font-bold uppercase">My Skills</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group flex flex-col items-center text-center gap-3 p-6 border border-slate-800 rounded-2xl bg-slate-950/40 hover:border-amber-400/50 transition-colors"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-700 text-amber-400 group-hover:border-amber-400 group-hover:bg-amber-400/10 transition-colors">
              {icons[s.icon]}
            </div>
            <div>
              <div className="text-white font-bold text-sm">{s.title}</div>
              <div className="text-slate-500 text-xs mt-1">{s.subtitle}</div>
            </div>
            <span className="w-6 h-0.5 rounded-full bg-amber-400/40 group-hover:w-10 group-hover:bg-amber-400 transition-all" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}