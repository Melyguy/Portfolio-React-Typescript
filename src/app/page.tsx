"use client"

import React, { useEffect } from "react";
import Lenis from "lenis";
import { GridLayout } from "@/Components/gridlayout";
import Introduction from "./components/Introduction";
import ThreeBoxesComponent from "./components/3boxesComponent";
import ProjectShowcase from "./components/ProjectShowcase";
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
        <Introduction />

        <ThreeBoxesComponent />
        <ProjectShowcase />
      <div className="flex flex-col justify-center items-center md:h-[100vh] md:flex md:flex-col md:justify-center md:items-center">
      <GridLayout />

      </div>
    </main>
  );
}
