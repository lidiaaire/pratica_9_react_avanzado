// Componente que muestra un donut individual
// Recibe el donut como prop
// Muestra el nombre, precio y un link al detalle
// Permite añadir o quitar de favoritos usando el context

import Link from "next/link";
import { useContext } from "react";
import { FavoritesContext } from "@/core/favorites/FavoritesContext";
import styles from "./DonutItemComponent.module.css";

export default function DonutItemComponent({ donut }) {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  const favoriteFound = favorites.find((favorite) => {
    if (typeof favorite.donutId === "string") {
      return favorite.donutId === donut._id;
    }

    return favorite.donutId?._id === donut._id;
  });

  const isFavorite = Boolean(favoriteFound);

  return (
    <article className={styles.card}>
      <p className={styles.name}>
        {donut.name}
        <span className={styles.price}> · {donut.price} €</span>
      </p>

      <div className={styles.actions}>
        <Link href={`/donuts/${donut._id}`} className={styles.link}>
          Ver detalle
        </Link>

        {isFavorite ? (
          <button
            className="btn-danger"
            onClick={() => removeFromFavorites(favoriteFound._id)}
          >
            Quitar de favoritos
          </button>
        ) : (
          <button
            className="btn-success"
            onClick={() => addToFavorites(donut._id)}
          >
            Añadir a favoritos
          </button>
        )}
      </div>
    </article>
  );
}
