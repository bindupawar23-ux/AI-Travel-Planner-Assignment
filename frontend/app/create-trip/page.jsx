"use client";

import { useState } from "react";
import axios from "axios";

export default function CreateTrip() {
    const [form, setForm] = useState({
        destination: "",
        days: "",
        budgetType: "Low",
        interests: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const token = localStorage.getItem("token");

            const res = await axios.post(
                "http://localhost:5000/api/trips",
                form,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("Trip Created:", res.data);
            alert("Trip created successfully!");
        } catch (error) {
            console.log(error.response?.data || error.message);
            alert("Error creating trip");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-96"
            >
                <h2 className="text-xl font-bold mb-4">
                    Create Trip
                </h2>

                {/* Destination */}
                <input
                    type="text"
                    name="destination"
                    placeholder="Destination"
                    value={form.destination}
                    onChange={handleChange}
                    className="w-full p-2 border mb-3"
                    required
                />

                {/* Days */}
                <input
                    type="number"
                    name="days"
                    placeholder="Number of Days"
                    value={form.days}
                    onChange={handleChange}
                    className="w-full p-2 border mb-3"
                    required
                />

                {/* Budget Type */}
                <select
                    name="budgetType"
                    value={form.budgetType}
                    onChange={handleChange}
                    className="w-full p-2 border mb-3"
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>

                {/* Interests */}
                <input
                    type="text"
                    name="interests"
                    placeholder="Interests (Food, Culture, Adventure)"
                    value={form.interests}
                    onChange={handleChange}
                    className="w-full p-2 border mb-3"
                    required
                />

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white p-2 rounded"
                >
                    {loading ? "Creating..." : "Create Trip"}
                </button>
            </form>
        </div>
    );
}