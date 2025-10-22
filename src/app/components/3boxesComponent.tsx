import Link from "next/link";
import { FaGamepad, FaNpm } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import AnimatedText from "./animatedtext";


export default function ThreeBoxesComponent() {

    return (

        <section className="relative  h-[200vh] bg-gradient-to-b from-red-600 via-red-400 to-neutral-100">
            
            <div className="absolute w-full flex justify-center">
      <AnimatedText>
      <h1 className="text-6xl  font-bold mt-16">About me!</h1>
      </AnimatedText>

            </div>
        <section className="absolute w-full flex top-28 justify-center items-center">
                <AnimatedText>
      <p className="text-xl w-1/2  font-semibold mt-16">Hi! I’m a creative developer and designer from Norway who loves turning ideas into beautiful, functional digital experiences. I’m always exploring new technologies, tools, and design trends to keep my work fresh and exciting. I enjoy collaborating on diverse projects from web design and front-end development to branding and UI/UX and I’m constantly pushing myself to learn, grow, and make things that truly stand out.</p>
      </AnimatedText>
        </section>
        <div className=" h-screen sticky top-1 z-10 mx-auto overflow-hidden flex items-end justify-center gap-10">
            <div className=" w-80 h-60 bg-neutral-200/20 rounded-3xl mb-10 border border-white/20 backdrop-blur-md shadow-md hidden md:flex flex-col items-center justify-center">
            <div className=" w-72 h-12 flex justify-center p-2"> 
            

            </div>
            </div>
            <div className="w-96  h-60 mb-10 bg-neutral-200/20 rounded-3xl border border-white/20 backdrop-blur-md shadow-md flex flex-col">
                        <div className=" w-72 h-12 flex justify-center p-2 ">
                        <Link href="/about"  className=" transition-all duration-300 overflow-hidden w-11 h-11 bg-neutral-400/20 border p-2 hover:w-12 hover:h-12 border-white/20 rounded-xl mr-10 backdrop-blur-md shadow-md flex justify-center items-center">
                        <GoProjectSymlink className="w-full h-full text-black" /></Link>
                        <h1 className="mt-1 font-bold text-2xl text-black">Top Projects</h1>
                        </div>
                        <div className="w-full h-full flex justify-center items-center">
                            <Link href="https://github.com/Melyguy/navigation-template-nextJS" target="/"  className=" text-black group m-3 w-24 h-20 hover:h-28 hover:w-44  rounded-2xl bg-red-300/20 border border-white/20 backdrop-blur-md shadow-md flex items-center justify-center transition-all duration-300 overflow-hidden ">
                                <div className=" group-hover:left-0 group-hover:ml-2 border border-white/20 w-14 h-14 rounded-2xl p-2  flex items-center justify-center bg-gradient-to-bl from-blue-400/80  via-orange-400/80  to-red-400/80 backdrop:blur-md shadow-md">
                                <FaNpm className="text-5xl text-white " />
                                </div>
                                <h1 className="text-xs hidden group-hover:flex font-semibold"> Next.JS NPM package</h1>
                            </Link>
                            <div className="w-36 h-24 hover:h-40 hover:w-44 transition-all duration-300 overflow-hidden  bg-red-300/20 rounded-2xl border border-white/20 backdrop-blur-md shadow-md flex items-center justify-center">

                            </div>
                            <Link href="https://steamcommunity.com/sharedfiles/filedetails/?id=3541508092" target="/"  className=" text-black group m-3 w-24 h-20 hover:h-28 hover:w-44  rounded-2xl bg-red-300/20 border border-white/20 backdrop-blur-md shadow-md flex items-center justify-center transition-all duration-300 overflow-hidden ">
                                <div className="group-hover:left-6 group-hover:ml-2  border border-white/20 w-14 h-14 rounded-2xl p-2  flex items-center justify-center bg-gradient-to-bl from-blue-400/80  via-orange-400/80  to-red-400/80 backdrop:blur-md shadow-md">
                                <FaGamepad className="text-5xl text-white" />
                                </div>
                                <h1 className="text-xs hidden group-hover:flex font-semibold"> Technologer Mod</h1>
                            </Link>
                        </div>
            </div>
            <div className=" w-80 h-60 mb-10 bg-neutral-200/20 rounded-3xl border border-white/20 backdrop-blur-md shadow-md hidden md:flex flex-col items-center justify-center">

            </div>
        </div>
        </section>
                  
    );
}