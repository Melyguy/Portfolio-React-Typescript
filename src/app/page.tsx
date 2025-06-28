"use client"

import React, { useEffect } from "react";
import Lenis from "lenis";
import { GridLayout } from "@/Components/gridlayout";
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
    <main className="text-blue-400 w-full min-h-screen mt-32" >
      <div className="flex flex-col justify-center items-center md:h-[100vh] md:flex md:flex-col md:justify-center md:items-center">
      <p className="h-[10vh] flex justify-center pr-20 pl-20 items-center text-[5vw] font-bold md:h-[10vh] md:flex md:justify-center md:pr-80 md:pl-80 md:items-center md:text-[1vw] md:font-bold">Hi, my name is </p>
      <h1 className=" flex justify-center items-center text-[10vw] font-bold md:h-[10vh] md:flex md:justify-center md:items-center md:text-[8vw] md:font-bold ">Odin</h1>
      <TextScroll />
      <GridLayout />

      </div>
    </main>
  );
}
