// Componente para crear un nuevo donut
// Recibe una función onCreate como prop
// Muestra un formulario con nombre, sabor y precio
// Al enviar el formulario, llama a onCreate con el nuevo donut

import React, { useState } from "react";

export default function CreateDonutFormComponent({ onCreate }) {
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [precio, setPrecio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDonut = {
      name: nombre,
      description: sabor,
      price: Number(precio),
      isAvailable: true,
    };
    if (!nombre || !sabor || !precio) {
      alert("Todos los campos son obligatorios");
      return;
    }
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
