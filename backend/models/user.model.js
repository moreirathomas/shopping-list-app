const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

userSchema.set("toJSON", {
  // clone key _id as id
  virtuals: true,
  // do no include key _v
  versionKey: false,
  transform: function (doc, ret) {
    // do no include key _id
    delete ret._id;
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
