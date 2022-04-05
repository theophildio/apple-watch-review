import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='not-found'>
      <img src="404.png" alt="404 page not found" />
      <h3><span>Oops!!!</span> Page not found...</h3>
    </div>
  );
};

export default NotFound;