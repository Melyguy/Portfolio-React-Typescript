 "use client";
 
 import Link from "next/link";
 import { FaSpotify, FaGithub, FaSoundcloud } from "react-icons/fa";
 import { SiItchdotio } from "react-icons/si";
 
 export function Footer() {
     return(
         <footer className="bg-neutral-400/20  border border-white backdrop-blur-md rounded-lg  overflow-hidden mt-16">
                 <div className=" flex flex-row items-center justify-center" >
                 <div className=" max-w-10xl flex gap-10 flex-row items-center justify-between">
                     <div className=" flex flex-col">
                 <p className="text-2xl p-5 text-neutral-950 font-bold"> 3XM</p>
                 <p className="text-neutral-950 p-3">
                 Insert sick footer text here about contacting me or whatever.
                 
                 </p>
                     </div>
 
                 <div>
                 <p className="text-xl p-5 text-neutral-950 font-semibold"> Socials</p>
                 <div className="grid grid-cols-3 gap-4">
                 <Link className=" p-2 text-neutral-800 text-2xl hover:text-blue-400" href="https://github.com/Melyguy?tab=repositories">
                     <FaGithub />
                 </Link>
                 <Link className="p-2 text-neutral-800 text-2xl hover:text-blue-400" href="https://zkeler.itch.io/">
                     <SiItchdotio />
                 </Link>
                 <Link className="p-2 text-neutral-800 text-2xl hover:text-blue-400" href="https://open.spotify.com/user/nido.johan">
                     <FaSpotify />
                 </Link>
                 <Link className="p-2 text-neutral-800 text-2xl hover:text-blue-400" href="https://soundcloud.com/mellyshmelly">
                     <FaSoundcloud />
                 </Link>
 
                 </div>
                 </div>
 <iframe 
   className="w-[30vw] h-[30vh] rounded-xl mt-16"
   src="https://open.spotify.com/embed/playlist/67hRkAMhvwPYlzkBdjhH8l?utm_source=generator&theme=0"
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