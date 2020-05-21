const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  done: { type: Boolean, required: true, default: false },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
