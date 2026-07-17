import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Slideshow({ media, className = "" }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ratios, setRatios] = useState({}); 

  const loadedRef = useRef({});

  useEffect(() => {
    media.forEach((item, i) => {
      if (loadedRef.current[i]) return;
      loadedRef.current[i] = true;

      if (item.type === 'image') {
        const img = new Image();
        img.onload = () => {
          setRatios((prev) => ({ ...prev, [i]: img.naturalWidth / img.naturalHeight }));
        };
        img.src = item.src;
      } else {
        const vid = document.createElement('video');
        vid.preload = 'metadata';
        vid.onloadedmetadata = () => {
          setRatios((prev) => ({ ...prev, [i]: vid.videoWidth / vid.videoHeight }));
        };
        vid.src = item.src;
      }
    });
  }, [media]);

  const goPrev = (e) => {
    e.stopPropagation();
    setDirection(-1);
    setIndex((i) => (i - 1 + media.length) % media.length);
  };
  const goNext = (e) => {
    e.stopPropagation();
    setDirection(1);
    setIndex((i) => (i + 1) % media.length);
  };

  const current = media[index];
  const currentRatio = ratios[index]; 

  return (
    <motion.div
      layout
      transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
      className={`relative group inline-block mx-auto md:mx-0 overflow-hidden rounded-xl ${className}`}
      style={currentRatio ? { aspectRatio: currentRatio, height: 420 } : { opacity: 0 }}
    >
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          initial={{ opacity: 0, x: direction * 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -10 }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {current.type === 'image' ? (
            <img
              src={current.src}
              className="block w-full h-full object-contain"
            />
          ) : (
            <video
              src={current.src}
              autoPlay
              loop
              muted
              playsInline
              className="block w-full h-full object-contain"
            />
          )}
        </motion.div>
      </AnimatePresence>

      <motion.button
        onClick={goPrev}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white backdrop-blur-sm z-20"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        onClick={goNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white backdrop-blur-sm z-20"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </motion.div>
  );
}