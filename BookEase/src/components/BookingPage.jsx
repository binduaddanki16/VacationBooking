import React, { useState, useContext } from "react";
import "../styles/BookingPage.css";
import { UserContext } from "../context/UserContext";

import beachImage from "../assets/beachimg.jpg";
import mountainImage from "../assets/mountain.jpg";
import villaImage from "../assets/villa.jpg";
import cityImage from "../assets/city.jpg";

const BookingPage = () => {
  const { setBookings } = useContext(UserContext);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [form, setForm] = useState({
    placeId: "",
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
  });

  // Places array (sample data)
  const places = [
    { id: 1, name: "Beach Resort", price: "$120/day", image: beachImage },
    { id: 2, name: "Mountain Lodge", price: "$150/day", image: mountainImage },
    { id: 3, name: "City Apartment", price: "$100/day", image: cityImage },
    { id: 4, name: "Luxury Villa", price: "$300/day", image: villaImage },
  ];

  // Handle place selection and set form data
  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setForm((prev) => ({
      ...prev,
      placeId: place.id, // Assign the correct place ID
    }));
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const today = new Date().toISOString().split("T")[0]; // Today's date in YYYY-MM-DD format

    // Validation: Check-in date must be today or later
    if (form.checkIn < today) {
      alert("Error: Check-in date must be today or a future date.");
      return;
    }

    // Validation: Check-out date must be after Check-in date
    if (form.checkOut <= form.checkIn) {
      alert("Error: Check-out date must be after the Check-in date.");
      return;
    }

    if (!form.placeId) {
      alert("Error: Place ID is missing. Please select a room.");
      return;
    }

    try {
      // Make API call to the backend
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form), // Send form data to backend
      });

      if (!response.ok) {
        throw new Error("Failed to create booking");
      }

      const data = await response.json();
      console.log("Booking Created:", data);

      // Update bookings context (if needed)
      setBookings((prev) => [...prev, data.booking]);

      alert("Booking created successfully!");
      setSelectedPlace(null); // Reset selected place
      setForm({ placeId: "", name: "", email: "", checkIn: "", checkOut: "" }); // Reset form
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating booking. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Book your vacation spot</h2>

      {/* Card Container */}
      <div className="card-container">
        {places.map((place) => (
          <div
            key={place.id}
            className="card"
            onClick={() => handlePlaceClick(place)}
          >
            <img src={place.image} alt={place.name} className="card-img-top" />
            <div className="card-body text-center">
              <h5 className="card-title">{place.name}</h5>
              <p className="card-text">{place.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Form */}
      {selectedPlace && (
        <div className="booking-form mt-4">
          <h3 className="text-center">Book: {selectedPlace.name}</h3>
          <form onSubmit={handleSubmit} className="form-container">
            <input type="hidden" name="placeId" value={form.placeId} />

            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={handleChange}
                value={form.name}
                required
              />
            </div>

            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={handleChange}
                value={form.email}
                required
              />
            </div>

            <div className="mb-3">
              <label>Check-in</label>
              <input
                type="date"
                name="checkIn"
                className="form-control"
                onChange={handleChange}
                value={form.checkIn}
                min={new Date().toISOString().split("T")[0]} // Prevent past dates
                required
              />
            </div>

            <div className="mb-3">
              <label>Check-out</label>
              <input
                type="date"
                name="checkOut"
                className="form-control"
                onChange={handleChange}
                value={form.checkOut}
                min={form.checkIn || new Date().toISOString().split("T")[0]} // Ensure it's after check-in
                required
              />
            </div>

            <button type="submit" className="btn btn-success">
              Confirm Booking
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
