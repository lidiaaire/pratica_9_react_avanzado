import Link from "next/link";
import layout from "@/styles/layout.module.css";
import styles from "./NavBarComponent.module.css";

export default function NavBarComponent() {
  return (
    <nav className={styles.navbar}>
      <div className={layout.container}>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/donuts">Donuts</Link>
          </li>
          <li>
            <Link href="/create">Crear Donut</Link>
          </li>
          <li>
            <Link href="/favorites">Favoritos</Link>
          </li>
          <li>
            <Link href="/contact">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
