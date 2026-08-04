import { motion } from 'framer-motion';
import { useMemo } from 'react';
import Spotlight from '../components/Spotlight';
import TechMarquee from '../components/TechMarquee';
import StatsBar from '../components/StatsBar';
import AvailabilityBadge from '../components/AvailabilityBadge';
import Codeblock from '../components/Codeblock';
import Slideshow from '../components/Slideshow';
import SkillsGrid from '../components/SkillsGrid';
import FeaturedProjects from '../components/FeaturedProjects';
import UISection from '../components/UISection';
import CaveBackground from '../components/CaveBackground'
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
import ui17 from '../assets/uinew2.png';
import mineriteVid1 from '../assets/mineritevideo1.mp4';
import nextgenVid1 from '../assets/nextgenvideo1.mp4';

import new2 from '../assets/new2.png';
import new4 from '../assets/new4.png';
import new7 from '../assets/new7.png';
import new8 from '../assets/new8.png';
import vampireui1 from '../assets/vampireui1.png';
import vampireui2 from '../assets/vampireui2.png';

// import mineriteImg1 from '../assets/mi1.png';
import dl1 from '../assets/dl1.jpeg';

export default function Home() {

    const code = `
    local function calculateStrength(depth, optimalDepth, basePickaxeStrength, speedMultiplier, levelBonus)
        local overallFactor = 1.3
        local adjustedStrength = basePickaxeStrength + (levelBonus or 0)
        local baseStrength = adjustedStrength * speedMultiplier * overallFactor
        local maxNaturalLoss = 0.20

        if depth <= optimalDepth then
            local progression = math.max(0, depth / optimalDepth)
            return baseStrength * (1 - (progression * maxNaturalLoss))
        else
            local maxOptimalStrength = baseStrength * (1 - maxNaturalLoss)
            local blocksPast = depth - optimalDepth
            local efficiency = math.clamp(1 / (1 + (blocksPast * 0.032)), 0.08, 1.0)
            return baseStrength * efficiency
        end
    end
    `;

    const media = useMemo(() => [
        { type: 'image', src: vampireui1 },
        { type: 'image', src: vampireui2 },
        { type: 'image', src: ui1 },
        { type: 'image', src: ui2 },
        { type: 'image', src: ui6 },
        { type: 'image', src: ui3 },
        { type: 'image', src: ui9 },
        { type: 'image', src: ui10 },
        { type: 'image', src: ui4 },
        { type: 'image', src: ui17 },
        { type: 'image', src: ui8 },
        { type: 'image', src: ui7 },
        { type: 'image', src: ui11 },
        { type: 'image', src: ui12 },
        { type: 'image', src: ui13 },
        { type: 'image', src: ui14 },
        { type: 'image', src: new8 },
        { type: 'image', src: ui15 },
        { type: 'image', src: ui16 },
        { type: 'video', src: ui5 },
        { type: 'image', src: new4 },
        { type: 'image', src: new7 },
        { type: 'image', src: new2 },
    ], []);

    const media2 = useMemo(() => [
        { type: 'video', src: mineriteVid1 },
        { type: 'video', src: nextgenVid1 },
    ], []);

    const featured = useMemo(() => [
        {
            title: 'Minerite',
            kicker: 'Mining Game',
            description: 'A fully finished, voxel-based mining simulator with procedural caves, ores, enchants, and a complete UI.',
            link: 'https://www.roblox.com/games/139040116168528/Minerite#!/game-instances',
            tags: ['Lua', 'Procedural Gen', 'UI Design'],
            cover: { type: 'video', src: mineriteVid1 },
        },
        {
            title: 'NextGen Tennis',
            kicker: 'Sports Game',
            description: 'An extensively featured tennis game with programmed projectile motion, singles, doubles, and full match logic.',
            link: 'https://www.roblox.com/games/86250988287261/NextGen-Tennis',
            tags: ['Game Systems', 'UI/UX'],
            cover: { type: 'video', src: nextgenVid1 },
        },
        {
            title: "Tony's Mansion",
            kicker: 'Showcase',
            description: 'A large-scale build showcase — most of the structure built by me, with third-party models and furniture.',
            tags: ['Building', 'Environment'],
            cover: { type: 'image', src: dl1 },
        },
    ], []);

    const backgroundCode = `
function Client.UpdateBiomeScanner(self: self)
    local char = LocalPlayer.Character
    local HRP = char and char:FindFirstChild("HumanoidRootPart")
    if not HRP then
        return
    end


    local depth = (Start - HRP.Position.Y) / Offset
    local zone = ZoneConfig.GetZoneForDepth(depth)

    if #nearbyBlocks == 0 then
        currentScannedBiome = nil
        return
    end

    local biomeScores = { ["Normal Caves"] = 0 }

    for _, block in ipairs(nearbyBlocks) do
        local targetBiome = block:GetAttribute("Biome")
        if block.Size ~= Vector3.new(6, 6, 6) then
            continue
        end

        if zone and zone.ProhibitBiomeCaves then
            biomeScores["Normal Caves"] += 1
        elseif targetBiome then
            biomeScores[targetBiome] = (biomeScores[targetBiome] or 0) + 1
        else
            biomeScores["Normal Caves"] += 1
        end
    end

    local currentBiomeName = currentScannedBiome and currentScannedBiome.Name or "Normal Caves"
    local highestScore = 0
    local dominantBiomeName = "Normal Caves"

    for biomeName, score in pairs(biomeScores) do
        local finalScore = score

        if biomeName ~= "Normal Caves" then
            finalScore *= 2
        end

        if biomeName == currentBiomeName then
            finalScore *= 1.2
        end

        if finalScore > highestScore then
            highestScore = finalScore
            dominantBiomeName = biomeName
        end
    end

    local depth = (Start - HRP.Position.Y) / Offset
    local foundBiome = nil
    if not (zone and zone.ProhibitBiomeCaves) then
        for _, b in ipairs(CaveBiomes.GetBiomesForDepth(depth)) do
            if b.Name == dominantBiomeName then
                foundBiome = b
                break
            end
        end
    end

    local displayBiomeName = foundBiome and foundBiome.Name or "Normal Caves"
    local currentBiomeName = currentScannedBiome and currentScannedBiome.Name or "Normal Caves"

    if displayBiomeName ~= currentBiomeName and displayBiomeName ~= "Normal Caves" then
        local color = foundBiome.Color or ""
        self.Interop.Notification:SendHeader(\`gr~ Entered ~ {color}~ '{displayBiomeName}'! ~\`)
    end

    currentScannedBiome = foundBiome
end
`.repeat(5);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
        >
            {/* ---------------- HERO ---------------- */}
            <Spotlight className="flex flex-col lg:flex-row items-center gap-12 px-6 md:px-24 py-10 md:py-16">

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
                    <AvailabilityBadge />
                    <span className="mt-6 text-amber-400 text-xs tracking-[0.3em] font-bold uppercase">Roblox Developer</span>
                    <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 text-white leading-tight">
                        I BUILD <br />
                        <span className="text-amber-400">EXPERIENCES.</span>
                    </h1>
                    <p className="text-base md:text-lg text-slate-300 max-w-lg">
                        I create immersive Roblox games, clean UI/UX, and optimized systems that bring
                        creative ideas to life. I have ~6 years of experience as a Roblox developer, specializing
                        in data systems and UI programming.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <a
                            href="/projects"
                            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded-lg transition-colors"
                        >
                            View My Work →
                        </a>
                        <a
                            href="/contact"
                            className="px-6 py-3 border border-slate-700 hover:border-amber-400 hover:text-amber-400 text-white font-bold rounded-lg transition-colors"
                        >
                            Contact Me →
                        </a>
                    </div>

                    <StatsBar />
                </div>

                <div className="relative w-full lg:w-1/2 flex items-center justify-center pointer-events-none min-h-[400px] lg:min-h-0">
                    <CaveBackground />
                </div>
            </Spotlight>

            <TechMarquee />

            {/* ---------------- SKILLS ---------------- */}
            <SkillsGrid />

            {/* ---------------- FEATURED PROJECTS ---------------- */}
            <FeaturedProjects projects={featured} />

            {/* ---------------- UI DESIGN ---------------- */}
            <UISection media={media} />
            <div className="flex px-24 items-center gap-4">
                <span className="w-6 h-px bg-amber-400" />
                <h2 className="text-sm tracking-[0.2em] text-amber-400 font-bold uppercase">More About Me</h2>
            </div>

            <div className="flex flex-col gap-24 md:gap-32 px-6 md:px-24 py-16 md:py-24">

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileHover={{ y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", bounce: 0.4, duration: 1 }}
                    className="flex flex-col md:flex-row gap-8 md:gap-10 w-full xl:w-[75%] mr-auto p-4 md:p-8 items-start bg-transparent rounded-2xl"
                >
                    <div className="w-full md:w-fit max-w-full overflow-x-auto">
                        <Codeblock code={code} language="lua" />
                    </div>

                    <div className="flex flex-col pt-2 px-0 md:px-4 flex-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">Advanced Luau</h2>
                        <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-400">
                            I write clean, highly optimized, and modular Luau code for the Roblox engine. From complex math and data systems to secure server-client communication, I build complex systems designed to scale with your player base. Experienced with frameworks like Knit. I don't specialize in physics systems, but I can program simple to moderate physics systems.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileHover={{ y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", bounce: 0.4, duration: 1 }}
                    className="flex flex-col md:flex-row gap-8 md:gap-10 w-full xl:w-[70%] mr-auto p-4 md:p-8 items-start bg-transparent rounded-2xl"
                >
                    <Slideshow media={media2} className="" />

                    <div className="flex flex-col pt-2 px-0 md:px-4 flex-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white md:whitespace-nowrap">Complete Finished Games</h2>
                        <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-400">
                            Beyond individual systems, I'm experienced with creating a full comprehensive game environment, bringing systems together. I turn ambitious game concepts into fully playable, polished realities.
                        </p>
                    </div>
                </motion.div>

            </div>

            {/* ---------------- ABOUT ME ---------------- */}
            {/* <AboutSection /> */}

            {/* ---------------- CTA ---------------- */}

            <div className="relative w-full py-24 md:py-40 flex items-center justify-center overflow-hidden">

                <div
                    className="absolute inset-0 z-0 opacity-95 pointer-events-none select-none"
                    style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}
                >
                    <motion.pre
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
                        className="font-mono text-xs sm:text-sm md:text-base text-amber-300/80 w-full h-full p-4 md:p-8 whitespace-pre-wrap overflow-hidden leading-relaxed"
                    >
                        {backgroundCode}
                    </motion.pre>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
                    className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 py-10 max-w-3xl pointer-events-none bg-slate-950/60 backdrop-blur-md rounded-3xl border border-white/5 mx-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Systems built for you.
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                        I specialize in engineering comprehensive game systems from scratch. Whether it's managing complex UI states, handling core loops, or creating engaging player interactions, I will bring a detail oriented approach to every layer of your project.
                    </p>
                    <a
                        href="/contact"
                        className="px-8 py-4 bg-amber-400 text-black font-bold rounded-full hover:bg-amber-300 hover:scale-105 transition-all duration-300 pointer-events-auto shadow-[0_0_20px_rgba(251,191,36,0.35)]"
                    >
                        Let's Work Together
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
}