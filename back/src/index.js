// back
// Configuración del servidor Express
// Rutas para donuts y favoritos
// Conexión a la base de datos MongoDB
// CORS para permitir solicitudes desde el front
// El servidor escucha en el puerto 9000

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
