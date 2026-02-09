// API para manejar los favoritos de donuts
// Proporciona funciones para obtener, agregar y eliminar favoritos desde el backend
// Utiliza fetch para comunicarse con el backend en http://localhost:9000/api/favorites

const BASE_URL = "http://localhost:9000/api/favorites";

// Obtener todos los favoritos
export const getFavorites = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Error fetching favorites");
  }
  return response.json();
};

// Añadir un faovirto (donutId)
export const addFavorite = async (donutId) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ donutId }),
  });

  if (!response.ok) {
    throw new Error("Error adding favorite");
  }

  return response.json();
};

// Eliminar un favorito por su ID
export const removeFavorite = async (favoriteId) => {
  const response = await fetch(`${BASE_URL}/${favoriteId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error removing favorite");
  }
  return;
};
