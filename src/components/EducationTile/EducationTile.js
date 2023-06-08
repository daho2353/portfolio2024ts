import React, { useState } from 'react';
import './EducationTile.css';
import portfolioPicture from '../../img/portfolio.png';

const EducationTile = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`education-container ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
    >
      <div className='education-front'>
      </div>
      <div className='education-back'>
        <h1 className='university-name'> University of Colorado Boulder</h1>
        <h4 className='university-name'> 2020 </h4>
        <img className="portfolio-picture" src={portfolioPicture} alt="portfolio picture"/>
        <p className="education-description"> Bachelors of Science </p>
        <ul>
            <li><a href="https://www.colorado.edu/atlas/about/undergraduate-major-creative-technology-and-design" className="tam-link" target="_blank">Major: Creative Technology and Design </a></li>
            <li> Minor: Computer Science </li>
        </ul>
      </div>
    </div>
  );
};

export default EducationTile;
