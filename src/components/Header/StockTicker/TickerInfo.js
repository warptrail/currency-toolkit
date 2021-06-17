import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

// https://blog.logrocket.com/using-font-awesome-5-with-react/

export default function TickerInfo(props) {
  const {
    name,
    close,
    changeDollars,
    changePercent,
    plusOrMinus,
    changeDollarsFormat,
  } = props;

  const renderArrowIcon = () => {
    if (changeDollars < 0) {
      return <FontAwesomeIcon icon={faPlay} transform={{ rotate: 90 }} />;
    } else {
      return <FontAwesomeIcon icon={faPlay} transform={{ rotate: 270 }} />;
    }
  };

  return (
    <div className="ticker">
      <div className="left_side">
        <span className="ticker_name">{name}</span>
        <span className="ticker_close">${close}</span>
      </div>
      <div className="right_side">
        <span className={`ticker_change dollars ${plusOrMinus}`}>
          <span className="icon">{renderArrowIcon()}</span>$
          {changeDollarsFormat}
        </span>
        <span className={`ticker_change percent ${plusOrMinus}`}>
          {changePercent} %
        </span>
      </div>
    </div>
  );
}
