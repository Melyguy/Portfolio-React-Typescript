
import Image from "next/image";
import homeimage from "../../app/home.png";
import Link from "next/link";
export function Navbar(){
    return(
        <div>
        <header className="fixed top-0 w-screen bg-{#ededed} shadow-sm">
      <div className="flex gap-8 p-2 md:flex-row justify center">
      <Link href='/'>
        <Image 
          src={homeimage} 
          alt="Home"
          className=" w-[4vw] h-[4vw] md:w-[2vw] md:h-[2vw]"
        />
      </Link>
      <Link href='page3' className="justify-center items-center text-[2vw] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-xl md:font-bold">Games</Link>
      <Link href='page2' className="justify-center items-center text-[2vw] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-xl md:font-bold">Blender</Link>
      <Link href='futureprojects' className="justify-center items-center text-[2vw] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-xl md:font-bold">Music</Link>


      </div>
      </header>
        </div>

    );
}