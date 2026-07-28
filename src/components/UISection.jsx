import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slideshow from './Slideshow';

export default function UISection({ media }) {
  return (
    <section className="px-6 md:px-24 py-16 md:py-20">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <span className="w-6 h-px bg-amber-400" />
          <h2 className="text-sm tracking-[0.2em] text-amber-400 font-bold uppercase">UI Design</h2>
        </div>
        <Link
          to="/projects"
          className="hidden md:flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm transition-colors"
        >
          View UI Gallery <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/3 text-center lg:text-left"
        >
          <p className="text-slate-400 text-lg">
            I design clean, modern, and intuitive interfaces that elevate the player experience.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mt-6 px-5 py-3 border border-slate-700 rounded-xl text-white font-semibold hover:border-amber-400 hover:text-amber-400 transition-colors"
          >
            See More UI <span aria-hidden>→</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-2/3 flex justify-center"
        >
          <div className="p-4 rounded-2xl border border-slate-800 bg-slate-950/40">
            <Slideshow media={media} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}