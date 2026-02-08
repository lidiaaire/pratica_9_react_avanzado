const donutFavoriteService = require("../services/donutFavoriteService");

// Obtiene la lista de favoritos
const getFavorites = async (req, res) => {
  try {
    const favorites = await donutFavoriteService.getFavorites();
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener favoritos" });
  }
};

// Agrega un nuevo favorito
const addFavorite = async (req, res) => {
  try {
    const favorite = await donutFavoriteService.addFavorite(req.body.donutId);
    res.status(201).json(favorite);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Elimina un favorito por su ID
const removeFavorite = async (req, res) => {
  try {
    const deletedFavorite = await donutFavoriteService.removeFavorite(
      req.params.id,
    );
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
