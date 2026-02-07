const favoriteService = require("../services/donutFavoriteService");

const getFavorites = async (req, res) => {
  try {
    const favorites = await favoriteService.getFavorites();
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addFavorite = async (req, res) => {
  try {
    const favorite = await favoriteService.addFavorite(req.body.donutId);
    res.status(201).json(favorite);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const removeFavorite = async (req, res) => {
  try {
    const deletedFavorite = await favoriteService.removeFavorite(req.params.id);
    if (!deletedFavorite) {
      return res.status(404).json({ message: "Favorite not found" });
    }
    res.status(200).json({ message: "Favorite removed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getFavorites,

  addFavorite,

  removeFavorite,
};
