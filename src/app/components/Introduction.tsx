

import { GoProjectSymlink } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
    return (
    <div className="w-full h-screen flex items-center justify-center">
          <div className="h-full w-full flex justify-center items-center ">     
            <div className="absolute h-full w-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 animate-gradient-xy">
                     
            <div className="h-full w-full rounded-2xl blur-lg bg-neutral-200  flex top-5 justify-center items-center">

            </div>
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-5xl font-extrabold mb-4 text-blue-400/40 backdrop:blur-[1px] ">Welcome to My Portfolio</h1>
              <p className="text-lg mb-8">Explore my work and projects</p>
              <div className="flex justify-center gap-4">
                  <div className="w-80 h-60 bg-neutral-300/20 rounded-3xl border border-white/20 backdrop-blur-md shadow-md flex flex-col items-center justify-center">

                  </div>
                  <div className="w-96 h-auto bg-neutral-300/20 rounded-3xl border border-white/20 backdrop-blur-md shadow-md flex flex-col">
                    <div className=" w-72 h-12 flex justify-center p-2">
                      <div className="w-11 h-11 bg-neutral-400/20 border p-2 hover:w-12 hover:h-12 border-white/20 rounded-xl mr-10 backdrop-blur-md shadow-md flex justify-center items-center">
                      <GoProjectSymlink className="w-full h-full" /></div>
                    <h1 className="mt-1 font-bold text-2xl text-blue-400">Top Projects</h1>
                    </div>
                    <div className="w-full h-full flex flex-row justify-center items-center gap-5">
                          <Link href="https://github.com/Melyguy/navigation-template-nextJS" target="/"  className="w-24 h-20 bg-blue-300/20 rounded-2xl border border-white/20 backdrop-blur-md shadow-md flex flex-col items-center justify-center">
                              <h1 className="text-xs"> Next.JS NPM package</h1>
                          </Link>
                          <div className="w-36 h-24 bg-blue-300/20 rounded-2xl border border-white/20 backdrop-blur-md shadow-md flex flex-col items-center justify-center">

                          </div>
                          <Link href="https://codegridtextglow.vercel.app/" target="/"  className="w-24 h-20 bg-blue-300/20 rounded-2xl border border-white/20 backdrop-blur-md shadow-md flex flex-col items-center justify-center">
                              <h1 className="text-xs"> Codegrid textglow tutorial</h1>
                          </Link>
                    </div>
                  </div>
                  <div className="w-80 h-60 bg-neutral-300/20 rounded-3xl border border-white/20 backdrop-blur-md shadow-md flex flex-col items-center justify-center">

                  </div>
              </div>

            </div>
          </div>
        </div>
    </div>

    );
}