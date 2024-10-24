"use client"

import React from "react";
import Link from 'next/link';
import Slider from "@/Components/slider";
//import Image from "next/image";

export default function Home() {
const mainText = "Games"
    const textDesc = "Unity is a program for designing and programming games, 3d models and renders. Here is some of my work in this program."
  return (
    <main className="text-white">
      <div className="flex gap-5 md:flex-row absolute top-5 right-5">
      <Link href='Historypage' className="justify-center items-center text-[2vw] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-[1vw] md:font-bold">History</Link> 
      <Link href='futureprojects' className="justify-center items-center text-[2vw] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-[1vw] md:font-bold">Socials</Link>
      <button className=" flex justify-center items-center text-[2vw  font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-[1vw] md:font-bold">Future projects</button>
      </div>
      <h1 className=" h-[45vh] flex justify-center items-center text-[15vw] font-bold md:h-[45vh] md:flex md:justify-center md:items-center md:text-[15vw] md:font-bold ">{mainText}</h1>
      <p className="h-[10vh] flex justify-center p-20items-center text-[5vw] font-bold md:h-[20vh] md:flex md:justify-center md:pr-80 md:pl-80 md:items-center md:text-[2vw] md:font-bold">{textDesc} </p>
      
      <h1 className="h-[50vh] flex justify-center items-center text-[10vw] pt-[50vh] font-bold">City Case</h1>
      <p className="flex justify-center items-center  pt-[10vh] font-bold">playcitycase.itch.io/city-case</p>
      
      <h3 className="h-[50vh] flex justify-center items-center text-[2vw] p-[10vw] font-bold"> Made in a group of 4 of me and four of my friends. City Case is a building game similar to games like HayDay with a fun twist of opening cases for new buildings similar to something like CSGO.</h3>
      <div className="p-1">
      <Slider />
      </div>

      <footer>
        
      </footer>
      
      
      

      
      
      
    


    </main>
  );
}
