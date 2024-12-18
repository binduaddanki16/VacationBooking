const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "User not found" });
  }
});

router.put("/:email", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ email: req.params.email }, req.body, { new: true });
    res.json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
