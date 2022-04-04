import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div className="hero-img">
        <img src="watch.png" alt="Apple Watch" />
      </div>
      <div className="hero-content">
        <h2>Belive in Technology, Make the change</h2>
        <p>Just put on your Apple Watch and take off. Series 7 keeps all the things you care about front and center with its larger screen. The larger display enhances the entire experience, making Apple Watch easier to use and read. Series 7 represents our biggest and brightest thinking.</p>
        <button className='hero-btn'>buy now</button>
      </div>

    </div>
  );
};

export default Home;