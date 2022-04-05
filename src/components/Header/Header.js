import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <h1 className='brand-name'><span>Apple</span> watch review</h1>
      <NavBar></NavBar>
    </div>
  );
};

export default Header;