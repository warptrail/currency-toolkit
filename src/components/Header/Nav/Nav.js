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
          <Link to="/percentages">Percentages</Link>
        </li>
        <li>
          <Link to="/salaryhourly">Salary to Hourly</Link>
        </li>
        <li>
          <Link to="/tipcalculator">Tip Calculator</Link>
        </li>
      </ul>
    </nav>
  );
}
