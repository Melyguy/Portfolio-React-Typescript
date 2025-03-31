"use client"

import Link from "next/link";


export default function Navbar() {

    return (
        <>
            <div 
                className="scale-[0.56] md:scale-100 fixed z-30 top-1 md:top-10 left-[50vw] translate-x-[-50%] flex gap-2 backdrop-blur-[30px]  p-3 
                rounded-xl"
            >
                <Link 
                    href="/" 
                    className="
                    relative
                    bg-pink-600 
                    text-white 
                    font-black 
                    text-lg
                    rounded-xl
                    px-8 
                    py-3 
                    uppercase 
                    tracking-[0.2em]
                    transform 
                    skew-x-[-10deg]
                    before:content-[''] 
                    before:absolute 
                    before:inset-0 
                    before:bg-black 
                    before:rounded-xl
                    before:translate-x-1 
                    before:translate-y-1 
                    before:-z-10
                    hover:translate-x-[-2px]
                    hover:translate-y-[-2px]
                    hover:before:translate-x-2
                    hover:before:translate-y-2
                    active:translate-x-[1px]
                    active:translate-y-[1px]
                    transition-all
                    duration-150
                    shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]
                    hover:shadow-[inset_0_0_20px_rgba(255,0,0,0.5)]
                "
                >
                    Home
                </Link>
                <Link 
                    href="/page2" 
                    className="
                    relative
                    bg-pink-600 
                    text-white 
                    font-black 
                    text-lg
                    rounded-xl
                    px-8 
                    py-3 
                    uppercase 
                    tracking-[0.2em]
                    transform 
                    skew-x-[-10deg]
                    before:content-[''] 
                    before:absolute 
                    before:inset-0 
                    before:bg-black 
                    before:rounded-xl
                    before:translate-x-1 
                    before:translate-y-1 
                    before:-z-10
                    hover:translate-x-[-2px]
                    hover:translate-y-[-2px]
                    hover:before:translate-x-2
                    hover:before:translate-y-2
                    active:translate-x-[1px]
                    active:translate-y-[1px]
                    transition-all
                    duration-150
                    shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]
                    hover:shadow-[inset_0_0_20px_rgba(255,0,0,0.5)]
                "
                >
                    Blender
                </Link>
                <Link 
                    href="/games" 
                    className="
                    relative
                    bg-pink-600 
                    text-white 
                    font-black 
                    text-lg
                    rounded-xl
                    px-8 
                    py-3 
                    uppercase 
                    tracking-[0.2em]
                    transform 
                    skew-x-[-10deg]
                    before:content-[''] 
                    before:absolute 
                    before:inset-0 
                    before:bg-black 
                    before:rounded-xl
                    before:translate-x-1 
                    before:translate-y-1 
                    before:-z-10
                    hover:translate-x-[-2px]
                    hover:translate-y-[-2px]
                    hover:before:translate-x-2
                    hover:before:translate-y-2
                    active:translate-x-[1px]
                    active:translate-y-[1px]
                    transition-all
                    duration-150
                    shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]
                    hover:shadow-[inset_0_0_20px_rgba(255,0,0,0.5)]
                "
                    >
                        Games
                </Link>
                <Link 
                    href="/music" 
                    className="
                    relative
                    bg-pink-600 
                    text-white 
                    font-black 
                    text-lg
                    rounded-xl
                    px-8 
                    py-3 
                    uppercase 
                    tracking-[0.2em]
                    transform 
                    skew-x-[-10deg]
                    before:content-[''] 
                    before:absolute 
                    before:inset-0 
                    before:bg-black 
                    before:rounded-xl
                    before:translate-x-1 
                    before:translate-y-1 
                    before:-z-10
                    hover:translate-x-[-2px]
                    hover:translate-y-[-2px]
                    hover:before:translate-x-2
                    hover:before:translate-y-2
                    active:translate-x-[1px]
                    active:translate-y-[1px]
                    transition-all
                    duration-150
                    shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]
                    hover:shadow-[inset_0_0_20px_rgba(255,0,0,0.5)]
                "
                    >
                        Music
                </Link>
            </div>
        </>
    );
};