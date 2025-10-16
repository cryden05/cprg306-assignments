"use client";

import { useState } from "react";

export default function NewItem(){
    let [quantity, setQuantity] = useState(1);


    const increment = () => {
        if (quantity < 20){
            setQuantity(quantity + 1);
            console.log("Current quantity: " + quantity);
        }
    }

    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity - 1);
            console.log("Current quantity: " + quantity);
        }
    };

    return (
        <div className="min-h-screen bg-black">
            <div className="flex flex-col justify-center items-center content-center space-y-4">
                <p>Current Quantity: {quantity}</p>
                <button
                    className={`w-32 py-2 px-4 border-2 rounded-2xl ${
                        quantity >= 20
                            ? "bg-gray-400 cursor-not-allowed"
                            : "hover:bg-green-600"
                }`}
                onClick={increment}
                disabled={quantity >= 20}
                >Increment
                </button>
                <button
                    className={`w-32 py-2 px-4 border-2 rounded-2xl ${
                        quantity <= 1
                            ? "bg-gray-400 cursor-not-allowed"
                            : "hover:bg-red-600"
                }`}
                onClick={decrement}
                disabled={quantity <= 1}
                >Decrement
                </button>
            </div>
        </div>
    )
}
    