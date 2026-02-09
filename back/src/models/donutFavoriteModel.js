// Model Donut Favorite
// Este modelo representa los donuts que han sido marcados como favoritos por los usuarios.
// Cada entrada en esta colección corresponde a un donut específico que ha sido añadido a la lista de favoritos.
// La relación se establece mediante el campo `donutId`, que referencia al modelo Donut, asegurando que cada donut solo pueda ser añadido una vez a favoritos.

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
