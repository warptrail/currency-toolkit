import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TitleEffect() {
  const [header1, setHeader1] = useState('Currency Toolkit');
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => {
        const maxSeconds = 36;
        if (seconds > maxSeconds) {
          setSeconds(0);
        }
        dollaBillsYo(seconds);
        return seconds + 1;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [seconds]);

  const dollaBillsYo = (i) => {
    const string = 'Currency Toolkit';
    if (i > string.length - 1) {
      setHeader1('Currency Toolkit');
    } else {
      const strArr = string.split('');
      strArr[i] = '$';
      const newString = strArr.join('');
      setHeader1(newString);
    }
  };

  return (
    <h1>
      <Link to="/">{header1}</Link>
    </h1>
  );
}
