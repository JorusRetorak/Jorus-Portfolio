import { useState } from 'react';

export default function Slideshow({ media, className="" }) {
  const [index, setIndex] = useState(0);

  return (
    <div className={`relative group aspect-video bg-slate-800 rounded-xl overflow-hidden border border-slate-700 flex-shrink-0 ${className}`}>
      {media[index].type === 'image' ? (
        <img src={media[index].src} className="w-full h-full object-contain" />
      ) : (
        <video src={media[index].src} autoPlay loop muted className="w-full h-full object-contain" />
      )}

      <button 
        onClick={() => setIndex((i) => (i - 1 + media.length) % media.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        onClick={() => setIndex((i) => (i + 1) % media.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}