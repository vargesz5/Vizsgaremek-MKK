import React, { useState, useEffect } from 'react';
import '../Mcss/SuLi.css';
import type {  AccountSi } from '../types/account';
import type { SignInProps } from '../types/props';
import { useUser } from '../context/UserContext';


  const SignIn: React.FC<SignInProps> = ({ resetTriggerLi, onSuccess }) => {
    const { setUser } = useUser();

    //Inputs Handling
    const [signInData, setSignInData] = useState<AccountSi>({ emailSi: '', passwordSi: '' });
    const handleSignInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setSignInData({ ...signInData, [name]: value });
      e.currentTarget.setCustomValidity('');
    };
    function resetLi() {
      setSignInData({ emailSi: '', passwordSi: '' });
    };
     //Password Show/not show
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    useEffect(() => {
      setShowPassword(false);
      resetLi();
    }, [resetTriggerLi]);


    //Check SignIn request
    const SignInReq = (e: { preventDefault: () => void; }) => {
      const inputEmail= document.getElementsByName("emailSi")[0] as HTMLInputElement;
      const inputPass= document.getElementsByName("passwordSi")[0] as HTMLInputElement;

      let email = signInData.emailSi;
      let password = signInData.passwordSi;

      if (!email) {
        inputEmail.setCustomValidity("Adja meg az Email címét!");
        return;
      }
      else
        inputEmail.setCustomValidity("")
      if (!password) {
        inputPass.setCustomValidity("Adja meg a jelszavát!");
        return;
      }
      else
        inputPass.setCustomValidity("");
      if(password.length < 6)
      {
        inputPass.setCustomValidity("A jelszónak legalább 6 karakterből kell állni!");
        return;
      }
      else {
        e.preventDefault();
        inputPass.setCustomValidity("");
        setUser({ name: 'Teszt Elek', email });
        resetLi();
        onSuccess();
        //Fetch  if email/password good -->signed in
      }
    }

    return (
      <>
        <div className="form-container sign-in-container">
          <form action="#">
            <h2>Bejelentkezés</h2>
            <div className='inputIcon'>
              <i className="fa fa-envelope login__icon"></i>
              <input type="email" placeholder="Email" name='emailSi' value={signInData.emailSi}
                onChange={handleSignInChange} required />
            </div>

            <div className='inputIcon'>
              <i className="fa fa-lock login__icon"></i>
              <input type={showPassword ? "text" : "password"} placeholder="Jelszó" name='passwordSi' value={signInData.passwordSi}
                onChange={handleSignInChange} required minLength={6}/>
              <i className={`fa ${showPassword ? "fa-eye password-toggle" : "fa-eye-slash password-toggle"}`} onClick={togglePasswordVisibility} id="login_eyeIcon"></i>
            </div>

            <button onClick={SignInReq} >Bejelentkezés</button>
          </form>
        </div>
      </>

    )
  }

  export default SignIn