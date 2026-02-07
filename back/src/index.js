const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const donutRoutes = require("./routes/donutRoutes");
const favoriteRoutes = require("./routes/donutFavoriteRoutes");

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/donuts", donutRoutes);
app.use("/favorites", favoriteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
