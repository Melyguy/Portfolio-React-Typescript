"use client";

import React, {useEffect} from "react";
import Lenis from "lenis";

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
const mainText = "Games"
  return (
    <main className="text-blue-950 w-full h-full flex justify-center items-center">
      <div className="w-full h-screen flex justify-center mt-32">
      <h1 className="text-2xl font-bold flex">{mainText}</h1>


    </div>
    
    </main>
  );
}
