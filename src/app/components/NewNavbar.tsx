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
        <div className= "w-3/4 h-20 mt-5 fixed bg-neutral-500/20 border border-white rounded-b-xl backdrop-blur-md left-1/2 transform -translate-x-1/2 top-0 z-50 transition-all duration-500 rounded-xl" style={{top: isVisible ? '0' : '-100px'}}
       >
            <div className="w-full flex">
            
            </div>
        </div>

    );
}