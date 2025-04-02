import { TbBrandBlender, TbBrandUnity, TbBrandNextjs, TbBrandReact, TbBrandTypescript,  TbBrandTailwind, TbBrandThreejs, TbBrandFramer, TbMusic } from "react-icons/tb";
import { PiFileCSharpDuotone } from "react-icons/pi";
import { RiAngularjsLine } from "react-icons/ri";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaGithub, FaGitAlt } from "react-icons/fa";


export function GridLayout() {
    return (
        <div className=" bg-neutral-200 h-[100vh] w-[70vw] rounded-2xl p-1 mt-16">
        <div className="bg-neutral-300 h-full w-full rounded-2xl p-4">
          <div className="grid grid-cols-4 grid-rows-3 gap-4 h-full w-full">
            {/* Large card */}
            <div className="col-span-3 row-span-2 bg-neutral-100 rounded-xl p-4"></div>
            {/* Regular cards */}
            <div className="col-span-1 row-span-3 bg-neutral-100 rounded-xl p-4">
            <h1 className="font-bold text-black">Technology I use</h1>
              <div className="grid grid-cols-2 gap-2 p-2">
                <div className="bg-neutral-300 text-neutral-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <TbBrandNextjs className="text-base" />
                    Next.js
                </div>
                {/* Apply the same changes to all other tech stack cards */}
                <div className="bg-neutral-300 text-neutral-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <TbBrandReact className="text-base" />
                    React
                </div>
                <div className="bg-neutral-300 text-neutral-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <TbBrandTypescript className="text-base" />
                    TypeScript
                </div>
                <div className="bg-neutral-300 text-neutral-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <TbBrandTailwind className="text-base" />
                    Tailwind
                </div>
                <div className="bg-neutral-300 text-neutral-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <TbBrandThreejs className="text-base" />
                    Three.js
                </div>
                <div className="bg-neutral-300 text-neutral-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <TbBrandFramer className="text-base" />
                    Framer
                </div>
                <div className="bg-neutral-300 text-neutral-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <TbBrandUnity className="text-base" />
                    Unity
                </div>
                <div className="bg-neutral-300 text-neutral-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <PiFileCSharpDuotone className="text-base" />
                    C#
                </div>
                <div className="bg-neutral-300 text-neutral-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <FaGithub className="text-base" />
                    GitHub
                </div>
                <div className="bg-neutral-300 text-neutral-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <FaGitAlt className="text-base" />
                    Git CLI
                </div>
                <div className="bg-neutral-300 text-neutral-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <AiOutlineDotNet className="text-base" />
                    .NET
                </div>
                <div className="bg-neutral-300 text-neutral-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <RiAngularjsLine className="text-base" />
                    Angular
                </div>
                <div className="bg-neutral-300 text-neutral-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <TbMusic className="text-base" />
                    FL studio
                </div>
                <div className="bg-neutral-300 text-neutral-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <TbBrandBlender className="text-base" />
                    Blender
                </div>
              </div>
            </div>
            <div className="col-span-3 row-span-2 bg-neutral-100 rounded-xl p-4 ">
              
            </div>
            
          </div>
        </div>
        </div>  
    );

}