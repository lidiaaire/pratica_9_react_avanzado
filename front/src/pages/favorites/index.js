// Pagina de favoritos
// No consume la lista de donuts, consume la lista de favoritos desde el context
// Renderiza un componente de lista de favoritos, pasandole la lista y la funcion de eliminar favorito

import React, { useContext } from "react";
// Esta pagina solo decide QUE pasar , no COMO se pinta
import FavoriteListComponent from "../../components/Favorites/FavoritesListComponent/FavoritesListComponent";
// Y de esta pagina se consume el contexto de favoritos para obtener la lista y la funcion de eliminar favorito
import { FavoritesContext } from "@/core/favorites/FavoritesContext";

export default function FavoritesPage() {
  const { favorites, loading, error, removeFromFavorites } =
    useContext(FavoritesContext);

  if (loading) {
    return <p> Cargando favoritos ..</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

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
