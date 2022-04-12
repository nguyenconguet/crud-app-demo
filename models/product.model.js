const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model("products", ProductSchema);
