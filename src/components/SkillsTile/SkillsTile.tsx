import React, { useState } from 'react';
import './SkillsTile.css';

const SkillsTile = (): JSX.Element => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleFlip = (): void => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className={`skills-container ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
    >
      <div className='skills-front'>
      <div className='blur'></div>
      </div>
      <div className='skills-back'>
        <h3 className='skill-header'> Front end tools</h3> 
            <ul>
            <li> ReactJS </li>
            <li> HTML5/CSS3/SCSS</li>
            <li> Javascript (ES6) </li>
            <li> TypeScript </li>
            </ul>      
        <h3 className='skill-header'> Programming Languages</h3> 
            <ul>
            <li> Python </li>
            <li> C++/C#</li>
            <li> Ruby, lua, SQL</li>
            </ul> 
        <h3 className='skill-header'>Tools and Technology</h3> 
            <ul>
            <li> Git/Github </li>
            <li> Agile/Scrum Methodolgy</li>
            <li> Adobe creative suite</li>
            <li> Firebase </li>
            <li> Gulp/SASS and CSS Frameworks </li>
            <li> API's & Libraries </li>
            </ul>
      </div>
    </div>
  );
};

export default SkillsTile;