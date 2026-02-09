// Componente que muestra el detalle de un donut
// Recibe el donut como prop
// Muestra el nombre y precio

export default function DonutDetailComponent({ donut }) {
  return (
    <div>
      <h2>{donut.name}</h2>
      <p>Precio: {donut.price} €</p>
    </div>
  );
}
