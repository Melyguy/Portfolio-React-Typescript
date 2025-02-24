"use client"

import Link from "next/link";


export default function Navbar() {

    return (
        <>
            <div 
                className="scale-[0.56] md:scale-100 fixed z-30 top-1 md:top-10 left-[50vw] translate-x-[-50%] flex gap-2 backdrop-blur-[30px]  p-3 
                rounded-full overflow-hidden bg-[#634545] border-4 border-red-300 font-bold"
            >
                <Link 
                    href="/" 
                    className="text-purple-50 p-3 px-4 border-2 border-transparent 
                    hover:bg-[#ff949432] hover:border-red-300 rounded-full duration-200"
                >
                    Home
                </Link>
                <Link 
                    href="/page2" 
                    className="text-purple-50 p-3 px-4 border-2 border-transparent
                    hover:bg-[#ff949432] hover:border-red-300 rounded-full duration-200"
                >
                    Blender
                </Link>
                <Link 
                    href="/games" 
                    className="text-purple-50 p-3 px-4 border-2 border-transparent 
                    hover:bg-[#ff949432] hover:border-red-300 rounded-full duration-200"
                    >
                        Games
                </Link>
                <Link 
                    href="/music" 
                    className="text-purple-50 p-3 px-4 border-2 border-transparent 
                    hover:bg-[#ff949432] hover:border-red-300 rounded-full duration-200"
                    >
                        Music
                </Link>
            </div>
        </>
    );
};