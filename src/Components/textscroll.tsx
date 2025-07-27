"use client"
import React, { useEffect } from "react";
import { useState } from "react";


export default function TextScroll() {
    const texts = ["frontend developer", "backend developer", "game developer", "producer", "designer","student"];
    const [textIndex, settextIndex] = useState(0);
    

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
      <h1 className=" font-semibold">I am a {texts[textIndex]}</h1>
    </div>
  );
}