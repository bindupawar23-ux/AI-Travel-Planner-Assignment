"use client";

import Link from "next/link";
import { Plane, LogOut, User } from "lucide-react";

export default function Navbar() {

    const handleLogout = () => {
        // Remove all saved data
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        alert("Logged Out Successfully");

        // Redirect to login page
        window.location.href = "/login";
    };

    return (
        <nav className="bg-white shadow-md border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-2"
                    >
                        <Plane className="w-7 h-7 text-blue-600" />

                        <span className="text-xl font-bold text-slate-800">
                            AI Travel Planner
                        </span>
                    </Link>

                    {/* Menu */}
                    <div className="hidden md:flex items-center gap-8">

                        <Link
                            href="/dashboard"
                            className="text-slate-700 hover:text-blue-600"
                        >
                            Dashboard
                        </Link>

                        <Link
                            href="/create-trip"
                            className="text-slate-700 hover:text-blue-600"
                        >
                            Create Trip
                        </Link>

                        <Link
                            href="/my-trips"
                            className="text-slate-700 hover:text-blue-600"
                        >
                            My Trips
                        </Link>

                        <Link
                            href="/profile"
                            className="flex items-center gap-1 text-slate-700 hover:text-blue-600"
                        >
                            <User size={18} />
                            Profile
                        </Link>

                    </div>

                    {/* Logout */}
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>

                </div>
            </div>
        </nav>
    );
}