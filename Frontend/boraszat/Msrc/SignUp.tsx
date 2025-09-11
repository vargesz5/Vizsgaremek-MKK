import React, { useState, useEffect } from 'react'
import '../Msrc/Mcss/SuLi.css';
import type { AccountSu } from '../Msrc/SuLi';


interface SignUpProps {
  setIsRightPanelActive: (value: boolean) => void;
   resetTrigger: boolean;
}

const SignUp: React.FC<SignUpProps> = ({ setIsRightPanelActive,  resetTrigger   }) => {

    //Inputs Handling
    const [signUpData, setSignUpData] = useState<AccountSu>({ name: '', email: '', password: '', passwordAgain: '' });
    const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => 
    {
        const { name, value } = e.target;
        setSignUpData({ ...signUpData, [name]: value });

        e.target.setCustomValidity("");
    };
    function resetSu () {
        setSignUpData({ name: '', email: '', password: '', passwordAgain: '' });
    };
    useEffect(() => {
    setShowPassword(false);
    setShowPasswordAgain(false);
    resetSu();
  }, [resetTrigger]);

    //Password Show/not show
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => 
    {
        setShowPassword(!showPassword);
    };

    const [showPasswordAgain, setShowPasswordAgain] = useState(false);
    const togglePasswordAgainVisibility = () => 
    {
        setShowPasswordAgain(!showPasswordAgain);
    };

    //Check Input datas
    const SignUpReq = (e: { preventDefault: () => void; }) => {
       const datas: Omit<AccountSu, 'passwordAgain'>[] = [];

        const inputName= document.getElementsByName("name")[0] as HTMLInputElement;
        const inputEmail= document.getElementsByName("email")[0] as HTMLInputElement;
        const inputPass= document.getElementsByName("password")[0] as HTMLInputElement;
        const inputPassAgain= document.getElementsByName("passwordAgain")[0] as HTMLInputElement;


        let name =signUpData.name;
        let email = signUpData.email;
        let password = signUpData.password;
        let passwordAgain = signUpData.passwordAgain;

        if (!name)
        {
            inputName.setCustomValidity("Adja meg a nevét!");
            return;
        }
        else
            inputName.setCustomValidity("");
        if (!email)
        {
            inputEmail.setCustomValidity("Adja meg az Email címét!");
            return;
        } 
        else
            inputEmail.setCustomValidity("");
        if (!password)
        {
            inputPass.setCustomValidity("Adja meg a jelszavát!");
            return;
        }         
        else
            inputPass.setCustomValidity("");
        if(password.length<6)
        {
            inputPass.setCustomValidity("A jelszónak legalább 6 karakterből kell állni!");
            return;
        } 
        else
            inputPass.setCustomValidity("");
        if (!passwordAgain)
        {
            inputPassAgain.setCustomValidity("Adja meg a jelszavát megint!");
            return;
        }     
        else
            inputPassAgain.setCustomValidity("");
        if(passwordAgain.length<6)
        {
            inputPassAgain.setCustomValidity("A jelszónak legalább 6 karakterből kell állni!");
            return;
        }
        else
            inputPassAgain.setCustomValidity("");
        if(password!==passwordAgain)
        {
            inputPassAgain.setCustomValidity("A két jelszó nem egyezik!");
            return;
        }   
        else
            //Fetch datas to db -->
            datas.push({name,email,password})
            console.log(datas)
            e.preventDefault();
            inputPassAgain.setCustomValidity("");
            setIsRightPanelActive(false);
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

                    <div className='inputIcon'>
                        <i className="fa fa-lock login__icon"></i>
                        <input type={showPasswordAgain ? "text" : "password"} placeholder="Jelszó megerősítése" name='passwordAgain' value={signUpData.passwordAgain}
                            onChange={handleSignUpChange} required minLength={6} />
                        <i className={`fa ${showPasswordAgain ? "fa-eye password-toggle" : "fa-eye-slash password-toggle"}`} onClick={togglePasswordAgainVisibility} id="signup_eyeIcon"></i>
                    </div>

                    <button onClick={SignUpReq}>Regisztrálás</button>
                </form>
            </div>
        </>
    )
}

export default SignUp