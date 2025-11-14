
import { TbBrandBlender, TbBrandUnity, TbBrandNextjs, TbBrandReact, TbBrandTypescript,  TbBrandTailwind, TbBrandThreejs, TbBrandFramer, TbMusic } from "react-icons/tb";
import { PiFileCSharpDuotone } from "react-icons/pi";
import { RiAngularjsLine } from "react-icons/ri";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaGithub, FaGitAlt } from "react-icons/fa";
export function TechnologyUsed(){

    return(
        <div className="col-span-1 row-span-5 bg-slate-200/20 border border-white backdrop-blur-lg rounded-xl p-4">
                    <h1 className="font-semibold hidden text-blue-700 md:flex md:text-xl md:font-bold">Technology I use</h1>
                    <div className="grid grid-cols-1 gap-2 p-2">
                        <div className="bg-neutral-500/20 border border-white backdrop-blur-lg shadow-lg text-blue-500 rounded-2xl md:py-1 md:px-2 text-xs font-semibold text-center flex items-center justify-center gap-1">
                            <TbBrandNextjs className="text-base" />
                            <h1 className="hidden md:flex ">Next.js</h1>
                        </div>
                        {/* Apply the same changes to all other tech stack cards */}
                        <div className="bg-neutral-500/20 border border-white backdrop-blur-lg shadow-lg text-blue-500 rounded-2xl md:py-1 md:px-2 text-xs font-semibold text-center flex items-center justify-center gap-1">
                            <TbBrandReact className="text-base" />
                            <h1 className="hidden md:flex ">React</h1>
                        </div>
                        <div className="bg-neutral-500/20 border border-white backdrop-blur-lg shadow-lg text-blue-500 rounded-2xl md:py-1 md:px-2 text-xs font-semibold text-center flex items-center justify-center gap-1">
                            <TbBrandTypescript className="text-base" />
                            <h1 className="hidden md:flex ">TypeScript</h1>
                        </div>
                        <div className="bg-neutral-500/20 border border-white backdrop-blur-lg shadow-lg text-blue-500 rounded-2xl md:py-1 md:px-2 text-xs font-semibold text-center flex items-center justify-center gap-1">
                            <TbBrandTailwind className="text-base" />
                            <h1 className="hidden md:flex ">Tailwind</h1>
                        </div>
                        <div className="bg-neutral-500/20 border border-white backdrop-blur-lg shadow-lg text-blue-500 rounded-2xl md:py-1 md:px-2 text-xs font-semibold text-center flex items-center justify-center gap-1">
                            <TbBrandThreejs className="text-base" />
                            <h1 className="hidden md:flex ">Three.js</h1>
                        </div>
                        <div className="bg-neutral-500/20 border border-white backdrop-blur-lg shadow-lg text-blue-500 rounded-2xl md:py-1 md:px-2 text-xs font-semibold text-center flex items-center justify-center gap-1">
                            <TbBrandFramer className="text-base" />
                            <h1 className="hidden md:flex ">Framer</h1>
                        </div>
                        <div className="bg-neutral-500/20 border border-white backdrop-blur-lg shadow-lg text-blue-500 rounded-2xl md:py-1 md:px-2 text-xs font-semibold text-center flex items-center justify-center gap-1">
                            <TbBrandUnity className="text-base" />
                           <h1 className="hidden md:flex ">Unity</h1> 
                        </div>
                        <div className="bg-neutral-500/20 border border-white backdrop-blur-lg shadow-lg text-blue-500 rounded-2xl md:py-1 md:px-2 text-xs font-semibold text-center flex items-center justify-center gap-1">
                            <PiFileCSharpDuotone className="text-base" />
                            <h1 className="hidden md:flex ">C#</h1>
                        </div>
                        <div className="bg-neutral-500/20 border border-white backdrop-blur-lg shadow-lg text-blue-500 rounded-2xl md:py-1 md:px-2 text-xs font-semibold text-center flex items-center justify-center gap-1">
                            <FaGithub className="text-base" />
                           <h1 className="hidden md:flex "> GitHub</h1>
                        </div>
                        <div className="bg-neutral-500/20 border border-white backdrop-blur-lg shadow-lg text-blue-500 rounded-2xl md:py-1 md:px-2 text-xs font-semibold text-center flex items-center justify-center gap-1">
                            <FaGitAlt className="text-base" />
                            <h1 className="hidden md:flex ">Git CLI</h1>
                        </div>
                        <div className="bg-neutral-500/20 border border-white backdrop-blur-lg shadow-lg text-blue-500 rounded-2xl md:py-1 md:px-2 text-xs font-semibold text-center flex items-center justify-center gap-1">
                            <AiOutlineDotNet className="text-base" />
                            <h1 className="hidden md:flex ">.NET</h1>
                        </div>
                        <div className="bg-neutral-500/20 border border-white backdrop-blur-lg shadow-lg text-blue-500 rounded-2xl md:py-1 md:px-2 text-xs font-semibold text-center flex items-center justify-center gap-1">
                            <RiAngularjsLine className="text-base" />
                            <h1 className="hidden md:flex ">Angular</h1>
                        </div>
                        <div className="bg-neutral-500/20 border border-white backdrop-blur-lg shadow-lg text-blue-500 rounded-2xl md:py-1 md:px-2 text-xs font-semibold text-center flex items-center justify-center gap-1">
                            <TbMusic className="text-base" />
                            <h1 className="hidden md:flex ">FL studio</h1>
                        </div>
                        <div className="bg-neutral-500/20 border border-white backdrop-blur-lg shadow-lg text-blue-500 rounded-2xl md:py-1 md:px-2 text-xs font-semibold text-center flex items-center justify-center gap-1">
                            <TbBrandBlender className="text-base" />
                            <h1 className="hidden md:flex ">Blender</h1>
                        </div>
                    </div>
                    </div>
    );
}

