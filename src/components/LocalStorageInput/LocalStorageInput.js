import React, { useState, useEffect } from 'react';
import ToggleButton from '../Buttons/ToggleButton';

import './LocalStorageInput.css';

export default function LocalStorageInput(props) {
  const { isToggled, closeWindowFunction } = props;
  const [value, setValue] = useState(
    localStorage.getItem('myValueInLocalStorage' || '')
  );

  useEffect(() => {
    localStorage.setItem('myValueInLocalStorage', value);
  }, [value]);

  const onChange = (event) => setValue(event.target.value);
  if (!isToggled) {
    return null;
  }
  return (
    <div className="local_storage_app">
      <div className="close_button">
        <ToggleButton
          className="close_button"
          content="X"
          clickFunction={closeWindowFunction}
        />
      </div>
      <p className="local_storage_title">Local Storage!</p>
      <input
        value={value}
        type="text"
        onChange={onChange}
        maxLength="24"
      ></input>
      <p className="local_storage_display">{value}</p>
    </div>
  );
}
