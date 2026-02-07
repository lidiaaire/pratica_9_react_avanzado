import { donutsMock } from "@/mocks/donutMock";
import React, { useState } from "react";
import { DonutsContext } from "./DonutsContext";

export default function DonutsProvider({ children }) {
  const [donuts, setDonuts] = useState(donutsMock);

  const createDonut = (newDonut) => {
    setDonuts((prev) => [...prev, newDonut]);
  };

  const updateDonut = (updatedDonut) => {
    setDonuts((prev) =>
      prev.map((d) => (d.id === updatedDonut.id ? updatedDonut : d)),
    );
  };

  const getDonutById = (id) => {
    return donuts.find((d) => String(d.id) === String(id));
  };

  const deleteDonut = (id) => {
    setDonuts((prev) => prev.filter((d) => String(d.id) !== String(id)));
  };

  return (
    <DonutsContext.Provider
      value={{
        donuts,
        createDonut,
        updateDonut,
        getDonutById,
        deleteDonut,
      }}
    >
      {children}
    </DonutsContext.Provider>
  );
}
