"use client";

import Link from "next/link";
import { FaLinkedin, FaSpotify, FaGithub, FaSoundcloud } from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";

export function Footer() {
    return(
        <footer className="bg-[#171717] border-t border-fuchsia-600 backdrop-blur-3xl  overflow-hidden">
                <div className="mt-3 flex flex-row items-center justify-center" >
                <div className=" max-w-10xl flex gap-10 flex-row items-center justify-between">
                    <div className=" flex flex-col">
                <p className="text-2xl p-5 text-fuchsia-200 font-bold"> 3XM</p>
                <p className="text-fuchsia-300 font-semibold p-3">
                Creating digital lifestyles with creative technological processes.
                </p>
                    </div>

                <div>
                <p className="text-xl p-5 text-fuchsia-200 font-semibold"> Socials</p>
                <div className="grid grid-cols-3 gap-4">
                <Link className=" p-2 text-fuchsia-300 text-2xl hover:text-fuchsia-400" href="https://github.com/Melyguy?tab=repositories">
                    <FaGithub />
                </Link>
                <Link className="p-2 text-fuchsia-300 text-2xl hover:text-fuchsia-400" href="https://www.linkedin.com/in/odin-johan-laursen-leite-13b7282a5/">
                    <FaLinkedin />
                </Link>
                <Link className="p-2 text-fuchsia-300 text-2xl hover:text-fuchsia-400" href="https://zkeler.itch.io/">
                    <SiItchdotio />
                </Link>
                <Link className="p-2 text-fuchsia-300 text-2xl hover:text-fuchsia-400" href="https://open.spotify.com/user/nido.johan">
                    <FaSpotify />
                </Link>
                <Link className="p-2 text-fuchsia-300 text-2xl hover:text-fuchsia-400" href="https://soundcloud.com/mellyshmelly">
                    <FaSoundcloud />
                </Link>

                </div>
                </div>
<iframe 
  className="w-[30vw] h-[30vh] rounded-xl"
  src="https://open.spotify.com/embed/album/389zGArsMlwuPorS4Cw7IX?utm_source=generator&theme=0"
  frameBorder="0"
  allowFullScreen
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
/>
                </div>

                <div className="flex flex-row justify-between">

               

                </div>
   

                </div>

        </footer>
    );
}