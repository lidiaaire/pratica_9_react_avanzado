const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
require("dotenv").config();

const connectDB = require("./config/db");
const donutRoutes = require("./routes/donutRoutes");
const donutFavoriteRoutes = require("./routes/donutFavoriteRoutes");

connectDB();

app.use("/api/donuts", donutRoutes);
app.use("/api/favorites", donutFavoriteRoutes);

app.listen(9000, () => {
  console.log("Server running on port 9000");
});
