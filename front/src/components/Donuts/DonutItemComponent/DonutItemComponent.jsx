import Link from "next/link";

export default function DonutItemComponent({ donut }) {
  return (
    <div>
      <p>
        {donut.nombre} – {donut.precio} €
      </p>

      <Link href={`/donuts/${donut.id}`}>Ver detalle</Link>
    </div>
  );
}
