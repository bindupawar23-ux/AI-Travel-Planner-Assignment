const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const tripRoutes = require("./routes/tripRoutes");
//const tripRoutes = require("./routes/tripRoutes");



app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"));


app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/trips", tripRoutes);
app.use("/api/trips", tripRoutes);

app.listen(5000, () => {
    console.log("Server running on 5000");
});