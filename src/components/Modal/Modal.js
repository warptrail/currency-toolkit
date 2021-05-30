import React from 'react';

import './Modal.css';

export default function Modal(props) {
  const { show, modalMessage } = props;

  console.log(show);
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal_message">{modalMessage}</div>
    </div>
  );
}
