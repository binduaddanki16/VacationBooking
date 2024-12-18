const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
