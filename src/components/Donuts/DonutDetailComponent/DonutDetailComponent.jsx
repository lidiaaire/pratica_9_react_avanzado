export default function DonutDetailComponent({ donut }) {
  return (
    <div>
      <h2>{donut.nombre}</h2>
      <p>Sabor: {donut.sabor}</p>
      <p>Precio: {donut.precio} €</p>
    </div>
  );
}
