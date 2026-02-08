import React, { useContext, useEffect, useState } from "react";

import FavoriteListComponent from "../../components/Favorites/FavoritesListComponent/FavoritesListComponent";

import { FavoritesContext } from "@/core/favorites/FavoritesContext";

export default function FavoritesPage() {
  const { favorites, loading, error, removeFromFavorites } =
    useContext(FavoritesContext);

  // Renderizado condicional basado en el estado de carga y error
  if (loading) {
    return <p> Cargando favoritos ..</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  // Renderizado principal de la pagina de favoritos

  return (
    <div>
      <h1>Favorites Page</h1>

      <FavoriteListComponent
        favorites={favorites}
        onRemoveFavorite={removeFromFavorites}
      />
    </div>
  );
}
