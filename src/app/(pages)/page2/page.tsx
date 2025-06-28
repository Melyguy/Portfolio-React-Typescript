"use client"

import React, { useEffect} from "react";
import Lenis from "lenis";
import { Card } from "@/Components/Card";
import Brainrender from "./Assets/brainrender.png"
import Spear from "./Assets/Invertedspearofheaven.png"
import DarkMoon from "./Assets/darkmoonrender.png"
import FuFuga from "./Assets/fuga.png"
import Musashi from "./Assets/musashi.png"
import Shrine from "./Assets/shrine2.png"
import crystalarm from "./Assets/crystalarm.png"
import eren from "./Assets/eren titan rendercrystal.png"
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
    <main className="text-blue-600 mt-64 h-full w-full ">
      <div className=" h-screen w-full  flex items-center justify-center">
        <div className="bg-neutral-300 w-full h-full rounded-xl p-5 m-4 ">
        <div className="bg-neutral-200 w-full h-full rounded-xl p-5 grid grid-cols-4 grid-rows-6 gap-8">
          <Card imagesrc = {Brainrender} />
          <Card imagesrc = {Spear} />
          <Card imagesrc = {DarkMoon} />
          <Card imagesrc = {FuFuga} />
          <Card imagesrc = {Musashi} />
          <Card imagesrc = {Shrine} />
          <Card imagesrc = {crystalarm} />
          <Card imagesrc = {eren} />
        </div>
        </div>
      </div>
    </main>
  );
}
