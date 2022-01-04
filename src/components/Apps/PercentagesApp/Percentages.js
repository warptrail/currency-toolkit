import React, { useState, useEffect } from 'react';

import '../financeApps.css';

const Percentages = () => {
  //! App A
  const [inputsA, setInputsA] = useState({
    percentA: 0,
    totalA: 0,
  });

  const [appAResult, setAppAResult] = useState();

  const onChangeA = (e) => {
    setInputsA({
      ...inputsA,
      [e.target.name]: e.target.value,
    });
  };

  const calcA = (percent, total) => {
    const p = percent * 0.01;
    const pOff = total * p;
    const newTotal = total - pOff;
    setAppAResult(newTotal.toFixed(2));
  };

  useEffect(() => {
    calcA(inputsA.percentA, inputsA.totalA);
  }, [inputsA]);

  // ! App B
  const [inputsB, setInputsB] = useState({
    percentB: 100,
    totalB: 0,
  });

  const [appBResult, setAppBResult] = useState(0);

  const onChangeB = (e) => {
    setInputsB({
      ...inputsB,
      [e.target.name]: e.target.value,
    });
  };

  const calcB = (percent, total) => {
    const p = percent * 0.01;
    const r = p * total;
    setAppBResult(r.toFixed(2));
  };

  useEffect(() => {
    calcB(inputsB.percentB, inputsB.totalB);
  }, [inputsB]);

  // ! App C
  const [inputsC, setInputsC] = useState({
    fractionC: 0,
    totalC: 0,
  });

  const onChangeC = (e) => {
    setInputsC({
      ...inputsC,
      [e.target.name]: e.target.value,
    });
  };

  const calcC = (fraction, total) => {
    const percent = (fraction / total) * 100;
    setAppCResult(percent.toFixed(2));
  };

  const [appCResult, setAppCResult] = useState();

  useEffect(() => {
    calcC(inputsC.fractionC, inputsC.totalC);
  }, [inputsC]);

  return (
    <div className="app-container .percents-app">
      <div className="row">
        <div className="col title-frame">
          <h2 className="app-title">PERCENTS</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="per-1">
            <h3 className="app-subtitle">SALE SALE SALE</h3>
            <p className="sale-text">
              The widget is
              <input
                className={`num-input ${
                  inputsA.percentA > 9999 ? 'small-txt' : ''
                }`}
                type="number"
                name="percentA"
                min={1}
                max={100}
                onChange={(e) => onChangeA(e)}
              />
              % off the original price of ${' '}
              <input
                className={`num-input ${
                  inputsA.totalA > 9999 ? 'small-txt' : ''
                }`}
                type="number"
                name="totalA"
                min={1}
                max={1000000}
                onChange={(e) => onChangeA(e)}
              />
            </p>
            <div
              className={`results-box ${
                !inputsA.percentA || !inputsA.totalA ? 'hide' : ''
              }`}
            >
              <p className="results-text">
                <span className="orange">{inputsA.percentA} %</span> off of{' '}
                <span className="blue">${inputsA.totalA}</span> saves{' '}
                <span className="purple">
                  ${(inputsA.totalA - appAResult).toFixed(2)}
                </span>
              </p>
              <p className="results-text">
                The Widget will cost
                <span className="purple"> ${appAResult}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row two-col">
        <div className="col">
          <div className="per-2">
            <h3 className="app-subtitle">x % of y is z</h3>
            <p className="sale-text">
              <input
                className={`num-input ${
                  inputsB.percentB > 9999 ? 'small-txt' : ''
                }`}
                type="number"
                name="percentB"
                min={1}
                max={1000000}
                onChange={(e) => onChangeB(e)}
              />{' '}
              % of{' '}
              <input
                className={`num-input ${
                  inputsB.totalB > 9999 ? 'small-txt' : ''
                }`}
                type="number"
                name="totalB"
                min={1}
                max={1000000}
                onChange={(e) => onChangeB(e)}
              />{' '}
              is:
            </p>
            <div
              className={`results-box ${
                !inputsB.percentB || !inputsB.totalB ? 'hide' : ''
              }`}
            >
              <p className="results-text">
                <span className="orange">{inputsB.percentB}% </span> of{' '}
                <span className="blue">{inputsB.totalB}</span> is{' '}
                <span className="purple">{appBResult}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="per-2">
            <h3 className="app-subtitle">x is y % of z</h3>
            <p className="sale-text">
              <input
                className={`num-input ${
                  inputsC.fractionC > 9999 ? 'small-txt' : ''
                }`}
                type="number"
                name="fractionC"
                min={1}
                max={1000000}
                onChange={(e) => onChangeC(e)}
              />{' '}
              is what percent of{' '}
              <input
                className={`num-input ${
                  inputsC.totalC > 9999 ? 'small-txt' : ''
                }`}
                type="number"
                name="totalC"
                min={1}
                max={1000000}
                onChange={(e) => onChangeC(e)}
              />
            </p>
            <div
              className={`results-box ${
                !inputsC.fractionC || !inputsC.totalC ? 'hide' : ''
              }`}
            >
              <p className="results-text">
                <span className="orange">{inputsC.fractionC}</span> is
                <span className="purple"> {appCResult}% </span> of
                <span className="blue"> {inputsC.totalC}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
};

export default Percentages;
