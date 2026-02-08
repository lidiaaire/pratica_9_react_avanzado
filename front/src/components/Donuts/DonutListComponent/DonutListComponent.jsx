import React from "react";
import DonutItemComponent from "../DonutItemComponent/DonutItemComponent";

export default function DonutListComponent({ donuts = [] }) {
  return (
    <div>
      <h2>Listado de Donuts</h2>

      {donuts.map((donut) => (
        <DonutItemComponent key={donut._id} donut={donut} />
      ))}
    </div>
  );
}
