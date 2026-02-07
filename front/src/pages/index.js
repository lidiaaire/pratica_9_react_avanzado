import React, { useEffect, useState } from "react";
import { getDonuts } from "@/api/DonutsApi";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "@/api/DonutsFavoritesApi";
import MenuComponent from "@/components/MenuComponent/MenuComponent";

export default function Home() {
  const [donuts, setDonuts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getDonuts().then(setDonuts);
    getFavorites().then(setFavorites);
  }, []);

  const handleAddFavorite = async (donutId) => {
    const newFav = await addFavorite(donutId);
    setFavorites((prev) => [...prev, newFav]);
  };

  const handleRemoveFavorite = async (donutId) => {
    const favoriteToRemove = favorites.find((fav) => fav.donutId === donutId);

    if (!favoriteToRemove) return;

    await removeFavorite(favoriteToRemove.id);

    setFavorites((prev) => prev.filter((fav) => fav.donutId !== donutId));
  };

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
          onAddFavorite={handleAddFavorite}
          onRemoveFavorite={handleRemoveFavorite}
        />
      </section>
    </main>
  );
}
