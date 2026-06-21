"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function TripDetails({ params }) {
    const [trip, setTrip] = useState(null);

    useEffect(() => {
        const fetchTrip = async () => {
            const token = localStorage.getItem("token");

            const res = await axios.get(
                `http://localhost:5000/api/trips/${params.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setTrip(res.data);
        };

        fetchTrip();
    }, []);

    if (!trip) return <p>Loading...</p>;

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold">
                {trip.destination}
            </h1>

            {/* ITINERARY */}
            <h2 className="text-xl mt-5 font-bold">Itinerary</h2>

            {Object.entries(trip.itinerary).map(([day, plan]) => (
                <p key={day}>
                    <b>{day}:</b> {plan}
                </p>
            ))}

            {/* HOTELS */}
            <h2 className="text-xl mt-5 font-bold">Hotels</h2>

            {trip.hotels.map((hotel, i) => (
                <p key={i}>
                    {hotel.name} - ₹{hotel.price}
                </p>
            ))}
        </div>
    );
}