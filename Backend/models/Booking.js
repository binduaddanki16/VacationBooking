const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  placeId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
});

module.exports = mongoose.model("Booking", BookingSchema);
