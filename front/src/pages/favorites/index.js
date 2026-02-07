import React from "react";
import MenuComponent from "../../components/MenuComponent/MenuComponent";
import FavoriteListComponent from "../../components/Favorites/FavoritesListComponent/FavoritesListComponent";

export default function FavoritesPage() {
  return (
    <div>
      <h1>Favorites Page</h1>
      <MenuComponent />
      <FavoriteListComponent />
    </div>
  );
}
