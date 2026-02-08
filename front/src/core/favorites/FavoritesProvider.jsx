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

  // Cargar favoritos UNA VEZ
  useEffect(() => {
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

    loadFavorites();
  }, []);

  // Añadir favorito (fuente única de verdad)
  const addToFavorites = async (donutId) => {
    try {
      const newFavorite = await addFavorite(donutId);
      setFavorites((prev) => [...prev, newFavorite]);
    } catch (error) {
      throw error;
    }
  };

  // Eliminar favorito
  const removeFromFavorites = async (favoriteId) => {
    try {
      await removeFavorite(favoriteId);
      setFavorites((prev) => prev.filter((fav) => fav._id !== favoriteId));
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
