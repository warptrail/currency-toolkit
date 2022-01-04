import React, { useState, useEffect, useRef } from 'react';

import './SalToHour.css';

const WEEKSPERYEAR = 52;

const SalToHour = () => {
  const defaultInputs = {
    income: 0,
    hoursPerWeek: 40,
    tax: 0,
  };

  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();
  // run this function from an event handler or an effect to execute scroll
  // ! STATE
  const [inputs, setInputs] = useState(defaultInputs);

  const [isHourly, setIsHourly] = useState(true);

  const [warningHoursPerWeek, setWarningHoursPerWeek] = useState(false);
  const [warningTax, setWarningTax] = useState(false);

  const [showReport, setShowReport] = useState(false);

  useEffect(() => {
    if (inputs.hoursPerWeek > 168) {
      setInputs({ ...inputs, hoursPerWeek: 168 });
      setWarningHoursPerWeek(true);
    }

    if (inputs.tax > 100) {
      setInputs({ ...inputs, tax: 100 });
      setWarningTax(true);
    }
  }, [inputs]);

  // ! FUNCTIONS

  const onClickHourly = (e) => {
    setIsHourly(true);
    setInputs(defaultInputs);
  };

  const onClickSalary = (e) => {
    setIsHourly(false);
    setInputs(defaultInputs);
  };

  const onChange = (e) => {
    if (isNaN(e.target.value)) {
      setInputs({ ...inputs, income: 0 });
    }
    setWarningHoursPerWeek(false);
    setWarningTax(false);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
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
    executeScroll();
    setShowReport(true);
  };

  // ! MATH

  const salaryToHourly = (sal) => {
    let hourly = (sal / WEEKSPERYEAR / inputs.hoursPerWeek).toFixed(2);

    if (hourly < 0.01) {
      hourly = 0;
    }

    return hourly;
  };

  const hourlyToSalary = (hour) => {
    const salary = (hour * inputs.hoursPerWeek * WEEKSPERYEAR).toFixed(2);

    return salary;
  };

  const afterTax = (number, taxPercent) =>
    (number - number * (taxPercent / 100)).toFixed(2);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // ! RENDER

  const renderForm = () => {
    return (
      <form className="hs-form" onSubmit={onFormSubmit}>
        <div className="hs-btn-bar">
          <button
            type="button"
            onClick={onClickHourly}
            className={isHourly ? 'active-btn' : ''}
          >
            Hour &#8594; Sal
          </button>
          <button
            type="button"
            onClick={onClickSalary}
            className={!isHourly ? 'active-btn' : ''}
          >
            Sal &#8594; Hour
          </button>
        </div>

        <div className="hs-input-box">
          <h3>{wageTitle(isHourly)}</h3>

          <input
            type="number"
            name="income"
            onChange={(e) => onChange(e)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            min={0}
            step=".01"
            value={inputs.income}
          />
        </div>

        <div className="hs-input-box">
          <h3>How many hours a week?</h3>
          {warningHoursPerWeek ? (
            <span className="warning">
              There cannot be more than 168 hours in a week
            </span>
          ) : (
            ''
          )}
          <input
            type="number"
            name="hoursPerWeek"
            onChange={(e) => onChange(e)}
            onFocus={handleFocus}
            min={0}
            max="168"
            value={inputs.hoursPerWeek}
          />
        </div>

        <div className="hs-input-box">
          <h3>What is your income tax rate?</h3>
          {warningTax ? (
            <span className="warning">Please, no taxation over 100%.</span>
          ) : (
            ''
          )}
          <input
            type="number"
            name="tax"
            onChange={(e) => onChange(e)}
            onFocus={handleFocus}
            min={0}
            max={100}
            value={inputs.tax}
          />
        </div>

        <button type="submit" className="hs-submit-btn">
          Calculate{' '}
        </button>
      </form>
    );
  };

  const wageTitle = (isHourly) => {
    if (isHourly) {
      return 'Enter your hourly rate:';
    } else {
      return 'Enter your annual salary:';
    }
  };

  const hourlyReport = () => {
    return (
      <>
        <h3>Your income before tax:</h3>
        <p className="hs-report-text">You make ${inputs.income} per hour</p>
        <p className="hs-report-text">
          Working {inputs.hoursPerWeek} hours per week multiplied by 52 weeks in
          a year:
        </p>
        <p className="hs-report-text">
          Your annual salary is estimated to be:{' '}
        </p>
        <p className="highlight">
          ${numberWithCommas(hourlyToSalary(inputs.income))}
        </p>

        <h3>Your income after tax:</h3>
        <p className="hs-report-text">After a {inputs.tax}% tax rate:</p>
        <p className="hs-report-text">Your adjusted hourly wage</p>
        <p className="highlight">${afterTax(inputs.income, inputs.tax)}</p>
        <p className="hs-report-text">Your adjusted salary: </p>
        <p className="highlight">
          $
          {numberWithCommas(
            afterTax(hourlyToSalary(inputs.income), inputs.tax)
          )}
        </p>
      </>
    );
  };

  const salaryReport = () => {
    const hourlyWage = salaryToHourly(inputs.income);

    return (
      <>
        <h3>Your income before tax:</h3>
        <p className="hs-report-text">
          Your annual salary is ${numberWithCommas(inputs.income)}
        </p>
        <p className="hs-report-text">
          Dividing your salary by 52 hours in a year, and then by{' '}
          {inputs.hoursPerWeek} hours per week:
        </p>
        <p className="hs-report-text">Your hourly wage is estimated to be:</p>
        <p className="highlight">${numberWithCommas(hourlyWage)} / hour</p>

        <h3>Your income after tax:</h3>
        <p className="hs-report-text">After a {inputs.tax}% tax rate:</p>
        <p className="hs-report-text">Your adjusted Salary:</p>
        <p className="highlight">
          ${numberWithCommas(afterTax(inputs.income, inputs.tax))}
        </p>

        <p className="hs-report-text">Your adjusted hourly wage:</p>
        <p className="highlight">${afterTax(hourlyWage, inputs.tax)} / hour</p>
      </>
    );
  };

  const generateReport = () => {
    let report;
    if (isHourly) {
      report = hourlyReport();
    } else {
      report = salaryReport();
    }

    return (
      <div className="hs-report-box">
        <button
          onClick={() => {
            setShowReport(false);
            setInputs(defaultInputs);
            executeScroll();
          }}
        >
          Return To Form
        </button>
        {report}
      </div>
    );
  };

  // ! RETURN
  return (
    <div className="app-container" ref={myRef}>
      {!showReport ? renderForm() : generateReport()}
    </div>
  );
};

export default SalToHour;
