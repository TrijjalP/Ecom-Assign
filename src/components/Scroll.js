import React from 'react';
import './Scroll.css';

const logos = [
  { src: 'yamaha.svg', title: 'YAMAHA' },
  { src: 'trinity.svg', title: 'TRINITY' },
  { src: 'fender.svg', title: 'Fender' },
  { src: 'gibson.svg', title: 'GIBSON' },
  // Add more logos as needed
];

const AutoScrollSection = () => {
  return (
    <div className="auto-scroll-section">
      <div className="scroll-container">
        {logos.map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo.src} alt={logo.title} className="logo-image" />
            <span className="logo-title">{logo.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollSection;
