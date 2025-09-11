import React, { useState } from 'react'
import './K.css'
import SuLi from '../Msrc/SuLi'
import Webshop from '../Msrc/Webshop'
import { drinks } from '../Msrc/Webshop';


const HomeNavBar = () => {
  const [activePage, setActivePage] = useState<"none" | "SuLi" | "Webshop">("none");
  const [cart, setCart] = useState<{ [id: number]: number }>({});
  const [isCartHovered, setIsCartHovered] = useState(false);




  const itemsInCart = drinks.filter(drink => cart[drink.id]);


  const updateCart = (id: number, amount: number) => {
    setCart(prev => ({ ...prev, [id]: amount }));
  };

  return (
    <>
      <div className='NavBar'>
        <img id='NavLogo' src='../img/Vinelly.png' alt="" />
        <div id='NavItemContainer'>


          <button id='NavHomeText' >Home</button>
          <p>||</p>
          <button id='NavMapText'>Térkép</button>
          <p>||</p>
          <button id='NavWebshopText' onClick={() => setActivePage("Webshop")}>Webshop</button>


        </div>
        <button id='NavLoginBtn' type="button" onClick={() => setActivePage("SuLi")}>Bejelentkezés</button>

        <div
          className="cart-button-wrapper"
           onMouseEnter={() => setIsCartHovered(true)}
          onMouseLeave={() => setIsCartHovered(false)}
        >
          <button className="cart-toggle-btn">🛒 KOSÁR</button>

            <div className={`cart-dropdown ${isCartHovered ? 'visible' : 'hidden'}`}>
              <h3>Kosár tartalma</h3>
              {itemsInCart.length === 0 ? (
                <p>A kosár üres.</p>
              ) : (
                <ul>
                  {itemsInCart.map(drink => (
                    <li key={drink.id} className="cart-item">
                      <img src={drink.image} alt={drink.name} className="cart-img" />
                      <div className="cart-info">
                        <p>{drink.name}</p>
                        <p>{cart[drink.id]} db</p>
                        <p>{drink.price * cart[drink.id]} Ft</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
        </div>
      </div>


      {activePage === "SuLi" && <SuLi />}
      {activePage === "Webshop" && <Webshop cart={cart} updateCart={updateCart} />}
    </>
  )
}

export default HomeNavBar