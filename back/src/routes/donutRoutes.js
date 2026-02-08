const express = require("express");
const router = express.Router();

const {
  getDonuts,
  getDonut,
  createDonut,
  updateDonut,
  deleteDonut,
} = require("../controllers/donutController");

// Obtener todos los donuts
router.get("/", getDonuts);

// Obtener un donut por ID
router.get("/:id", getDonut);

// Crear donut
router.post("/", createDonut);

// Actualizar donut
router.put("/:id", updateDonut);

// Eliminar donut
router.delete("/:id", deleteDonut);

module.exports = router;
