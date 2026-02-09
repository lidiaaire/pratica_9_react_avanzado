// Pagina de listado de donuts
// Permite acceder directamente a la lista

import React, { useEffect, useState } from "react";
import DonutListComponent from "../../components/Donuts/DonutListComponent/DonutListComponent";
import { getDonuts } from "@/api/DonutsApi";

export default function DonutsPage() {
  const [donuts, setDonuts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carga del listado de donuts al montar el componente
  const loadDonuts = async () => {
    try {
      setLoading(true);
      const data = await getDonuts();
      setDonuts(data);
    } catch (error) {
      setError("Error al cargar los donuts.");
    } finally {
      setLoading(false);
    }
  };
  // UseEffect de carga inicial
  // SOLO SE EJECUTA UNA VEZ AL INICIAR LA PAGINA

  useEffect(() => {
    loadDonuts();
  }, []);

  if (loading) {
    return <p> Cargando donuts ..</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Listado de Donuts</h1>

      <DonutListComponent donuts={donuts} />
    </div>
  );
}
