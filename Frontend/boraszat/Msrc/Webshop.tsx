import React from 'react';
import '../Msrc/Mcss/webshop.css';

const Webshop = () => {

    const drinks = [ ,]; // pull data from db

  return (
    <div id="CardsContainer">
        {drinks.map((drink) =>
        <div key={drink} className='card'>
          <h1>{drink}</h1>
          <img src={drink} alt="" />
          <p>{drink}</p>
        </div>
        )}
    </div>
  )
}

export default Webshop