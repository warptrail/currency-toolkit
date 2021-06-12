import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/currencyconverter">Currency Converter</Link>
        </li>
        <li>
          <a href="https://chriswere.uk/">Tip Calculator</a>
        </li>
        <li>
          <a href="https://chriswere.uk/">Percentages</a>
        </li>
        <li>
          <a href="https://chriswere.uk/">Salary to Hourly</a>
        </li>
      </ul>
    </nav>
  );
}
