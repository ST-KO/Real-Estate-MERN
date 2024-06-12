import React from 'react';
import './layout.scss';

import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

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

export default Layout;