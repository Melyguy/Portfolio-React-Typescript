import Image, {StaticImageData} from "next/image";
import sigma from "./assets/card.png"

type cardProps = {
    imagesrc: StaticImageData | string;
};
export function Card({imagesrc} : cardProps){
    return(
        <div className="col-span-1 row-span-2  p-2 rounded-xl cursor-pointer group perspective-1000 shadow-xl">
            <div className="relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500">
            <div className="w-full h-full absolute rounded-xl overflow-hidden">
              <Image src={imagesrc}  alt="Card Content" className="rounded-xl w-full h-full object-cover"></Image>
            </div>
             <div className="absolute w-full h-full bg-blue-200 z-50 rounded-xl backface-hidden ">
                <Image src = {sigma} alt="Card BG" className="w-full h-full object-cover rounded-xl"></Image>
            </div>
            </div>

          </div>
    );
}