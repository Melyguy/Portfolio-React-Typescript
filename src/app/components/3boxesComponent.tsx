import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { TbPlayerTrackNext} from "react-icons/tb";
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
      <p className="text-xl w-1/2 mt-16">Hi! I’m 3XMelly a creative developer and designer from Norway who loves turning ideas into beautiful, functional digital experiences. I’m always exploring new technologies, tools, and design trends to keep my work fresh and exciting. I enjoy collaborating on diverse projects from web design and front-end development to branding and UI/UX and I’m constantly pushing myself to learn, grow, and make things that truly stand out.</p>
      </AnimatedText>

        </section>
        <div className=" h-screen sticky top-1 z-10 mx-auto overflow-hidden flex items-end justify-center gap-10">
            <div className="w-80  h-60 mb-10 bg-neutral-200/20 rounded-3xl border border-white/20 backdrop-blur-md shadow-md flex flex-col">
                        <div className=" w-72 h-12 flex justify-center p-2 ">
                        <Link href="/about"  className=" transition-all duration-300 overflow-hidden w-11 h-11 bg-neutral-400/20 border p-2 hover:w-12 hover:h-12 border-white/20 rounded-xl mr-10 backdrop-blur-md shadow-md flex justify-center items-center">
                        <CiHeart className="w-full h-full text-black" /></Link>
                        <h1 className="mt-1 font-bold text-lg text-black">What i love creating</h1>
                        </div>
                        <p className="text-black p-10 ">I blend design and code to craft digital experiences that feel alive.
From concept to deployment, I love bringing ideas to life.</p>

            </div>
            {/*<div className="w-60 group  h-60 mb-10 hover:w-96 hover:h-64 hover:rounded-3xl hover:bg-red-200/40 bg-red-200 rounded-full  border-white border-2  backdrop-blur-md shadow-md flex flex-col transition-all duration-700 ease-in-out">
                    <h1 className="text-black w-full h-full group-hover:hidden text-2xl font-bold flex justify-center items-center">Hover me!</h1>

            </div>*/}
            <div className="w-80  h-60 mb-10 bg-neutral-200/20 rounded-3xl border border-white/20 backdrop-blur-md shadow-md flex flex-col">
                        <div className=" w-72 h-12 flex justify-center p-2 ">
                        <Link href="/about"  className=" transition-all duration-300 overflow-hidden w-11 h-11 bg-neutral-400/20 border p-2 hover:w-12 hover:h-12 border-white/20 rounded-xl mr-10 backdrop-blur-md shadow-md flex justify-center items-center">
                        <TbPlayerTrackNext className="w-full h-full text-black" /></Link>
                        <h1 className="mt-1 font-bold text-lg text-black">What comes next</h1>
                        </div>
                    <ul>
                        <li className="text-black p-3">Exploring 3D web interfaces and performance-driven React apps.</li>
                        <li className="text-black p-3">Learning motion design, launching a small open-source project,
and maybe redesigning my portfolio (again).</li>
                    </ul>

            </div>
        </div>
        </section>
                  
    );
}