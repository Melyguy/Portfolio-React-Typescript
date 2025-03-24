"use client"

import React, { useEffect } from "react";
import Lenis from "lenis";
import TextScroll from "@/Components/textscroll";
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
    <main className="text-fuchsia-600" >
<div className="absolute inset-0 back bg-[radial-gradient(circle,_#f9a8d433_0%,_transparent_70%)]" />
      <div className="h-[100vh] flex flex-col justify-center items-center md:h-[100vh] md:flex md:flex-col md:justify-center md:items-center">
      <p className="h-[10vh] flex justify-center pr-20 pl-20 items-center text-[5vw] font-bold md:h-[10vh] md:flex md:justify-center md:pr-80 md:pl-80 md:items-center md:text-[1vw] md:font-bold">Hi, my name is </p>
      <h1 className=" flex justify-center items-center text-[10vw] font-bold md:h-[10vh] md:flex md:justify-center md:items-center md:text-[8vw] md:font-bold ">Odin</h1>
      <TextScroll />
      </div>
    </main>
  );
}
