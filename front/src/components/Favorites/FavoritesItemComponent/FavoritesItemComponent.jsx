import React from "react";

export default function FavoritesItemComponent({ favorite, onRemoveFavorite }) {
  const donut = favorite.donutId;

  if (!donut) return null;

  return (
    <div>
      <p>{donut.name}</p>
      <p>Precio: {donut.price} €</p>

      <button
        onClick={() => {
          console.log("BORRAR FAVORITO:", favorite._id);
          onRemoveFavorite(favorite._id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
}
