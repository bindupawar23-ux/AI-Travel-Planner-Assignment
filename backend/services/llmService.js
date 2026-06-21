exports.generateTrip = async (data) => {
    const { destination, days, budgetType, interests } = data;

    // MOCK AI RESPONSE (replace with OpenAI later)
    const itinerary = {};

    for (let i = 1; i <= days; i++) {
        itinerary[`Day ${i}`] = [
            `Explore ${destination} attraction ${i}`,
            `Enjoy ${interests} experience`,
        ];
    }

    const hotels = [
        `${budgetType} hotel in ${destination}`,
        `${destination} city center stay`,
    ];

    const budgetBreakdown = {
        food: days * 1000,
        travel: days * 800,
        stay: budgetType === "High" ? days * 5000 : days * 2000,
    };

    return {
        itinerary,
        hotels,
        budgetBreakdown,
    };
};
exports.generateTrip = async (data) => {
    const { destination, days, budgetType } = data;

    let multiplier = 1;

    if (budgetType === "Low") multiplier = 0.7;
    if (budgetType === "Medium") multiplier = 1;
    if (budgetType === "High") multiplier = 1.8;

    const flights = 400 * multiplier;
    const accommodation = 100 * days * multiplier;
    const food = 50 * days * multiplier;
    const activities = 30 * days * multiplier;

    const total =
        flights + accommodation + food + activities;

    return {
        itinerary: {
            [`Day 1`]: [
                `Explore ${destination}`,
                "Local sightseeing",
            ],
        },

        budgetBreakdown: {
            flights,
            accommodation,
            food,
            activities,
            total,
        },

        hotels: [
            `${budgetType} hotel in ${destination}`,
            "City center stay",
        ],
    };
};