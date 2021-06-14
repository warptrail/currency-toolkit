import React from 'react';
import ToggleButton from '../Buttons/ToggleButton';

import './Footer.css';

export default function Footer(props) {
  const { toggleFunction, toggleButtonDisplay } = props;
  return (
    <footer>
      <div className="settings_bar">
        {toggleButtonDisplay ? null : (
          <ToggleButton
            clickFunction={toggleFunction}
            content="local storage"
            className="open_button"
          />
        )}
      </div>
      This is the footer where all the supplement information will go
    </footer>
  );
}
