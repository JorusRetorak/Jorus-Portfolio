import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MotionLink = motion(Link);

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex flex-col md:flex-row justify-between items-center py-5 px-6 md:px-24 text-white gap-4 md:gap-0 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <motion.div
        whileHover={{ opacity: 0.8, rotate: 2, scale: 1.1 }}
        className="text-xl font-bold cursor-pointer"
      >
        Jorus
      </motion.div>

      <div className="flex gap-2 md:gap-2 relative">
        {links.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <MotionLink
              key={link.to}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              to={link.to}
              className={`relative px-4 py-2 rounded-b-md transition-colors inline-block ${
                isActive ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 border border-white/10 rounded-full"
                  transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </MotionLink>
          );
        })}
      </div>
    </nav>
  );
}