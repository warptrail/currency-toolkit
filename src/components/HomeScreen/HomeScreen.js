import React from 'react';
import image1 from '../../images/currency-tick-500.png';
import hsd from './HomeScreenContent'; // hsd = homescreen data

import './HomeScreen.css';

export default function HomeScreen() {
  return (
    <div className="homescreen">
      <h2>{hsd.header}</h2>
      <p>{hsd.paragraph1}</p>
      <button>{hsd.button1}</button>
      <img src={image1} alt="promo" />
    </div>
  );
}
