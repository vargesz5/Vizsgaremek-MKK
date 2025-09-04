import React from 'react'
import '../Msrc/Mcss/SignIn.css'
import SignUp from '../Msrc/SignUp'

function SignIn() {
  return (
    <>
      <div className="wrapper">
    <form action="#">
      <h2>Bejelentkezés</h2>
        <div className="input-field">
        <input type="text" ></input>
        <label>Email</label>
      </div>
      <div className="input-field">
        <input type="password" ></input>
        <label>Jelszó</label>
      </div>
      <div className="forget">
        <label htmlFor="remember">
          <input type="checkbox" id="remember"></input>
          <p>Jelszó megjegyzése</p>
        </label>
      </div>
      <button type="submit">Bejelentkezés</button>
      <div className="register">
        <p>Nincs még fiókja? <button onClick={SignUp}>Regisztrálok</button></p>
      </div>
    </form>
  </div>

    </>
  )
}

export default SignIn