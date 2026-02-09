// Archivo para manejar las llamadas a la API relacionadas con los donuts
// Aquí definimos funciones para obtener, crear, actualizar y eliminar donuts desde el backend

const BASE_URL = "http://localhost:9000/api";

// Obtenemos la lista de donuts desde el backend
export const getDonuts = async () => {
  const response = await fetch(`${BASE_URL}/donuts`);
  if (!response.ok) {
    throw new Error("Error fetching donuts");
  }
  return response.json();
};

// Obtenemos un donut específico por su ID
export const getDonutById = async (id) => {
  const response = await fetch(`${BASE_URL}/donuts/${id}`);
  if (!response.ok) {
    throw new Error("Error fetching donut");
  }
  return response.json();
};

// Creamos un nuevo donut
export const createDonut = async (newDonut) => {
  const response = await fetch(`${BASE_URL}/donuts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDonut),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("BACKEND ERROR:", data);
    throw new Error("Error creating donut");
  }

  return data;
};

// Actualizamos un donut existente
export const updateDonut = async (updatedDonut) => {
  const response = await fetch(`${BASE_URL}/donuts/${updatedDonut._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedDonut),
  });

  if (!response.ok) {
    throw new Error("Error updating donut");
  }

  return response.json();
};

// Eliminamos un donut
export const deleteDonut = async (id) => {
  const response = await fetch(`${BASE_URL}/donuts/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error deleting donut");
  }

  return response.json();
};
