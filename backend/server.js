const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const itemRouter = require("./routes/item.routes.js");

const app = express();

app.use(express.json());
app.use(cors());

// past your user and password strings
const USER = "user";
const PASSWORD = "qEX4gUHUk7qt3h6u";

mongoose
  .connect(
    `mongodb+srv://${USER}:${PASSWORD}@cluster0-nvcdl.mongodb.net/test?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("🟢 Connected to MongoDB\n☁️  API online"))
  .catch((error) => {
    console.log("🔴 Failed to connect to MongoDB");
    console.log(error);
  });

app.use(itemRouter);

app.listen(3000, () => {
  console.log("⚙️  Running on port 3000...");
});
