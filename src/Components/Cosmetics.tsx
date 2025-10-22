
"use client";

import { useState, useEffect } from "react";

export default function Cosmetics() {
    const [task, setTask] = useState([]);
    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL + "/api/List/TodoItems")
        .then(response => response.json())
        .then(data => setTask(data))
        .catch(error => console.error("Error fetching data:", error));
    }, []);
    return (
        <div className="w-full h-full flex items-center justify-center gap-4">
        <div className="w-1/3 h-full bg-neutral-100/40 border border-white backdrop-blur-lg shadow-xl rounded-xl p-4 flex flex-col gap-2 items-center">
        <h1 className="text-xl font-bold">Mouse 1</h1>
        

        </div>
        <div className="w-1/3 h-full bg-neutral-100/40 border border-white backdrop-blur-lg shadow-xl rounded-xl p-4 flex flex-col gap-2">
        
        </div>
        <div className="w-1/3 h-full bg-neutral-100/40 border border-white backdrop-blur-lg shadow-xl rounded-xl p-4 flex flex-col gap-2">

        </div>
        
    
        </div>
    );
}