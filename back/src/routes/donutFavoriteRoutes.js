// Favorite routes
// Endpoints de favoritos

const express = require("express");
const router = express.Router();
const donutFavoriteController = require("../controllers/donutFavoriteController");

// Rutas para manejar favoritos

// Obtener la lista de favoritos
router.get("/", donutFavoriteController.getFavorites);
// Añadir un donut a favoritos
router.post("/", donutFavoriteController.addFavorite);
// Eliminar un donut de favoritos por ID
router.delete("/:id", donutFavoriteController.removeFavorite);

module.exports = router;
