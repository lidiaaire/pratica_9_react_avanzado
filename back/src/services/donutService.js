// Donut Service
// Toda la logica de negocio relacionada con los donuts se maneja aquí.
// Este servicio interactúa con el modelo de datos para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los donuts.

const Donut = require("../models/donutModel");

// Funciones del servicio de donuts

// Obtener todos los donuts
const getAllDonuts = async () => {
  return await Donut.find();
};

// Obtener un donut por su ID
const getDonutById = async (id) => {
  return await Donut.findById(id);
};

// Crear un nuevo donut
const createDonut = async (donutData) => {
  return await Donut.create(donutData);
};

// Actualizar un donut existente
const updateDonut = async (id, donutData) => {
  return await Donut.findByIdAndUpdate(id, donutData, {
    new: true,
  });
};

// Eliminar un donut por su ID
const deleteDonut = async (id) => {
  return await Donut.findByIdAndDelete(id);
};

module.exports = {
  getAllDonuts,
  getDonutById,
  createDonut,
  updateDonut,
  deleteDonut,
};
