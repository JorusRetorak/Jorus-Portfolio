import { motion } from 'framer-motion';
import { useState } from 'react';
import discordLogo from '../assets/discord.png';
import devforumLogo from '../assets/devforum.png'
import xLogo from '../assets/tw.webp'

const icons = {
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2" />
    </svg>
  ),
  tag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12l-8 8-9-9V4h7l10 8z" />
      <circle cx="7.5" cy="7.5" r="1.25" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 3v6c0 4.5-3.4 7.7-8 9-4.6-1.3-8-4.5-8-9V6l8-3z" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 12l5-4 4 3 3-3 5 4M7 15l3 3M14 15l3 3" />
    </svg>
  ),
};

const CONTACT_METHODS = [
  {
    href: 'https://discord.com/users/344941451689328640',
    logo: discordLogo,
    name: 'Discord',
    handle: '_jorusretorak',
    badge: 'Preferred',
  },
  {
    href: 'https://devforum.roblox.com/u/jorusretorak/summary',
    logo: devforumLogo,
    name: 'Roblox Devforum',
    handle: 'JorusRetorak',
    badge: 'Active',
  },
  {
    href: 'https://x.com/JorusDev',
    logo: xLogo,
    name: 'X (for contact only)',
    handle: '@JorusDev',
    badge: 'Reply via DM',
  },
];

const AVAILABILITY = [
  { icon: 'globe', label: 'Status', value: 'Available', valueClass: 'text-emerald-400', note: 'Open to new projects and collaborations.' },
  { icon: 'clock', label: 'Average Response', value: '< 24 hours', note: 'Usually much faster on Discord.' },
  { icon: 'bolt', label: 'Timezone', value: 'CST', note: '(UTC-6)' },
];

const INFO_STRIP = [
  { icon: 'clock', title: 'Response Time', body: 'Form messages may take up to 72 hours. Discord messages usually under 24 hours.' },
  { icon: 'handshake', title: 'Pricing', body: 'Prices are negotiable based on project scope, complexity, and timeline. No percentage.' },
  { icon: 'shield', title: 'Payment Policy', body: 'Proof of payment is required before work begins.' },
  { icon: 'eye', title: 'Privacy', body: 'Your information and project details will always remain confidential.' },
];

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [messageLength, setMessageLength] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus('success');
        e.target.reset();
        setMessageLength(0);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="w-full px-6 md:px-24 pt-10 md:pt-16 pb-20 flex flex-col gap-14"
    >
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="w-6 h-px bg-amber-400" />
          <h2 className="text-sm tracking-[0.2em] text-amber-400 font-bold uppercase">Let's build something incredible</h2>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">CONTACT</h1>
        <p className="mt-3 text-slate-400 text-lg max-w-lg">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Contact methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="border border-slate-800 rounded-2xl bg-slate-950/40 p-6 flex flex-col gap-4"
        >
          <h3 className="text-xs tracking-[0.2em] text-amber-400 font-bold uppercase">Contact Methods</h3>

          {CONTACT_METHODS.map((c) => (
            <motion.a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="flex items-center gap-4 p-4 border border-slate-800 rounded-xl hover:border-amber-400/50 transition-colors"
            >
              <img src={c.logo} className="w-11 h-11 object-contain shrink-0" alt={c.name} />
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-white truncate">{c.name}</h4>
                  <span className="text-[10px] uppercase tracking-wide text-amber-400 border border-amber-400/30 rounded-md px-1.5 py-0.5 shrink-0">
                    {c.badge}
                  </span>
                </div>
                <span className="text-sm text-slate-400 mt-0.5">{c.handle}</span>
              </div>
            </motion.a>
          ))}

          <div className="border-t border-slate-800 pt-4 text-sm text-slate-500">
            Discord is the fastest way to get a response.
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-slate-800 rounded-2xl bg-slate-950/40 p-6"
        >
          <h3 className="text-xs tracking-[0.2em] text-amber-400 font-bold uppercase mb-5">Send a Message</h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input type="hidden" name="access_key" value="0c7cc4cb-011b-4f1e-a6ff-0e6aced6086d" />

            <div>
              <label className="text-xs uppercase tracking-wide text-slate-500 mb-1.5 block">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full bg-slate-900/40 border border-slate-700 rounded-xl p-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wide text-slate-500 mb-1.5 block">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full bg-slate-900/40 border border-slate-700 rounded-xl p-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            {/* <div>
              <label className="text-xs uppercase tracking-wide text-slate-500 mb-1.5 block">Subject <span className="text-slate-600 normal-case">(optional)</span></label>
              <input
                type="text"
                name="subject"
                placeholder="Project / Collaboration / Other"
                className="w-full bg-slate-900/40 border border-slate-700 rounded-xl p-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div> */}

            <div>
              <label className="text-xs uppercase tracking-wide text-slate-500 mb-1.5 block">Your Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                maxLength={1000}
                onChange={(e) => setMessageLength(e.target.value.length)}
                className="w-full bg-slate-900/40 border border-slate-700 rounded-xl p-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400 transition-colors resize-none"
              ></textarea>
              <div className="text-right text-xs text-slate-600 mt-1">{messageLength} / 1000</div>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-amber-400 hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold rounded-xl p-4 transition-colors cursor-pointer"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-center text-sm">Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center text-sm">Something went wrong. Please try again or reach out on Discord.</p>
            )}
          </form>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-slate-800 rounded-2xl bg-slate-950/40 p-6 flex flex-col gap-5"
        >
          <h3 className="text-xs tracking-[0.2em] text-amber-400 font-bold uppercase">Availability</h3>

          {AVAILABILITY.map((a) => (
            <div key={a.label} className="flex gap-3">
              <span className="text-amber-400 shrink-0 mt-0.5">{icons[a.icon]}</span>
              <div>
                <div className="text-[10px] uppercase tracking-wide text-slate-500">{a.label}</div>
                <div className={`font-bold ${a.valueClass || 'text-white'}`}>{a.value}</div>
                <p className="text-sm text-slate-500 mt-0.5">{a.note}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="border border-slate-800 rounded-2xl bg-slate-950/40 p-6"
      >
        <h3 className="text-xs tracking-[0.2em] text-amber-400 font-bold uppercase mb-6">Important Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INFO_STRIP.map((info) => (
            <div key={info.title}>
              <span className="text-amber-400">{icons[info.icon]}</span>
              <h4 className="font-bold text-white mt-3">{info.title}</h4>
              <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">{info.body}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}