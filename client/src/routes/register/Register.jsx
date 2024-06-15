import React from 'react';
import './register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
  
    const handleSubmit = (e) => {
        const formData = new FormData(e.target);
    };
  
    return (
        <section className='register'>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <input type="text" name='username' placeholder='Username' />
                    <input type="text" name='email' placeholder='Email' />
                    <input type="text" name='password' placeholder='Password' />
                    <button onClick="submit">Register</button>
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