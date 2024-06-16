import React, { useState } from 'react';
import './register.scss';
import { Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';

const Register = () => {
    
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        setIsLoading(true);
        setError("");

        const formData = new FormData(e.target);

        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const response = await apiRequest.post("auth/register", {
                username,
                email,
                password
            });

            navigate('/login');
        } catch (error) {
            console.log(error);
            setError(error.response.data.message);
        } finally {
            setIsLoading(false);
        }
    };
  
    return (
        <section className='register'>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <input type="text" name='username' placeholder='Username' />
                    <input type="email" name='email' placeholder='Email' />
                    <input type="password" name='password' placeholder='Password' />
                    <button disabled={isLoading}>Register</button>
                    {
                        error && (
                            <span>{error}</span>
                        )
                    }
                    <Link to='/login'>Do you have an account?</Link>
                </form>
            </div>
            <div className='imgContainer'>
                <img src="/bg.png" alt="" />
            </div>
        </section>
    );
};

export default Register;