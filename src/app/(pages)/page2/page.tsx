"use client"

import React, { useEffect} from "react";
import Link from 'next/link';
import FadeIn from "@/Components/fadein";
import Lenis from "lenis";
import Image from 'next/image';
import homeimage from "../../../app/home.png";

import RenderWidget from "@/Components/renderwidget";
import renderbrain from "./Assets/brainrender.png"
import renderSpear from "./Assets/Invertedspearofheaven.png"
import renderMusashi from "./Assets/musashi.png"
import darkmoonRender from "./Assets/darkmoonrender.png"
import shrineRender from "./Assets/shrine2.png"
import FugaRender from "./Assets/fuga.png"


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
    <main className="text-white">
      <header className="fixed top-0 w-screen bg-black">
      <div className="flex gap-5 pt-5 md:flex-row ">
      <Link href='Historypage' className="justify-center items-center text-[2vw] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-[1vw] md:font-bold">History</Link>
      <Link href='socialspage' className="justify-center items-center text-[2vw] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-[1vw] md:font-bold">Socials</Link>
      <Link href='futureprojects' className="justify-center items-center text-[2vw] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-[1vw] md:font-bold">Future projects</Link>
      <Link href='/'>
        <Image 
          src={homeimage} 
          alt="Home"
          className="md:w-[2vw] md:h-[2vw]"
        />
      </Link>
      </div>
      </header>
      <h1 className=" h-[45vh] flex justify-center items-center text-[15vw] font-bold md:h-[45vh] md:flex md:justify-center md:items-center md:text-[15vw] md:font-bold ">{mainText}</h1>
      <p className="h-[10vh] flex justify-center pr-20 pl-20 items-center text-[5vw] font-bold md:h-[20vh] md:flex md:justify-center md:pr-80 md:pl-80 md:items-center md:text-[2vw] md:font-bold">{textDesc} </p>
      <div className="width-full p-[10vw] rounded-[3vw] flex flex-col gap-10">
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
      <footer>
        
      <h1 className="h-[50vh] flex justify-center items-center text-[10vw] pt-[50vh] font-bold">Want to see more?</h1>
      <div className="flex gap-5 md:flex-row flex-col w-full justify-center">
     
        <button onClick={() => window.location.href = 'page3'} className=" justify-center items-center text-[5vw] pt-[15vh] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-[2vw] md:pt-[20vh] md:font-bold">
        Games</button>
        <button className=" flex justify-center items-center text-[5vw] pt-[15vh] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-[2vw] md:pt-[20vh] md:font-bold">Websites and diverse programs</button>
        </div>
      </footer>
      
      
      

      
      
      
    


    </main>
  );
}
