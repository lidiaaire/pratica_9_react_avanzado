const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema(
  {
    donutId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Donut",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Favorite", favoriteSchema);
