export function Card({ card, onComprar }) {
  return (
    <>
      <h2>{card.nombre}</h2>
      <img src={card.img} alt={card.nombre} />
      <div className="precio">
        <label htmlFor={"precio" + card.key}>Precio: </label>
        <input
          type="text"
          value={card.precio}
          id={"precio" + card.key}
          readOnly
        />
        <span>$</span>
      </div>
      <button type="button" onClick={onComprar}>
        Comprar
      </button>
    </>
  );
}
