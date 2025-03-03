"use client";

import { useEffect } from "react";

export default function UnityWebGL() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "Unity/Build/Downloads.loader.js";
    script.async = true;
    
    // Add script to document
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <iframe
      src="Unity/index.html"
      width="100%"
      height="100%"
      style={{border: "none", position: "absolute", top: 0, left: 0, right: 0, bottom: 0}}
      allowFullScreen
      >


      </iframe>


    </div>
  );
}