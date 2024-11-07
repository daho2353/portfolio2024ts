import React from 'react';
import './Navbar.css';


interface Props{
  setActivePage: (page: string) => void;
}

const Navbar = ({ setActivePage }: Props): JSX.Element => {
  const handlePageChange = (page: string): void => {
    setActivePage(page);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-name"> Damian Howard</span>
      </div>
      <div className="navbar-links">
        <button onClick={() => handlePageChange('home')}>Home</button>
        <button onClick={() => handlePageChange('resume')}>Resume</button>
        <button onClick={() => handlePageChange('portfolio')}>Portfolio</button>
      </div>
    </nav>
  );
};

export default Navbar;




