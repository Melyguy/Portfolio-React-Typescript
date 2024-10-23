import Image from "next/image"
import React from "react"
import { StaticImageData } from "next/image";

interface ProjectProps{
    src: StaticImageData;
}
export default function RenderWidget({src}: ProjectProps){
    return(
      <Image src={src} alt="" className="" ></Image>
        
    )
}