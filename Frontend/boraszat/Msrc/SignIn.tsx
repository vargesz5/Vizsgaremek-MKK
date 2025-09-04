import React, { useState } from 'react';
import '../Msrc/Mcss/SignIn.css';


function SignIn() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '' });
  const [signInData, setSignInData] = useState({ email: '', password: '' });

  const handleSignUpChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignInChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const resetForms = () => {
    setSignUpData({ name: '', email: '', password: '' });
    setSignInData({ email: '', password: '' });
  };


  const SignUpReq = () =>{
     let name  = signUpData.name;
     let email = signUpData.email;
     let password = signUpData.password;
  }

  return (
    <div id='mainbg'>
    <div
      className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`}
      id="container"
    >
      <div className="form-container sign-up-container">
        <form action="#">
          <h2>Fiók Létrehozása</h2>
          <input type="text"  placeholder="Név" name='name' value={signUpData.name} 
              onChange={handleSignUpChange}  required/>
          <input type="email"  placeholder="Email" name='email' value={signUpData.email} 
              onChange={handleSignUpChange}  required/>
          <input type="password"  placeholder="Jelszó" name='password' value={signUpData.password} 
              onChange={handleSignUpChange}  required/>
          <button  onClick={SignUpReq}>Regisztrálás</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form action="#">
          <h2>Bejelentkezés</h2>
          <input type="email"  placeholder="Email" name='email' value={signInData.email} 
              onChange={handleSignInChange}  />
          <input type="password"  placeholder="Jelszó" name='password'  value={signInData.password} 
              onChange={handleSignInChange}  />
          <button onClick={SignUpReq}>Bejelentkezés</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h3>Már van fiókja?</h3>
            <p>Itt tud bejelentkezni!</p> 
            <h4>⭣</h4>
            <button
              className="ghost"
              id="signIn"
              onClick={()=> {setIsRightPanelActive(false);
              resetForms();    
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
              onClick={() => { setIsRightPanelActive(true);
                resetForms();
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

export default SignIn;
