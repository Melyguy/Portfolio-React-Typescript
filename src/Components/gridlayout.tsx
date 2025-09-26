import { FaProjectDiagram  } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import { Card } from "./Card";
import { SmallCardDisplay } from "./SmallcardDisplay";
import Musashi from "./assets/musashi.png"
import Shrine from "./assets/shrine2.png"
import crystalarm from "./assets/crystalarm.png"
import eren from "./assets/eren titan rendercrystal.png"
import { TechnologyUsed } from "./TechnologyUsed";
export function GridLayout() {
    return (
        <div className=" bg-neutral-200 w-[95vw] h-full p-2 rounded-2xl flex flex-col justify-center items-center mt-16">
        <div className="bg-neutral-300 h-full w-full rounded-2xl p-4">
          <div className="grid grid-cols-4 grid-rows-5 gap-4 h-full w-full">
            {/* Large card */}
            
            <div className="col-span-3 row-span-2 bg-neutral-100/40 border border-white backdrop-blur-lg rounded-xl p-4 grid grid-cols-1 grid-rows-2 gap-8 md:grid-cols-4 md:grid-rows-2">
            <Card imagesrc = {Musashi} />
          <SmallCardDisplay imagesrc = {Shrine}  />
          <SmallCardDisplay imagesrc = {crystalarm}  />
          <SmallCardDisplay imagesrc = {eren} />
            </div>
            {/* Regular cards */}

            <TechnologyUsed></TechnologyUsed>
            <div className="col-span-3 row-span-1 bg-neutral-100 rounded-xl p-4 ">
                <div className="grid grid-cols-3 grid-rows-1 gap-2">
                    <div className="col-span-1 row-span-1 bg-neutral-300 rounded-3xl flex flex-col justify-center items-center ">
                    <h1 className=" text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">∞+</h1>
                    <div className="text-blue-950 bg-neutral-200 p-1 rounded-3xl w-full flex flex-row justify-center items-center"><FaProjectDiagram className="hidden md:flex" /> <h1 className="p-1 text-xs md:text-lg">Projects</h1></div>
                </div>
                <div className="col-span-1 row-span-1 bg-neutral-300 rounded-3xl flex flex-col justify-center items-center ">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">00</h1>
                <div className="text-blue-950 bg-neutral-200 p-1 rounded-3xl w-full flex flex-row justify-center items-center"><AiOutlineFundProjectionScreen className="hidden md:flex" />  <h1 className="p-1 text-xs md:text-lg">Happy Clients</h1></div>
                </div>
                <div className="col-span-1 row-span-1 bg-neutral-300 rounded-3xl flex flex-col justify-center items-center ">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">06</h1>
                <div className="text-blue-950 bg-neutral-200 p-1 rounded-3xl w-full flex flex-row justify-center items-center"><BsStars className="hidden md:flex" />  <h1 className="p-1 text-xs md:text-lg">Years Experience</h1></div>
                </div>

                </div>
            </div>
                        <div className="col-span-2 row-span-2 bg-neutral-100 rounded-xl p-4">
                <h1 className="text-4xl text-Blue-950 font-bold"></h1>
               
            </div>
                                    <div className="col-span-1 row-span-2 bg-neutral-100 rounded-xl p-4">
                <h1 className="text-4xl text-Blue-950 font-bold"></h1>
               
            </div>

          </div>
        </div>
        </div>  
    );

}