import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <h1 className='brand-name'><span>Apple</span> watch review</h1>
      <nav className='nav'>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/reviews">Reviews</CustomLink>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink to="/Blogs">Blogs</CustomLink>
      </nav>
    </div>
  );
};

export default Header;