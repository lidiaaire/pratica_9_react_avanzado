const DonutFavorite = require("../models/donutFavoriteModel");

const getFavorites = async () => {
  return await DonutFavorite.find().populate("donutId");
};

const addFavorite = async (donutId) => {
  // 1. Comprobamos si el donut ya está en favoritos
  const existingFavorite = await DonutFavorite.findOne({ donutId });

  // 2. Si ya existe, no permitimos duplicados
  if (existingFavorite) {
    throw new Error("Este donut ya está en favoritos");
  }

  // 3. Si no existe, lo creamos
  const newFavorite = new DonutFavorite({ donutId });
  return await newFavorite.save();
};

const removeFavorite = async (id) => {
  return await DonutFavorite.findByIdAndDelete(id);
};

module.exports = {
  getFavorites,
  addFavorite,
  removeFavorite,
};
