import React, { useState, useEffect } from 'react'
import '../Msrc/Mcss/SuLi.css';
import FetchData from './FetchData';


interface SignUpProps {
  setIsRightPanelActive: (value: boolean) => void;
   resetTrigger: boolean;
}

const SignUp: React.FC<SignUpProps> = ({ setIsRightPanelActive,  resetTrigger   }) => {


    const [triggerCheck, setTriggerCheck] = useState(false);

    //Inputs Handling
    const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '' });
    const handleSignUpChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setSignUpData({ ...signUpData, [name]: value });
    };
    function resetSu () {
        setSignUpData({ name: '', email: '', password: '' });
    };
    useEffect(() => {
    resetSu();
  }, [resetTrigger]);

    //Password Show/not show
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    //Check Input datas
    const SignUpReq = (e: { preventDefault: () => void; }) => {
        let name =signUpData.name;
        let email = signUpData.email;
        let password = signUpData.password;

        if (!name) {
            return;
        }
        if (!email) {
            return;
        }
        if (!password || password.length<6) {
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            return;
        }

        else {
            //Push datas to db
            setTriggerCheck(true); 
            e.preventDefault();
            setIsRightPanelActive(false);
        }
    }


    return (
        <>
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
                        <input type={showPassword ? "text" : "password"} placeholder="Jelszó" name='password' value={signUpData.password}
                            onChange={handleSignUpChange} required minLength={6} />
                        <i className={`fa ${showPassword ? "fa-eye password-toggle" : "fa-eye-slash password-toggle"}`} onClick={togglePasswordVisibility} id="signup_eyeIcon"></i>
                    </div>

                    <button onClick={SignUpReq}>Regisztrálás</button>
                </form>
            </div>
        {triggerCheck && <FetchData datas={signUpData} resetTrigger={() => setTriggerCheck(false)} />}
        </>
    )
}

export default SignUp