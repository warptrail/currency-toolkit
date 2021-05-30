import React from 'react';

import StockTicker from './StockTicker/StockTicker';
import Nav from './Nav/Nav';
import ToggleButton from '../Buttons/ToggleButton';

import './Header.css';

export default function Header(props) {
  const { toggleFunction, toggleButtonDisplay } = props;
  return (
    <header>
      <StockTicker />
      <h1>Currency Toolkit</h1>
      <Nav />
      <div className="settings_bar">
        {toggleButtonDisplay ? null : (
          <ToggleButton
            clickFunction={toggleFunction}
            content="local storage"
            className="open_button"
          />
        )}
      </div>
    </header>
  );
}
