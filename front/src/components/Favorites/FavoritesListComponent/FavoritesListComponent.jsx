import React from "react";
import FavoriteItemComponent from "../FavoritesItemComponent/FavoritesItemComponent";

export default function FavoriteListComponent({ favorites, onRemoveFavorite }) {
  if (!favorites || favorites.length === 0) {
    return <p>No tienes donuts favoritos aún.</p>;
  }

  return (
    <div>
      <h2>Mis Donuts Favoritos</h2>

      {favorites.map((favorite) => (
        <FavoriteItemComponent
          key={favorite._id}
          favorite={favorite}
          onRemoveFavorite={onRemoveFavorite}
        />
      ))}
    </div>
  );
}
