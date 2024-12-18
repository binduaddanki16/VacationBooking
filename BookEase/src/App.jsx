// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import BookingPage from "./components/BookingPage";
import UserProfile from "./components/UserProfile";
import BookingHistory from "./components/BookingHistory";
import Navbar from "./components/Navbar";
import { UserContext } from "./context/UserContext";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

const App = () => {
  const [user, setUser] = useState({ name: "bindu", email: "bindu@gmail.com" });
  const [bookings, setBookings] = useState([]);

  const updateUser = (updatedUser) => setUser(updatedUser);

  return (
    <UserContext.Provider value={{ user, updateUser, bookings, setBookings }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/history" element={<BookingHistory />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
