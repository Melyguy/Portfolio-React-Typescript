"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import {fetchGitHubRepos} from '../../../lib/github';
import { Repo } from '../../../lib/github';

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
  const [repo, setRepo] = useState<Repo[]>([]);

  useEffect(() => {
    fetchGitHubRepos().then(setRepo);
  }, []);




    return(
        <div className= "w-3/4 h-20 mt-5 fixed bg-neutral-500/20 border border-white rounded-b-xl backdrop-blur-md left-1/2 transform -translate-x-1/2 top-0 z-50 transition-all duration-500 rounded-xl" style={{top: isVisible ? '0' : '-100px'}}
       >
        
            <div className="w-full flex justify-center items-center h-full">
                <Link href="https://github.com/Melyguy" className="w-10 h-10 rounded-full hover:w-12 hover:h-12 hover:border-black hover:border-2 transition-all duration-300 overflow-hidden border border-white backdrop-blur-md shadow-md flex justify-center items-centers">
                    <img src={repo[0]?.owner.avatar_url} alt="Logo" className="w-full h-full rounded-full"/>
                </Link>
                <div className=" h-full flex flex-row items-center pl-10 space-x-8 text-white text-lg">
                    <Link className="text-neutral-950 hover:text-neutral-100 transition-all duration-300" href="/">Home</Link>
                    <Link className="text-neutral-950 hover:text-neutral-100 transition-all duration-300" href="/projects">Projects</Link>
                    <Link className="text-neutral-950 hover:text-neutral-100 transition-all duration-300" href="/about">Study</Link>
                    <Link className="text-neutral-950 hover:text-neutral-100 transition-all duration-300" href="/about">About</Link>
                    <Link className="text-neutral-950 hover:text-neutral-100 transition-all duration-300" href="/about">Stack</Link>
                </div>

                    
            </div>
        </div>

    );
}