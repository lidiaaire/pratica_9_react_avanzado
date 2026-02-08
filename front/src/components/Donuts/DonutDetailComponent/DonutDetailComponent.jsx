export default function DonutDetailComponent({ donut }) {
  return (
    <div>
      <h2>{donut.name}</h2>
      <p>Precio: {donut.price} €</p>
    </div>
  );
}
