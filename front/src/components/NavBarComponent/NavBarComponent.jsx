import Link from "next/link";

export default function NavbarComponent() {
  return (
    <nav>
      <ul>
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
    </nav>
  );
}
