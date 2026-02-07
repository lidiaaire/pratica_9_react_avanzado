const BASE_URL = "http://localhost:9000";

export const getDonuts = async () => {
  const response = await fetch(`${BASE_URL}/donuts`);
  if (!response.ok) {
    throw new Error("Error fetching donuts");
  }
  return response.json();
};
