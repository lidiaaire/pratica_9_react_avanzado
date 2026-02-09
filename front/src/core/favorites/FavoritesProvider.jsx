import { useEffect, useState } from "react";
import { FavoritesContext } from "./FavoritesContext";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "@/api/DonutsFavoritesApi";

export default function FavoritesProvider({ children }) {
  // Estado global de favoritos
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * ============================
   * CARGA DE FAVORITOS
   * ============================
   * Fuente única de verdad
   */
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

  // Cargar favoritos UNA VEZ al iniciar la app
  useEffect(() => {
    loadFavorites();
  }, []);

  /**
   * ============================
   * AÑADIR FAVORITO
   * ============================
   * Tras añadir, recargamos favoritos populateados
   */
  const addToFavorites = async (donutId) => {
    try {
      await addFavorite(donutId);
      await loadFavorites();
    } catch (error) {
      setError("Error al añadir el favorito");
    }
  };

  /**
   * ============================
   * ELIMINAR FAVORITO
   * ============================
   * Tras eliminar, recargamos favoritos
   */
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
