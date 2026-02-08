import React, { useContext, useEffect, useState } from "react";
import { getDonuts } from "@/api/DonutsApi";
import MenuComponent from "@/components/MenuComponent/MenuComponent";
import { FavoritesContext } from "@/core/favorites/FavoritesContext";

export default function Home() {
  // Donuts que obtenemos del backend
  const [donuts, setDonuts] = useState([]);
  // Estado de carga global de la pagina
  const [loading, setLoading] = useState(true);
  // Estado de error para fallos de red o de backend
  const [error, setError] = useState(null);

  // Estado de favoritos sincronizado con el backend
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  // Cargar donuts y favoritos al montar el componente
  // SOLO SE EJECUTA UNA VEZ AL INICIAR LA PAGINA
  useEffect(() => {
    const loadDonuts = async () => {
      try {
        setLoading(true);
        const donutsData = await getDonuts();
        setDonuts(donutsData);
      } catch (error) {
        setError("Error al cargar los donuts.");
      } finally {
        setLoading(false);
      }
    };

    loadDonuts();
  }, []);

  // Renderizado condicional basado en el estado de carga y error
  if (loading) {
    return <p> Cargando donuts ..</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Renderizado principal de la home
  return (
    <main>
      <header>
        <h1>Donuts App</h1>
        <p>Elige tu donuts favorito</p>
        <p>Favoritos: {favorites.length}</p>
      </header>

      <section>
        <MenuComponent
          donuts={donuts}
          favorites={favorites}
          onAddFavorite={addToFavorites}
          onRemoveFavorite={removeFromFavorites}
        />
      </section>
    </main>
  );
}
