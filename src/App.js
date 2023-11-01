import { useState } from 'react';
import { Card } from './components/Card';

const reyes = [
  {
    key: 1,
    nombre: "Atanagildo",
    color: "darkolivegreen",
    precio: 178,
    img: "https://html6.es/img/rey_atanagildo.png"
  }, {
    key: 2,
    nombre: "Ervigio",
    color: "crimson",
    precio: 169,
    img: "https://html6.es/img/rey_ervigio.png"
  }, {
    key: 3,
    nombre: "Ataúlfo",
    color: "peru",
    precio: 81,
    img: "https://html6.es/img/rey_ataulfo.png"
  }, {
    key: 4,
    nombre: "Leogivildo",
    color: "darkmagenta",
    precio: 126,
    img: "https://html6.es/img/rey_leogivildo.png"
  }, {
    key: 5,
    nombre: "Recesvinto",
    color: "royalblue",
    precio: 141,
    img: "https://html6.es/img/rey_recesvinto.png"
  }, {
    key: 6,
    nombre: "Sisebuto",
    color: "teal",
    precio: 69,
    img: "https://html6.es/img/rey_sisebuto.png"
  }
]

function App() {
  const [cards, setCards] = useState(reyes)
  const [total, setTotal] = useState(0);
  function handleComprar(card) {
    setCards(cards.filter(currentCard => currentCard.key != card.key))
    setTotal(total + card.precio)
  }
  return (
    <>
      <div className="precio">
        <label htmlFor="total">Total: </label>
        <input type="text" value={total} id="total" readOnly />
        <span>$</span>
      </div>
      <div className='cards'>
        {cards.map(card => <Card key={card.key} card={card} onComprar={(e) => {
          handleComprar(card)
        }} />)}
      </div>
    </>
  );
}

export default App;
