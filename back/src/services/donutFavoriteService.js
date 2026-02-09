// Donut Favorite Service
// Toda la logica de negocio relacionada con los favoritos de donuts se maneja aquí.
// Este servicio interactúa con el modelo de datos para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los favoritos.

const DonutFavorite = require("../models/donutFavoriteModel");

// Funciones del servicio de favoritos

// Obtener todos los favoritos
const getFavorites = async () => {
  return await DonutFavorite.find().populate("donutId");
};

// Agregar un nuevo favorito
const addFavorite = async (donutId) => {
  const existingFavorite = await DonutFavorite.findOne({ donutId });

  if (existingFavorite) {
    throw new Error("Este donut ya está en favoritos");
  }
  const newFavorite = new DonutFavorite({ donutId });
  return await newFavorite.save();
};

// Eliminar un favorito por su ID
const removeFavorite = async (id) => {
  return await DonutFavorite.findByIdAndDelete(id);
};

module.exports = {
  getFavorites,
  addFavorite,
  removeFavorite,
};
