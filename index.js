require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const guestRoutes = require("./routes/guestRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

connectDB();

app.use("/api/guests", guestRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
