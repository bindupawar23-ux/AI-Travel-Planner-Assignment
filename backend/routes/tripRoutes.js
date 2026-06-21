const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
    createTrip,
    addActivity,
    removeActivity,
    regenerateTripDay,
} = require("../controllers/tripController");

router.post("/", auth, createTrip);

router.put(
    "/:id/add-activity",
    auth,
    addActivity
);

router.put(
    "/:id/remove-activity",
    auth,
    removeActivity
);

router.put(
    "/:id/regenerate-day",
    auth,
    regenerateTripDay
);

module.exports = router;