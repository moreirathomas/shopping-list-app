const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  done: { type: Boolean, required: true, default: false },
});

itemSchema.set("toJSON", {
  // clone key _id as id
  virtuals: true,
  // do no include key _v
  versionKey: false,
  transform: function (doc, ret) {
    // do no include key _id
    delete ret._id;
  },
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
