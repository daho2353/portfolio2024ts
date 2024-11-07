import React, { useState } from 'react';
import './EducationTile.css';
import portfolioPicture from '../../img/portfolio.png';

const EducationTile = (): JSX.Element => { //adding these to compenents is useful but not necessary. If the compenent is going to have children the React.FC should be added. 
  const [isFlipped, setIsFlipped] = useState<boolean>(true);

  const handleFlip = (event: React.MouseEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className={`education-container ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
    >
      <div className='education-front'>
      <div className='blur'></div>
      </div>
      <div className='education-back'>
        <h1 className='university-name'> University of Colorado Boulder</h1>
        <h4 className='university-name'> 2020 </h4>
        <img className="portfolio-picture" src={portfolioPicture} alt="portfolio picture"/>
        <p className="education-description"> Bachelors of Science </p>
        <ul>
            <li><a href="https://www.colorado.edu/atlas/about/undergraduate-major-creative-technology-and-design" className="tam-link" target="_blank" rel="noopener noreferrer">Major: Creative Technology and Design </a></li>
            <li> Minor: Computer Science </li>
        </ul>
      </div>
    </div>
  
  );
};

export default EducationTile;
