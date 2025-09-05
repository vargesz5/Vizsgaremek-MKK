import React, {useState} from 'react'
import './K.css'
import SuLi from '../Msrc/SuLi'

const HomeNavBar = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
    <div className='NavBar'>
      <img id='NavLogo' src='../img/VinellyVegso.png' alt="" />
      <div id='NavItemContainer'>


        <p id='NavHomeText'>Home</p>
        <p>||</p>
        <p id='NavMapText'>Térkép</p>
        <p>||</p>
        <p id='NavWebshopText'>Webshop</p>


      </div>
      <button id='NavLoginBtn' type="button" onClick={() => setShowSignUp(true)}>Bejelentkezés</button>
    </div>
    <img className='BG'id='BG1' src="../img/Layer2.png" alt="" />
    <img className='BG' id='BG1' src="../img/Layer1.png" alt="" />

    
    {showSignUp && <SuLi />} 
    </>
  )
}

export default HomeNavBar