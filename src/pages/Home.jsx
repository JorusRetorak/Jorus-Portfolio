import { motion } from 'framer-motion';
import Codeblock from '../components/Codeblock';
import Slideshow from '../components/Slideshow';
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
import mineriteVid1 from '../assets/mineritevideo1.mp4';
import nextgenVid1 from '../assets/nextgenvideo1.mp4';

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

    const media = [
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
    ];

    const media2 = [
        { type: 'video', src: mineriteVid1 },
        { type: 'video', src: nextgenVid1 },
    ];

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
        <>
            <div className="flex flex-col items-center px-6 md:px-24 mt-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-10 text-white relative group w-fit cursor-default text-center">
                    Programmer, UI Designer.
                    <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-white to-white transition-all duration-300 group-hover:w-full rounded-full"></span>
                </h1>
                <p className="text-base md:text-lg text-slate-300 max-w-2xl text-center px-4">
                    I am a Luau programmer and game UI Designer looking to make your projects great! I am determined, collaborative, and communicative! 
                    I require clients to be communicative and respectful, so that goals and deadlines can be achieved in an appropriate manner.
                    I have ~6 years of experience as a Roblox developer and have worked on numerous projects.
                    I specialize in data systems and UI programming.
                </p>
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
                            I write clean, highly optimized, and modular Luau code for the Roblox engine. From complex math and data systems to secure server-client communication, I build robust systems designed to scale with your player base. I don't specialize in physics systems, but I can program simple to moderate physics systems.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileHover={{ y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", bounce: 0.4, duration: 1 }}
                    className="flex flex-col md:flex-row gap-8 md:gap-10 w-full xl:w-[72%] ml-auto p-4 md:p-8 items-start bg-transparent rounded-2xl"
                >
                    <div className="flex flex-col pt-2 md:text-right px-0 md:px-4 flex-1 text-center md:text-right order-last md:order-first">
                        <h2 className="text-3xl md:text-4xl font-bold text-white md:whitespace-nowrap">Premium UI Design</h2>
                        <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-400">
                            I craft sleek, modern, and intuitive game interfaces using Affinity Designer. I handle the complete package: from drafting concepts to importing them flawlessly into Studio and ensuring dynamic, responsive scaling so your game looks perfect on every device.
                        </p>
                    </div>

                    <Slideshow media={media} className="order-first md:order-last" />
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

            <div className="relative w-full py-24 md:py-40 flex items-center justify-center overflow-hidden">

                <div
                    className="absolute inset-0 z-0 opacity-95 pointer-events-none select-none"
                    style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}
                >
                    <motion.pre
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
                        className="font-mono text-xs sm:text-sm md:text-base text-indigo-300 w-full h-full p-4 md:p-8 whitespace-pre-wrap overflow-hidden leading-relaxed"
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
                        className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-slate-200 hover:scale-105 transition-all duration-300 pointer-events-auto shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        Let's Work Together
                    </a>
                </motion.div>
            </div>
        </>
    );
}