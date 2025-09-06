import React, {useState, useEffect} from 'react';
import '../Msrc/Mcss/SuLi.css';


interface SignInProps {
   resetTriggerLi: boolean;
}

const SignIn: React.FC<SignInProps> = ({resetTriggerLi }) => {
    
      //Inputs Handling
      const [signInData, setSignInData] = useState({ email: '', password: '' });
      const handleSignInChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setSignInData({ ...signInData, [name]: value });
      };
      function resetLi () {
        setSignInData({  email: '', password: '' });
    };
    useEffect(() => {
        resetLi();
      }, [resetTriggerLi]);

      //Password Show/not show
      const [showPassword, setShowPassword] = useState(false);
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };  

      //Check SignIn request
      const SignInReq = (e: { preventDefault: () => void; }) => 
      {
        
      }

  return (
    <>
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

            <button onClick={SignInReq} >Bejelentkezés</button>
          </form>
        </div>
    </>
    
  )
}

export default SignIn