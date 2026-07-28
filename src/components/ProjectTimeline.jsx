import { motion } from 'framer-motion';
import LazyImage from './LazyImage';
import LazyVideo from './LazyVideo';

export default function ProjectTimeline({ items, activeIndex, onSelect, moreLink }) {
  return (
    <section className="px-6 md:px-24 py-10 md:py-14">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <span className="w-6 h-px bg-amber-400" />
          <h2 className="text-sm tracking-[0.2em] text-amber-400 font-bold uppercase">Project Timeline</h2>
        </div>
        {moreLink && (
          <a
            href={moreLink}
            className="hidden md:flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm transition-colors"
          >
            View All Projects <span aria-hidden>→</span>
          </a>
        )}
      </div>

      <div className="flex items-center gap-0 overflow-x-auto pb-2 -mx-2 px-2">
        {items.map((item, i) => (
          <div key={item.title} className="flex items-center shrink-0">
            <motion.button
              onClick={() => onSelect?.(i)}
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`w-40 text-left rounded-xl border overflow-hidden bg-slate-950/40 transition-colors ${
                i === activeIndex ? 'border-amber-400' : 'border-slate-800 hover:border-slate-600'
              }`}
            >
              <div className="px-3 pt-3 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">{item.index}</span>
                {i === activeIndex && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
              </div>
              <div className="px-3 mt-1">
                <div className="text-sm font-bold text-white truncate">{item.title}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{item.year}</div>
              </div>
              <div className="mt-3 aspect-video bg-slate-900">
                {item.cover.type === 'video' ? (
                  <LazyVideo src={item.cover.src} className="w-full h-full object-cover" />
                ) : (
                  <LazyImage src={item.cover.src} alt={item.title} className="w-full h-full object-cover" />
                )}
              </div>
            </motion.button>

            {i < items.length - 1 && (
              <div className="flex items-center shrink-0 w-8">
                <span className="w-full h-px bg-slate-800" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}