import React from 'react';
import image1 from '../../images/currency-tick-500.png';
import hsd from './HomeScreenContent'; // hsd = homescreen data

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import './HomeScreen.css';

export default function HomeScreen() {
  return (
    <div className="homescreen">
      <div className="intro">
        <h2>{hsd.header}</h2>
        <p className="paragraph_a">{hsd.paragraph1}</p>
        <button className="call_to_action">
          {hsd.button1} <FontAwesomeIcon icon={faAngleDoubleRight} />
        </button>
        <div className="img_frame">
          <img src={image1} alt="promo" />
        </div>
      </div>
      <div className="about_this_project">
        <h3>About this project </h3>
      </div>
    </div>
  );
}
