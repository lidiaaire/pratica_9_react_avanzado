const BASE_URL = "http://localhost:9000";

export const getFavorites = async () => {
  const response = await fetch(`${BASE_URL}/favorites`);
  if (!response.ok) {
    throw new Error("Error fetching favorites");
  }
  return response.json();
};

export const addFavorite = async (donutId) => {
  const response = await fetch(`${BASE_URL}/favorites`, {
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

export const removeFavorite = async (favoriteId) => {
  const response = await fetch(`${BASE_URL}/favorites/${favoriteId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error removing favorite");
  }

  return response.json();
};
