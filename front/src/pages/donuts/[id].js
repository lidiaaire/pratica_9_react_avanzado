import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DonutDetailComponent from "@/components/Donuts/DonutDetailComponent/DonutDetailComponent";
import EditDonutFormComponent from "@/components/Donuts/EditDonutFormComponent/EditDonutFormComponent";
import { getDonutById, updateDonut, deleteDonut } from "@/api/DonutsApi";
import styles from "@/styles/DonutDetailPage.module.css";

export default function DonutDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [donut, setDonut] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Cargando donut...</p>;
  if (error) return <p>{error}</p>;
  if (!donut) return <p>Donut no encontrado</p>;

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{donut.name}</h1>

      {!isEditing && (
        <>
          <DonutDetailComponent donut={donut} />

          <div className={styles.actions}>
            <button
              type="button"
              className="btn-primary"
              onClick={() => setIsEditing(true)}
            >
              Editar
            </button>

            <button
              type="button"
              className="btn-danger"
              onClick={async () => {
                await deleteDonut(donut._id);
                router.push("/donuts");
              }}
            >
              Eliminar
            </button>
          </div>
        </>
      )}

      {isEditing && (
        <EditDonutFormComponent
          donut={donut}
          onCancel={() => setIsEditing(false)}
          onSave={async (updatedDonut) => {
            const savedDonut = await updateDonut(updatedDonut);
            setDonut(savedDonut); // 🔑 ACTUALIZA ESTADO
            setIsEditing(false); // 🔑 VUELVE A DETALLE
          }}
        />
      )}
    </section>
  );
}
