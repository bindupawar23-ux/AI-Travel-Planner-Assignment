const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
    userId: String,
    destination: String,
    days: Number,
    budget: Number,
    interests: [String],
    itinerary: Object,
    hotels: Array,
});

module.exports = mongoose.model("Trip", tripSchema);