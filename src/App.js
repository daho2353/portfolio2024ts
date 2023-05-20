import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import ResumePage from './components/ResumePage/ResumePage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    if (activePage === 'home') {
      return <HomePage />;
    } else if (activePage === 'resume') {
      return <ResumePage />;
    } else if (activePage === 'portfolio') {
      return <PortfolioPage />;
    }
  };

  return (
    <div className="App">
      <Navbar setActivePage={setActivePage} />
      <div className="content">{renderPage()}</div>
    </div>
  );
}

export default App;
