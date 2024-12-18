import React from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";

const Homepage = () => (
  <div className="text-center mt-5">
    <h1>Welcome to MyBookings</h1>
    <p>Manage your bookings and profile seamlessly.</p>
    <Link to="/book" className="btn btn-primary">Book a Room</Link>
  </div>
);

export default Homepage;