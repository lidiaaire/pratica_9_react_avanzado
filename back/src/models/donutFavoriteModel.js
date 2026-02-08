const mongoose = require("mongoose");

const donutFavoriteSchema = new mongoose.Schema({
  donutId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Donut",
    required: true,
    unique: true, // Esto asegura que un mismo donut no pueda ser añadido varias veces a favoritos
  },
});

module.exports = mongoose.model("DonutFavorite", donutFavoriteSchema);
