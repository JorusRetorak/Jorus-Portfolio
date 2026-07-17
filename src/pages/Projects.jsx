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
  }
];

export default function Projects() {
  return (
    <div className="w-full px-6 md:px-24">
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
            className={`flex flex-col md:flex-row gap-8 md:gap-10 w-full xl:w-[85%] md:p-8 ${
              i % 2 === 0 ? 'mr-auto justify-start' : 'ml-auto justify-end'
            } items-start`}
          >
            {i % 2 === 0 ? (
              <>
                <Slideshow media={project.media} className="relative group w-full md:w-1/2 aspect-video bg-slate-800 rounded-xl overflow-hidden border border-slate-700" />
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
                <Slideshow media={project.media} className="relative group w-full md:w-1/2 aspect-video bg-slate-800 rounded-xl overflow-hidden border border-slate-700 order-first md:order-last" />
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}