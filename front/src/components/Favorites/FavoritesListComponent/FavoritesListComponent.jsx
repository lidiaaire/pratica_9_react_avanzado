import React from "react";
import FavoriteItemComponent from "../FavoritesItemComponent/FavoritesItemComponent";
import styles from "./FavoritesListComponent.module.css";

export default function FavoritesListComponent({
  favorites,
  onRemoveFavorite,
}) {
  if (!favorites || favorites.length === 0) {
    return <p className={styles.empty}>No tienes donuts favoritos aún.</p>;
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Mis Donuts Favoritos</h2>

      <div className={styles.list}>
        {favorites.map((favorite) => (
          <FavoriteItemComponent
            key={favorite._id}
            favorite={favorite}
            onRemoveFavorite={onRemoveFavorite}
          />
        ))}
      </div>
    </section>
  );
}
