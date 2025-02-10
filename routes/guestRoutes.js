const express = require("express");
const Guest = require("../models/Guest");
const upload = require("../middleware/upload");

const router = express.Router();

// Add Guest
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, phone, email } = req.body;
    const newGuest = new Guest({
      image: req.file.path,
      name,
      phone,
      email,
    });
    await newGuest.save();
    res.status(201).json(newGuest);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// Get All Guests
router.get("/", async (req, res) => {
  try {
    const guests = await Guest.find();
    res.json(guests);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

module.exports = router;
