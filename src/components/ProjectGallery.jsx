import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LazyImage from './LazyImage';
import LazyVideo from './LazyVideo';

const CATEGORIES = ['All', 'Gameplay', 'UI/UX', 'Environments', 'Scripts', 'Logos', 'Other'];

export default function ProjectGallery({ items }) {
  const [filter, setFilter] = useState('All');
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = useMemo(
    () => (filter === 'All' ? items : items.filter((i) => i.category === filter)),
    [items, filter]
  );

  const activeItem = activeIndex !== null ? filtered[activeIndex] : null;

  const close = () => setActiveIndex(null);
  const showPrev = () => setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % filtered.length);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex, filtered.length]);

  return (
    <section className="px-6 md:px-24 py-10 md:py-14">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <span className="w-6 h-px bg-amber-400" />
          <h2 className="text-sm tracking-[0.2em] text-amber-400 font-bold uppercase">Project Gallery</h2>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => {
                setFilter(c);
                setActiveIndex(null);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide border transition-colors ${
                filter === c
                  ? 'bg-amber-400 text-black border-amber-400'
                  : 'border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}
      >
        {filtered.map((item, i) => (
          <motion.button
            key={`${filter}-${i}`}
            type="button"
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: Math.min(i, 8) * 0.04 }}
            whileHover={{ y: -4 }}
            className="relative aspect-video bg-slate-950 border border-slate-800 rounded-xl overflow-hidden group text-left cursor-zoom-in"
          >
            {item.type === 'image' ? (
              <LazyImage src={item.src} alt="" className="w-full h-full object-cover" />
            ) : (
              <LazyVideo 
                src={item.src} 
                className="w-full h-full object-cover" 
                preload="metadata"
                playOnHover={true}
              />
            )}

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
              </svg>
            </div>

            {item.note && (
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[10px] text-white text-center italic">* {item.note}</p>
              </div>
            )}
          </motion.button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-slate-500 text-center py-16">Nothing in this category yet.</p>
      )}

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm px-4 py-10"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-amber-400 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            {filtered.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  aria-label="Previous"
                  className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:text-amber-400 hover:border-amber-400 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  aria-label="Next"
                  className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:text-amber-400 hover:border-amber-400 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </>
            )}

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            >
              {activeItem.type === 'image' ? (
                <img
                  src={activeItem.src}
                  alt=""
                  className="max-w-full max-h-[85vh] rounded-xl object-contain border border-slate-800"
                />
              ) : (
                <video
                  src={activeItem.src}
                  className="max-w-full max-h-[85vh] rounded-xl object-contain border border-slate-800"
                  controls
                  autoPlay
                />
              )}
              {activeItem.note && (
                <p className="text-sm text-slate-400 italic mt-3 text-center">* {activeItem.note}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}