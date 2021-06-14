import React, { useState } from 'react';

import StockTicker from './StockTicker/StockTicker';
import Nav from './Nav/Nav';
import TitleEffect from './TitleEffect/TitleEffect';

import './Header.css';

export default function Header(props) {
  return (
    <header>
      <StockTicker />

      {/* <h1>
        <Link to="/">{header1}</Link>
      </h1> */}

      <div className="hero">
        <TitleEffect />
      </div>

      <Nav />
    </header>
  );
}
