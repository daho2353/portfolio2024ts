import React, {useState} from 'react';
import profilePicture from '../../img/profile.png';
import phoneIcon from '../../img/phone.png';
import emailIcon from '../../img/email.png';
import gitIcon from '../../img/giticon.png';
import linkedInIcon from '../../img/linkedin.png';
import gitIconHoveredSrc from '../../img/giticondark.png';
import linkedInIconHoveredSrc from'../../img/linkedindark.png';
import './HomePage.css';

const HomePage = () => {
  const [gitIconHovered, setGitIconHovered] = useState(false);
  const [linkedInIconHovered, setLinkedInIconHovered] = useState(false);

  const handleGitIconHover = () => {
    setGitIconHovered(!gitIconHovered);
  };

  const handleLinkedInIconHover = () => {
    setLinkedInIconHovered(!linkedInIconHovered);
  };
  return (
    <div className="homepage-container">
        <img className="profile-picture" src={profilePicture} alt="profile picture"/>
        <h2> Damian Howard </h2>
        <div className="about-me">
          <h3> About Me </h3>
          <p> My name is Damian Howard. I am graduate from the University of Colorado Boulder and have a passion for creating functional and aesthetically pleasing websites. I studied for a degree in Technology, Arts and Media with a minor in Computer Science. I hope to one day work on front-end development projects where I can put both my creative and technical skills to work. </p>
        </div>
        <h4> Contact Me </h4>
        <div className="contact-information">
          <div className="phone-container">
            <img className="phone-icon" src ={phoneIcon} alt="phone icon"/>
            <p> 720-775-5103 </p>
          </div>
          <div className="email-container">
            <img className="email-icon" src ={emailIcon} alt="email icon"/>
            <p className="emails"> damian.howard1998@yahoo.com </p>
            <p className="emails"> daho2353@colorado.edu </p>
          </div>
          <div className="other-container">
            <div className="icon-container">
              <a href="https://github.com/daho2353" target="_blank">
              <img className="git-icon" src={gitIconHovered ? gitIconHoveredSrc : gitIcon} alt="git icon" onMouseEnter={handleGitIconHover} onMouseLeave={handleGitIconHover}/>
              </a>
              <a href="https://www.linkedin.com/in/damian-howard-801906174/" target="_blank">
              <img className="linked-in-icon" src={linkedInIconHovered ? linkedInIconHoveredSrc : linkedInIcon} alt="linked in icon" onMouseEnter={handleLinkedInIconHover} onMouseLeave={handleLinkedInIconHover}/>
              </a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default HomePage;
