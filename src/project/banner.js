import React from 'react';
import './banner.css';
import BG1 from '../assets/block.png'

const banner = () => {
  return (
    <div className='banner-container'>
        <header className='banner-header'>
          <div className='word'>
          <h1>Fake Product Detection Using Blockchain Technology</h1>
          <p>CSE 345 BLOCKCHAIN TECHNOLOGIES</p>
          </div>
          <div className='image'>
          <img src={BG1} alt="BG"/>
          </div>
        </header>
    </div>
  );
};

export default banner;
