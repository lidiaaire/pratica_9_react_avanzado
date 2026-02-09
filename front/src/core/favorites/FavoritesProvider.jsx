// Proveedor de contexto para los favoritos
// Hace la llamada al back para cargar los favoritos y compartirlos en toda la aplicación
// También proporciona funciones para añadir y eliminar favoritos

import { useEffect, useState } from "react";
import { FavoritesContext } from "./FavoritesContext";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "@/api/DonutsFavoritesApi";

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadFavorites = async () => {
    try {
      setLoading(true);
      const data = await getFavorites();
      setFavorites(data);
    } catch (error) {
      setError("Error al cargar los favoritos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  const addToFavorites = async (donutId) => {
    try {
      await addFavorite(donutId);
      await loadFavorites();
    } catch (error) {
      setError("Error al añadir el favorito");
    }
  };

  const removeFromFavorites = async (favoriteId) => {
    try {
      await removeFavorite(favoriteId);
      await loadFavorites();
    } catch (error) {
      setError("Error al eliminar el favorito");
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        loading,
        error,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
