import { TbBrandBlender, TbBrandUnity, TbBrandNextjs, TbBrandReact, TbBrandTypescript,  TbBrandTailwind, TbBrandThreejs, TbBrandFramer, TbMusic } from "react-icons/tb";
import { PiFileCSharpDuotone } from "react-icons/pi";
import { RiAngularjsLine } from "react-icons/ri";
import { AiOutlineDotNet } from "react-icons/ai";


export function GridLayout() {
    return (
        <div className="bg-neutral-200 min-h-[600px] w-[70vw] rounded-2xl p-1 mt-16 mx-auto">
        <div className="bg-neutral-300 h-full w-full rounded-2xl p-4">
          <div className="grid grid-cols-4 grid-rows-3 gap-4 h-full w-full">
            {/* Large card */}
            <div className="col-span-3 row-span-2 bg-neutral-100 rounded-xl p-4 hover:scale-[102%] transition-all min-h-[300px]"></div>
            {/* Regular cards */}
            <div className="col-span-1 row-span-3 bg-neutral-100 rounded-xl p-4">
              <div className="grid grid-cols-2 gap-1 p-1">
                <div className="bg-neutral-300 text-neutral-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <TbBrandNextjs className="text-base" />
                    Next.js
                </div>
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
                    <TbBrandBlender className="text-base" />
                    Blender
                </div>
                <div className="bg-neutral-300 text-neutral-950 rounded-2xl py-1 px-2 text-xs font-medium text-center flex items-center justify-center gap-1">
                    <PiFileCSharpDuotone className="text-base" />
                    C#
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
              </div>
            </div>
            <div className="col-span-3 row-span-2 bg-neutral-100 rounded-xl p-4 hover:scale-[102%] transition-all min-h-[200px]">
            </div>
          </div>
        </div>
        </div>  
    );
}