import Link from "next/link";


export default function Introduction() {
    return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden">
          <div className="h-full w-full flex justify-center items-center overflow-hidden ">     
            <div className="absolute h-screen w-full overflow-hidden  bg-gradient-to-b from-blue-400 via-orange-400 to-red-400 animate-gradient-xy p-3">
                     
            <div className="h-full w-full blur-sm rounded-2xl p-5 bg-neutral-300  flex top-5 justify-center items-center">
                <div className="h-full w-full rounded-2xl bg-neutral-100  flex top-5 justify-center items-center">
              
            </div>
            </div>
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
              <h1 className="text-5xl font-extrabold mb-4 text-blue-400/60 backdrop:blur-[1px] ">Welcome to My Portfolio</h1>
              <p className="text-lg mb-8">Explore my work and projects</p>
              <div className="flex justify-center gap-4">
                <Link href="/about" className="group m-3 w-32 h-20 hover:h-24 hover:w-44 rounded-2xl text-xl font-semibold hover:text-2xl bg-blue-500/20 text-white border border-white backdrop-blur-md shadow-md flex items-center justify-center transition-all duration-300 overflow-hidden">Contact</Link>
                  

              </div>

            </div>
          </div>
        </div>
    </div>

    );
}