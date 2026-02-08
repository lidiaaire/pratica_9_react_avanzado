import React from "react";

export default function MenuComponent({
  donuts = [],
  favorites = [],
  onAddFavorite,
  onRemoveFavorite,
}) {
  const isFavorite = (donutId) =>
    favorites.some((fav) => fav.donutId._id === donutId);

  return (
    <div>
      {donuts.map((donut) => {
        const favorite = isFavorite(donut._id);

        return (
          <div key={donut._id}>
            <span>{donut.name}</span>

            {!favorite && (
              <button onClick={() => onAddFavorite(donut._id)}>
                Añadir a favoritos
              </button>
            )}

            {favorite && (
              <button onClick={() => onRemoveFavorite(donut._id)}>
                Quitar de favoritos
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
