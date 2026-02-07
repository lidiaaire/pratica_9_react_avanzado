import React, { useContext } from "react";
import DonutItemComponent from "../DonutItemComponent/DonutItemComponent";
import { DonutsContext } from "@/core/donuts/DonutsContext";

export default function DonutListComponent() {
  const { donuts } = useContext(DonutsContext);
  return (
    <div>
      <h2>Listado de Donuts </h2>

      {donuts.map((donut) => (
        <DonutItemComponent key={donut.id} donut={donut} />
      ))}
    </div>
  );
}
