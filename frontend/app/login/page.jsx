"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
    const router = useRouter();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:5000/api/auth/login",
                form
            );

            console.log("LOGIN RESPONSE:", res.data);

            // save token
            localStorage.setItem("token", res.data.token);

            alert("Login success");

            // 🚀 REDIRECT TO DASHBOARD
            router.push("/dashboard");

        } catch (err) {
            console.log(err.response?.data || err.message);
            alert("Login failed");
        }
    };
    const handleLogout = () => {
        localStorage.clear();

        alert("Logged Out Successfully");

        router.replace("/login");
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form
                onSubmit={handleSubmit}
                className="p-6 border rounded w-96"
            >
                <h1 className="text-xl font-bold mb-4">Login</h1>

                <input
                    name="email"
                    placeholder="Email"
                    className="border p-2 w-full mb-3"
                    onChange={handleChange}
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="border p-2 w-full mb-3"
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 w-full"
                >
                    Login
                </button>
            </form>
        </div>
    );
}