const Donut = require("../models/donutModel");

const getAllDonuts = async () => {
  return await Donut.find();
};

const getDonutById = async (id) => {
  return await Donut.findById(id);
};

const createDonut = async (donutData) => {
  return await Donut.create(donutData);
};

const updateDonut = async (id, donutData) => {
  return await Donut.findByIdAndUpdate(id, donutData, {
    new: true,
  });
};

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
