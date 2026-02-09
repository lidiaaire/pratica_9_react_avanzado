// Donut model
// Define el esquema para los donuts en MongoDB usando Mongoose
// Cada donut tiene un nombre, precio, descripción y disponibilidad

const mongoose = require("mongoose");

const donutSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Donut", donutSchema);
