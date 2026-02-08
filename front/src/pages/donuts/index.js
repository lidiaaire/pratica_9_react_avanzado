import React, { useEffect, useState } from "react";
import MenuComponent from "../../components/MenuComponent/MenuComponent";
import DonutListComponent from "../../components/Donuts/DonutListComponent/DonutListComponent";
import { getDonuts } from "@/api/DonutsApi";

export default function DonutsPage() {
  // Estados de la pagina
  // Donuts que obtenemos del backend
  const [donuts, setDonuts] = useState([]);
  // Estado de carga global de la pagina
  const [loading, setLoading] = useState(true);
  // Estado de error
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

  // Render condicional basado en el estado de carga y error
  if (loading) {
    return <p> Cargando donuts ..</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  // Renderizado principal de la pagina de donuts

  return (
    <div>
      <MenuComponent />

      <h1>Listado de Donuts</h1>

      <DonutListComponent donuts={donuts} />
    </div>
  );
}
