import Link from "next/link";


export default function Introduction() {
    return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden">
          <div className="h-full w-full flex justify-center items-center overflow-hidden ">     
            <div className="absolute h-screen w-full overflow-hidden  bg-red-600 animate-gradient-xy p-3">
                     

            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
          <h1 className="text-5xl  font-semibold text-black md:text-9xl">3XMELLY</h1>
              <div className="flex justify-center gap-4">
                

              </div>

            </div>
            
          <h1 className="text-white text-2xl md:text-6xl font-semibold z-10 top-1/2"> 開発者</h1>
          </div>
        </div>


    );
}