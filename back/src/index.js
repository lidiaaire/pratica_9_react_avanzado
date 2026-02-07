const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
require("dotenv").config();

const connectDB = require("./config/db");
const donutRoutes = require("./routes/donutRoutes");

connectDB();

app.use("/donuts", donutRoutes);

app.listen(9000, () => {
  console.log("Server running on port 9000");
});
