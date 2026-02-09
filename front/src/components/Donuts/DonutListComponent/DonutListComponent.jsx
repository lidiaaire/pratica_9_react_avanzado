// Componente que muestra la lista de donuts
// Recibe la lista de donuts como prop
// Mapea cada donut a un DonutItemComponent

import React from "react";
import DonutItemComponent from "../DonutItemComponent/DonutItemComponent";
import styles from "./DonutListComponent.module.css";

export default function DonutListComponent({ donuts = [] }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Listado de Donuts</h2>

      {donuts.length === 0 ? (
        <p className={styles.empty}>No hay donuts disponibles</p>
      ) : (
        <div className={styles.list}>
          {donuts.map((donut) => (
            <DonutItemComponent key={donut._id} donut={donut} />
          ))}
        </div>
      )}
    </section>
  );
}
