import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import ResumePage from './components/ResumePage/ResumePage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';

function App(): JSX.Element {
  const [activePage, setActivePage] = useState<string>('home');

  const renderPage = (): JSX.Element => {
    if (activePage === 'home') {
      return <HomePage />;
    } else if (activePage === 'resume') {
      return <ResumePage />;
    } else if (activePage === 'portfolio') {
      return <PortfolioPage />;
    }

    return <></>;
  };

  return (
    <div className="App">
      <Navbar setActivePage={setActivePage} />
      <div className="content">{renderPage()}</div>
    </div>
  );
}

export default App;
