import React from 'react';
import './PortfolioPage.css';

interface Props {
  header: string,
  imageName: string,
  imagePlacement: string,
  description: string,
  link: string
}

const Portfolio = ({ header, imageName, imagePlacement, description, link }: Props): JSX.Element => {
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
          <h2 className='portfolio-header'> {header} </h2>
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