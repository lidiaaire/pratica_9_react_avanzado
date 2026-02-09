import React, { useState } from "react";

export default function EditDonutFormComponent({ donut, onCancel, onSave }) {
  const [name, setName] = useState(donut.name);
  const [price, setPrice] = useState(donut.price);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...donut,
      name,
      price,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Donut</h2>

      <div>
        <label>Nombre:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Precio:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
        />
      </div>

      <button type="submit" className="btn-primary">
        Guardar
      </button>

      <button type="button" onClick={onCancel}>
        Cancelar
      </button>
    </form>
  );
}
