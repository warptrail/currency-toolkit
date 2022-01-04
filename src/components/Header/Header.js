import React from 'react';

import StockTicker from './StockTicker/StockTicker';
import Nav from './Nav/Nav';
import TitleEffect from './TitleEffect/TitleEffect';

import './Header.css';

export default function Header(props) {
  const { appMenuClick, handleClick, closeMobileMenu } = props;
  return (
    <header>
      <StockTicker />

      <div className="hero">
        <TitleEffect />
      </div>

      <Nav
        appMenuClick={appMenuClick}
        handleClick={handleClick}
        closeMobileMenu={closeMobileMenu}
      />
    </header>
  );
}
