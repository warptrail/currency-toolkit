import React from 'react';

const TipDisplay = ({ inputs, setToggle }) => {
  let { meal, tipRate, party } = inputs;

  const calculate = (meal, tipRate, party) => {
    const calculations = {
      tipAmount: 0,
      total: 0,
      totalPerPerson: 0,
    };

    calculations.tipAmount = meal * tipRate;
    calculations.total = meal + calculations.tipAmount;
    calculations.totalPerPerson = calculations.total / party;

    return calculations;
  };

  console.log(inputs);
  console.log('meal: ', meal);
  console.log('tipRate: ', tipRate);
  console.log('party: ', party);

  const calculator = calculate(meal, tipRate, party);

  return (
    <div className="tip-display-container">
      <button
        onClick={() => {
          setToggle(false);
        }}
      >
        X
      </button>

      <p className="display-text">
        {' '}
        Your meal was <span className="blue">${meal}</span>
      </p>
      <p className="display-text">
        Your tip rate is <span className="green">{tipRate * 100}%</span>, adding
        <span className="blue"> ${calculator.tipAmount.toFixed(2)}</span>
      </p>
      <p className="display-text">
        Your total is{' '}
        <span className="purple">${calculator.total.toFixed(2)}</span>
      </p>
      <p className="display-text">
        Split <span className="green">{party}</span>{' '}
        {party > 1 ? 'ways' : 'way'} each person owes{' '}
        <span className="purple">${calculator.totalPerPerson.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default TipDisplay;
