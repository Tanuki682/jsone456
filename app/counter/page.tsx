"use client"
import { useState } from "react";

export default function Page() {
  const [count , setcount] = useState(0)
    const increment = ( )=> {setcount(count +1)}
    const decrement = ( )=> {setcount(count -1)}
    return (
        <div>
            <h1 className="text-4xl text-center">{count}</h1>
            <button className="text-5xl " onClick={increment}> UP </button><li></li>
            
            <button className="text-5xl " onClick={decrement}> DOWN </button>
            
        </div>
    );
}