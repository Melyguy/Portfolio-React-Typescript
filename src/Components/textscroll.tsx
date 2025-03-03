"use client"
import React, { useEffect } from "react";
import { useState } from "react";


export default function TextScroll() {
    const texts = ["frontend developer", "backend developer", "game developer", "producer", "designer", "artist",];
    const [textIndex, settextIndex] = useState(0);
    
    const randomNum = () => {
      let randomIndex = Math.random() * texts.length;
      while (randomIndex === textIndex) {
        randomIndex = Math.random() * texts.length;
      }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (textIndex === texts.length - 1) {
                settextIndex(0);
                return;
            }
            settextIndex((prevIndex) => prevIndex + 1);
        }, 1500);

        return () => clearTimeout(timer);
    }, [textIndex, texts.length]);

  return (
    <div className="h-10 p-6">
      <h1 className="">I am a {texts[textIndex]}</h1>
    </div>
  );
}