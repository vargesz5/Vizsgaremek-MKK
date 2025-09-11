  import  { useState } from 'react';
  import '../Mcss/webshop.css';
  import '../Mcss/useVisible.css';
  import '../Mcss/quantity.css';
  import useVisible from '../components/useVisible.tsx';
  import DrinkDetails from '../components/DrinkDetails.tsx';
  import type { Drink, DrinkCardProps } from '../types/drink';
  import type { WebshopProps } from '../types/props';


  export const drinks: Drink[] = [ 
    { id: 1, name: "Coca Cola", price: 450, stock: true,  image: "../img/cola.jpg" },
    { id: 2, name: "Pepsi", price: 400, stock: true, image: "../img/pepsi.jpg" },
    { id: 3, name: "Fanta Narancs", price: 420, stock: false, image: "../img/fanta.jpg" },
    { id: 4, name: "Sprite", price: 430, stock: true, image: "../img/sprite.jpg" },
    { id: 5, name: "Red Bull", price: 650, stock: false, image: "../img/redbull.jpg" },
    { id: 6, name: "Monster Energy", price: 700, stock: true, image: "../img/monster.jpg" },
    { id: 7, name: "Nestea Citrom", price: 480, stock: true, image: "../img/nesteacitrom.jpg" },
    { id: 8, name: "Nestea Barack", price: 480, stock: false, image: "../img/nesteabarack.jpg" },
    { id: 9, name: "Szentkirályi Ásványvíz", price: 250, stock: false, image: "../img/szentkiralyi.jpg" },
    { id: 10, name: "NaturAqua Szénsavas", price: 260, stock: true, image: "../img/natureaqua.jpg" },
    { id: 11, name: "Lipton Ice Tea Citrom", price: 500, stock: true, image: "../img/liptoncitrom.jpg" },
    { id: 12, name: "Lipton Ice Tea Barack", price: 500, stock: true, image: "../img/liptonbarack.jpg" }
      ]; // pull data from db

const Webshop = ({ cart, updateCart }: WebshopProps) => {
    const containCards = useVisible('containCards');
    const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  
    if (selectedDrink) {
      return <DrinkDetails drink={selectedDrink} onBack={() => setSelectedDrink(null)} />;
    }

  return (
      <div id="CardsContainer">
        <div className={`${containCards}`}>
          {drinks.map((drink : Drink) => (
            <DrinkCard key={drink.id} drink={drink} onSelect={() => setSelectedDrink(drink)} cartAmount={cart[drink.id] || 0}
             updateCart={updateCart}/>
          ))}
        </div>
      </div>
    );
  };


  const DrinkCard = ({drink, onSelect, cartAmount, updateCart }: DrinkCardProps) => {

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    updateCart(drink.id, 1);
  };
    const increase = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    updateCart(drink.id, cartAmount + 1);
  };  

  const decrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();  
    updateCart(drink.id, cartAmount > 1 ? cartAmount - 1 : 0);
  };


    return (
      <div className="card" onClick={onSelect}>
        <img src={drink.image} alt={drink.name} />
        <h1>{drink.name}</h1>
        <p className={`stock ${drink.stock ? 'in-stock' : 'out-of-stock'}`}>
          {drink.stock ? "Raktáron" : "Jelenleg nem elérhető"}
        </p>
        <p className="price">{drink.price} Ft</p>

        {drink.stock ? (
          cartAmount === 0 ? (
            <button className="addCartBtn" onClick={handleAddToCart}>Kosárba</button>
          ) : (
            <div className="quantity-selector">
              <button className="qty-btn" onClick={decrease}>−</button>
              <span className="qty-display">{cartAmount}</span>
              <button className="qty-btn" onClick={increase}>+</button>
            </div>
          )
        ) : (
          <button className="addCartBtn" disabled style={{ opacity: 0.5, cursor: "not-allowed" }}>
            Nem elérhető
          </button>
        )}
      </div>
    );
  };

  export default Webshop