"use client"

import React, { useEffect } from "react";
import Lenis from "lenis";
import { GridLayout } from "@/Components/gridlayout";
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
    <main className="text-blue-400 w-full min-h-screen" >
    <div className="w-full h-screen flex items-center justify-center">
          <div className="h-full w-full flex justify-center items-center ">     
            <div className="absolute h-full w-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 animate-gradient-xy">
                     
            <div className="h-full w-full rounded-2xl blur-lg bg-neutral-200  flex top-5 justify-center items-center">
              
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
              <p className="text-lg mb-8">Explore my work and projects</p>
              <a href="/about" className="px-6 py-3 rounded-full font-semibold bg-neutral-400/20 hover:bg-neutral-400/30 backdrop:blur-[1px] border border-blue-400/20 ">VIEW PROJECTS</a>
            </div>
          </div>
        </div>
    </div>

  
      <div className="flex flex-col justify-center items-center md:h-[100vh] md:flex md:flex-col md:justify-center md:items-center">
      <GridLayout />

      </div>
    </main>
  );
}
