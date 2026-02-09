import React from "react";
import styles from "./FavoritesItemComponent.module.css";

export default function FavoritesItemComponent({ favorite, onRemoveFavorite }) {
  const donut = favorite.donutId;

  if (!donut) return null;

  return (
    <article className={styles.card}>
      <p className={styles.name}>{donut.name}</p>
      <p className={styles.price}>Precio: {donut.price} €</p>

      <button
        className="btn-danger"
        onClick={() => onRemoveFavorite(favorite._id)}
      >
        Eliminar
      </button>
    </article>
  );
}
