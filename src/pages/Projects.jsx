import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import ProjectsHero from '../components/ProjectsHero';
import FeaturedProject from '../components/FeaturedProject';
import ProjectTimeline from '../components/ProjectTimeline';
import ProjectGallery from '../components/ProjectGallery';

import mineriteImg1 from '../assets/mi1.png';
import mineriteImg2 from '../assets/mi2.png';
import mineriteImg3 from '../assets/mi3.png';

import mineriteVid1 from '../assets/mineritevideo1.mp4';
import mineriteVid2 from '../assets/mineritev1.mp4';
import mineriteVid3 from '../assets/mineritev2.mp4';
import mineriteVid4 from '../assets/mineritev3.mp4';
import mineriteVid5 from '../assets/mineritev4.mp4';
import nextgenVid1 from '../assets/nextgenvideo1.mp4';
import nextgenVid2 from '../assets/nextgenvideo2.mp4';
import nextgenVid3 from '../assets/nextgenvideo3.mp4';
import lonewolfVid1 from '../assets/v1.mp4';
import lonewolfVid2 from '../assets/v2.mp4';
import vid3 from '../assets/v3.mp4';
import vid4 from '../assets/mv1.mp4';
import vid5 from '../assets/plane1.mp4';
import mineriteVid6 from '../assets/mv2.mp4';

import dl1 from '../assets/dl1.jpeg';
import dl2 from '../assets/dl2.jpeg';
import dl3 from '../assets/dl3.jpeg';
import ui1 from '../assets/ui1.jpeg';
import ui2 from '../assets/ui2.png';
import ui3 from '../assets/ui3.jpeg';
import ui4 from '../assets/ui4.jpeg';
import ui5 from '../assets/ui5.mp4';
import ui6 from '../assets/ui6.jpg';
import ui7 from '../assets/ui7.jpg';
import ui8 from '../assets/ui8.jpg';
import ui9 from '../assets/ui9.jpg';
import ui10 from '../assets/ui10.jpg';
import ui11 from '../assets/ui11.jpg';
import ui12 from '../assets/ui12.jpg';
import ui13 from '../assets/ui13.jpg';
import ui14 from '../assets/ui14.jpg';
import ui15 from '../assets/ui15.jpg';
import ui16 from '../assets/uinew1.png';
import script1 from '../assets/script1.mp4';
import ui17 from '../assets/uinew2.png';
import ui18 from '../assets/uinew3.png';
import ui19 from '../assets/uinew4.png';
import buildgal1 from '../assets/buildgal1.jpeg';
import buildgal2 from '../assets/buildgal2.jpeg';
import buildgal3 from '../assets/buildgal3.jpeg';
import buildgal4 from '../assets/buildgal4.jpeg';
import buildgal5 from '../assets/buildgal5.jpeg';
import buildgal6 from '../assets/buildgal6.png';
import buildgal7 from '../assets/buildgal7.png';
import buildgal8 from '../assets/buildgal8.png';
import buildgal9 from '../assets/buildgal9.png';
import buildgal10 from '../assets/buildgal10.png';
import buildgal11 from '../assets/buildgal11.png';
import buildgal12 from '../assets/buildgal12.png';
import gridVid from '../assets/gridVid.mp4';
import new1 from '../assets/new1.png';
import new2 from '../assets/new2.png';
import new3 from '../assets/new3.png';
import new4 from '../assets/new4.png';
import new5 from '../assets/new5.mp4';
import new6 from '../assets/new6.mp4';
import new7 from '../assets/new7.png';
import new8 from '../assets/new8.png';

import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';

const FEATURED_PROJECTS = [
  {
    index: '01',
    title: 'Minerite',
    year: '2024 — Present',
    role: 'Lead Programmer',
    description:
      'A voxel-based mining simulator with procedural caves, biomes, custom enchantments, relics, potions, buried structures, and a full feature-rich UI.',
    tags: ['LuaU', 'Procedural Generation', 'UI/UX', 'Optimization', 'Data Systems', 'Networking'],
    link: 'https://www.roblox.com/games/139040116168528/Minerite#!/game-instances',
    cover: { type: 'image', src: mineriteImg1 },
    media: [
      { type: 'video', src: mineriteVid2, poster: mineriteImg1 },
      { type: 'video', src: mineriteVid1, poster: mineriteImg2 },
      { type: 'image', src: mineriteImg1 },
      { type: 'image', src: mineriteImg2 },
      { type: 'image', src: mineriteImg3 },
    ],
    stats: [
      { icon: 'cube', label: 'Systems', value: '20+' },
      { icon: 'clock', label: 'Dev Time', value: '3+ Months' },
      { icon: 'eye', label: 'Total Visits', value: '4K+' },
    ],
  },
  {
    index: '02',
    title: 'NextGen Tennis',
    year: '2024',
    role: 'Lead Programmer',
    description:
      'An extensively featured tennis game using programmed projectile motion — singles, doubles, multiple sets, and varying game formats all coded in.',
    tags: ['Game Systems', 'UI/UX', 'Projectile Motion'],
    link: 'https://www.roblox.com/games/86250988287261/NextGen-Tennis',
    cover: { type: 'video', src: nextgenVid1 },
    media: [
      { type: 'video', src: nextgenVid1 },
      { type: 'video', src: nextgenVid2 },
      { type: 'video', src: nextgenVid3 },
    ],
    stats: [
      { icon: 'cube', label: 'Systems', value: '25+' },
      { icon: 'clock', label: 'Dev Time', value: '6+ Months' },
       { icon: 'eye', label: 'Total Visits', value: '55K+' },
    ],
  },
  {
    index: '03',
    title: "Tony's Mansion",
    year: '2023',
    role: 'Builder',
    description:
      'A large mansion build showcase. Most of the structure was built by me; models and furniture are not mine.',
    tags: ['Building', 'Environment Design'],
    cover: { type: 'image', src: dl1 },
    media: [
      { type: 'image', src: dl1 },
      { type: 'image', src: dl2 },
      { type: 'image', src: dl3 },
      { type: 'image', src: new4 },
    ],
    stats: [
      { icon: 'cube', label: 'Rooms Built', value: '15+' },
      { icon: 'clock', label: 'Build Time', value: '5 Days' },
    ],
  },
];

export default function Projects() {
  const [activeFeatured, setActiveFeatured] = useState(0);

  const galleryMedia = useMemo(
    () => [
      // Gameplay (Minerite & NextGen)
      { type: 'image', src: mineriteImg1, category: 'Gameplay' }, // mi1
      { type: 'image', src: mineriteImg2, category: 'Gameplay' }, // mi2
      { type: 'image', src: mineriteImg3, category: 'Gameplay' }, // mi3
      { type: 'video', src: mineriteVid1, category: 'Gameplay', note: 'Only did UI Programming' },
      { type: 'video', src: mineriteVid2, category: 'Gameplay' }, // mineritev1
      { type: 'video', src: mineriteVid3, category: 'Gameplay', note: 'Only did UI Programming' }, // mineritev2
      { type: 'video', src: mineriteVid4, category: 'Gameplay' }, // mineritev3
      { type: 'video', src: mineriteVid5, category: 'Gameplay', note: 'Only did UI Programming' }, // mineritev4
      { type: 'video', src: nextgenVid1, category: 'Gameplay' },
      { type: 'video', src: nextgenVid2, category: 'Gameplay' },
      { type: 'video', src: nextgenVid3, category: 'Gameplay', note: 'Only did UI Programming' },

      // Scripts
      { type: 'video', src: vid4, category: 'Extra Scripts' }, // mv1
      { type: 'video', src: mineriteVid6, category: 'Extra Scripts' }, // mv2
      { type: 'video', src: new5, category: 'Extra Scripts' },
      { type: 'video', src: gridVid, category: 'Extra Scripts' },
      { type: 'video', src: new6, category: 'Extra Scripts' },
      { type: 'video', src: vid5, category: 'Extra Scripts', note: 'Custom flight system' }, // plane1
      { type: 'video', src: lonewolfVid1, category: 'Extra Scripts' }, // v1
      { type: 'video', src: lonewolfVid2, category: 'Extra Scripts' }, // v2
      { type: 'video', src: vid3, category: 'Extra Scripts' }, // v3
      { type: 'video', src: script1, category: 'Extra Scripts' },

      // UI/UX
      { type: 'image', src: ui1, category: 'UI/UX' },
      { type: 'image', src: ui2, category: 'UI/UX' },
      { type: 'image', src: ui3, category: 'UI/UX' },
      { type: 'image', src: ui4, category: 'UI/UX' },
      { type: 'video', src: ui5, category: 'UI/UX' },
      { type: 'image', src: ui6, category: 'UI/UX' },
      { type: 'image', src: ui7, category: 'UI/UX' },
      { type: 'image', src: ui8, category: 'UI/UX' },
      { type: 'image', src: ui9, category: 'UI/UX' },
      { type: 'image', src: ui10, category: 'UI/UX' },
      { type: 'image', src: ui11, category: 'UI/UX' },
      { type: 'image', src: ui12, category: 'UI/UX' },
      { type: 'image', src: ui13, category: 'UI/UX' },
      { type: 'image', src: ui14, category: 'UI/UX' },
      { type: 'image', src: ui15, category: 'UI/UX' },
      { type: 'image', src: ui16, category: 'UI/UX' },
      { type: 'image', src: ui17, category: 'UI/UX' },
      { type: 'image', src: ui18, category: 'UI/UX' },
      { type: 'image', src: ui19, category: 'UI/UX' },
      { type: 'image', src: new2, category: 'UI/UX' },
      { type: 'image', src: new4, category: 'UI/UX' },
      { type: 'image', src: new7, category: 'UI/UX' },
      { type: 'image', src: new8, category: 'UI/UX' },

      // Environments
      { type: 'image', src: buildgal1, category: 'Environments' },
      { type: 'image', src: buildgal2, category: 'Environments' },
      { type: 'image', src: buildgal3, category: 'Environments' },
      { type: 'image', src: buildgal4, category: 'Environments' },
      { type: 'image', src: buildgal5, category: 'Environments' },
      { type: 'image', src: buildgal6, category: 'Environments' },
      { type: 'image', src: buildgal7, category: 'Environments' },
      { type: 'image', src: buildgal8, category: 'Environments' },
      { type: 'image', src: buildgal9, category: 'Environments' },
      { type: 'image', src: buildgal10, category: 'Environments' },
      { type: 'image', src: buildgal11, category: 'Environments' },
      { type: 'image', src: buildgal12, category: 'Environments' },
      { type: 'image', src: dl1, category: 'Environments' },
      { type: 'image', src: dl2, category: 'Environments' },
      { type: 'image', src: dl3, category: 'Environments' },
      { type: 'image', src: new3, category: 'Environments' },

      // Logos
      { type: 'image', src: logo1, category: 'Logos' },
      { type: 'image', src: logo2, category: 'Logos' },
      { type: 'image', src: logo3, category: 'Logos' },
      { type: 'image', src: logo4, category: 'Logos' },
      { type: 'image', src: logo5, category: 'Logos' },
      { type: 'image', src: new1, category: 'Logos' },
    ],
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="w-full pb-24"
    >
      <ProjectsHero />

      <FeaturedProject project={FEATURED_PROJECTS[activeFeatured]} />

      <ProjectTimeline
        items={FEATURED_PROJECTS.map((p) => ({
          index: p.index,
          title: p.title,
          year: p.year,
          cover: p.cover,
        }))}
        activeIndex={activeFeatured}
        onSelect={setActiveFeatured}
      />

      <ProjectGallery items={galleryMedia} />

      <div className="px-6 md:px-24 mt-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 border border-amber-400/30 rounded-2xl bg-amber-400/5">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Interested in hiring me?</h3>
            <p className="text-slate-400 mt-1">Message me!</p>
          </div>
          <a
            href="/contact"
            className="shrink-0 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded-full transition-colors"
          >
            Let's Talk →
          </a>
        </div>
      </div>
    </motion.div>
  );
}