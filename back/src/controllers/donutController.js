// Donut Controller
// Maneja las solicitudes HTTP relacionadas con los donuts,
// interactuando con el servicio de donuts para realizar operaciones CRUD.
// Cada función del controlador corresponde a una ruta específica y se encarga de procesar la solicitud,

const donutService = require("../services/donutService");

// Controlador para manejar las operaciones CRUD de los donuts

// Función para obtener todos los donuts
const getDonuts = async (req, res) => {
  try {
    const donuts = await donutService.getAllDonuts();
    res.status(200).json(donuts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Función para obtener un donut por su ID
const getDonut = async (req, res) => {
  try {
    const donut = await donutService.getDonutById(req.params.id);
    if (!donut) {
      return res.status(404).json({ message: "Donut not found" });
    }
    res.status(200).json(donut);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Función para crear un nuevo donut
const createDonut = async (req, res) => {
  console.log("REQ BODY:", req.body);
  try {
    const donut = await donutService.createDonut(req.body);
    res.status(201).json(donut);
  } catch (error) {
    console.error("CREATE DONUT ERROR:", error.message);
    res.status(400).json({ message: error.message });
  }
};

// Función para actualizar un donut existente
const updateDonut = async (req, res) => {
  try {
    const updatedDonut = await donutService.updateDonut(
      req.params.id,
      req.body,
    );
    if (!updatedDonut) {
      return res.status(404).json({ message: "Donut not found" });
    }
    res.status(200).json(updatedDonut);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Función para eliminar un donut
const deleteDonut = async (req, res) => {
  try {
    const deletedDonut = await donutService.deleteDonut(req.params.id);
    if (!deletedDonut) {
      return res.status(404).json({ message: "Donut not found" });
    }
    res.status(200).json({ message: "Donut deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDonuts,
  getDonut,
  createDonut,
  updateDonut,
  deleteDonut,
};
