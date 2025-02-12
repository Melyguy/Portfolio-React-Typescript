"use client"

import React, {useEffect} from "react";
import Link from 'next/link';
import Slider from "@/Components/slider";
import Slider2 from "@/Components/slider2";
import Image from 'next/image';
import homeimage from "../../../app/home.png";
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
    <main className="text-black">
      <header className="fixed top-0 w-screen bg-{#ededed} shadow-sm">
      <div className="flex gap-5 pt-5 md:flex-row ">
      <Link href='Historypage' className="justify-center items-center text-[2vw] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-[1vw] md:font-bold">History</Link>
      <Link href='socialspage' className="justify-center items-center text-[2vw] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-[1vw] md:font-bold">Socials</Link>
      <Link href='futureprojects' className="justify-center items-center text-[2vw] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-[1vw] md:font-bold">Future projects</Link>
      <Link href='/'>
        <Image 
          src={homeimage} 
          alt="Home"
          className=" w-[2vw] h-[2vw] md:w-[2vw] md:h-[2vw]"
        />
      </Link>
      </div>
      </header>
      <h1 className=" h-[45vh] flex justify-center items-center text-[15vw] font-bold md:h-[45vh] md:flex md:justify-center md:items-center md:text-[15vw] md:font-bold ">{mainText}</h1>
      <p className="h-[10vh] flex justify-center p-20items-center text-[5vw] font-bold md:h-[20vh] md:flex md:justify-center md:pr-80 md:pl-80 md:items-center md:text-[2vw] md:font-bold">{textDesc} </p>
      
      <h1 className="h-[50vh] flex justify-center items-center text-[10vw] pt-[50vh] font-bold">City Case</h1>
      <p className="flex justify-center items-center  pt-[10vh] font-bold">playcitycase.itch.io/city-case</p>
      <div>
      <h3 className="h-[50vh]  flex justify-center items-center text-[2vw] p-[10vw] font-bold"> Made in a group of 4 of me and four of my friends. City Case is a building game similar to games like HayDay with a fun twist of opening cases for new buildings similar to something like CSGO.</h3>
      </div>
      
      
      <Slider />  

      
      
      <h1 className="h-[50vh] flex justify-center items-center text-[10vw] pt-[50vh] font-bold">Grapple remake</h1>
      
      <h3 className="h-[50vh] flex justify-center items-center text-[2vw] p-[10vw] font-bold">Grapple remake is as the name suggests a remake of an older game thats on my itch page. I worked on this remake at school spaning multiple hours. The results were a good game that i am really proud of.</h3>
      
      <Slider2 />  

      <footer>
        
      </footer>
      
      <h1 className="h-[50vh] flex justify-center items-center text-[10vw] pt-[50vh] font-bold">Want to see more?</h1>
      <div className="flex gap-5 md:flex-row flex-col w-full justify-center">
      <button onClick={() => window.location.href = 'page2'} className=" justify-center items-center text-[5vw] pt-[15vh] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-[2vw] md:pt-[20vh] md:font-bold">
        3D models and renders</button>
      <button className=" flex justify-center items-center text-[5vw] pt-[15vh] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-[2vw] md:pt-[20vh] md:font-bold">Websites and diverse programs</button>
      </div>
      
      
      

      
      
      
    


    </main>
  );
}
