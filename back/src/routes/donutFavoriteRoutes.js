const express = require("express");
const router = express.Router();
const donutFavoriteController = require("../controllers/donutFavoriteController");

router.get("/", donutFavoriteController.getFavorites);
router.post("/", donutFavoriteController.addFavorite);
router.delete("/:id", donutFavoriteController.removeFavorite);

module.exports = router;
