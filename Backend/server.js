const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const bookingRoutes = require("./routes/bookings");
const userRoutes = require("./routes/User");

require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");


app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/user", userRoutes);


app.get("/", (req, res) => {
  res.render("index", { message: "Welcome to Backend!" });
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
