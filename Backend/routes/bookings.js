const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// Create a new booking
router.post("/", async (req, res) => {
  const { placeId, name, email, checkIn, checkOut } = req.body;
  try {
    const booking = await Booking.create({ placeId, name, email, checkIn, checkOut });
    console.log(booking);
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Fetch all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
