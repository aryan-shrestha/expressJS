const express = require("express");
const mongoose = require("mongoose");
const user = require("./routes/users");

const app = express();
const port = 3000;

app.use(express.json());

const mongoURI = "mongodb://localhost:27017/nccDB";

mongoose
  .connect(mongoURI)
  .then((err) => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.err("MongoDB connection error: ", err);
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/users", user);
