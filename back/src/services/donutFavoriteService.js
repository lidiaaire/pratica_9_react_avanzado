const DonutFavorite = require("../models/donutFavoriteModel");

const getFavorites = async () => {
  return await DonutFavorite.find().populate("donutId");
};

const addFavorite = async (donutId) => {
  const existingFavorite = await DonutFavorite.create({ donutId });
  return existingFavorite;
};

const removeFavorite = async (id) => {
  return await DonutFavorite.findByIdAndDelete(id);
};

module.exports = {
  getFavorites,
  addFavorite,
  removeFavorite,
};
