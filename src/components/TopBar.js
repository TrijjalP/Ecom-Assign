// TopBar.js
import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="support-number">
          Support: +1 234 567 890
        </div>
        <div className="promo-text text-center">
          Sign Up and get 20% off on your first order.{' '}
          <span className="signup-now">
            <a href="#signup" className="text-decoration-underline">SignUp Now!</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
