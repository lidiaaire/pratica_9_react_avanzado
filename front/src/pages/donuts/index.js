import MenuComponent from "../../components/MenuComponent/MenuComponent";
import DonutListComponent from "../../components/Donuts/DonutListComponent/DonutListComponent";
import React from "react";

export default function DonutsPage() {
  return (
    <div>
      <h1> Donuts List Page </h1>
      <MenuComponent />
      <DonutListComponent />
    </div>
  );
}
