import React from 'react';
import './MainSection.css';
import { Button } from 'react-bootstrap';

const MainSection = () => {
  return (
    <div className="main-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 left-content">
            <h1 className="main-heading">
            Unleash the musician in you 
            </h1>
            <p className="main-description">
            Check out our new collection!
            </p>
            <Button variant="primary" className="cta-button custom-button">Shop Now</Button>
          </div>

          
          <div className="col-md-6 right-content">
            <img 
              src="image.svg" 
              alt="Store Image" 
              className="img-fluid main-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
