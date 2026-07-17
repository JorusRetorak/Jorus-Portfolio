import { motion } from 'framer-motion';
import discordLogo from '../assets/discord.png';
import devforumLogo from '../assets/devforum.png'
import xLogo from '../assets/tw.webp'

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full px-6 md:px-24 mt-10 md:mt-16 gap-16 md:gap-12">
      
      <div className="flex flex-col w-full lg:w-1/3 items-center lg:items-start text-center lg:text-left">
        <h1 className="text-5xl font-bold mb-10 md:mb-12 text-white relative group w-fit cursor-default">
          Contact me
          <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-white to-white transition-all duration-300 group-hover:w-full rounded-full"></span>
        </h1>

        <div className="flex flex-col gap-6 w-full max-w-sm">
          <motion.a
            href="https://discord.com/users/344941451689328640"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.02, backgroundColor: "#FFFFFF" }}
            className="flex flex-row items-center gap-6 p-6 border border-slate-700 rounded-2xl w-full hover:text-black hover:border-indigo-500/50 hover:font-bold cursor-pointer"
          >
            <img src={discordLogo} className="w-16 h-16 object-contain" alt="Discord" />
            <div className="flex flex-col text-left">
              <h2 className="text-2xl font-bold">Discord</h2>
              <span className="text-indigo-400 mt-1">_jorusretorak</span>
            </div>
          </motion.a>
          
          <motion.a
            href="https://devforum.roblox.com/u/jorusretorak/summary"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.02, backgroundColor: "#FFFFFF" }}
            className="flex flex-row items-center gap-6 p-6 border border-slate-700 rounded-2xl w-full hover:text-black hover:border-indigo-500/50 hover:font-bold cursor-pointer"
          >
            <img src={devforumLogo} className="w-16 h-16 object-contain" alt="Roblox" />
            <div className="flex flex-col text-left">
              <h2 className="text-2xl font-bold">Roblox Devforum</h2>
              <span className="text-indigo-400 mt-1">JorusRetorak</span>
            </div>
          </motion.a>
          
          <motion.a
            href="https://x.com/JorusDev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.02, backgroundColor: "#FFFFFF" }}
            className="flex flex-row items-center gap-6 p-6 border border-slate-700 rounded-2xl w-full hover:text-black hover:border-indigo-500/50 hover:font-bold cursor-pointer"
          >
            <img src={xLogo} className="w-16 h-16 object-contain" alt="X" />
            <div className="flex flex-col text-left">
              <h2 className="text-2xl font-bold">X</h2>
              <span className="text-indigo-400 mt-1">@JorusDev</span>
            </div>
          </motion.a>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/3 z-10">
        <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-5 w-full max-w-md mx-auto">
          
          <input type="hidden" name="access_key" value="0c7cc4cb-011b-4f1e-a6ff-0e6aced6086d" />
          
          <h2 className="text-3xl font-bold text-white mb-2 text-center lg:text-left">Send a Message</h2>
          
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            className="w-full bg-slate-900/40 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500 transition-colors" 
          />
          
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            className="w-full bg-slate-900/40 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500 transition-colors" 
          />
          
          <textarea 
            name="message" 
            placeholder="What's your message?" 
            rows="5" 
            required 
            className="w-full bg-slate-900/40 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
          ></textarea>
          
          <button 
            type="submit" 
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl p-4 transition-colors cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="flex flex-col w-full lg:w-1/3 pt-4 items-center text-center lg:text-right lg:items-end">
        <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">PRICES & AVAILABILITY</h2>
        <p className="mt-4 md:mt-6 text-lg text-slate-400 max-w-xs">
          Done a lot of coding in Luau, Roblox, etc.
        </p>
      </div>
      
    </div>
  );
}