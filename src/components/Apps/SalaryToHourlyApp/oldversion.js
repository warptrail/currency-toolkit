import React, { useState } from 'react';

import './SalToHour.css';

const WEEKSPERYEAR = 52;

const SalToHour = () => {
  const [inputs, setInputs] = useState({
    hourly: 0,
    salary: 0,
    hoursPerWeek: 40,
    tax: 0,
  });

  // ! ONCHANGE !!!!!!!!!!!!!!!!!!!!!!!
  // const onChange = (e) => {
  //   setInputs({ ...inputs, [e.target.name]: parseFloat(e.target.value) });
  // };

  const onChange = (e) => {
    const newInputs = { ...inputs };

    if (e.target.name === 'salary') {
      if (e.target.value < 100) {
        newInputs.hourly = 0;
        newInputs.salary = e.target.value;
      } else {
        let hourly = salaryToHourly(e.target.value);
        hourly = hourly.toFixed(2);
        newInputs.hourly = hourly;
        newInputs.salary = e.target.value;
      }
    }

    if (e.target.name === 'hourly') {
      newInputs.hourly = e.target.value;
      newInputs.salary = hourlyToSalary(e.target.value).toFixed(2);
    }

    if (e.target.name === 'tax') {
      newInputs.tax = e.target.value;
    }

    // TODO Fix the hours per week messing up the other inputs
    if (e.target.name === 'hoursPerWeek') {
      newInputs.hoursPerWeek = e.target.value;
      newInputs.salary = 0;
      newInputs.hourly = 0;
    }

    setInputs({ ...newInputs });
  };

  const handleFocus = (e) => {
    e.preventDefault();
    if (!e.target.value || e.target.value === '0') {
      setInputs({ ...inputs, [e.target.name]: '' });
    }
    // e.target.select();
  };

  const handleBlur = (e) => {
    let blurValue = 0;

    if (!inputs[e.target.name]) {
      setInputs({ ...inputs, [e.target.name]: blurValue });
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('no step on snek');
  };

  // ! MATH

  const salaryToHourly = (sal) => {
    const hourly = sal / WEEKSPERYEAR / inputs.hoursPerWeek;
    return hourly;
  };

  const hourlyToSalary = (hour) => {
    const salary = hour * inputs.hoursPerWeek * WEEKSPERYEAR;
    return salary;
  };

  const afterTaxHourly = (
    inputs.hourly -
    inputs.hourly * (inputs.tax / 100)
  ).toFixed(2);

  const afterTaxSalary = (
    inputs.salary -
    inputs.salary * (inputs.tax / 100)
  ).toFixed(2);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <div className="app-container">
      <form onSubmit={onFormSubmit}>
        <div className="row">
          <div className="col title-frame sal-hour-title">
            <h2 className="app-title">Salary to Hourly </h2>
          </div>
        </div>

        {/* <div className="hrsal-btn-bar">
          <button>Hourly</button>
          <button>Salary</button>
        </div> */}

        <div className="row">
          <div className="col">
            <div className="switchField">
              <h3>Hourly Rate</h3>
            </div>
            <input
              type="number"
              className="tip-calc-input-1"
              name="hourly"
              value={inputs.hourly}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={onChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="switchField">
              <h3>Salary Rate</h3>
            </div>
            <div className="switchField">
              <input
                type="number"
                className="tip-calc-input-1"
                name="salary"
                value={inputs.salary}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                min={1}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="switchField">
              <h3>Modifiers</h3>
            </div>
            <div className="switchField">
              <label htmlFor="hoursPerWeek">Hours per Week</label>
              <input
                type="number"
                className="tip-calc-input-1"
                name="hoursPerWeek"
                value={inputs.hoursPerWeek}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                min={0}
                max={168}
              />
              <label htmlFor="hoursPerWeek">Percent the government takes</label>
              <input
                type="number"
                className="tip-calc-input-1"
                name="tax"
                value={inputs.tax}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                min={0}
                max={100}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button className="tip-submit-btn">Calculate</button>
          </div>
        </div>
      </form>

      <div className="salToHourDisplay">
        <h3>Actual Take-home:</h3>
        <p className="salToHour-display">Hourly: ${afterTaxHourly}</p>
        <p className="salToHour-display">
          Salary: ${numberWithCommas(afterTaxSalary)}
        </p>
      </div>
    </div>
  );
};

export default SalToHour;
