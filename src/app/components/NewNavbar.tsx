"use client"

import Link from "next/link";


export default function NewNavbar(){
    return(
        <div className="w-full h-20 flex justify-center top-0 shadow pl-10 md:pl-36 fixed z-30 bg-[#ededed]">
            <div className="w-full h-full flex items-center">
                <Link href="/"  className="flex justify-center font-semibold text-md text-blue-950 hover:underline hover:underline-offset-8 hover:text-neutral-950 md:text-xl">3XM</Link>
            <div className="h-12 bg-neutral-300 w-2 ml-10 rounded-full md:flex hidden"></div>
            <div className="h-full w-1/2 grid grid-cols-4 grid-rows-1 items-center p-10">
                <Link href="/projects" className="col-span-1 row-span-1 text-lg font-extralight text-neutral-600 hover:underline">Projects</Link>
                <Link href="/about" className="col-span-2 row-span-1 text-lg font-extralight text-neutral-600 hover:underline">Games and Mods</Link>

            </div>
            </div>
        </div>

    );
}