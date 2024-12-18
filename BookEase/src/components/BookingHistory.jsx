import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "../styles/BookingHistory.css"; // Import the new CSS file

const BookingHistory = () => {
  const { bookings } = useContext(UserContext);

  // If no bookings exist
  if (Object.keys(bookings).length === 0) {
    return (
      <div className="container mt-5">
        <h3>No Booking History Found</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">Booking History</h2>
      <div className="card-container mt-3">
        {Object.values(bookings).map((booking) => (
          <div key={booking.placeId} className="card">
            <div className="card-body">
              <h5 className="card-title">Booking for Place ID: {booking.placeId}</h5>
              <p>
                <strong>Name:</strong> {booking.name} <br />
                <strong>Email:</strong> {booking.email} <br />
                <strong>Check-in:</strong> {booking.checkIn} <br />
                <strong>Check-out:</strong> {booking.checkOut}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingHistory;
