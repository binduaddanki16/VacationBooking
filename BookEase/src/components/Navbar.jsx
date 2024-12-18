// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHotel, FaHistory } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">MyBookings</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/profile"><FaUser /> Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/book"><FaHotel /> Book</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/history"><FaHistory /> Booking History</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
