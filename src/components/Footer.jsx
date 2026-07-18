import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center py-8 px-6 md:px-24 bg-slate-900 text-white relative z-50 gap-4 md:gap-0 w-full mt-auto">
      
      <motion.div 
        whileHover={{ opacity: 0.8, rotate: 2, scale: 1.1 }}
        className="text-xl font-bold cursor-pointer"
      >
        Jorus
      </motion.div>

      <div className="flex gap-6 md:gap-8">
        <MotionLink whileHover={{ scale: 1.1 }} to="/" className="hover:text-gray-300 transition-colors inline-block">
          Home
        </MotionLink>
        <MotionLink whileHover={{ scale: 1.1 }} to="/projects" className="hover:text-gray-300 transition-colors inline-block">
          Projects
        </MotionLink>
        <MotionLink whileHover={{ scale: 1.1 }} to="/contact" className="hover:text-gray-300 transition-colors inline-block">
          Contact
        </MotionLink>
      </div>

    </footer>
  );
}