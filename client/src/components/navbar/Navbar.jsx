import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav>
        <div className='left'>
          <a href="/">
            <img src="/logo.png" alt="logo" />
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Others</a>
        </div>
        <div className='right'>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Out</a>
        </div>
    </nav>
  );
};

export default Navbar;