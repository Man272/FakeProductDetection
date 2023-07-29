import React from 'react';
import './page2.css';
import img1 from '../assets/ganache.png'
import img2 from '../assets/MetaMask.png'
import img3 from '../assets/Python.png'
import img4 from '../assets/Reactjs.png'
import img5 from '../assets/Solidity.png'
import img6 from '../assets/VisualStudioCode.png';
import img7 from '../assets/System.png'

const Page2 = () => {
  return (
    <div className='page2-container'>
      <div className='line4'>
        <div className='title4'>
          <div className='text-center'>
            <h1>SYSTEM ARCHITECTURE</h1>
            <img src={img7} alt="SYSTEM"/>
          </div>
        </div>
      </div>
      <div className='line3'>
        <div className='title3'>
          <div className='text-center'>
            <h1>Software Used</h1>
          </div>
          <div className='box1'>
            <h4>Blockchain Development</h4>
            <div className='su-container'>
            <div className='SU'>
              <img src={img1} alt="Ganache"/>
              <h5>Ganache</h5>
            </div>
            <div className='SU2'>
              <img src={img2} alt="MetaMask"/>
              <h5>MetaMask</h5>
            </div>
            </div>
          </div>
          <div className='box1'>
            <h4>Smart Contract Development</h4>
            <div className='su-container'>
            <div className='SU'>
              <img src={img5} alt="Solidity"/>
              <h5>Solidity</h5>
            </div>
            </div>
          </div>
          <div className='box1'>
            <h4>Front-end Development</h4>
            <div className='su-container'>
            <div className='SU'>
              <img src={img6} alt="Visual Studio Code"/>
              <h5>Visual Studio Code</h5>
            </div>
            <div className='SU2'>
              <img src={img4} alt="Reactjs"/>
              <h5>Reactjs</h5>
            </div>
            </div>
          </div>
          <div className='box1'>
            <h4>Back-end Development</h4>
            <div className='su-container'>
            <div className='SU'>
              <img src={img3} alt="Python"/>
              <h5>Python</h5>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
