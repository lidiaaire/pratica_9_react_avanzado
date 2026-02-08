const BASE_URL = "http://localhost:9000/api";

/**
 * ============================
 * GET /donuts
 * ============================
 * Obtener todos los donuts
 */
export const getDonuts = async () => {
  const response = await fetch(`${BASE_URL}/donuts`);
  if (!response.ok) {
    throw new Error("Error fetching donuts");
  }
  return response.json();
};

/**
 * ============================
 * GET /donuts/:id
 * ============================
 * Obtener un donut por ID
 */
export const getDonutById = async (id) => {
  const response = await fetch(`${BASE_URL}/donuts/${id}`);
  if (!response.ok) {
    throw new Error("Error fetching donut");
  }
  return response.json();
};

/**
 * ============================
 * POST /donuts
 * ============================
 * Crear un donut
 */
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

/**
 * ============================
 * PUT /donuts/:id
 * ============================
 * Actualizar un donut
 */
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

/**
 * ============================
 * DELETE /donuts/:id
 * ============================
 * Eliminar un donut
 */
export const deleteDonut = async (id) => {
  const response = await fetch(`${BASE_URL}/donuts/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error deleting donut");
  }

  return response.json();
};
