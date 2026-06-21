"use client";

import { useState } from "react";

export default function TripForm({ onSubmit }) {
    const [trip, setTrip] = useState({
        destination: "",
        days: "",
        budget: "Medium",
        interests: [],
    });

    const interests = [
        "Food",
        "Culture",
        "Adventure",
        "Shopping",
        "Nature",
    ];

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(trip);
            }}
            className="bg-white p-6 rounded shadow"
        >
            <input
                placeholder="Destination"
                className="border p-2 w-full mb-4"
                onChange={(e) =>
                    setTrip({
                        ...trip,
                        destination: e.target.value,
                    })
                }
            />

            <input
                type="number"
                placeholder="Days"
                className="border p-2 w-full mb-4"
                onChange={(e) =>
                    setTrip({
                        ...trip,
                        days: e.target.value,
                    })
                }
            />

            <select
                className="border p-2 w-full mb-4"
                onChange={(e) =>
                    setTrip({
                        ...trip,
                        budget: e.target.value,
                    })
                }
            >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>

            <div className="mb-4">
                {interests.map((item) => (
                    <label
                        key={item}
                        className="block"
                    >
                        <input
                            type="checkbox"
                            value={item}
                        />
                        {item}
                    </label>
                ))}
            </div>

            <button
                className="bg-green-600 text-white px-4 py-2 rounded"
            >
                Generate Trip
            </button>
        </form>
    );
}