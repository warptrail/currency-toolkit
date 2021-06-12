import React from 'react';
import { Link } from 'react-router-dom';

import StockTicker from './StockTicker/StockTicker';
import Nav from './Nav/Nav';

import './Header.css';

export default function Header(props) {
  return (
    <header>
      <StockTicker />

      <h1>
        <Link to="/">Currency Toolkit</Link>
      </h1>
      <Nav />
    </header>
  );
}
