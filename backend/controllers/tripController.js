const Trip = require("../models/Trip");
const { generateTrip } = require("../services/llmService");

exports.createTrip = async (req, res) => {
    try {
        const ai = await generateTrip(req.body);

        const trip = await Trip.create({
            userId: req.user.id,
            destination: req.body.destination,
            days: req.body.days,
            budgetType: req.body.budgetType,
            interests: req.body.interests,
            itinerary: ai.itinerary,
            hotels: ai.hotels,
        });

        res.status(201).json({
            trip,
            budget: ai.budgetBreakdown,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
exports.estimateBudget = async (req, res) => {
    try {
        const { destination, days, budgetType } = req.body;

        let multiplier = 1;

        if (budgetType === "Low") multiplier = 0.7;
        if (budgetType === "High") multiplier = 1.8;

        const flights = 400 * multiplier;
        const accommodation = 100 * days * multiplier;
        const food = 50 * days * multiplier;
        const activities = 30 * days * multiplier;

        const total =
            flights + accommodation + food + activities;

        res.status(200).json({
            destination,
            days,
            budgetType,
            flights,
            accommodation,
            food,
            activities,
            total,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
exports.addActivity = async (req, res) => {
    try {
        const { day, activity } = req.body;

        const trip = await Trip.findOne({
            _id: req.params.id,
            userId: req.user.id,
        });

        if (!trip) {
            return res.status(404).json({
                message: "Trip not found",
            });
        }

        if (!trip.itinerary[day]) {
            trip.itinerary[day] = [];
        }

        trip.itinerary[day].push(activity);

        await trip.save();

        res.status(200).json({
            message: "Activity added successfully",
            itinerary: trip.itinerary,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
exports.removeActivity = async (req, res) => {
    try {
        const { day, activity } = req.body;

        const trip = await Trip.findOne({
            _id: req.params.id,
            userId: req.user.id,
        });

        if (!trip) {
            return res.status(404).json({
                message: "Trip not found",
            });
        }

        trip.itinerary[day] =
            trip.itinerary[day].filter(
                (item) => item !== activity
            );

        await trip.save();

        res.status(200).json({
            message: "Activity removed successfully",
            itinerary: trip.itinerary,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
exports.regenerateTripDay = async (req, res) => {
    try {
        const { day, prompt } = req.body;

        const trip = await Trip.findOne({
            _id: req.params.id,
            userId: req.user.id,
        });

        if (!trip) {
            return res.status(404).json({
                message: "Trip not found",
            });
        }

        const activities =
            await regenerateDay(
                trip.destination,
                day,
                prompt
            );

        trip.itinerary[day] = activities;

        await trip.save();

        res.status(200).json({
            message: `${day} regenerated successfully`,
            itinerary: trip.itinerary,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};