import React from 'react';
import { Link } from 'react-router-dom';
import Socials from '../Socials/Socials';

import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-box">
        <Link to="/about" className="about-link">
          About this project
        </Link>
      </div>

      <div className="footer-box">
        <Socials />
      </div>
      <div className="footer-box">
        <p>
          Copyright &copy; {new Date().getFullYear()} Warptrail. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
