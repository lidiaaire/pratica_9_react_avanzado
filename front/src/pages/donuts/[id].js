import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MenuComponent from "../../components/MenuComponent/MenuComponent";
import DonutDetailComponent from "../../components/Donuts/DonutDetailComponent/DonutDetailComponent";
import EditDonutFormComponent from "../../components/Donuts/EditDonutFormComponent/EditDonutFormComponent";
import { getDonutById, updateDonut, deleteDonut } from "@/api/DonutsApi";

export default function DonutDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // Estado del donut individual
  const [donut, setDonut] = useState(null);
  // Estado de edición
  const [isEditing, setIsEditing] = useState(false);
  // Estados reales de red
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * ============================
   * CARGA DEL DONUT POR ID
   * ============================
   * Esta página usa API directa, no Context
   */
  useEffect(() => {
    if (!id) return;

    const fetchDonut = async () => {
      try {
        setLoading(true);
        const data = await getDonutById(id);
        setDonut(data);
      } catch (error) {
        setError("Error al cargar el donut");
      } finally {
        setLoading(false);
      }
    };

    fetchDonut();
  }, [id]);

  /**
   * ============================
   * RENDER CONDICIONAL
   * ============================
   */
  if (loading) return <p>Cargando donut...</p>;
  if (error) return <p>{error}</p>;
  if (!donut) return <p>Donut no encontrado</p>;

  /**
   * ============================
   * RENDER PRINCIPAL
   * ============================
   */
  return (
    <div>
      <MenuComponent />
      <h1>Donut Detail Page</h1>

      {!isEditing && (
        <>
          <DonutDetailComponent donut={donut} />

          <button onClick={() => setIsEditing(true)}>Editar</button>

          <button
            onClick={async () => {
              await deleteDonut(donut._id); // 🔑 id real de Mongo
              router.push("/donuts");
            }}
          >
            Eliminar
          </button>
        </>
      )}

      {isEditing && (
        <EditDonutFormComponent
          donut={donut}
          onCancel={() => setIsEditing(false)}
          onSave={async (updatedDonut) => {
            await updateDonut(updatedDonut);
            setIsEditing(false);
          }}
        />
      )}
    </div>
  );
}
