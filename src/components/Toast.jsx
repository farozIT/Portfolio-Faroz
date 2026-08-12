import React from 'react';

export default function Toast({ message }) {
  return (
    <div className={`toast-msg ${message ? 'show' : ''}`} id="toast-msg">
      {message}
    </div>
  );
}
