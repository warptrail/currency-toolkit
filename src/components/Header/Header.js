import React from 'react';

import StockTicker from './StockTicker/StockTicker';
import Nav from './Nav/Nav';

import './Header.css';

export default function Header(props) {
  return (
    <header>
      <StockTicker />
      <h1>Currency Toolkit</h1>
      <Nav />
    </header>
  );
}
