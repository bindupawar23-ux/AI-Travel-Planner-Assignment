"use client";

import { useState } from "react";
import axios from "axios";

export default function EditTrip({ params }) {
    const [text, setText] = useState("");

    const updateTrip = async () => {
        const token = localStorage.getItem("token");

        await axios.put(
            `http://localhost:5000/api/trips/${params.id}`,
            {
                itinerary: {
                    day1: text,
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        alert("Updated!");
    };

    return (
        <div className="p-10">
            <textarea
                className="border w-full"
                onChange={(e) => setText(e.target.value)}
            />

            <button onClick={updateTrip}>
                Update Itinerary
            </button>
        </div>
    );
}