import React from 'react';
import './Navbar.css';

const Navbar = ({ setActivePage }) => {
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-name"> Damian Howard</span>
      </div>
      <div className="navbar-links">
        <a onClick={() => handlePageChange('home')}>Home</a>
        <a onClick={() => handlePageChange('resume')}>Resume</a>
        <a onClick={() => handlePageChange('portfolio')}>Portfolio</a>
      </div>
    </nav>
  );
};

export default Navbar;




