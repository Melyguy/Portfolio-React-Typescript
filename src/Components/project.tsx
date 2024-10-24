"use client"

import React from "react";
import Image from "next/image";

import { StaticImageData } from "next/image";

interface ProjectProps {
  imageSrc: StaticImageData; 
  title: string;
  content: string;
}

export default function Project({ imageSrc, title, content, }: ProjectProps) {

    return (
        <>
            <div className="relative flex flex-col justify-between h-full">
                <Image src={imageSrc} alt="" className="w-full object-cover rounded-[3vw] bg-thirdy cursor-pointer" />
                <div className="flex justify-between items-center relative z-10 rounded-lg py-5"> 
                    <div className="flex flex-col gap-3 w-full h-[200px]">
                        <div className="text-secondary text-[6vw] md:text-[2vw]">{title}</div>
                        <div className="flex gap-1">
                        </div>
                        <div className="w-full flex justify-between">
                            <div className="text-thirdy text-[3vw] md:text-[1vw] w-4/5">{content}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}