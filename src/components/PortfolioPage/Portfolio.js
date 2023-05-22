import React from 'react';
import './PortfolioPage.css';

const Portfolio = ({ header, imageName, imagePlacement, description, link }) => {
    return (
      <div className="portfolio">
        <h2>{header}</h2>
        <div className="portfolio-content">
          {imagePlacement === 'left' && (
            <div className="image-container">
              <a href={link}><img src={imageName} alt="Portfolio" /></a>
            </div>
          )}
          <div className="description">{description}</div>
          {imagePlacement === 'right' && (
            <div className="image-container">
              <a href={link}><img src={imageName} alt="Portfolio" /></a>
            </div>
          )}
        </div>
      </div>
    );
  };
  
export default Portfolio;