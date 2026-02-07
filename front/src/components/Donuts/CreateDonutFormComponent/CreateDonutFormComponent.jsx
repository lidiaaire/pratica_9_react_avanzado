import React, { useState } from "react";

export default function CreateDonutFormComponent({ onCreate }) {
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [precio, setPrecio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDonut = {
      id: Date.now().toString(),
      nombre,
      sabor,
      precio,
    };
    onCreate(newDonut);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Nuevo Donut</h1>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label>Sabor:</label>
        <input
          type="text"
          value={sabor}
          onChange={(e) => setSabor(e.target.value)}
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
      </div>
      <button type="submit">Crear Donut</button>
    </form>
  );
}
