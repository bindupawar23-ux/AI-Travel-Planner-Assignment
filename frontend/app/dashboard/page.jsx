"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            router.replace("/login");
        }
    }, []);

    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold">
                Dashboard
            </h1>
        </div>
    );
}