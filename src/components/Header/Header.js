import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <h1 className='brand-name'><span>Apple</span> watch review</h1>
      <nav className='nav'>
        <Link to="/">Home</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/Blogs">Blogs</Link>
      </nav>
    </div>
  );
};

export default Header;