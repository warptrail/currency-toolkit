import React from 'react';

export default function TickerInfo(props) {
  return (
    <li>
      <div>
        <span className="ticker_name">Name</span>
        <span className="ticker_close">$900</span>
      </div>
      <div>
        <span className="ticker_change">^10%($1.40)</span>
      </div>
    </li>
  );
}
