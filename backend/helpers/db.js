// wrapper to connect to MongoDB using Mongoose and to export an object all of the database model objects
// any import of db will connect to db
const config = require("../config.json");
const mongoose = require("mongoose");

const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.Promise = global.Promise;

async function connectDB() {
  mongoose
    .connect(config.connectionString, connectionOptions)
    .then(() => console.log("🟢 Connected to MongoDB\n☁️  API online"))
    .catch((error) => {
      console.log("🔴 Failed to connect to MongoDB");
      console.log(error);
    });
  // to shut up warning : (node:2128) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
  mongoose.set("useCreateIndex", true);
}

module.exports = {
  connectDB,
  Item: require("../models/item.model"),
  User: require("../models/user.model"),
};
