import Image from "next/image"
import React from "react"
import { StaticImageData } from "next/image";

interface ProjectProps{
    src: StaticImageData;
}
export default function RenderWidget({src}: ProjectProps){
    return(
        <div className="w-full rounded-[3vw] overflow-hidden">
            <Image src={src} alt="" className="w-full h-full object-cover" ></Image>
        </div>
    )
}