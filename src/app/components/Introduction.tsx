

import { GoProjectSymlink } from "react-icons/go";import { FaNpm } from "react-icons/fa";
import Link from "next/link";
import { FaGamepad } from "react-icons/fa";

export default function Introduction() {
    return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden">
          <div className="h-full w-full flex justify-center items-center ">     
            <div className="absolute h-full w-full  bg-gradient-to-b from-blue-400 via-orange-400 to-red-400 animate-gradient-xy p-3">
                     
            <div className="h-full w-full blur-sm rounded-2xl p-5 bg-neutral-300  flex top-5 justify-center items-center">
                <div className="h-full w-full rounded-2xl bg-neutral-100  flex top-5 justify-center items-center">
              
            </div>
            </div>
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-5xl font-extrabold mb-4 text-blue-400/60 backdrop:blur-[1px] ">Welcome to My Portfolio</h1>
              <p className="text-lg mb-8">Explore my work and projects</p>
              <div className="flex justify-center gap-4">
                  <div className="w-80 h-60 bg-neutral-300/20 rounded-3xl border hidden md:flex border-white/20 backdrop-blur-md shadow-md flex-col items-center justify-center">

                  </div>
                  <div className="w-96  h-auto bg-neutral-300/20 rounded-3xl border border-white/20 backdrop-blur-md shadow-md flex flex-col">
                    <div className=" w-72 h-12 flex justify-center p-2 ">
                      <Link href="/about"  className=" transition-all duration-300 overflow-hidden w-11 h-11 bg-neutral-400/20 border p-2 hover:w-12 hover:h-12 border-white/20 rounded-xl mr-10 backdrop-blur-md shadow-md flex justify-center items-center">
                      <GoProjectSymlink className="w-full h-full" /></Link>
                    <h1 className="mt-1 font-bold text-2xl text-blue-400">Top Projects</h1>
                    </div>
                    <div className="w-full h-full flex justify-center items-center">
                          <Link href="https://github.com/Melyguy/navigation-template-nextJS" target="/"  className="group m-3 w-24 h-20 hover:h-28 hover:w-44  rounded-2xl bg-blue-300/20 border border-white/20 backdrop-blur-md shadow-md flex items-center justify-center transition-all duration-300 overflow-hidden ">
                              <div className=" group-hover:left-0 group-hover:ml-2 border border-white/20 w-14 h-14 rounded-2xl p-2  flex items-center justify-center bg-gradient-to-bl from-blue-400/80  via-orange-400/80  to-red-400/80 backdrop:blur-md shadow-md">
                              <FaNpm className="text-5xl text-white " />
                              </div>
                              <h1 className="text-xs hidden group-hover:flex font-semibold"> Next.JS NPM package</h1>
                          </Link>
                          <div className="w-36 h-24 hover:h-40 hover:w-44 transition-all duration-300 overflow-hidden  bg-blue-300/20 rounded-2xl border border-white/20 backdrop-blur-md shadow-md flex items-center justify-center">

                          </div>
                          <Link href="https://steamcommunity.com/sharedfiles/filedetails/?id=3541508092" target="/"  className="group m-3 w-24 h-20 hover:h-28 hover:w-44  rounded-2xl bg-blue-300/20 border border-white/20 backdrop-blur-md shadow-md flex items-center justify-center transition-all duration-300 overflow-hidden ">
                              <div className="group-hover:left-6 group-hover:ml-2  border border-white/20 w-14 h-14 rounded-2xl p-2  flex items-center justify-center bg-gradient-to-bl from-blue-400/80  via-orange-400/80  to-red-400/80 backdrop:blur-md shadow-md">
                              <FaGamepad className="text-5xl text-white" />
                              </div>
                               <h1 className="text-xs hidden group-hover:flex font-semibold"> Technologer Mod</h1>
                          </Link>
                    </div>
                  </div>
                  <div className=" w-80 h-60 hidden md:flex bg-neutral-300/20 rounded-3xl border border-white/20 backdrop-blur-md shadow-md flex-col items-center justify-center">

                  </div>
              </div>

            </div>
          </div>
        </div>
    </div>

    );
}