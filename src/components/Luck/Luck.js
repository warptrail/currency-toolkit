import React, { useState } from 'react';

import './Luck.css';

const Luck = ({ okButton }) => {
  // ? basic random number generator range
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  // ? create a sequence of numbers
  function createSequence(start, end) {
    let sequence = [];

    for (let i = start; i <= end; i++) {
      sequence.push(i);
    }

    return sequence;
  }

  // ? create am array of numbers in a hat to 100
  let hat = createSequence(1, 100);

  // ? init array of the 6 lucky numbers a user draws
  let luckyNumbers = [];

  // ? roll dice to find out
  for (let i = 0; i < 6; i++) {
    let randomIndex = getRandomNumber(0, hat.length - 1);
    let randomSelection = hat[randomIndex];
    luckyNumbers.push(randomSelection);
    hat.splice(randomIndex, 1);
  }

  // ? sort the luckyNumbers array smallest to biggest
  luckyNumbers.sort(function (a, b) {
    return a - b;
  });

  // ? Make string version for clipboard

  const clip = luckyNumbers.join('-');

  // ? render the luckyNumbers to state

  const [numbers, setNumbers] = useState(luckyNumbers);
  const [clipboardNumbers, setClipboardNumbers] = useState(clip);

  const copyFunction = () => {
    navigator.clipboard.writeText(clipboardNumbers);
  };

  const render = () => {
    const spans = numbers.map((n, i) => (
      <span className="nDash" key={n}>
        {i !== 0 ? '-' : ''}
        {n}
      </span>
    ));
    return <p className="lucky-numbers">{spans}</p>;
  };

  return (
    <div className="luck-container">
      <p className="luck-label">Your lucky numbers are:</p>
      <div className="display-bar">
        {render()}
        <button className="copy-btn" onClick={copyFunction}>
          c
        </button>
      </div>

      <button className="ok-btn" onClick={okButton}>
        OK
      </button>
    </div>
  );
};

export default Luck;
