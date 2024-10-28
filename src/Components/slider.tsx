import { useState } from "react";
import Project from "./project";
import FadeIn from "./fadein";


import citycaseImg1 from "@assets/5factory.png"
import citycaseImg2 from "@assets/bigbank.png"
import citycaseImg3 from "@assets/ccmainmenu.png"
import citycaseImg4 from "@assets/gamble1.png"
import citycaseImg5 from "@assets/gamble2.png"
import citycaseImg6 from "@assets/peopleandtowers.png"

export default function Slider() {
    const projects = [
        {imageSrc: citycaseImg1, title: "City Case img#1", content: 'This is a screenshot from citycase'},
        {imageSrc: citycaseImg2, title: "City Case img#2", content: 'This is a screenshot from citycase'},
        {imageSrc: citycaseImg3, title: "City Case img#3", content: 'This is a screenshot from citycase'},
        {imageSrc: citycaseImg4, title: "City Case img#4", content: 'This is a screenshot from citycase'},
        {imageSrc: citycaseImg5, title: "City Case img#5", content: 'This is a screenshot from citycase'},
        {imageSrc: citycaseImg6, title: "City Case img#6", content: 'This is a screenshot from citycase'}
    ];
    const[index, setIndex] = useState(0);
    const totalImages = projects.length

    const next = () => {
        if(index < totalImages - 1){
            setIndex((prevIndex) => prevIndex + 1)  
        }
        if (index >= totalImages -1){
            setIndex((prevIndex) => 0)  
        }
    }
    const prev = () => {
        if (index > 0) {
            setIndex((prevIndex) => prevIndex - 1);
        }
        if (index <= 0){
            setIndex((prevIndex) => 5)  
        }
    };

    return (
        <FadeIn delay={0}>
            <div className="w-full p-1 md:p-[20vw]">
                <div className="grid grid-cols-1 grid-rows-1 overflow-hidden gap-5 md:gap-10  ">
                    {projects.slice(index, index + 1).map((project) => (
                        <div key={project.title}>
                            <Project 
                                imageSrc={project.imageSrc}
                                title={project.title}
                                content={project.content}
                            />
                        </div>
                    ))}
                </div>
                <div className="w-full flex justify-between items-center">
                    <button onClick={prev} className='bg-white text-black aspect-square rounded-full p-5'>Prev</button>
                    <div className="flex gap-3">
                        {Array.from({ length: Math.ceil(totalImages) }).map((_, i) => (
                            <div key={i} className={`aspect-square w-5 h-5 rounded-full ${i === Math.floor(index) ? 'bg-secondary scale-125' : 'bg-primary scale-100'}`}></div>
                        ))}
                    </div>
                    <button onClick={next} className='bg-white aspect-square text-black rounded-full p-5' disabled={index >= totalImages}>Next</button>
                </div>
            </div>
        </FadeIn>
    );
};

