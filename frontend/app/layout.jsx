import DayPlan from "../components/DayPlan";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "AI Travel Planner",
    description: "Travel planning with AI",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />

                <main>{children}</main>
            </body>
        </html>
    );
}