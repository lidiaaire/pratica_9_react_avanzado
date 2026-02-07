import CreateDonutFormComponent from "@/components/Donuts/CreateDonutFormComponent/CreateDonutFormComponent";
import MenuComponent from "@/components/MenuComponent/MenuComponent";
import { DonutsContext } from "@/core/donuts/DonutsContext";
import { useRouter } from "next/router";
import React, { useContext } from "react";

export default function CreateDonutPage() {
  const router = useRouter();
  const { createDonut } = useContext(DonutsContext);

  const handleCreate = (newDonut) => {
    createDonut(newDonut);
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
