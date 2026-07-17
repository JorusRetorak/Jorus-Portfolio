import { motion } from 'framer-motion';
import Slideshow from '../components/Slideshow'
import mineriteImg1 from '../assets/mi1.png'
import mineriteImg2 from '../assets/mi2.png'
import mineriteImg3 from '../assets/mi3.png'

import mineriteVid1 from '../assets/mineritevideo1.mp4'
import mineriteVid2 from '../assets/mineritev1.mp4'
import mineriteVid3 from '../assets/mineritev2.mp4'
import mineriteVid4 from '../assets/mineritev3.mp4'
import mineriteVid5 from '../assets/mineritev4.mp4'
import nextgenVid1 from '../assets/nextgenvideo1.mp4'
import nextgenVid2 from '../assets/nextgenvideo2.mp4'
import nextgenVid3 from '../assets/nextgenvideo3.mp4'

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
import script1 from '../assets/script1.mp4';

const projects = [
  {
    id: 1,
    title: "Minerite - Lead Programmer",
    description: "A complex, fully finished, voxel-based mining simulator. Caves are generated via perlin noise, multiple cave biomes are scripted as well. Enchants, relics, potions, detailed caves with decorations such as mushrooms, buried structures, and a fully functional UI are featured.",
    link: "https://www.roblox.com/games/139040116168528/Minerite#!/game-instances",
    media: [
      { type: 'video', src: mineriteVid1 },
      { type: 'video', src: mineriteVid2 },
      { type: 'video', src: mineriteVid3 },
      { type: 'video', src: mineriteVid4 },
      { type: 'video', src: mineriteVid5 },
      { type: 'image', src: mineriteImg1 },
      { type: 'image', src: mineriteImg2 },
      { type: 'image', src: mineriteImg3 },
    ]
  },
  {
    id: 2,
    title: "Nextgen Tennis - Lead Programmer",
    description: "An extensively featured tennis game using progammed projectile motion. All aspects of the sport are coded in, including singles, doubles, multiple sets, varying game sets, etc.",
    link: "https://www.roblox.com/games/86250988287261/NextGen-Tennis",
    media: [
      { type: 'video', src: nextgenVid1 },
      { type: 'video', src: nextgenVid2 },
      { type: 'video', src: nextgenVid3 }
    ]
  },
];

const galleryMedia = [
  { type: 'image', src: ui1 },
  { type: 'image', src: ui2 },
  { type: 'image', src: ui6 },
  { type: 'image', src: ui3 },
  { type: 'image', src: ui9 },
  { type: 'image', src: ui10 },
  { type: 'image', src: ui4 },
  { type: 'image', src: ui8 },
  { type: 'image', src: ui7 },
  { type: 'image', src: ui11 },
  { type: 'image', src: ui12 },
  { type: 'image', src: ui13 },
  { type: 'image', src: ui14 },
  { type: 'image', src: ui15 },
  { type: 'video', src: ui5 },
  { type: 'video', src: script1 },
  { type: 'video', src: mineriteVid1 },
  { type: 'video', src: nextgenVid1 },
];

export default function Projects() {
  return (
    <div className="w-full px-6 md:px-24 pb-24">
      <h1 className="text-5xl font-bold mb-12 md:mb-20 text-white relative group w-fit cursor-default mx-auto md:mx-0 text-center md:text-left mt-8 md:mt-0">
        Featured Work
        <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-white to-white transition-all duration-300 group-hover:w-full rounded-full"></span>
      </h1>

      <div className="flex flex-col gap-24 md:gap-32">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 100 }}
            whileHover={{ y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 1 }}
            className={`flex flex-col md:flex-row gap-8 md:gap-10 w-full xl:w-[85%] md:p-8 ${i % 2 === 0 ? 'mr-auto justify-start' : 'ml-auto justify-end'
              } items-start`}
          >
            {i % 2 === 0 ? (
              <>
                <Slideshow media={project.media} className="relative group  bg-slate-800 rounded-x1" />
                <div className="flex flex-col pt-2 px-0 md:px-4 w-full md:w-1/2 text-center md:text-left items-center md:items-start">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h2>
                  <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-400">{project.description}</p>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 text-indigo-400 hover:text-indigo-300 font-semibold underline w-fit transition-colors"
                    >
                      View Game ↗
                    </a>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col pt-2 w-full md:w-1/2 items-center md:items-end text-center md:text-right order-last md:order-first px-0 md:px-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h2>
                  <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-400">{project.description}</p>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 text-indigo-400 hover:text-indigo-300 font-semibold underline w-fit transition-colors"
                    >
                      View Game ↗
                    </a>
                  )}
                </div>
                <Slideshow media={project.media} className="relative group   bg-slate-800 rounded-xl norder-first md:order-last" />
              </>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-20">
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-12">
          <h2 className="text-4xl font-bold text-white relative group w-fit cursor-default mb-6">
            Gallery/ Concepts
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-white to-white transition-all duration-300 group-hover:w-full rounded-full"></span>
          </h2>
          <p className="text-slate-400 max-w-3xl text-lg">
            A collection of my random UI designs, script showcases, etc.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryMedia.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
              className="relative aspect-video bg-transparent rounded-xl overflow-hidden"
            >
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt={`Gallery item ${index + 1}`} 
                  className="w-full h-full object-contain"
                />
              ) : (
                <video 
                  src={item.src} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-contain"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}