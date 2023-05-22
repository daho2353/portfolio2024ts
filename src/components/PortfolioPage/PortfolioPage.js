import React from 'react';
import Portfolio from './Portfolio.js';
import oldPortfolio from './portfolioimages/oldportfolio.png';
import './PortfolioPage.css';

const PortfolioPage = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <p> I have always had a passion for learning new things and for creating novel projects. I have dabbled in many forms of media creation however I specialize in web development. Below are some of the projects which showcase my skills as an engineer, a thinker, and as a developer. </p>
      <Portfolio
        header="My Old Portfolio"
        imageName={oldPortfolio}
        imagePlacement="left"
        description="This is my previous home page which is currently depracated, however it is one of the only live websites I currently have so I figure I would leave it up to demonstrate my ability to build portfolio's in traditional HTML and JS as well. Unfortunately most of the links in the portfolio are depractated however I will rebuild thier functionality into this portfolio!."
        link="https://daho2353.github.io/Project2/portfolio"
      />
    </div>
  );
};

export default PortfolioPage;
