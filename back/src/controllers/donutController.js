const donutService = require("../services/donutService");

const getDonuts = async (req, res) => {
  try {
    const donuts = await donutService.getAllDonuts();
    res.status(200).json(donuts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
