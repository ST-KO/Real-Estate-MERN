import React, { useContext } from 'react';
import './layout.scss';

import Navbar from '../../components/navbar/Navbar';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Layout = () => {
  return (
    <div className="layout">
      <section className='navbar'>
        <Navbar />
      </section>
      <section className='content'>
        <Outlet />
    </section>
    </div>
  );
};

const RequireAuth = () => {
  
  const { currentUser } = useContext(AuthContext);

  return (
    !currentUser ?
    ( <Navigate to='/login' /> ) :
    (
      <div className="layout">
        <section className='navbar'>
          <Navbar />
        </section>
        <section className='content'>
          <Outlet />
        </section>
      </div>
    ) 

  );
};

export { Layout, RequireAuth };