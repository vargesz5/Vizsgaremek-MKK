import React, { useState } from 'react';
import '../Msrc/Mcss/SuLi.css';


function SuLi() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  //Inputs Handleing
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

  //Check datas and send them to the database
  const SignUpReq = (e: { preventDefault: () => void; }) => {
    let name = signUpData.name;
    let email = signUpData.email;
    let password = signUpData.password;

    if (name != "" && email != "" && password.length > 6) {
      e.preventDefault();
      //Send to db and wait !!
      resetForms;
      setIsRightPanelActive(false);
    }
    else
    {
      return 0;
    }
  }

  //Password Show/not show
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };  


  //Check Login data -> if okey -> signed in
  const LoginReq = () => {
    let email = signInData.email;
    let password = signInData.password;

    //pull db + if email,pass == db datas --> signed in
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
            <div className='inputIcon'>
              <i className="fa fa-user login__icon"></i>
              <input type="text" placeholder="Név" name='name' value={signUpData.name}
                onChange={handleSignUpChange} required />
            </div>
            <div className='inputIcon'>
              <i className="fa fa-envelope login__icon"></i>
              <input type="email" placeholder="Email" name='email' value={signUpData.email}
                onChange={handleSignUpChange} required />
            </div>
            <div className='inputIcon'>
              <i className="fa fa-lock login__icon"></i>
              <input type={showPassword ? "text" : "password" } placeholder="Jelszó" name='password' value={signUpData.password}
                onChange={handleSignUpChange} required minLength={6} />
                <i className={`fa ${showPassword ? "fa-eye password-toggle" : "fa-eye-slash password-toggle"}`} onClick={togglePasswordVisibility} id="signup_eyeIcon"></i>
            </div>
            <button onClick={SignUpReq}>Regisztrálás</button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form action="#">
            <h2>Bejelentkezés</h2>
             <div className='inputIcon'>
               <i className="fa fa-envelope login__icon"></i>
               <input type="email" placeholder="Email" name='email' value={signInData.email}
              onChange={handleSignInChange} required />
             </div>
            <div className='inputIcon'>
               <i className="fa fa-lock login__icon"></i>
               <input type={showPassword ? "text" : "password"} placeholder="Jelszó"  name='password' value={signInData.password}
              onChange={handleSignInChange} required />
              <i className={`fa ${showPassword ? "fa-eye password-toggle" : "fa-eye-slash password-toggle"}`}   onClick={togglePasswordVisibility} id="login_eyeIcon"></i>
            </div>
            <button onClick={LoginReq}>Bejelentkezés</button>
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
                onClick={() => {
                  setIsRightPanelActive(false);
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
                onClick={() => {
                  setIsRightPanelActive(true);
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

export default SuLi;
