import React from 'react';

import './ToggleButton.css';

export default function ToggleButton(props) {
  const { content, clickFunction, className } = props;
  return (
    <button
      className={`toggle_button ${className}`}
      onClick={(e) => clickFunction()}
    >
      <span className="content">{content}</span>
    </button>
  );
}
