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
    const textDesc = "Unity is a program for designing and programming games, 3d models and renders. Here is some of my work in this program."
  return (
    <main className="text-blue-950 w-full h-screen">
      <h1 className=" flex justify-center items-center text-[10vw] font-bold md:h-[10vh] md:flex md:justify-center md:items-center md:text-[8vw] md:font-bold mt-32 ">{mainText}</h1>
      <p className="h-[10vh] flex justify-center p-20items-center text-[5vw] font-bold md:flex md:justify-center md:pr-80 md:pl-80 md:items-center md:text-[2vw] md:font-bold">{textDesc} </p>
    


    </main>
  );
}
