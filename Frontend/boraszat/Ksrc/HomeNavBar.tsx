import React, {useState} from 'react'
import { Link } from "react-router-dom";
import './K.css'
import SuLi from '../Msrc/SuLi'
import Webshop from '../Msrc/Webshop'
import Home from './Home';

const HomeNavBar = () => {
const [activePage, setActivePage] = useState<"none"  | "SuLi" | "Webshop">("none");

  return (
    <>
    <div className='NavBar'>
      <img id='NavLogo' src='../img/VinellyVegso.png' alt="" />
      <div id='NavItemContainer'>


        <button id='NavHomeText' >Home</button>
        <p>||</p>
        <button id='NavMapText'>Térkép</button>
        <p>||</p>
        <button id='NavWebshopText' onClick={() => setActivePage("Webshop")}>Webshop</button>


      </div>
      <button id='NavLoginBtn' type="button" onClick={() => setActivePage("SuLi")}>Bejelentkezés</button>
    </div>


      {activePage === "SuLi" && <SuLi />}
      {activePage === "Webshop" && <Webshop />}
    </>
  )
}

export default HomeNavBar