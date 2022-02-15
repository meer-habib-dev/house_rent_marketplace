import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const { email, password } = formData;
    const location = useLocation()
    
    return (
        <>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">
                        
                    </p>
                </header>
                <main>
                    <form > 
                        <input type="email" className='emailInput' placeholder='Email' id='email' value={email} onChange={onChange}/>
                    </form>
                </main>
            </div>
        </>
    );
};

export default SignIn;