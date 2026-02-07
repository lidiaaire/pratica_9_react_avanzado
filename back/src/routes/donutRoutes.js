const express = require("express");
const router = express.Router();
const donutController = require("../controllers/donutController");

router.get("/", donutController.getDonuts);
router.get("/:id", donutController.getDonut);
router.post("/", donutController.createDonut);
router.put("/:id", donutController.updateDonut);
router.delete("/:id", donutController.deleteDonut);

module.exports = router;
