"use client"

import React from "react";
import Link from 'next/link';
import homeimage from "../app/home.png";
import Image from 'next/image';

export default function Home() {
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
      <p className="h-[10vh] flex justify-center pr-20 pl-20 items-center text-[5vw] font-bold md:h-[20vh] md:flex md:justify-center md:pr-80 md:pl-80 md:items-center md:text-[1vw] md:font-bold">Hi, my name is </p>
      <h1 className=" flex justify-center items-center text-[10vw] font-bold md:h-[10vh] md:flex md:justify-center md:items-center md:text-[8vw] md:font-bold ">Odin</h1>
      <p className="h-[10vh] flex justify-center pr-20 pl-20 items-center text-[5vw] font-bold md:h-[20vh] md:flex md:justify-center md:pr-80 md:pl-80 md:items-center md:text-[2vw] md:font-bold">Im a</p>

      
      <h1 className="h-[50vh] flex justify-center items-center text-[5vw] pt-[50vh] font-bold">Projects</h1>
      <div className="w-screen flex justify-center">
      <button onClick={() => window.location.href = 'page2'} className=" justify-center items-center text-[5vw] pt-[15vh] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-[2vw] md:pt-[10vh] md:font-bold">
        3D models and renders</button>
        <button onClick={() => window.location.href = 'page3'} className=" justify-center items-center text-[5vw] pt-[15vh] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-[2vw] md:pt-[10vh] md:font-bold">
        Games</button>
      <button className=" flex justify-center items-center text-[5vw] pt-[15vh] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-[2vw] md:pt-[10vh] md:font-bold">Websites and diverse programs</button>
      </div>

      
      
      
    


    </main>
  );
}
