"use client"

import React from "react";


export default function Home() {  
const mainText = "Projects"
    const textDesc = "Here are some of my future projects"
  return (
    <main className="text-black">
      <h1 className=" h-[45vh] flex justify-center items-center text-[15vw] font-bold md:h-[45vh] md:flex md:justify-center md:items-center md:text-[15vw] md:font-bold ">{mainText}</h1>
      <p className="h-[10vh] flex justify-center pr-20 pl-20 items-center text-[5vw] font-bold md:h-[20vh] md:flex md:justify-center md:pr-80 md:pl-80 md:items-center md:text-[2vw] md:font-bold">{textDesc} </p>
      <footer>
        
      </footer>
      
      
      

      
      
      
    


    </main>
  );
}
