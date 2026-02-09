// Pagina de creacion de un nuevo donut
// Crea el donut usando un formulario

import { createDonut } from "@/api/DonutsApi";
import CreateDonutFormComponent from "../../components/Donuts/CreateDonutFormComponent/CreateDonutFormComponent";
import { useRouter } from "next/router";

export default function CreateDonutPage() {
  const router = useRouter();

  const handleCreate = async (newDonut) => {
    await createDonut(newDonut);
    router.push("/donuts");
  };

  return (
    <div>
      <h1>Create Donut Page</h1>

      <CreateDonutFormComponent onCreate={handleCreate} />
    </div>
  );
}
