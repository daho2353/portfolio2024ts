import React from 'react';
import portfolioPicture from '../../img/portfolio.png';
import './ResumePage.css'

const ResumePage = () => {
  return (
    <div className="page-background">
      <a href={require('../../img/resume2023.pdf')} download>Download PDF</a>
      <div className="resume-container">
        <h2> Education </h2>
        <div className="education-container">
          <div className="education-container-text">
            <p> Graduated from University of Colorado Boulder in the class of 2020 with a Bachelors of Science degree </p>
            <ul>
              <li> Major: Technology, Arts & Media (Now called creative technology and design) </li>
              <li> Minor: Computer Science </li>
            </ul>
          </div>
          <img className="portfolio-picture" src={portfolioPicture} alt="portfolio picture"/>
        </div>
        <div className="skills-container">
          <h2> Relevant Skills: </h2>
          <h3> Front end tools</h3> 
            <ul>
              <li> HTMl/CSS/SCSS</li>
              <li> Javascript </li>
              <li> React </li>
              <li> JQuery </li>
            </ul>      
          <h3> Programming Languages</h3> 
            <ul>
              <li> Python </li>
              <li> C++/C#</li>
              <li> Ruby, lua, SQL</li>
            </ul> 
          <h3>Tools and Technology</h3> 
            <ul>
              <li> Git/Github </li>
              <li> Agile/Scrum Methodolgy</li>
              <li> Adobe creative suite</li>
              <li> Firebase </li>
              <li> Gulp/SASS and CSS Frameworks </li>
              <li> API's & Libraries </li>
            </ul>

        </div>
        <div className="experience-container">
          <div className="work-container">
            <h2> Work Experience </h2>
            <ul>
              <li className='bolded'> Zayo - Network Technician II & III</li>
              <li className='italics'> Remote (Denver, CO) Oct 2021 - Dec 2022 </li>
              <li> Diagnosed, repaired, and anaylzed problems within the Zayo network. Worked on novel IP and fiber issues and repaired issues on the fly in a fast paced work environment. I worked directly with customers and technicians in a ticket environment. </li>
              <li className='bolded'> GTT - Network Analyst </li>
              <li className='italics'> Remote (Denver, CO) Nov 2020 - Oct 2021 </li>
              <li> Received inbound calls from customers reporting issues within GTT Network, I would then Diagnose the issue and perform layer 1 troubleshooting with the customers. </li>
              <li className='bolded'> CU Boulder, Office of Information Technology, Distance Learning Services - Student Manager</li>
              <li className='italics'> Boulder, Colorado July 2018 - Apr 2020</li>
              <li> Assisted Distance Learning Services with recording lectures all over CU campus. I was also in charge of the other student assistants schedules and tickets. I also got the opportunity to do hardware and software troubleshooting and installations as well as small coding projects. </li>
              <li className='bolded'> Good Times, Ross, World Market - General Staff </li>
              <li className='italics'> Colorado Sept 2015 - July 2018 </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
