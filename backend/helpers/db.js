// wrapper to connect to MongoDB using Mongoose and to export an object all of the database model objects
// any import of db will connect to db
const config = require("../config.json");
const mongoose = require("mongoose");

const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(
    process.env.MONGODB_URI || config.connectionString,
    connectionOptions
  )
  .then(() => console.log("🟢 Connected to MongoDB\n☁️  API online"))
  .catch((error) => {
    console.log("🔴 Failed to connect to MongoDB");
    console.log(error);
  });

module.exports = {
  Item: require("../models/item.model"),
  User: require("../models/user.model"),
};
