import React, { useContext, useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  
  const { currentUser } = useContext(AuthContext);
  
  const [open, setOpen] = useState(false);
  
  return (
    <nav>
        <div className='left'>
          <a href="/" className='logo'>
            <img src="/logo.png" alt="logo" />
            <span>LamaEstate</span>
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Others</a>
          <a href="/">Agents</a>
        </div>
        <div className='right'>
          {
            currentUser ? 
            (
              <div className='user'>
                <img src={currentUser.avatar || "/profile-icon.webp"} alt="" />
                <span>{currentUser.username}</span>
                <Link to='/profile' className='profile' >
                  <div className="notification">3</div>
                  <span>Profile</span>
                </Link>
              </div>
            ) :
            (
              <>
                <a href="/login">Sign In</a>
                <a href="/register" className='register'>Sign Up</a>
              </>
            )
          }
          <div className='menuIcon'>
            <img 
              src="/menu.png" 
              alt="menu icon" 
              onClick={() => setOpen(prevState => !prevState)} 
            />
          </div>
          <div className={open ? 'menu active' : 'menu'}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Others</a>
            <a href="/">Agents</a>
            <a href="/">Sign In</a>
            <a href="/">Sign Up</a>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;