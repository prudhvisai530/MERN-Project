const express = require("express");
const router = express.Router();

const User = require("../models/users");

router.post("/", async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      location: req.body.location,
      email: req.body.email,
      password: req.body.password,
      phone_number: req.body.phone_number,
    });
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

module.exports = router;
