const BASE_URL = "http://localhost:9000";

export const getDonuts = async () => {
  const response = await fetch(`${BASE_URL}/donuts`);
  if (!response.ok) {
    throw new Error("Error fetching donuts");
  }
  return response.json();
};

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
