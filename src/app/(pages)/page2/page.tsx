"use client"

import React, { useEffect} from "react";
import FadeIn from "@/Components/fadein";
import Lenis from "lenis";

import RenderWidget from "@/Components/renderwidget";
import renderbrain from "./Assets/brainrender.png"
import renderSpear from "./Assets/Invertedspearofheaven.png"
import renderMusashi from "./Assets/musashi.png"
import darkmoonRender from "./Assets/darkmoonrender.png"
import shrineRender from "./Assets/shrine2.png"
import FugaRender from "./Assets/fuga.png"
import Nighsky from "./Assets/nightsky2.png"
import daytime from "./Assets/(n) 1.png"
import cloud from "./Assets/cloudtop.png"
import cloudb from "./Assets/clouddown.png"
import Image from "next/image";



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
const mainText = "Blender"
    const textDesc = "Blender is a program for designing 3d models and renders. I make all of my models and renders here. I take alot of inspiration from media I watch. Here is some of my work in this program."
  return (
    <main className="text-red-300 w-screen relative">
      <div className="relative min-h-screen">
        <Image 
          src={Nighsky} 
          alt="background" 
          fill
          className="object-cover z-[-1]"
          quality={100}
          priority
        />
        
        <h1 className="relative h-[45vh] flex justify-center items-center text-9xl font-bold md:h-[45vh] md:flex md:justify-center md:items-center md:text-9xl md:font-bold">{mainText}</h1>
        <p className="h-[10vh] flex justify-center pr-20 pl-20 items-center text-[5vw] font-bold md:h-[20vh] md:flex md:justify-center md:pr-80 md:pl-80 md:items-center md:text-[2vw] md:font-bold">{textDesc}</p>
        <div className="width-full p-[10vw] rounded-[3vw] grid grid-cols-2 gap-10">
        <FadeIn delay={0}>
          <RenderWidget src={renderbrain}></RenderWidget>
        </FadeIn>
        <FadeIn delay={0}>
          <RenderWidget src={renderSpear}></RenderWidget>
        </FadeIn>
        <FadeIn delay={0}>
          <RenderWidget src={renderMusashi}></RenderWidget>
        </FadeIn>
        <FadeIn delay={0}>
          <RenderWidget src={darkmoonRender}></RenderWidget>
        </FadeIn>
        <FadeIn delay={0}>
          <RenderWidget src={shrineRender}></RenderWidget>
        </FadeIn>
        <FadeIn delay={0}>
          <RenderWidget src={FugaRender}></RenderWidget>
        </FadeIn>
      </div>
      <Image src={cloud} alt="" className="w-screen" />
      </div>
      <div className="relative min-h-screen">
        <Image 
          src={daytime} 
          alt="background" 
          fill
          className="object-cover z-[-1]"
          quality={100}
          priority
        />
      <Image src={cloudb} alt="" className="w-screen h-20" />
      </div>

    </main>
  );
}
