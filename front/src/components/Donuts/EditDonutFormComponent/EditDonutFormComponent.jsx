import React, { useState } from "react";

export default function EditDonutFormComponent({ donut, onCancel, onSave }) {
  const [nombre, setNombre] = useState(donut.nombre);
  const [sabor, setSabor] = useState(donut.sabor);
  const [precio, setPrecio] = useState(donut.precio);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...donut,
      nombre,
      sabor,
      precio,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Donut Form Component</h2>

      <div>
        <label>Nombre:</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div>
        <label>Sabor:</label>
        <input value={sabor} onChange={(e) => setSabor(e.target.value)} />
      </div>
      <div>
        <label>Precio:</label>
        <input value={precio} onChange={(e) => setPrecio(e.target.value)} />
      </div>

      <button type="submit">Guardar </button>
      <button type="button" onClick={onCancel}>
        Cancelar
      </button>
    </form>
  );
}
