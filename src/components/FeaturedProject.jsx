import { motion } from 'framer-motion';
import Slideshow from './Slideshow';

const icons = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} width={20} height={20} className="w-5 h-5 shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
    </svg>
  ),
  cube: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} width={20} height={20} className="w-5 h-5 shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} width={20} height={20} className="w-5 h-5 shrink-0">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} width={20} height={20} className="w-5 h-5 shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

export default function FeaturedProject({ project }) {
  return (
    <section className="px-6 md:px-24 py-10 md:py-14">
      <div className="flex items-center gap-4 mb-8">
        <span className="w-6 h-px bg-amber-400" />
        <h2 className="text-sm tracking-[0.2em] text-amber-400 font-bold uppercase">Featured Project</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:items-start">

        <div className="w-full lg:w-1/2 flex justify-center border border-slate-800 rounded-2xl overflow-hidden">
          <Slideshow media={project.media} />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-bold text-slate-500 border border-slate-800 rounded-md px-2 py-1">
              {project.index}
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mt-4">{project.title}</h3>
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-wide mt-1">{project.role}</p>

            <p className="text-slate-400 mt-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-5">
              {project.tags.map((t) => (
                <span key={t} className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-md border border-slate-700 text-slate-400">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded-lg transition-colors"
                >
                  View Project →
                </a>
              )}
              {project.sourceLink && (
                <a
                  href={project.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 border border-slate-700 hover:border-amber-400 hover:text-amber-400 text-white font-semibold rounded-lg transition-colors"
                >
                  View Source
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-slate-800 pt-6"
          >
            {project.stats.map((s) => (
              <div key={s.label} className="min-w-0">
                <div className="flex items-center gap-2 text-slate-500">
                  {icons[s.icon]}
                  <span className="text-[10px] uppercase tracking-wide leading-tight truncate">{s.label}</span>
                </div>
                <div className="text-white font-bold text-lg mt-1">{s.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}