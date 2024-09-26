import React from 'react';
import './CardSection.css';

const cardsData = [
  {
    imgSrc: 'visa.svg',
    title: 'Flexible Payment',
    description: 'Great online payment methods available',
  },
  {
    imgSrc: 'quality.svg',
    title: 'Quality Products',
    description: 'We guarantee the best quality of product,',
  },
  {
    imgSrc: 'time.svg',
    title: 'Timely Shipping',
    description: 'Don’t you worry about this. We’ve got you whenever you want',
  },
  {
    imgSrc: 'money.svg',
    title: 'Money Guarantee',
    description: 'Reliable return policy',
  },
];

const CardSection = () => {
  return (
    <div className="card-section">
      <h2 className="section-heading">100% Customer Satisfactory Experience!</h2>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.imgSrc} alt={card.title} className="card-image" width={"30px"} height={"30px"}/>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
