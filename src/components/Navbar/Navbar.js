import React from 'react';
import './Navbar.css';

const Navbar = ({ setActivePage }) => {
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <nav>
        
          <a onClick={() => handlePageChange('home')}>Home</a>
          <a onClick={() => handlePageChange('resume')}>Resume</a>      
          <a onClick={() => handlePageChange('portfolio')}>Portfolio</a>
        
      
    </nav>
  );
};

export default Navbar;



