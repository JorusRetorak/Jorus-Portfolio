import { motion } from 'framer-motion';
import cavePhoto from '../assets/cavePhoto.png';

export default function CaveBackground({ className = '', imgClassName = '', align = 'center' }) {
  const isTop = align === 'top';

  return (
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute left-1/2 -translate-x-1/2 ${isTop ? 'top-0' : 'top-1/2 -translate-y-1/2'} w-[150vw] lg:w-[85vw] h-[80vh] lg:h-[130vh] flex items-center justify-center -z-10 ${className}`}
      style={{
        WebkitMaskImage: isTop
          ? 'radial-gradient(ellipse 70% 65% at 50% 10%, black 45%, transparent 95%)'
          : 'radial-gradient(ellipse closest-side, black 30%, transparent 90%)',
        maskImage: isTop
          ? 'radial-gradient(ellipse 70% 65% at 50% 10%, black 45%, transparent 95%)'
          : 'radial-gradient(ellipse closest-side, black 30%, transparent 90%)'
      }}
    >
      <div className="absolute w-[60%] h-[60%] rounded-full bg-amber-500/10 blur-[150px]" />
      <div className="absolute w-[20rem] h-[20rem] md:w-[45rem] md:h-[45rem] rounded-full border-[2px] border-amber-400/20 blur-[2px]" />
      <div className="absolute w-[20rem] h-[20rem] md:w-[45rem] md:h-[45rem] rounded-full border border-amber-300/10" />
      <img
        src={cavePhoto}
        alt="Minerite Cave Showcase"
        className={`relative z-10 w-full h-full object-cover object-[70%_center] opacity-85 ${imgClassName}`}
      />
    </motion.div>
  );
}