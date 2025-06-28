"use client"

import React, { useEffect} from "react";
import Lenis from "lenis";

import cardIMG from "./Assets/card.png"
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
    <main className="text-blue-600 ">
      <div className=" min-h-screen w-full mt-32 relative">
        <div className="w-full h-full bg-blue-300">

        </div>
      </div>
    </main>
  );
}
