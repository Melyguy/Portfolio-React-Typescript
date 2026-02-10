"use client";

import React, {useEffect} from "react";
import Lenis from "lenis";
import { TbBrandNextjs, TbBrandReact, TbBrandTailwind, TbBrandTypescript } from "react-icons/tb";
import { PiFigmaLogoBold, PiFileCSharpDuotone } from "react-icons/pi";
import { FaAngular, FaDocker, FaPython, FaUnity } from "react-icons/fa";
import { IoLogoIonic } from "react-icons/io5";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiVisualstudio } from "react-icons/di";
import { LuMicVocal } from "react-icons/lu";

export default function Home() {
  useEffect( () => {
    window.scrollTo(0, 0);

    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="text-blue-950 w-full h-full flex justify-center items-center">
      <div className="w-full h-screen flex justify-center mt-32">
        <div className="w-full h-full justify-center flex flex-row gap-4 md:flex md:flex-row md:gap-4">
        <div className="bg-neutral-500/80 group hover:bg-neutral-300 w-1/3 h-20 hover:h-3/4 border border-white rounded-xl transition-all duration-300">
        <div className="hidden group-hover:flex bg-neutral-500/80 w-full h-20 justify-center rounded-t-xl border-b border-white transition-all duration-300">
            <h1 className="text-center mt-8 font-bold text-white group-hover:text-white flex">Languages</h1>
        </div>
                <h1 className="text-center mt-8 font-bold text-white group-hover:hidden group-hover:text-blue-950">Languages</h1>
                    <div className="w-full h-full rounded-b-xl border-t hidden group-hover:flex border-white transition-all duration-300 flex-col p-5 gap-5">
                        <div className="bg-neutral-600/80 hidden group-hover:flex w-full h-20 rounded-xl flex-row items-center border border-white transition-all duration-300">
                            <TbBrandTypescript className="text-blue-400 text-4xl m-4" />
                            <h1 className="text-white ">TypeScript</h1>
                        </div>
                        <div className="bg-neutral-600/80 hidden group-hover:flex w-full h-20 rounded-xl items-center border border-white transition-all duration-300">
                            <PiFileCSharpDuotone className="text-green-400 text-4xl m-4" />
                            <h1 className="text-white ">C-Sharp</h1>                        
                        </div>
                        <div className="bg-neutral-600/80 hidden group-hover:flex w-full h-20 rounded-xl items-center border border-white transition-all duration-300">
                            <TbBrandTailwind className="text-blue-400 text-4xl m-4" />
                            <h1 className="text-white ">Tailwind CSS</h1>                        
                        </div>
                        <div className="bg-neutral-600/80 hidden group-hover:flex w-full h-20 rounded-xl items-center border border-white transition-all duration-300">
                            <FaPython  className="text-blue-400 text-4xl m-4" />
                            <h1 className="text-white ">Python</h1>                        
                        </div>
                    </div>
        </div>

        <div className="bg-neutral-500/80 group hover:bg-neutral-300 w-1/3 h-20 hover:h-3/4 border border-white rounded-xl transition-all duration-300">
        <div className="hidden group-hover:flex bg-neutral-500/80 w-full h-20 justify-center rounded-t-xl border-b border-white transition-all duration-300">
            <h1 className="text-center mt-8 font-bold text-white group-hover:text-white flex">Frameworks</h1>
        </div>
                <h1 className="text-center mt-8 font-bold text-white group-hover:hidden group-hover:text-blue-950">Frameworks</h1>
                <div className="w-full h-full rounded-b-xl border-t hidden group-hover:flex border-white transition-all duration-300 flex-col p-5 gap-5">
                        <div className="bg-neutral-600/80 hidden group-hover:flex w-full h-20 rounded-xl flex-row items-center border border-white transition-all duration-300">
                            <TbBrandNextjs className="text-blue-400 text-4xl m-4" />
                            <h1 className="text-white ">Next.js</h1>
                        </div>
                        <div className="bg-neutral-600/80 hidden group-hover:flex w-full h-20 rounded-xl items-center border border-white transition-all duration-300">
                            <FaAngular  className="text-red-400 text-4xl m-4" />
                            <h1 className="text-white ">Angular</h1>                        
                        </div>
                        <div className="bg-neutral-600/80 hidden group-hover:flex w-full h-20 rounded-xl items-center border border-white transition-all duration-300">
                            <IoLogoIonic  className="text-blue-400 text-4xl m-4" />
                            <h1 className="text-white ">Ionic</h1>                        
                        </div>
                        <div className="bg-neutral-600/80 hidden group-hover:flex w-full h-20 rounded-xl items-center border border-white transition-all duration-300">
                            <TbBrandReact  className="text-blue-400 text-4xl m-4" />
                            <h1 className="text-white ">React</h1>                        
                        </div>
                </div>
        </div>

        <div className="bg-neutral-500/80 group hover:bg-neutral-300 w-1/3 h-20 hover:h-3/4 border border-white rounded-xl transition-all duration-300">
        <div className="hidden group-hover:flex bg-neutral-500/80 w-full h-20 justify-center rounded-t-xl border-b border-white transition-all duration-300">
            <h1 className="text-center mt-8 font-bold text-white group-hover:text-white flex">Tools</h1>
        </div>
                <h1 className="text-center mt-8 font-bold text-white group-hover:hidden group-hover:text-blue-950">Tools</h1>
                <div className="w-full h-full rounded-b-xl border-t hidden group-hover:flex border-white transition-all duration-300 flex-col p-5 gap-5">
                        <div className="bg-neutral-600/80 hidden group-hover:flex w-full h-10 rounded-xl flex-row items-center border border-white transition-all duration-300">
                            <BiLogoVisualStudio  className="text-blue-400 text-4xl m-4" />
                            <h1 className="text-white ">Visual Studio Code</h1>
                        </div>
                        <div className="bg-neutral-600/80 hidden group-hover:flex w-full h-10 rounded-xl items-center border border-white transition-all duration-300">
                            <DiVisualstudio   className="text-purple-400 text-4xl m-4" />
                            <h1 className="text-white ">Visual Studio</h1>                        
                        </div>
                        <div className="bg-neutral-600/80 hidden group-hover:flex w-full h-10 rounded-xl items-center border border-white transition-all duration-300">
                            <FaUnity  className="text-neutral-400 text-4xl m-4" />
                            <h1 className="text-white ">Unity</h1>                        
                        </div>
                        <div className="bg-neutral-600/80 hidden group-hover:flex w-full h-10 rounded-xl items-center border border-white transition-all duration-300">
                            <TbBrandTailwind className="text-blue-400 text-4xl m-4" />
                            <h1 className="text-white ">Blender</h1>                        
                        </div>
                        <div className="bg-neutral-600/80 hidden group-hover:flex w-full h-10 rounded-xl items-center border border-white transition-all duration-300">
                            <LuMicVocal     className="text-blue-400 text-4xl m-4" />
                            <h1 className="text-white ">FL.Studio</h1>                        
                        </div>
                        <div className="bg-neutral-600/80 hidden group-hover:flex w-full h-10 rounded-xl items-center border border-white transition-all duration-300">
                            <FaDocker   className="text-blue-400 text-4xl m-4" />
                            <h1 className="text-white ">Docker</h1>                        
                        </div>
                        <div className="bg-neutral-600/80 hidden group-hover:flex w-full h-10 rounded-xl items-center border border-white transition-all duration-300">
                            <PiFigmaLogoBold   className="text-blue-400 text-4xl m-4" />
                            <h1 className="text-white ">Figma</h1>                        
                        </div>
                </div>
        
        </div>

        </div>


    </div>
    
    </main>
  );
}
