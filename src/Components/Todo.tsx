"use Client";

import { useState, useEffect } from "react";

export default function Todo() {
    const [task, setTask] = useState([]);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL + "/api/List/TodoItems")
        .then(response => response.json())
        .then(data => setTask(data))
        .catch(error => console.error("Error fetching data:", error));
    }, []);
    return (
        <div className="w-full h-full bg-neutral-100/40 border border-white backdrop-blur-lg shadow-xl rounded-xl p-4 flex flex-col gap-2 items-center">
            <h1 className="text-xl font-bold">Quests</h1>
            <ul className="w-full h-full overflow-y-auto">
                {task.map((todo: any) => (
                    <li key={todo.id} className="bg-neutral-300/40 border border-white backdrop-blur-lg shadow-lg rounded-2xl p-2 mb-2 text-sm font-semibold text-blue-950 flex items-center justify-between">
                        <span>{todo.title}</span>
                        <span className={`text-xs font-medium ${todo.isCompleted ? 'text-green-500' : 'text-red-500'}`}>
                            {todo.isCompleted ? 'Completed' : 'Not completed'}
                        </span>
                    </li>
                ))}

            </ul>
        </div>
    );
} 