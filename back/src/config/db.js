// Configuración de la conexión a MongoDB usando Mongoose
// Carga la URI de conexión desde las variables de entorno
// Exporta una función para conectar a la base de datos

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
