import  { useState} from 'react';
import '../Mcss/SuLi.css';
import '../Mcss/useVisible.css';
import SignUp from '../components/SignUp.tsx';
import SignIn from '../components/SignIn.tsx';
import useVisible from '../components/useVisible';
import type { SuLiProps } from '../types/props.ts';



function SuLi({ onSuccess }: SuLiProps) {
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
        <SignIn resetTriggerLi={resetSignIn} onSuccess={onSuccess} />
       
        
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
