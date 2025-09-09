import React, { useState, useEffect} from 'react';
import '../Msrc/Mcss/SuLi.css';
import SignUp from '../Msrc/SignUp';
import SignIn from '../Msrc/SignIn';
import useVisible from './useVisible';
import '../Msrc/Mcss/useVisible.css';



function SuLi() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [resetSignUp, setResetSignUp] = useState(false);
  const [resetSignIn, setResetSignIn] = useState(false);

  const handleResetAndSwitch = (panel: boolean) => {
    setIsRightPanelActive(panel);
    setResetSignUp(prev => !prev); 
    setResetSignIn(prev => !prev); 
  };

   const mainClass = useVisible('container');

  return (

    <div id='mainbg'>
      <div
        className={` ${mainClass} ${isRightPanelActive ? 'right-panel-active' : ''}`}
  id="container">


        <SignUp setIsRightPanelActive={setIsRightPanelActive} resetTrigger={resetSignUp} />
        <SignIn resetTriggerLi={resetSignIn} />
       
        
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h3>Már van fiókja?</h3>
              <p>Itt tud bejelentkezni!</p>
              <h4>⭣</h4>
              <button
                className="ghost"
                id="signIn"
                onClick={() => {
                  handleResetAndSwitch(false);
                }}
              >
                Bejelentkezés
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h3>Üdvözöljük a Vinellynál!</h3>
              <p>Ha még nincs fiókja, itt tud regisztrálni!</p>
              <h4>⭣</h4>
              <button
                className="ghost"
                id="signUp"
                onClick={() => {
                  handleResetAndSwitch(true);
                }}
              >
                Regisztrálás
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuLi;
