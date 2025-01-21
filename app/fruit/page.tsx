"use client"
import { useState,useEffect } from "react"
import Card from "../components/Card"

export default function Page() {
    const [fruit, setFruit] = useState('apple')
    const toBanana = () => { setFruit('Banana') }
    useEffect(() => {
        document.title = `My Fruit is Banana ${fruit}`
    })
    return (
        <div>
            {fruit}
            <button onClick={toBanana}>Banana 🍌🍌🍌🍌</button>

            <Card src="/1.jpg" title="Player 1"/>
            <Card src="/1.jpg" title="Player 2"/>
            <Card src="/1.jpg" title="Player 3"/>
            
        </div>
    );
}