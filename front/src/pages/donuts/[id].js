import { useState, useContext } from "react";
import { useRouter } from "next/router";
import MenuComponent from "../../components/MenuComponent/MenuComponent";
import DonutDetailComponent from "../../components/Donuts/DonutDetailComponent/DonutDetailComponent";
import EditDonutFormComponent from "../../components/Donuts/EditDonutFormComponent/EditDonutFormComponent";
import { DonutsContext } from "../../core/donuts/DonutsContext";

export default function DonutDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const { getDonutById, updateDonut, deleteDonut } = useContext(DonutsContext);
  const [isEditing, setIsEditing] = useState(false);

  if (!id) {
    return <p>Cargando donut...</p>;
  }

  const donut = getDonutById(id);

  if (!donut) {
    return <p>Donut no encontrado</p>;
  }
  return (
    <div>
      <MenuComponent />
      <h1>Donut Detail Page</h1>

      {!isEditing && (
        <>
          <DonutDetailComponent donut={donut} />
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button
            onClick={() => {
              deleteDonut(donut.id);
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
          onSave={(updatedDonut) => {
            updateDonut(updatedDonut);
            setIsEditing(false);
          }}
        />
      )}
    </div>
  );
}
