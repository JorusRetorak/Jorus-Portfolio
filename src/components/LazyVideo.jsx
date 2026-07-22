import { useRef, useEffect, useState } from 'react';

export default function LazyVideo({ src, className }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    if (inView) ref.current.play().catch(() => {});
    else ref.current.pause();
  }, [inView]);

  return (
    <video
      ref={ref}
      src={src}
      loop
      muted
      playsInline
      preload="none"
      className={className}
    />
  );
}