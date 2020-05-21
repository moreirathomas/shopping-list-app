const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const itemRouter = require("./routes/item.routes.js");

const app = express();

app.use(express.json());
app.use(cors());

// const USER = process.env.DB_CONNECT_USER;
// const PASSWORD = process.env.DB_CONNECT_PASSWORD;

// console.log(USER);
// console.log(PASSWORD);

mongoose
  .connect(
    "mongodb+srv://user:qEX4gUHUk7qt3h6u@cluster0-nvcdl.mongodb.net/test?retryWrites=true&w=majority",
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
