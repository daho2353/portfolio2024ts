import React from 'react';
import './PortfolioPage.css';

const Portfolio = ({ header, imageName, imagePlacement, description, link }) => {
  return (
    <div className="portfolio">
      <div className="portfolio-content">
        {imagePlacement === 'left' && link !== 'none' && (
          <div className="image-container">
            <a href={link}><img src={imageName} alt="Portfolio" className='portfolio-images' /></a>
          </div>
        )}
        {imagePlacement === 'left' && link === 'none' && (
          <div className="image-container">
            <img src={imageName} alt="Portfolio"  className='portfolio-images'  />
          </div>
        )}
        <div className="description-container">
          <h2> {header} </h2>
          <div className="description">{description}</div>
        </div>
        {imagePlacement === 'right' && link !== 'none' && (
          <div className="image-container">
            <a href={link}><img src={imageName} alt="Portfolio" className='portfolio-images' /></a>
          </div>
        )}
        {imagePlacement === 'right' && link == 'none' && (
          <div className="image-container">
            <img src={imageName} alt="Portfolio" className='portfolio-images' />
          </div>
        )}
      </div>
    </div>
  );
};

  
export default Portfolio;