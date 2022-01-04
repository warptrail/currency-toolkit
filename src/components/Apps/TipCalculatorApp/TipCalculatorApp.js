import React, { useState } from 'react';

import TipDisplay from './TipDisplay';

const TipCalculatorApp = () => {
  const [toggle, setToggle] = useState(false);
  const [partyWarning, setPartyWarning] = useState(false);

  const [inputs, setInputs] = useState({
    meal: 0,
    tipRate: 0.15,
    party: 1,
  });

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: parseFloat(e.target.value) });
  };

  // const inputEl = useRef(null);

  const handleFocus = (e) => {
    // inputEl.current.select();
    setInputs({ ...inputs, [e.target.name]: '' });
  };

  const handleBlur = (e) => {
    let blurValue = 0;
    if (e.target.name === 'party') {
      blurValue = 1;
    }

    if (!inputs[e.target.name]) {
      setInputs({ ...inputs, [e.target.name]: blurValue });
    }
  };

  const toggleWarning = () => {
    setPartyWarning(true);
  };

  const showTipResults = (e) => {
    e.preventDefault();
    if (inputs.party <= 0) {
      toggleWarning();
    }
    setToggle(true);
    // setPartyWarning(false);
  };

  return (
    <div className="app-container">
      <form onSubmit={showTipResults}>
        <div className="row">
          <div className="col title-frame">
            <h2 className="app-title">Tip Calculator</h2>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p className="tip-text">The cost of your meal:</p>
            <input
              type="number"
              className="tip-calc-input-1"
              name="meal"
              value={inputs.meal}
              // ref={inputEl}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={onChange}
            />
            <div className="switchField">
              <div className="switchRow">
                <h3>Choose your tip rate</h3>
              </div>
              {/* {SWITCH ROW 1} */}
              <div className="switchRow">
                <div className="switchBox">
                  <input
                    className="tip-radio"
                    type="radio"
                    id="tipOption1"
                    name="tipRate"
                    value={0}
                    onChange={(e) => {
                      onChange(e);
                    }}
                  />
                  <label htmlFor="tipOption1">0%</label>
                </div>
                <div className="switchBox">
                  <input
                    className="tip-radio"
                    type="radio"
                    id="tipOption2"
                    name="tipRate"
                    value={0.05}
                    onChange={(e) => {
                      onChange(e);
                    }}
                  />
                  <label htmlFor="tipOption2">5%</label>
                </div>
                <div className="switchBox">
                  <input
                    className="tip-radio"
                    type="radio"
                    id="tipOption3"
                    name="tipRate"
                    value={0.1}
                    onChange={(e) => {
                      onChange(e);
                    }}
                  />
                  <label htmlFor="tipOption3">10%</label>
                </div>
                <div className="switchBox">
                  <input
                    className="tip-radio"
                    type="radio"
                    id="tipOption4"
                    name="tipRate"
                    value={0.12}
                    onChange={(e) => {
                      onChange(e);
                    }}
                  />
                  <label htmlFor="tipOption4">12%</label>
                </div>
              </div>

              {/* SWITCH ROW 2 */}
              <div className="switchRow">
                <div className="switchBox">
                  <input
                    className="tip-radio"
                    type="radio"
                    id="tipOption5"
                    defaultChecked
                    name="tipRate"
                    value={0.15}
                    onChange={(e) => {
                      onChange(e);
                    }}
                  />
                  <label htmlFor="tipOption5">15%</label>
                </div>
                <div className="switchBox">
                  <input
                    className="tip-radio"
                    type="radio"
                    id="tipOption6"
                    name="tipRate"
                    value={0.18}
                    onChange={(e) => {
                      onChange(e);
                    }}
                  />
                  <label htmlFor="tipOption6">18%</label>
                </div>
                <div className="switchBox">
                  <input
                    className="tip-radio"
                    type="radio"
                    id="tipOption7"
                    name="tipRate"
                    value={0.2}
                    onChange={(e) => {
                      onChange(e);
                    }}
                  />
                  <label htmlFor="tipOption7">20%</label>
                </div>
                <div className="switchBox">
                  <input
                    className="tip-radio"
                    type="radio"
                    id="tipOption8"
                    name="tipRate"
                    value={0.25}
                    onChange={(e) => {
                      onChange(e);
                    }}
                  />
                  <label htmlFor="tipOption8">25%</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="switchField">
              <h3>split how many ways?</h3>
            </div>
            <div className="switchField">
              <input
                type="number"
                className="tip-calc-input-1"
                name="party"
                value={inputs.party}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                min={1}
              />
              {partyWarning ? <p>cannot divide by a party of zero</p> : ''}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button className="tip-submit-btn">Calculate</button>
          </div>
        </div>
      </form>
      {toggle ? <TipDisplay inputs={inputs} setToggle={setToggle} /> : ''}
    </div>
  );
};

export default TipCalculatorApp;
