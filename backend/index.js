const express = require("express");
const app = express();
const env = require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");

const MongoUrl = process.env.MONGO_URI;

mongoose
  .connect(MongoUrl, {})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
  });

app.use(helmet());
app.use(morgan("combined"));

app.listen(process.env.PORT, () => {
  console.log(`application is running successfully`);
});
