import React, { useContext, useEffect, useState } from "react";
import { getDonuts } from "@/api/DonutsApi";
import { FavoritesContext } from "@/core/favorites/FavoritesContext";
import DonutListComponent from "@/components/Donuts/DonutListComponent/DonutListComponent";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [donuts, setDonuts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { favorites } = useContext(FavoritesContext);

  useEffect(() => {
    const loadDonuts = async () => {
      try {
        setLoading(true);
        const donutsData = await getDonuts();
        setDonuts(donutsData);
      } catch (error) {
        setError("Error al cargar los donuts.");
      } finally {
        setLoading(false);
      }
    };

    loadDonuts();
  }, []);

  if (loading) return <p>Cargando donuts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Donuts App</h1>
        <p className={styles.subtitle}>Elige tu donuts favorito</p>
        <p className={styles.counter}>
          Favoritos: <span>{favorites.length}</span>
        </p>
      </header>

      <DonutListComponent donuts={donuts} />
    </section>
  );
}
