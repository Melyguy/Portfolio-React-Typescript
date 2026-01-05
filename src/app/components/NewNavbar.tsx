"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NewNavbar(){
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {


    const controlNavbar = () => {
         if (window.scrollY > 100) {
            setIsVisible(true);
        }else {
            setIsVisible(false);
        }
    }

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
}, [])




    return(
        <nav className={`w-[98vw] h-20 ml-2 mr-2 flex justify-center top-0 shadow pl-10 md:pl-36 fixed z-30 bg-neutral-300/40 border border-white rounded-b-xl backdrop-blur-md  ${isVisible ? 'translate-y-0 transition-transform duration-300 ease-in-out' : '-translate-y-full transition-transform duration-300 ease-in-out'}`} 
       >
            <div className="w-full h-full flex items-center">
                <Link href="/"  className="flex justify-center font-semibold text-md text-blue-950 hover:underline hover:underline-offset-8 hover:text-neutral-950 md:text-xl">3XM</Link>
            <div className="h-12 bg-white/40 w-2 ml-10 rounded-full md:flex hidden"></div>
            <div className="h-full w-1/2 grid grid-cols-4 grid-rows-1 items-center">
                <div className="col-span-1 row-span-1 w-full ml-9">
                    <Link href="/projects" className=" text-sm font-bold hidden md:flex text-neutral-800 hover:underline hover:underline-offset-8 md:text-lg">Projects</Link>
                </div>
                <div className="col-span-1 row-span-1 w-full hidden md:flex ml-9">
                    <Link href="/projects" className=" text-sm font-bold text-neutral-800 hover:underline hover:underline-offset-8 md:text-lg">Art</Link>
                </div>
                <div className="col-span-1 row-span-1 w-full hidden md:flex ml-9">
                    <Link href="/projects" className=" text-sm font-bold text-neutral-800 hover:underline hover:underline-offset-8 md:text-lg">Music
                    
                    </Link>
                </div>
                <div className="col-span-1 row-span-1 w-full hidden md:flex ml-9">
                    <Link href="/projects" className=" text-sm font-bold text-neutral-800 hover:underline hover:underline-offset-8 md:text-lg">Side projects</Link>
                </div>
            </div>
            </div>
        </nav>

    );
}