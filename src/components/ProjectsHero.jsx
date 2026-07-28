import { motion } from 'framer-motion';
import CaveBackground from '../components/CaveBackground'

const icons = {
  controller: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h4M8 10v4M15 11h.01M18 13h.01M6 8h9a5 5 0 013.9 8.1c-.6.8-1.7 1-2.5.5l-2-1.3a3 3 0 00-3.3 0l-2 1.3c-.8.5-1.9.3-2.5-.5A5 5 0 016 8z" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1M9 11a4 4 0 100-8 4 4 0 000 8z" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path strokeLinecap="round" d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  ),
};

const stats = [
  { icon: 'controller', value: '20+', label: 'Projects' },
  { icon: 'users', value: '151K+', label: 'Total Visits' },
  { icon: 'calendar', value: '6+', label: 'Years of Dev' },
];

export default function ProjectsHero() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-12 px-6 md:px-24 pt-10 md:pt-16 pb-14">

      <div className="flex flex-col items-start text-left w-full lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">PROJECTS</h1>
          <p className="mt-3 text-slate-400 text-lg max-w-lg">
            A collection of games, systems, and experiences I've built.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-5 mt-10"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-4 px-6 py-5 border border-slate-800 rounded-xl bg-slate-950/40"
            >
              <span className="text-amber-400">{icons[s.icon]}</span>
              <div>
                <div className="text-white font-bold text-2xl leading-none">{s.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide mt-1.5">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative w-full lg:w-1/2 flex items-center justify-center pointer-events-none min-h-[400px] lg:min-h-0">
        <CaveBackground />
      </div>

    </section>
  );
}