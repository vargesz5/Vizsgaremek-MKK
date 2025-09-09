import React, { useEffect, useState } from 'react';
import '../Msrc/Mcss/webshop.css';
import useVisible from './useVisible';
import '../Msrc/Mcss/useVisible.css';

const Webshop = () => {
 const containCards = useVisible('containCards');

    const drinks = [ 
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

  return (
    <div id="CardsContainer" >
       <div className={`${containCards}`}>
        {drinks.map((drink) =>
        <div key={drink.id} className='card'>
          <img src={drink.image} alt=""/>
          <h1>{drink.name}</h1>
          <p className={`stock ${drink.stock ? 'in-stock' : 'out-of-stock'}`}>{drink.stock ?  "Raktáron " : "Jelenleg nem elérhető "}</p>
          <p className="price">{drink.price} Ft</p>
          <input type="number" className='amount' min={1} defaultValue={1} />
          <button className='addCartBtn'>Kosárba</button>
    </div>
        )}
        </div>
    </div>
  )
}

export default Webshop