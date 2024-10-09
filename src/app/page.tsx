import React from "react";

export default function Home() {
  const mainText = "Portfolio"
  const textDesc = "Hi, my name is odin and im a developer. I make games, 3d models, websites and animations. Here is some of my work"
  return (
    <main>
      <head>
        <title>3XM Portfolio</title>
      </head>
      <h1 className=" h-[45vh] flex justify-center items-center text-[15vw] font-bold md:h-[45vh] md:flex md:justify-center md:items-center md:text-[15vw] md:font-bold ">{mainText}</h1>
      <p className="h-[10vh] flex justify-center pr-20 pl-20 items-center text-[5vw] font-bold md:h-[10vh] md:flex md:justify-center md:pr-80 md:pl-80 md:items-center md:text-[2vw] md:font-bold">{textDesc} </p>


      <h1 className=" h-[100vh] flex justify-center items-center text-[10vw] font-bold">Projects</h1>
      

    </main>
  );
}
