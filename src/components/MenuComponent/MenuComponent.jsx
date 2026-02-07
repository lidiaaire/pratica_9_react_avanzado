import Link from "next/link";
import React from "react";

export default function MenuComponent() {
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
          <Link href="/create">Create Donut</Link>
        </li>
        <li>
          <Link href="/favorites">Favorites</Link>
        </li>
        <li>
          <Link href="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
