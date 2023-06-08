import React from 'react';
import './ResumePage.css'
import EducationTile from '../EducationTile/EducationTile';
import SkillsTile from '../SkillsTile/SkillsTile';
import pdfIcon from '../../img/pdf.png';

const ResumePage = () => {
  return (
    <div className="resume-background">
      <div className="resume-container">
      <h2 className="resume-header"> Resume </h2>
      <a href={require('../../img/resume.pdf')} download><img src={pdfIcon} className='pdf-icon'/></a>
        <div className='education-skills-container'>
          <div className='education-component'>
            <h2 className="resume-header"> Education </h2>
            <EducationTile />
          </div>
          <div className='skills-component'>
            <h2 className="resume-header" id="skills-header"> Skills </h2>
            <SkillsTile />
          </div>
        </div>

        <div className="experience-container">
          <div className="work-container">
            <h2 className='resume-header'> Work Experience </h2>
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
