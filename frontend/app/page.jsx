import Link from "next/link";
export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100">
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">
                        AI Travel Planner ✈️
                    </h1>

                    <p className="text-lg text-gray-600 max-w-3xl mb-8">
                        Plan your perfect trip with AI. Generate personalized travel
                        itineraries, estimate budgets, discover hotels, and manage all your
                        travel plans in one place.
                    </p>

                    <div className="flex gap-4">
                        <Link
                            href="/login"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Login
                        </Link>

                        <Link
                            href="/register"
                            className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    Features
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold mb-3">
                            AI Itinerary Generator
                        </h3>
                        <p className="text-gray-600">
                            Create detailed day-by-day travel plans based on destination,
                            interests, budget, and trip duration.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold mb-3">
                            Budget Estimation
                        </h3>
                        <p className="text-gray-600">
                            Get estimated costs for flights, hotels, food, and activities
                            before you travel.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold mb-3">
                            Hotel Recommendations
                        </h3>
                        <p className="text-gray-600">
                            Discover budget, mid-range, and luxury hotels suggested by AI.
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        How It Works
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl mb-4">📝</div>
                            <h3 className="font-semibold">Enter Details</h3>
                            <p className="text-gray-600 mt-2">
                                Destination, days, interests, and budget.
                            </p>
                        </div>

                        <div>
                            <div className="text-4xl mb-4">🤖</div>
                            <h3 className="font-semibold">AI Planning</h3>
                            <p className="text-gray-600 mt-2">
                                AI generates a complete itinerary.
                            </p>
                        </div>

                        <div>
                            <div className="text-4xl mb-4">💰</div>
                            <h3 className="font-semibold">Budget Estimate</h3>
                            <p className="text-gray-600 mt-2">
                                View travel cost breakdown.
                            </p>
                        </div>

                        <div>
                            <div className="text-4xl mb-4">✏️</div>
                            <h3 className="font-semibold">Customize</h3>
                            <p className="text-gray-600 mt-2">
                                Modify and regenerate trip plans anytime.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Feature Section */}
            <section className="container mx-auto px-6 py-16">
                <div className="bg-indigo-600 text-white rounded-xl p-10 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Smart Weather-Aware Planning 🌦️
                    </h2>

                    <p className="text-lg">
                        Our AI can suggest indoor or outdoor activities based on expected
                        weather conditions, helping travelers avoid disruptions and make
                        better plans.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-6 text-center">
                <p>© 2026 AI Travel Planner. All Rights Reserved.</p>
            </footer>
        </main>
    );
}