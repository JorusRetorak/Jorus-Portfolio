import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-black/60 backdrop-blur-md">
      <div className="px-6 md:px-24 py-8 flex flex-col md:flex-row md:items-start gap-8 md:gap-24">
        <div className="max-w-xs">
          <motion.div
            whileHover={{ opacity: 0.8, rotate: 2, scale: 1.1 }}
            className="text-xl font-bold text-white cursor-pointer inline-block"
          >
            Jorus
          </motion.div>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            Building your best games.
          </p>
        </div>

        <div className="ml-auto">
          <h3 className="text-xs tracking-[0.2em] text-amber-400 font-bold uppercase mb-3 ">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 items-end">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <MotionLink
                  whileHover={{ x: 3 }}
                  to={link.to}
                  className="text-sm text-slate-400 hover:text-white transition-colors inline-block"
                >
                  {link.label}
                </MotionLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}