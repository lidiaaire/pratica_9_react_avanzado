import { createDonut } from "@/api/DonutsApi";
import CreateDonutFormComponent from "../../components/Donuts/CreateDonutFormComponent/CreateDonutFormComponent";
import MenuComponent from "../../components/MenuComponent/MenuComponent";
import { DonutsContext } from "../../core/donuts/DonutsContext";
import { useRouter } from "next/router";
import React, { useContext } from "react";

export default function CreateDonutPage() {
  const router = useRouter();

  const handleCreate = async (newDonut) => {
    await createDonut(newDonut);
    router.push("/donuts");
  };

  return (
    <div>
      <MenuComponent />
      <h1>Create Donut Page</h1>

      <CreateDonutFormComponent onCreate={handleCreate} />
    </div>
  );
}
