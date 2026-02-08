import Link from "next/link";

export default function DonutItemComponent({ donut }) {
  return (
    <div>
      {/* 
        Usamos los campos reales que vienen de Mongo:
        - name
        - price
      */}
      <p>
        {donut.name} – {donut.price} €
      </p>

      <Link href={`/donuts/${donut._id}`}>Ver detalle</Link>
    </div>
  );
}
