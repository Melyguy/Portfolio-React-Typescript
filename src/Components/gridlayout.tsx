import { TbBrandBlender, TbBrandUnity, TbBrandNextjs, TbBrandReact, TbBrandTypescript,  TbBrandTailwind, TbBrandThreejs, TbBrandFramer, TbMusic } from "react-icons/tb";
import { PiFileCSharpDuotone } from "react-icons/pi";
import { RiAngularjsLine } from "react-icons/ri";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaGithub, FaGitAlt } from "react-icons/fa";
import { FaProjectDiagram  } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsStars } from "react-icons/bs";

export function GridLayout() {
    return (
        <div className=" bg-neutral-200 w-[95vw] h-[100vh] p-2 rounded-2xl flex flex-col justify-center items-center mt-16">
        <div className="bg-neutral-300 h-full w-full rounded-2xl p-4">
          <div className="grid grid-cols-4 grid-rows-5 gap-4 h-full w-full">
            {/* Large card */}
            
            <div className="col-span-3 row-span-2 bg-neutral-100 rounded-xl p-4">
                <h1 className="text-4xl text-Blue-950 font-bold">Projects</h1>
               
            </div>
            {/* Regular cards */}

            <div className="col-span-1 row-span-5 bg-neutral-100 rounded-xl p-4">
            <h1 className="font-bold text-blue-700">Technology I use</h1>
              <div className="grid grid-cols-1 gap-2 p-2">
                <div className="bg-neutral-300 text-blue-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <TbBrandNextjs className="text-base" />
                    Next.js
                </div>
                {/* Apply the same changes to all other tech stack cards */}
                <div className="bg-neutral-300 text-blue-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <TbBrandReact className="text-base" />
                    React
                </div>
                <div className="bg-neutral-300 text-blue-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <TbBrandTypescript className="text-base" />
                    TypeScript
                </div>
                <div className="bg-neutral-300 text-blue-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <TbBrandTailwind className="text-base" />
                    Tailwind
                </div>
                <div className="bg-neutral-300 text-blue-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <TbBrandThreejs className="text-base" />
                    Three.js
                </div>
                <div className="bg-neutral-300 text-blue-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
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
            <div className="col-span-3 row-span-1 bg-neutral-100 rounded-xl p-4 ">
                <div className="grid grid-cols-3 grid-rows-1 gap-2">
                    <div className="col-span-1 row-span-1 bg-neutral-300 rounded-3xl flex flex-col justify-center items-center ">
                    <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">∞+</h1>
                    <div className="text-blue-950 bg-neutral-200 p-1 rounded-3xl w-full flex flex-row justify-center items-center"><FaProjectDiagram /> <h1 className="p-1">Projects</h1></div>
                </div>
                <div className="col-span-1 row-span-1 bg-neutral-300 rounded-3xl flex flex-col justify-center items-center ">
                <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">00</h1>
                <div className="text-blue-950 bg-neutral-200 p-1 rounded-3xl w-full flex flex-row justify-center items-center"><AiOutlineFundProjectionScreen />  <h1 className="p-1">Happy Clients</h1></div>
                </div>
                <div className="col-span-1 row-span-1 bg-neutral-300 rounded-3xl flex flex-col justify-center items-center ">
                <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">06</h1>
                <div className="text-blue-950 bg-neutral-200 p-1 rounded-3xl w-full flex flex-row justify-center items-center"><BsStars className="" />  <h1 className="p-1">Years Experience</h1></div>
                </div>

                </div>
            </div>
            
          </div>
        </div>
        </div>  
    );

}