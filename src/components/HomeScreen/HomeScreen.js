import React, { useState } from 'react';
import image1 from '../../images/currency-tick-500.png';
import hsc from './HomeScreenContent'; // hsc = homescreen data

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import './HomeScreen.css';
import Luck from '../Luck/Luck';

export default function HomeScreen() {
  const [luckToggled, setLuckToggled] = useState(false);

  const toggleLuckyNumbers = () => {
    setLuckToggled(!luckToggled);
  };

  const okButton = () => {
    setLuckToggled(false);
  };

  return (
    <div className="homescreen">
      <div className="intro">
        <div className="row">
          <div className="column1">
            <h2>{hsc.header}</h2>
            <p className="paragraph_a">{hsc.paragraph1}</p>
            <button className="call_to_action" onClick={toggleLuckyNumbers}>
              {hsc.button1} <FontAwesomeIcon icon={faAngleDoubleRight} />
            </button>
            {luckToggled ? <Luck okButton={okButton} /> : ''}
          </div>
          <div className="column2">
            <div className="img_frame">
              <img src={image1} alt="promo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
