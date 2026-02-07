import MenuComponent from "../../components/MenuComponent/MenuComponent";
import DonutListComponent from "../../components/Donuts/DonutListComponent/DonutListComponent";
import React, { useEffect, useState } from "react";
import { getDonuts } from "@/api/DonutsApi";

export default function DonutsPage() {
  const [donuts, setDonuts] = useState([]);
  const loadDonuts = async () => {
    const data = await getDonuts();
    setDonuts(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadDonuts();
  }, []);

  return (
    <div>
      <h1>Listado de Donuts</h1>

      {donuts.map((donut) => (
        <div key={donut._id}>
          {donut.name} - {donut.price} €
        </div>
      ))}
    </div>
  );
}
