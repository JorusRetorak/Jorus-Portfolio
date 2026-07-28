import { motion } from 'framer-motion';

// profileSrc: optional. Pass a real photo/avatar import (e.g. a Roblox render
// like the ones you already use as gallery logos) to replace the placeholder
// initial badge below.
export default function AboutSection({ profileSrc }) {
  return (
    <section className="px-6 md:px-24 py-16 md:py-20">
      <div className="flex items-center gap-4 mb-10">
        <span className="w-6 h-px bg-amber-400" />
        <h2 className="text-sm tracking-[0.2em] text-amber-400 font-bold uppercase">About Me</h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto lg:mx-0 shrink-0"
        >
          <div
            className="flex items-center justify-center border-2 border-amber-400/60 bg-slate-950"
            style={{
              width: '11rem',
              height: '11rem',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          >
            {profileSrc ? (
              <img src={profileSrc} alt="Jorus" className="w-full h-full object-cover" />
            ) : (
              <span className="text-6xl font-bold text-amber-400">J</span>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1 max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
        >
          <h3 className="text-3xl font-bold text-white">
            Hey, I'm <span className="text-amber-400">Jorus</span>.
          </h3>
          <p className="mt-4 text-slate-400">
            I'm a passionate Roblox developer and UI designer who loves turning ideas into engaging
            experiences. From gameplay systems to stunning interfaces, I focus on quality, performance,
            and creativity in everything I build.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 px-5 py-3 border border-slate-700 rounded-xl text-white font-semibold hover:border-amber-400 hover:text-amber-400 transition-colors"
          >
            More About Me <span aria-hidden>→</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto lg:w-80 shrink-0 p-6 rounded-2xl border border-slate-800 bg-slate-950/40"
        >
          <span className="text-4xl text-amber-400/40 font-serif leading-none">"</span>
          <p className="text-lg text-white -mt-4">
            Great games aren't just played, they're <span className="text-amber-400">experienced</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}