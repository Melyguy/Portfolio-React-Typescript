import Image from "next/image"
import React from "react"
import { StaticImageData } from "next/image";

interface ProjectProps{
    src: StaticImageData;
}
export default function RenderWidget({src}: ProjectProps){
    return(
        <div className="w-full aspect-square rounded-full overflow-hidden">
            <Image 
                src={src} 
                alt="" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
        </div>
    )
}