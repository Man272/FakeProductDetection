import React from 'react';
import './page1.css';
const Page1 = () => {
  return (
    <div className='page1-container'>
      <div className='line1'>
        <div className='title'>
          <h1>Fake Product Detection Using Blockchain Technology</h1>
          <p>CSE 345 BLOCKCHAIN TECHNOLOGIES</p>
          <button className='bttn'>
            <span>Demo link</span>
          </button>
        </div>
      </div>
      <div className='line2'>
        <div className='title2'>
          <div className='header1'>
            <h1>Abstract</h1>
            <p>Counterfeit products have become a significant concern in various industries, impacting companies' reputation, sales, and profitability. This research focuses on utilizing blockchain technology for fake product detection. Blockchain, as a secure and decentralized digital ledger, ensures the authentication and traceability of products. By implementing Quick Response (QR) codes linked to a blockchain, customers can scan the code to verify the product's authenticity. The system compares the scanned code with entries in the blockchain database, promptly notifying customers whether the product is genuine or counterfeit. This approach eliminates the need for third-party validation and provides a robust solution for product safety confirmation. Through the integration of blockchain and QR code technology, this research contributes to combating counterfeit products effectively.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
